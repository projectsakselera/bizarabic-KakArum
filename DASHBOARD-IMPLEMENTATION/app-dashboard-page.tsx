// app/(dashboard)/page.tsx
// Main Dashboard Page for BizArabic for ESQ165

import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// Components
import DashboardHeader from '@/components/dashboard/Header';
import QuickStats from '@/components/dashboard/QuickStats';
import SessionsList from '@/components/dashboard/SessionsList';
import ProgressChart from '@/components/dashboard/ProgressChart';
import UpcomingAssignments from '@/components/dashboard/UpcomingAssignments';
import RecentActivity from '@/components/dashboard/RecentActivity';
import AIChatWidget from '@/components/ai/ChatWidget';

// Icons
import { BookOpen, Award, Clock, TrendingUp } from 'lucide-react';

// Types
import type { User, Progress, QuizAttempt } from '@prisma/client';

export default async function DashboardPage() {
  // Authentication
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  const userId = session.user.id;

  // Fetch user data with progress
  const [user, sessions, userProgress, quizAttempts, upcomingAssignments] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      include: {
        progress: {
          include: {
            session: true,
          },
        },
      },
    }),
    prisma.learningSession.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        sessionNumber: 'asc',
      },
      include: {
        vocabularies: true,
        quizzes: true,
      },
    }),
    prisma.progress.findMany({
      where: { userId },
      include: {
        session: true,
      },
    }),
    prisma.quizAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
    prisma.assignment.findMany({
      where: {
        userId,
        status: { in: ['NOT_STARTED', 'IN_PROGRESS'] },
      },
      include: {
        session: true,
      },
      orderBy: {
        dueDate: 'asc',
      },
      take: 5,
    }),
  ]);

  if (!user) {
    redirect('/login');
  }

  // Calculate statistics
  const stats = calculateStats(userProgress, quizAttempts, sessions);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader user={user} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            السلام عليكم، {user.name}! 👋
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Welcome back to BizArabic for ESQ165
          </p>
          <p className="text-sm text-gray-500" dir="rtl">
            من اللغة إلى الثقافة إلى الشراكة
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats stats={stats} />

        {/* Main Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Sessions & Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Chart */}
            <Suspense fallback={<LoadingCard />}>
              <ProgressChart progress={userProgress} />
            </Suspense>

            {/* Sessions List */}
            <SessionsList
              sessions={sessions}
              userProgress={userProgress}
            />
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <UpcomingAssignments assignments={upcomingAssignments} />

            {/* Recent Activity */}
            <RecentActivity userId={userId} />

            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>
      </main>

      {/* AI Chat Widget (Floating) */}
      <AIChatWidget userId={userId} />
    </div>
  );
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function calculateStats(
  progress: Progress[],
  quizAttempts: QuizAttempt[],
  sessions: any[]
) {
  const totalSessions = sessions.length;
  const completedSessions = progress.filter(p => p.completed).length;
  const progressPercentage = Math.round((completedSessions / totalSessions) * 100);

  // Calculate average quiz score
  const passedQuizzes = quizAttempts.filter(q => q.passed && q.totalScore);
  const averageScore = passedQuizzes.length > 0
    ? Math.round(
        passedQuizzes.reduce((sum, q) => sum + (q.totalScore || 0), 0) / passedQuizzes.length
      )
    : 0;

  // Total time spent (sum of all progress)
  const totalMinutes = progress.reduce((sum, p) => sum + p.timeSpent, 0);
  const totalHours = Math.floor(totalMinutes / 60);

  // Current streak (days)
  const streak = calculateStreak(progress);

  return {
    completedSessions,
    totalSessions,
    progressPercentage,
    averageScore,
    totalHours,
    streak,
  };
}

function calculateStreak(progress: Progress[]): number {
  // Simple implementation - count consecutive days with activity
  // In production, use a more sophisticated algorithm
  const sortedProgress = progress
    .filter(p => p.lastAccessedAt)
    .sort((a, b) => b.lastAccessedAt.getTime() - a.lastAccessedAt.getTime());

  if (sortedProgress.length === 0) return 0;

  let streak = 1;
  let currentDate = new Date(sortedProgress[0].lastAccessedAt);
  currentDate.setHours(0, 0, 0, 0);

  for (let i = 1; i < sortedProgress.length; i++) {
    const progressDate = new Date(sortedProgress[i].lastAccessedAt);
    progressDate.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor(
      (currentDate.getTime() - progressDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff === 1) {
      streak++;
      currentDate = progressDate;
    } else if (daysDiff > 1) {
      break;
    }
  }

  return streak;
}

// ============================================
// SUB-COMPONENTS
// ============================================

function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        <QuickActionButton
          href="/practice/flashcards"
          icon={<BookOpen className="w-5 h-5" />}
          label="Practice Flashcards"
          labelArabic="مراجعة البطاقات"
        />
        <QuickActionButton
          href="/practice/pronunciation"
          icon={<TrendingUp className="w-5 h-5" />}
          label="Pronunciation Coach"
          labelArabic="مدرب النطق"
        />
        <QuickActionButton
          href="/resources"
          icon={<Award className="w-5 h-5" />}
          label="Resources Library"
          labelArabic="مكتبة الموارد"
        />
      </div>
    </div>
  );
}

function QuickActionButton({
  href,
  icon,
  label,
  labelArabic
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  labelArabic: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
    >
      <div className="flex items-center space-x-3">
        <div className="text-green-600 group-hover:text-green-700">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{label}</p>
          <p className="text-xs text-gray-500" dir="rtl">{labelArabic}</p>
        </div>
      </div>
      <svg
        className="w-4 h-4 text-gray-400 group-hover:text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}

function LoadingCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
    </div>
  );
}

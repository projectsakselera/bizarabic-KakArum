// components/dashboard/SessionsList.tsx
// Display all 8 learning sessions with progress indicators

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LearningSession, Progress, Vocabulary } from '@prisma/client';
import {
  CheckCircle2,
  Circle,
  Lock,
  PlayCircle,
  BookOpen,
  FileText,
  Award,
  ArrowRight,
} from 'lucide-react';

type SessionWithRelations = LearningSession & {
  vocabularies: Vocabulary[];
  quizzes: any[];
};

type SessionsListProps = {
  sessions: SessionWithRelations[];
  userProgress: Progress[];
};

export default function SessionsList({ sessions, userProgress }: SessionsListProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Learning Sessions
          </h2>
          <p className="text-sm text-gray-500 mt-1" dir="rtl">
            الجلسات التعليمية
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'grid'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'list'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Sessions */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sessions.map((session) => {
            const progress = userProgress.find((p) => p.sessionId === session.id);
            return (
              <SessionCard
                key={session.id}
                session={session}
                progress={progress}
              />
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {sessions.map((session) => {
            const progress = userProgress.find((p) => p.sessionId === session.id);
            return (
              <SessionListItem
                key={session.id}
                session={session}
                progress={progress}
              />
            );
          })}
        </div>
      )}

      {/* Level Progression Info */}
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg border border-green-200">
        <div className="flex items-start space-x-3">
          <Award className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900">
              Complete Level 1 to Unlock Intermediate Sessions
            </p>
            <p className="text-xs text-gray-600 mt-1">
              After finishing Session 8, you'll access 12 more sessions in Level 2 & 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SESSION CARD (Grid View)
// ============================================

function SessionCard({
  session,
  progress,
}: {
  session: SessionWithRelations;
  progress?: Progress;
}) {
  const isLocked = session.sessionNumber > 1 && !progress;
  const isCompleted = progress?.completed || false;
  const isInProgress = progress && !progress.completed;

  // Determine phase color
  const phaseColor = getPhaseColor(session.phase);

  return (
    <Link
      href={isLocked ? '#' : `/sessions/${session.id}`}
      className={`group relative block rounded-lg border-2 p-6 transition-all ${
        isLocked
          ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
          : isCompleted
          ? 'border-green-500 bg-green-50 hover:shadow-lg hover:-translate-y-1'
          : isInProgress
          ? 'border-yellow-400 bg-yellow-50 hover:shadow-lg hover:-translate-y-1'
          : 'border-gray-200 bg-white hover:border-green-500 hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      {/* Session Number Badge */}
      <div className={`absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full ${phaseColor.badge}`}>
        <span className="text-sm font-bold text-white">
          {session.sessionNumber}
        </span>
      </div>

      {/* Status Icon */}
      <div className="mb-4">
        {isLocked ? (
          <Lock className="w-6 h-6 text-gray-400" />
        ) : isCompleted ? (
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        ) : isInProgress ? (
          <PlayCircle className="w-6 h-6 text-yellow-600" />
        ) : (
          <Circle className="w-6 h-6 text-gray-400" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-1 pr-12">
        {session.title}
      </h3>
      <p className="text-sm text-gray-600 mb-2" dir="rtl">
        {session.titleArabic}
      </p>
      <p className="text-xs text-gray-500 mb-4">{session.subtitle}</p>

      {/* Phase Tag */}
      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${phaseColor.tag}`}>
        {session.phase}
      </span>

      {/* Progress Bar */}
      {progress && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Progress</span>
            <span>{Math.round(calculateSessionProgress(progress))}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all"
              style={{ width: `${calculateSessionProgress(progress)}%` }}
            />
          </div>
        </div>
      )}

      {/* Meta Info */}
      <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <BookOpen className="w-3 h-3" />
          <span>{session.vocabularies.length} words</span>
        </div>
        <div className="flex items-center space-x-1">
          <FileText className="w-3 h-3" />
          <span>{session.quizzes.length} quiz</span>
        </div>
      </div>

      {/* Arrow Icon (on hover) */}
      {!isLocked && (
        <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
      )}
    </Link>
  );
}

// ============================================
// SESSION LIST ITEM (List View)
// ============================================

function SessionListItem({
  session,
  progress,
}: {
  session: SessionWithRelations;
  progress?: Progress;
}) {
  const isLocked = session.sessionNumber > 1 && !progress;
  const isCompleted = progress?.completed || false;

  return (
    <Link
      href={isLocked ? '#' : `/sessions/${session.id}`}
      className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
        isLocked
          ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
          : 'border-gray-200 bg-white hover:border-green-500 hover:shadow-md'
      }`}
    >
      {/* Left: Icon + Title */}
      <div className="flex items-center space-x-4 flex-1">
        {/* Status Icon */}
        <div>
          {isLocked ? (
            <Lock className="w-5 h-5 text-gray-400" />
          ) : isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          ) : (
            <Circle className="w-5 h-5 text-gray-400" />
          )}
        </div>

        {/* Session Number */}
        <div className="text-sm font-bold text-gray-500 w-8">
          S{session.sessionNumber}
        </div>

        {/* Title */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-900">
            {session.title}
          </h4>
          <p className="text-xs text-gray-500" dir="rtl">
            {session.titleArabic}
          </p>
        </div>
      </div>

      {/* Right: Progress + Arrow */}
      <div className="flex items-center space-x-4">
        {/* Progress */}
        {progress && (
          <div className="w-24">
            <div className="text-xs text-gray-500 mb-1">
              {Math.round(calculateSessionProgress(progress))}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full"
                style={{ width: `${calculateSessionProgress(progress)}%` }}
              />
            </div>
          </div>
        )}

        {/* Arrow */}
        {!isLocked && (
          <ArrowRight className="w-4 h-4 text-gray-400" />
        )}
      </div>
    </Link>
  );
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function calculateSessionProgress(progress: Progress): number {
  let completed = 0;
  let total = 3; // Module + Quiz + Assignment

  if (progress.moduleViewed) completed++;
  if (progress.quizPassed) completed++;
  if (progress.assignmentGraded) completed++;

  return (completed / total) * 100;
}

function getPhaseColor(phase: string): { badge: string; tag: string } {
  const colors: Record<string, { badge: string; tag: string }> = {
    'Foundation': {
      badge: 'bg-green-600',
      tag: 'bg-green-100 text-green-700',
    },
    'Practical Skills': {
      badge: 'bg-blue-600',
      tag: 'bg-blue-100 text-blue-700',
    },
    'Interaction': {
      badge: 'bg-purple-600',
      tag: 'bg-purple-100 text-purple-700',
    },
    'Integration': {
      badge: 'bg-orange-600',
      tag: 'bg-orange-100 text-orange-700',
    },
  };

  return colors[phase] || { badge: 'bg-gray-600', tag: 'bg-gray-100 text-gray-700' };
}

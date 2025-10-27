# BizArabic for ESQ165 - Dashboard Implementation
## Complete Next.js Learning Management System

<div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #15803d; margin: 20px 0;">
<strong>🎯 Project Overview</strong><br>
Full-stack Next.js 14 dashboard for BizArabic training program with AI integration, progress tracking, and bilingual support (Arabic + English).
</div>

---

## 📋 Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Installation & Setup](#installation--setup)
4. [Environment Variables](#environment-variables)
5. [Features](#features)
6. [Deployment](#deployment)
7. [API Documentation](#api-documentation)

---

## Tech Stack

### **Frontend**
- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn/ui + Radix UI
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

### **Backend**
- **API**: Next.js API Routes (App Router)
- **Database**: PostgreSQL 16 (via Neon/Supabase)
- **ORM**: Prisma 5.x
- **Authentication**: NextAuth.js v5
- **File Storage**: AWS S3 / Vercel Blob

### **AI Integration**
- **LLM**: OpenAI GPT-4
- **TTS**: ElevenLabs API
- **STT**: OpenAI Whisper API
- **Grammar Check**: LanguageTool API

### **Deployment**
- **Hosting**: Vercel
- **Database**: Neon Serverless Postgres
- **CDN**: Vercel Edge Network
- **Analytics**: Vercel Analytics

---

## Project Structure

```
dashboard/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Main Dashboard
│   │   ├── sessions/
│   │   │   ├── page.tsx                # Sessions List
│   │   │   └── [id]/
│   │   │       ├── page.tsx            # Session Detail
│   │   │       ├── module/page.tsx     # Module Content
│   │   │       ├── quiz/page.tsx       # Quiz/Assessment
│   │   │       └── video/page.tsx      # Video Assignment
│   │   ├── practice/
│   │   │   ├── page.tsx                # Practice Hub
│   │   │   ├── flashcards/page.tsx
│   │   │   ├── pronunciation/page.tsx
│   │   │   └── conversation/page.tsx
│   │   ├── progress/
│   │   │   └── page.tsx                # Progress Tracking
│   │   ├── resources/
│   │   │   └── page.tsx                # Resources Library
│   │   └── profile/
│   │       └── page.tsx                # User Profile
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── sessions/route.ts
│   │   ├── progress/route.ts
│   │   ├── quiz/route.ts
│   │   ├── ai/
│   │   │   ├── chat/route.ts
│   │   │   ├── pronunciation/route.ts
│   │   │   └── grammar/route.ts
│   │   └── upload/route.ts
│   └── layout.tsx
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── SessionCard.tsx
│   │   ├── ProgressChart.tsx
│   │   └── QuickStats.tsx
│   ├── learning/
│   │   ├── ModuleViewer.tsx
│   │   ├── QuizInterface.tsx
│   │   ├── VideoRecorder.tsx
│   │   ├── AudioRecorder.tsx
│   │   └── Flashcard.tsx
│   ├── ai/
│   │   ├── ChatBot.tsx
│   │   ├── PronunciationCoach.tsx
│   │   └── GrammarChecker.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── ai/
│   │   ├── openai.ts
│   │   ├── elevenlabs.ts
│   │   └── whisper.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   ├── audio/
│   ├── images/
│   └── fonts/
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Installation & Setup

### **Prerequisites**
- Node.js 18.17+ and npm/yarn/pnpm
- PostgreSQL database (or Neon account)
- OpenAI API key
- ElevenLabs API key (optional)

### **Step 1: Clone & Install**

```bash
# Create Next.js project
npx create-next-app@latest bizarabic-dashboard --typescript --tailwind --app

cd bizarabic-dashboard

# Install dependencies
npm install @prisma/client @next-auth/prisma-adapter next-auth
npm install zustand react-hook-form zod @hookform/resolvers
npm install recharts lucide-react date-fns
npm install openai elevenlabs @aws-sdk/client-s3
npm install -D prisma
```

### **Step 2: Initialize Prisma**

```bash
npx prisma init
```

### **Step 3: Set Environment Variables**

Create `.env.local`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/bizarabic"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# OpenAI
OPENAI_API_KEY="sk-..."

# ElevenLabs
ELEVENLABS_API_KEY="..."

# AWS S3 (for file uploads)
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="us-east-1"
AWS_S3_BUCKET="bizarabic-uploads"

# LanguageTool (optional)
LANGUAGETOOL_API_URL="https://api.languagetool.org/v2/check"
```

### **Step 4: Run Database Migrations**

```bash
npx prisma db push
npx prisma generate
```

### **Step 5: Seed Database**

```bash
npx prisma db seed
```

### **Step 6: Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Features

### **✅ Core Learning Features**

1. **Session Management**
   - View all 8 sessions with progress indicators
   - Access modules, presentations, quizzes
   - Track completion status

2. **Interactive Modules**
   - Bilingual content (Arabic + English)
   - Embedded audio for pronunciation
   - Vocabulary flashcards
   - Practice worksheets

3. **Assessments**
   - 4-skill testing (reading, writing, listening, speaking)
   - Auto-grading for multiple choice/fill-in-blank
   - Manual grading interface for instructor
   - Video/audio submission

4. **Practice Tools**
   - Flashcards with spaced repetition
   - Pronunciation coach (AI-powered)
   - Conversation simulator
   - Grammar exercises

### **✅ AI-Powered Features**

1. **AI Chatbot**
   - 24/7 Arabic language assistance
   - Context-aware responses
   - Session-specific help

2. **Pronunciation Coach**
   - Real-time feedback using ElevenLabs + Whisper
   - Comparison with native speaker
   - Targeted improvement suggestions

3. **Grammar Checker**
   - Arabic text analysis
   - Correction suggestions
   - Explanation in English

### **✅ Progress Tracking**

1. **Dashboard Analytics**
   - Overall progress percentage
   - Sessions completed
   - Quiz scores
   - Time spent learning

2. **Charts & Visualizations**
   - Progress over time
   - Score trends
   - Vocabulary mastery

3. **Leaderboard** (optional)
   - Peer comparison (anonymized)
   - Gamification elements

### **✅ Additional Features**

1. **Resources Library**
   - Downloadable PDFs
   - Audio files
   - Video lectures
   - Cultural articles

2. **Community**
   - Discussion forum
   - Study buddy matching

3. **Notifications**
   - Assignment reminders
   - Instructor feedback alerts
   - Session unlock notifications

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | ✅ Yes |
| `NEXTAUTH_URL` | App URL (production/dev) | ✅ Yes |
| `OPENAI_API_KEY` | OpenAI API key for chatbot | ✅ Yes |
| `ELEVENLABS_API_KEY` | ElevenLabs for pronunciation | ⚠️ Optional |
| `AWS_ACCESS_KEY_ID` | AWS credentials for file storage | ✅ Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret | ✅ Yes |
| `AWS_S3_BUCKET` | S3 bucket name | ✅ Yes |

---

## Deployment

### **Deploy to Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Environment Setup**
1. Add all environment variables in Vercel dashboard
2. Connect Neon database
3. Run Prisma migrations in build command

### **Build Command**
```bash
npx prisma generate && npx prisma db push && next build
```

---

## API Documentation

### **Authentication**
- `POST /api/auth/signin` - Login
- `POST /api/auth/signout` - Logout
- `GET /api/auth/session` - Get current session

### **Sessions**
- `GET /api/sessions` - List all sessions
- `GET /api/sessions/[id]` - Get session details
- `POST /api/sessions/[id]/enroll` - Enroll in session

### **Progress**
- `GET /api/progress` - Get user progress
- `POST /api/progress` - Update progress
- `GET /api/progress/stats` - Get statistics

### **Quiz**
- `GET /api/quiz/[id]` - Get quiz
- `POST /api/quiz/[id]/submit` - Submit answers
- `GET /api/quiz/[id]/results` - Get results

### **AI**
- `POST /api/ai/chat` - Chat with AI bot
- `POST /api/ai/pronunciation` - Check pronunciation
- `POST /api/ai/grammar` - Check grammar

### **Upload**
- `POST /api/upload/video` - Upload video assignment
- `POST /api/upload/audio` - Upload audio assignment

---

## License

© 2025 ESQ Leadership Center. All rights reserved.

---

## Support

For issues or questions:
- Email: instructor@bizarabic.com
- Forum: [Dashboard Discussion Board]
- Documentation: [Full Docs Link]

---

**Next Steps**: See individual files in this directory for complete implementation code.

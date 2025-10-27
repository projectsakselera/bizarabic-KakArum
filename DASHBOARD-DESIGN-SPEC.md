# DASHBOARD DESIGN & TECHNICAL SPECIFICATION
## Arabic for Business ESQ 165
### Complete Blueprint untuk Platform Development

---

## TABLE OF CONTENTS

1. [Dashboard Structure](#1-dashboard-structure)
2. [Page-by-Page Breakdown](#2-page-by-page-breakdown)
3. [Component Library](#3-component-library)
4. [Color System & Typography](#4-color-system--typography)
5. [User Flow](#5-user-flow)
6. [AI Tools Recommendations](#6-ai-tools-recommendations)
7. [Technical Stack](#7-technical-stack)
8. [Implementation Roadmap](#8-implementation-roadmap)

---

## 1. DASHBOARD STRUCTURE

### **A. SITE MAP**

```
┌─ MAIN DASHBOARD (/)
│
├─ LEARNING
│  ├─ My Learning Path (/learning-path)
│  ├─ Session 1-8 (/session/[1-8])
│  │  ├─ Pre-Session Materials
│  │  ├─ Live Session Info
│  │  └─ Post-Session Assignment
│  └─ Session Archive (/archive)
│
├─ PRACTICE
│  ├─ Practice Zone (/practice)
│  │  ├─ Vocabulary Flashcards
│  │  ├─ Quick Quizzes
│  │  └─ Pronunciation Practice
│  ├─ Cultural Corner (/cultural-corner)
│  └─ Daily Challenge (/daily)
│
├─ RESOURCES
│  ├─ Dictionary (/dictionary)
│  ├─ Phrase Book (/phrasebook)
│  ├─ Grammar Guide (/grammar)
│  ├─ Templates (/templates)
│  │  ├─ Email Templates
│  │  ├─ Meeting Scripts
│  │  └─ Presentation Outlines
│  └─ Downloads (/downloads)
│
├─ COMMUNITY
│  ├─ Discussion Forum (/forum)
│  ├─ Study Groups (/groups)
│  ├─ Leaderboard (/leaderboard)
│  └─ Achievements (/achievements)
│
├─ PROGRESS
│  ├─ My Stats (/stats)
│  ├─ Certificates (/certificates)
│  └─ Learning Report (/report)
│
└─ ACCOUNT
   ├─ Profile (/profile)
   ├─ Settings (/settings)
   └─ Help & Support (/support)
```

---

## 2. PAGE-BY-PAGE BREAKDOWN

### **PAGE 1: MAIN DASHBOARD** (`/`)

#### **Layout Wireframe:**

```
┌────────────────────────────────────────────────────────────┐
│ HEADER (Sticky)                                             │
│ [ESQ Logo] Arabic for Business          🔔 👤 [Settings]    │
│ ─────────────────────────────────────────────────────────  │
│ Dashboard | Sessions | Practice | Resources | Community    │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                │
│ ┌──────────────────────────────────────────────────────┐   │
│ │  من اللغة إلى الثقافة إلى الشراكة                    │   │
│ │  From Language to Culture to Partnership              │   │
│ │                                                        │   │
│ │  مرحباً، أحمد! 👋                                     │   │
│ │  Welcome back, Ahmad!                                 │   │
│ │                                                        │   │
│ │  [Circular Progress: 37.5%]  "3/8 Sessions Complete" │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ QUICK ACCESS CARDS (3 columns)                              │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│ │📖 Continue  │ │🎥 Next Live │ │🎮 Daily     │          │
│ │Session 4    │ │Thu 10:00 AM │ │Practice     │          │
│ │Workplace    │ │via Zoom     │ │Quiz Ready   │          │
│ │Talk         │ │             │ │             │          │
│ │[Continue →] │ │[Join Now →] │ │[Start →]    │          │
│ └─────────────┘ └─────────────┘ └─────────────┘          │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ LEARNING PATH - Session Roadmap                             │
│                                                              │
│  ✓ ─── ✓ ─── ✓ ─── ⏵ ─── ○ ─── ○ ─── ○ ─── ○            │
│  1     2     3     4     5     6     7     8                │
│                                                              │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ [4 more cards...]     │
│ │✓ S1  │ │✓ S2  │ │✓ S3  │ │⏵ S4  │                       │
│ │85%   │ │92%   │ │78%   │ │In    │                       │
│ │      │ │      │ │      │ │Prog. │                       │
│ └──────┘ └──────┘ └──────┘ └──────┘                       │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ MY PROGRESS STATS (4 metrics grid)                          │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│ │  156    │ │  3/8    │ │  85%    │ │  850    │          │
│ │ ─────── │ │ ─────── │ │ ─────── │ │ ─────── │          │
│ │ Words   │ │Sessions │ │Average  │ │ Points  │          │
│ │Mastered │ │Complete │ │ Score   │ │  Total  │          │
│ │📚 +12   │ │🎯 37.5% │ │📊 ↑5%   │ │🏆 Top 5 │          │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ CULTURAL CORNER                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🌍 Arabic Proverb of the Week                         │   │
│ │                                                        │   │
│ │ "الصبر مفتاح الفرج"                                   │   │
│ │ "Patience is the key to relief"                       │   │
│ │                                                        │   │
│ │ [Watch Video: Saudi Business Etiquette (3 min) →]    │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ COMMUNITY FEED                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🎉 Fatimah earned "Meeting Master" badge!             │   │
│ │ 💬 3 new posts in "Pronunciation Tips" forum          │   │
│ │ 🏆 Top 3 This Week: Ahmad, Sarah, Budi                │   │
│ │ [View All Activity →]                                 │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ QUICK RESOURCES                                             │
│ [📖 Dictionary] [💬 Phrase Book] [📧 Email Templates]      │
│ [🎯 Grammar Guide] [📥 Downloads]                          │
└────────────────────────────────────────────────────────────┘
```

#### **Content Breakdown:**

**1. Header (Sticky)**
- Logo: ESQ + "Arabic for Business" wordmark
- Navigation: Dashboard, Sessions, Practice, Resources, Community
- Notifications icon (bell) with badge count
- User profile avatar with dropdown menu

**2. Hero Section**
- Bilingual tagline (Arabic + English)
- Personalized greeting with user name
- Circular progress indicator (percentage + fraction)
- Gradient background (green to gold)

**3. Quick Access Cards (3)**
- **Continue Learning**: Current session, progress, CTA button
- **Next Live Session**: Date, time, join link
- **Daily Practice**: Quick quiz or flashcard

**4. Learning Path Visual**
- Timeline with 8 dots/circles (completed, in progress, locked)
- Card grid showing first 4 sessions with status
- Hover for session preview

**5. Stats Grid (4 Metrics)**
- Words Mastered (with weekly change indicator)
- Sessions Completed (fraction + percentage)
- Average Score (with trend arrow)
- Total Points (with leaderboard rank)

**6. Cultural Corner**
- Weekly Arabic proverb (bilingual)
- Featured video or article
- CTA to Cultural Corner page

**7. Community Feed**
- Recent achievements
- Forum activity
- Leaderboard preview
- Link to full community page

**8. Quick Resources**
- Icon buttons linking to key resources
- One-click access to tools

---

### **PAGE 2: SESSION PAGE** (`/session/[id]`)

#### **Layout Wireframe:**

```
┌────────────────────────────────────────────────────────────┐
│ SESSION HEADER                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ SESSION 4 OF 8                                        │   │
│ │ Workplace Talk - الحديث عن العمل                     │   │
│ │                                                        │   │
│ │ Status: ⏵ In Progress  |  Score: 78/100  | Due: 3 days│   │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░  65% Complete                   │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ NAVIGATION TABS                                             │
│ [Pre-Session] [Live Session] [Post-Session] [Discussion]   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ PRE-SESSION TAB (Active)                                    │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 📋 LEARNING OBJECTIVES                                │   │
│ │ After this session, you will be able to:              │   │
│ │ ✓ Explain your job and responsibilities              │   │
│ │ ✓ Introduce ESQ 165 organization                     │   │
│ │ ✓ Use basic financial vocabulary                     │   │
│ │ ✓ Ask questions about others' work                   │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🎥 VIDEO LECTURES                                     │   │
│ │ ┌──────────┐ ┌──────────┐ ┌──────────┐              │   │
│ │ │ ✓ Part 1 │ │ ⏵ Part 2 │ │ ○ Part 3 │              │   │
│ │ │ 5:23     │ │ 0:00     │ │ 4:15     │              │   │
│ │ │ [Replay] │ │ [Watch]  │ │ [Locked] │              │   │
│ │ └──────────┘ └──────────┘ └──────────┘              │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 📚 VOCABULARY BUILDER                                 │   │
│ │ 35 words to master                                    │   │
│ │ ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░  20/35 mastered                │   │
│ │ [Practice Flashcards →]                               │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 📄 READING MATERIALS                                  │   │
│ │ • Session 4 Study Guide (PDF)                         │   │
│ │ • Financial Vocabulary List                           │   │
│ │ • Cultural Note: Hierarchy in Arab Organizations      │   │
│ │ [Download All]                                        │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🎯 PRE-SESSION QUIZ                                   │   │
│ │ Score: Not yet taken                                  │   │
│ │ 7 questions  |  Passing: 70%  |  Time: ~5 minutes    │   │
│ │ [Start Quiz →]                                        │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 📝 PREPARATION TASK                                   │   │
│ │ Before live session, prepare:                         │   │
│ │ "Write a short paragraph about your role at ESQ      │   │
│ │  using the vocabulary from this session."            │   │
│ │ [Upload Draft]                                        │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

[Similar structure for Live Session, Post-Session, Discussion tabs]
```

#### **Content Breakdown:**

**Session Header:**
- Session number and title (bilingual)
- Status badge (completed/in progress/locked)
- Overall score
- Due date countdown
- Progress bar

**Tab Navigation:**
- Pre-Session (materials, videos, quiz)
- Live Session (schedule, Zoom link, rundown)
- Post-Session (assignment, submission, feedback)
- Discussion (forum thread for this session)

**Pre-Session Content:**
- Learning objectives checklist
- Video lectures (3-4 parts) with play progress
- Vocabulary builder with mastery tracker
- Reading materials (PDFs, links)
- Pre-session quiz with score display
- Preparation task instructions

**Live Session Content:**
- Date & time display
- Zoom/Meet link (active only near session time)
- Session rundown/agenda
- Instructor info
- Recording link (after session)

**Post-Session Content:**
- Assignment brief
- Upload interface
- Rubric/grading criteria
- Submission status
- Instructor feedback (when available)

**Discussion Content:**
- Forum thread specific to this session
- Q&A with instructor
- Peer discussions

---

### **PAGE 3: PRACTICE ZONE** (`/practice`)

#### **Layout:**

```
┌────────────────────────────────────────────────────────────┐
│ PRACTICE ZONE                                               │
│ Sharpen your skills with interactive exercises              │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ DAILY CHALLENGE (Featured)                                  │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔥 3 Day Streak!                                      │   │
│ │ Today's Challenge: Pronunciation Drill                │   │
│ │ Listen and repeat 10 business phrases                 │   │
│ │ [Start Challenge →]                         ⏱️ 5 min  │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ PRACTICE ACTIVITIES (Grid)                                  │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│ │🎴 Flashcards│ │🎯 Quizzes   │ │🗣️ Pronuncia-│          │
│ │200+ words   │ │25 quizzes   │ │tion Practice│          │
│ │All sessions │ │By topic     │ │Audio drills │          │
│ │[Practice]   │ │[Start]      │ │[Begin]      │          │
│ └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                              │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│ │✍️ Writing   │ │🎮 Games     │ │📞 Scenarios │          │
│ │Email        │ │Word match   │ │Phone call   │          │
│ │practice     │ │Memory game  │ │Meeting sim  │          │
│ │[Practice]   │ │[Play]       │ │[Role Play]  │          │
│ └─────────────┘ └─────────────┘ └─────────────┘          │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ YOUR PRACTICE STATS                                         │
│ This Week: 45 min practiced  |  15 activities completed    │
│ [View Detailed Stats →]                                     │
└────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- **Flashcards**: Spaced repetition system, flip animation
- **Quizzes**: Multiple choice, fill-in-blank, matching
- **Pronunciation**: Record & compare with native speaker
- **Writing**: Guided email/dialogue composition
- **Games**: Gamified vocabulary practice
- **Scenarios**: Roleplay simulations with AI feedback

---

### **PAGE 4: RESOURCES LIBRARY** (`/resources`)

#### **Layout:**

```
┌────────────────────────────────────────────────────────────┐
│ RESOURCES LIBRARY                                           │
│ [Search: _________________] [Filter: All ▼] [Sort: A-Z ▼]  │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ QUICK ACCESS                                                │
│ [📖 Dictionary] [💬 Phrase Book] [📝 Grammar] [📧 Templates]│
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ DICTIONARY (Interactive)                                    │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Search: [_________________] 🔍                        │   │
│ │                                                        │   │
│ │ Results for "meeting":                                │   │
│ │                                                        │   │
│ │ اجتماع (ijtimā')                            🔊 Play   │   │
│ │ noun, masculine                                        │   │
│ │ Meaning: meeting, gathering                           │   │
│ │ Example: نبدأ الاجتماع (We start the meeting)         │   │
│ │ Related: لقاء (liqā' - encounter), موعد (maw'id)      │   │
│ │ [Add to Flashcards] [Share]                           │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ PHRASE BOOK (Categorized)                                   │
│ ├─ Greetings & Introductions (15 phrases)                  │
│ ├─ Small Talk (12 phrases)                                 │
│ ├─ Phone Conversations (20 phrases)                        │
│ ├─ Email Writing (18 phrases)                              │
│ ├─ Meetings (25 phrases)                                   │
│ ├─ Negotiations (15 phrases)                               │
│ └─ Presentations (20 phrases)                              │
│ [Expand all] [Download PDF]                                │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ TEMPLATES                                                   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│ │ 📧 Email │ │ 📝 Meeting│ │ 🎤 Present│                    │
│ │ Templates│ │ Scripts  │ │ -ation   │                    │
│ │ 5 types  │ │ 3 types  │ │ Outlines │                    │
│ │[View]    │ │[View]    │ │[View]    │                    │
│ └──────────┘ └──────────┘ └──────────┘                    │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ DOWNLOADS                                                   │
│ • All Session Slides (ZIP, 25MB)                           │
│ • Vocabulary Master List (PDF, 2MB)                        │
│ • Grammar Reference Guide (PDF, 5MB)                       │
│ • Audio Files - All Pronunciations (ZIP, 50MB)            │
│ • Cultural Insights Compilation (PDF, 8MB)                │
│ [Download All]                                             │
└────────────────────────────────────────────────────────────┘
```

**Features:**
- **Dictionary**: Searchable, audio playback, examples, related words
- **Phrase Book**: Categorized by topic, bilingual, audio
- **Templates**: Editable, downloadable (Word/PDF)
- **Downloads**: Bulk download option

---

### **PAGE 5: COMMUNITY** (`/community`)

#### **Layout:**

```
┌────────────────────────────────────────────────────────────┐
│ COMMUNITY                                                   │
│ Learn together with your peers                              │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ LEADERBOARD (This Month)                                    │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🥇 1. Ahmad Rahman          1,250 pts  ⭐⭐⭐⭐⭐      │   │
│ │ 🥈 2. Fatimah Ali           1,180 pts  ⭐⭐⭐⭐        │   │
│ │ 🥉 3. Budi Santoso          1,050 pts  ⭐⭐⭐⭐        │   │
│ │    4. Sarah Khan              980 pts  ⭐⭐⭐          │   │
│ │ ...                                                    │   │
│ │   15. You                     850 pts  ⭐⭐⭐          │   │
│ │ [View Full Leaderboard →]                             │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ DISCUSSION FORUM                                            │
│ [New Topic +]                           [Search] [Filter]   │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 📌 Pinned: Welcome & Guidelines                       │   │
│ │ 💬 How to pronounce ع correctly? (12 replies)         │   │
│ │ ❓ Question about Session 4 financial terms (5)       │   │
│ │ 💡 Tip: Best way to remember verb conjugations (8)    │   │
│ │ 🎉 I used Arabic in a real meeting today! (23)        │   │
│ │ [Load More Topics →]                                  │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ STUDY GROUPS                                                │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Your Study Buddy: Fatimah Ali                         │   │
│ │ Last practice together: 2 days ago                    │   │
│ │ [Schedule Practice Session]                           │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
│ Available Study Groups:                                     │
│ • Morning Practice Group (5 members) [Join]                │
│ • Weekend Warriors (3 members) [Join]                      │
│ [Create New Group]                                         │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ RECENT ACHIEVEMENTS                                         │
│ 🏆 Ahmad earned "Vocabulary Master" badge                  │
│ 🎯 Sarah completed Session 5 with 95%                      │
│ 🔥 Budi has a 7-day practice streak                        │
│ [View All Achievements →]                                  │
└────────────────────────────────────────────────────────────┘
```

**Features:**
- **Leaderboard**: Points-based, monthly reset, badges display
- **Forum**: Categories, upvote/downvote, instructor responses
- **Study Buddies**: Pairing system, practice scheduling
- **Achievements Feed**: Real-time updates, social validation

---

### **PAGE 6: MY PROGRESS** (`/progress`)

#### **Layout:**

```
┌────────────────────────────────────────────────────────────┐
│ MY LEARNING PROGRESS                                        │
│ Track your journey to Arabic fluency                        │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ OVERALL PROGRESS                                            │
│ ┌──────────────────────────────────────────────────────┐   │
│ │     [Circular Chart]                                  │   │
│ │         37.5%                                         │   │
│ │      3/8 Sessions                                     │   │
│ │                                                        │   │
│ │  Started: Jan 15, 2025                                │   │
│ │  Expected Completion: Mar 10, 2025                    │   │
│ │  Days Remaining: 35 days                              │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ SESSION BREAKDOWN                                           │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Session │ Status    │ Score │ Completed  │ Time     │   │
│ │─────────┼───────────┼───────┼────────────┼──────────│   │
│ │ 1       │ ✓ Done    │ 85%   │ Jan 20     │ 3h 15m   │   │
│ │ 2       │ ✓ Done    │ 92%   │ Jan 27     │ 3h 30m   │   │
│ │ 3       │ ✓ Done    │ 78%   │ Feb 3      │ 2h 45m   │   │
│ │ 4       │ ⏵ In Prog │ 65%   │ -          │ 2h 10m   │   │
│ │ 5       │ ○ Locked  │ -     │ -          │ -        │   │
│ │ 6       │ ○ Locked  │ -     │ -          │ -        │   │
│ │ 7       │ ○ Locked  │ -     │ -          │ -        │   │
│ │ 8       │ ○ Locked  │ -     │ -          │ -        │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ SKILL MASTERY (Charts)                                      │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Vocabulary:    ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░  156/200 words  │   │
│ │ Pronunciation: ▓▓▓▓▓▓▓▓░░░░░░░░░░░░  70%            │   │
│ │ Grammar:       ▓▓▓▓▓▓░░░░░░░░░░░░░░  60%            │   │
│ │ Cultural:      ▓▓▓▓▓▓▓▓▓░░░░░░░░░░░  75%            │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ ACTIVITY HEATMAP (GitHub-style)                             │
│ Your practice activity over the last 8 weeks                │
│ [Visual heatmap showing daily practice frequency]           │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ BADGES & ACHIEVEMENTS                                       │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│ │ 🏆   │ │ ⭐   │ │ 🎯   │ │ 🔥   │ │ 💬   │            │
│ │Early │ │Vocab │ │Quiz  │ │7-Day │ │Help- │            │
│ │ Bird │ │Master│ │ Pro  │ │Streak│ │ful   │            │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘            │
│ [View All Badges →]                                        │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ CERTIFICATES                                                │
│ • Session 1-3 Completion Certificate (Download)            │
│ • [Final Certificate available after Session 8]            │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ LEARNING REPORT                                             │
│ [Download Full Report (PDF) →]                             │
│ Includes: Session scores, time invested, strengths/         │
│ weaknesses, recommendations for improvement                 │
└────────────────────────────────────────────────────────────┘
```

**Features:**
- **Overall Progress**: Circular chart, timeline, countdown
- **Session Table**: Sortable, detailed stats
- **Skill Breakdown**: Multiple competency tracking
- **Activity Heatmap**: Visual practice consistency
- **Badges**: Earned achievements display
- **Certificates**: Download option
- **Report**: Comprehensive PDF export

---

## 3. COMPONENT LIBRARY

### **A. DESIGN SYSTEM COMPONENTS**

#### **1. Buttons**

```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #166534;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #15803d;
  border: 2px solid #15803d;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #15803d;
  color: white;
}

/* Icon Button */
.btn-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f4;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-icon:hover {
  background: #e7e5e4;
  transform: scale(1.1);
}
```

#### **2. Cards**

```css
/* Session Card */
.session-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.session-card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border-color: #D4AF37;
}

.session-card.completed {
  border-left: 4px solid #16a34a;
}

.session-card.in-progress {
  border-left: 4px solid #2563eb;
}

.session-card.locked {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Stat Card */
.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.stat-card .number {
  font-size: 3rem;
  font-weight: 900;
  color: #15803d;
  line-height: 1;
}

.stat-card .label {
  font-size: 0.875rem;
  color: #44403c;
  margin-top: 8px;
}

.stat-card .change {
  font-size: 0.75rem;
  color: #16a34a;
  margin-top: 4px;
}
```

#### **3. Progress Indicators**

```css
/* Progress Bar */
.progress-bar {
  width: 100%;
  height: 8px;
  background: #e7e5e4;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #14b8a6, #f59e0b);
  border-radius: 999px;
  transition: width 0.5s ease;
}

/* Circular Progress */
.circular-progress {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #f59e0b 0% var(--progress),
    #e7e5e4 var(--progress) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.circular-progress::before {
  content: '';
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  position: absolute;
}

.circular-progress .percentage {
  font-size: 1.5rem;
  font-weight: 900;
  color: #15803d;
  z-index: 1;
}
```

#### **4. Badges**

```css
/* Status Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-success {
  background: #dcfce7;
  color: #166534;
}

.badge-progress {
  background: #dbeafe;
  color: #1e40af;
}

.badge-locked {
  background: #f5f5f4;
  color: #78716c;
}

/* Achievement Badge */
.achievement-badge {
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef3c7, #fbbf24);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
}

.achievement-badge .icon {
  font-size: 2rem;
}

.achievement-badge .name {
  font-size: 0.625rem;
  margin-top: 8px;
  text-align: center;
}
```

#### **5. Navigation**

```css
/* Top Navigation */
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: white;
  border-bottom: 1px solid #e7e5e4;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-menu {
  display: flex;
  gap: 32px;
}

.nav-item {
  color: #44403c;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  color: #15803d;
  border-bottom-color: #f59e0b;
}

/* Side Navigation (Mobile) */
.side-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e7e5e4;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.side-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #78716c;
  font-size: 0.75rem;
  text-decoration: none;
}

.side-nav-item.active {
  color: #15803d;
}
```

#### **6. Forms & Inputs**

```css
/* Text Input */
.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e7e5e4;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

/* Arabic Text Input */
.input-arabic {
  direction: rtl;
  text-align: right;
  font-family: 'Noto Naskh Arabic', serif;
  font-size: 1.125rem;
}

/* File Upload */
.file-upload {
  border: 2px dashed #d4af37;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  background: #fefce8;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-upload:hover {
  background: #fef3c7;
  border-color: #f59e0b;
}
```

#### **7. Modals & Overlays**

```css
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

/* Modal Content */
.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

---

## 4. COLOR SYSTEM & TYPOGRAPHY

### **A. Color Palette (Final)**

```css
:root {
  /* Primary Colors */
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;

  --gold-400: #fbbf24;
  --gold-500: #f59e0b;
  --gold-600: #d97706;

  /* Secondary Colors */
  --stone-50: #fafaf9;
  --stone-100: #f5f5f4;
  --stone-200: #e7e5e4;
  --stone-700: #44403c;
  --stone-900: #1c1917;

  --teal-500: #14b8a6;
  --teal-600: #0d9488;

  /* Status Colors */
  --success: #16a34a;
  --warning: #f59e0b;
  --error: #dc2626;
  --info: #2563eb;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #15803d, #166534);
  --gradient-accent: linear-gradient(135deg, #f59e0b, #d97706);
  --gradient-progress: linear-gradient(90deg, #14b8a6, #f59e0b);
}
```

### **B. Typography System**

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&family=Inter:wght@400;500;600;700;900&display=swap');

:root {
  /* Font Families */
  --font-latin: 'Inter', -apple-system, system-ui, sans-serif;
  --font-arabic: 'Noto Naskh Arabic', serif;

  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;
}

/* Typography Classes */
.heading-1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-black);
  line-height: var(--leading-tight);
  color: var(--stone-900);
}

.heading-2 {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--stone-900);
}

.heading-3 {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-normal);
  color: var(--stone-900);
}

.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--stone-700);
}

.arabic-text {
  font-family: var(--font-arabic);
  font-size: calc(var(--text-base) + 2px);
  line-height: var(--leading-loose);
  direction: rtl;
  text-align: right;
}

.arabic-heading {
  font-family: var(--font-arabic);
  font-size: calc(var(--text-2xl) + 2px);
  font-weight: var(--font-bold);
  line-height: var(--leading-loose);
  direction: rtl;
  text-align: right;
  color: var(--green-800);
}
```

### **C. Spacing System**

```css
:root {
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
}
```

---

## 5. USER FLOW

### **New User Journey:**

```
1. ONBOARDING
   ├─ Sign Up / Login
   ├─ Welcome Tour (5 screens)
   ├─ Placement Test (optional)
   ├─ Profile Setup (name, photo, goals)
   └─ Orientation Video (5 min)

2. FIRST SESSION
   ├─ Dashboard Introduction
   ├─ Session 1 Overview
   ├─ Pre-Session Materials (30 min)
   ├─ Live Session Registration
   └─ Community Introduction

3. ONGOING LEARNING
   ├─ Complete Pre-Session → Attend Live → Submit Assignment
   ├─ Daily Practice (10-15 min)
   ├─ Engage in Community
   └─ Track Progress

4. COMPLETION
   ├─ Final Assessment (Session 8)
   ├─ Certificate Generation
   ├─ Feedback Survey
   ├─ Alumni Network Invitation
   └─ Level 2 Promotion (if available)
```

### **Daily User Flow:**

```
1. Login → Dashboard
2. Check "Quick Access" for today's task
3. Option A: Continue current session
   Option B: Daily practice
   Option C: Participate in community
4. Complete activity
5. Earn points/badges
6. Review progress
7. Logout or continue exploring
```

---

## 6. AI TOOLS RECOMMENDATIONS

### **A. AI-POWERED FEATURES TO IMPLEMENT**

#### **1. AI Pronunciation Coach** 🗣️

**Tool**: **ElevenLabs** or **Google Cloud Text-to-Speech**

**Features:**
- Generate native Arabic pronunciation audio
- Voice comparison: User records → AI compares with native speaker
- Real-time feedback on accuracy
- Phoneme-level correction

**Implementation:**
```javascript
// Using ElevenLabs API
async function generatePronunciation(arabicText) {
  const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/voice-id', {
    method: 'POST',
    headers: {
      'xi-api-key': 'YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: arabicText,
      voice_settings: {
        stability: 0.75,
        similarity_boost: 0.75
      }
    })
  });

  const audioBlob = await response.blob();
  return URL.createObjectURL(audioBlob);
}
```

**Cost**: ~$11/month for 30,000 characters (ElevenLabs Starter)

---

#### **2. AI Chatbot for Practice** 💬

**Tool**: **OpenAI GPT-4** or **Claude API** (Anthropic)

**Features:**
- Conversational practice partner
- Scenario-based dialogues (phone call, meeting, negotiation)
- Grammar correction
- Cultural tips
- 24/7 availability

**Implementation:**
```javascript
// Using OpenAI API
async function chatWithAI(userMessage, context) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a friendly Arabic language tutor specializing in business Arabic for ESQ 165 program. Help users practice conversations, correct their grammar, and provide cultural insights. Respond in both Arabic and English.'
        },
        {
          role: 'user',
          content: userMessage
        }
      ],
      temperature: 0.7
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
```

**Prompt Engineering Example:**
```
System Prompt:
"You are an Arabic business language tutor for ESQ 165 students.
- Help practice business conversations
- Correct grammar gently
- Provide cultural context
- Use scenarios: phone calls, emails, meetings, negotiations
- Respond bilingually (Arabic + English translation)
- Stay in character as a Saudi business professional"

User: "How do I greet someone in a formal meeting?"

AI: "في الاجتماعات الرسمية:
السلام عليكم ورحمة الله وبركاته
أهلاً وسهلاً
تشرفنا بلقائك

Translation: In formal meetings:
- Assalamu alaikum warahmatullahi wabarakatuh (Peace be upon you)
- Ahlan wa sahlan (Welcome)
- Tasharrafna bi-liqa'ik (Honored to meet you)

💡 Cultural Tip: Always start with 'Assalamu alaikum' - it's more than a greeting, it's a blessing!"
```

**Cost**: ~$0.03 per conversation (GPT-4) or ~$0.003 (GPT-3.5-turbo)

---

#### **3. AI Writing Assistant** ✍️

**Tool**: **LanguageTool API** + **GPT-4**

**Features:**
- Real-time grammar checking for Arabic
- Email composition assistance
- Style suggestions (formal vs informal)
- Translation verification

**Implementation:**
```javascript
// Grammar check with LanguageTool
async function checkArabicGrammar(text) {
  const response = await fetch('https://api.languagetoolplus.com/v2/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      text: text,
      language: 'ar',
      enabledOnly: 'false'
    })
  });

  const data = await response.json();
  return data.matches; // Array of grammar issues
}

// Email composition with GPT-4
async function composeEmail(scenario, userInput) {
  const prompt = `
  Scenario: ${scenario}
  User's draft: ${userInput}

  Please:
  1. Correct any grammar/spelling errors
  2. Improve formality level for business context
  3. Add appropriate Arabic business phrases
  4. Provide both Arabic and English versions
  `;

  // Call GPT-4 API (similar to chatbot example)
  // Return improved email
}
```

**Cost**: LanguageTool free tier (20 requests/min) or ~€6/month (premium)

---

#### **4. AI Flashcard Generator** 🎴

**Tool**: **GPT-4** for content generation + **Spaced Repetition Algorithm**

**Features:**
- Auto-generate flashcards from session content
- Context-based examples
- Adaptive difficulty (based on user performance)
- Image generation for visual vocabulary (using DALL-E or Stable Diffusion)

**Implementation:**
```javascript
// Generate flashcards from text
async function generateFlashcards(sessionContent) {
  const prompt = `
  From the following Arabic business lesson content, generate 20 flashcards.

  Content: ${sessionContent}

  Format each flashcard as JSON:
  {
    "arabic": "السعر",
    "phonetic": "as-si'r",
    "english": "price",
    "example_ar": "ما هو السعر؟",
    "example_en": "What is the price?",
    "category": "finance"
  }

  Return array of flashcard objects.
  `;

  // Call GPT-4, parse JSON response
  // Store in database with spaced repetition metadata
}

// Spaced Repetition Algorithm (SM-2)
function calculateNextReview(card, performance) {
  // performance: 0-5 (0=total blackout, 5=perfect recall)
  let easinessFactor = card.easinessFactor || 2.5;
  let interval = card.interval || 1;

  if (performance >= 3) {
    if (card.repetitions === 0) {
      interval = 1;
    } else if (card.repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easinessFactor);
    }
    easinessFactor += (0.1 - (5 - performance) * (0.08 + (5 - performance) * 0.02));
  } else {
    interval = 1;
    card.repetitions = 0;
  }

  card.easinessFactor = Math.max(1.3, easinessFactor);
  card.interval = interval;
  card.nextReview = new Date(Date.now() + interval * 24 * 60 * 60 * 1000);

  return card;
}
```

**Cost**: Minimal (GPT-4 API calls only when generating new content)

---

#### **5. AI Video Subtitle Generator** 📹

**Tool**: **Whisper API** (OpenAI) or **AssemblyAI**

**Features:**
- Auto-generate Arabic + English subtitles for video lectures
- Timestamp synchronization
- Speaker diarization (identify who's speaking)
- Searchable transcripts

**Implementation:**
```javascript
// Using Whisper API
async function generateSubtitles(videoFile) {
  const formData = new FormData();
  formData.append('file', videoFile);
  formData.append('model', 'whisper-1');
  formData.append('language', 'ar');
  formData.append('response_format', 'srt'); // SubRip format

  const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: formData
  });

  const srtContent = await response.text();
  return srtContent;
}

// Translate to English
async function translateSubtitles(arabicSRT) {
  // Use GPT-4 to translate while preserving timing
  const prompt = `
  Translate this Arabic SRT subtitle file to English.
  Preserve all timestamps and formatting.

  ${arabicSRT}
  `;

  // Return English SRT
}
```

**Cost**: $0.006/minute of audio (Whisper API)

---

#### **6. AI Quiz Generator** 🎯

**Tool**: **GPT-4**

**Features:**
- Auto-generate quizzes from lesson content
- Multiple question types (MCQ, fill-in-blank, matching)
- Adaptive difficulty
- Explanation for wrong answers

**Implementation:**
```javascript
async function generateQuiz(sessionContent, difficulty) {
  const prompt = `
  Generate a 10-question quiz for Arabic business learners.

  Content: ${sessionContent}
  Difficulty: ${difficulty}

  Include:
  - 5 multiple choice (vocabulary/grammar)
  - 3 fill-in-the-blank (phrases)
  - 2 matching (Arabic to English)

  Format as JSON:
  {
    "questions": [
      {
        "type": "mcq",
        "question": "How do you say 'meeting' in Arabic?",
        "options": ["اجتماع", "موعد", "لقاء", "جدول"],
        "correct": 0,
        "explanation": "اجتماع (ijtimā') is the formal word for meeting in business context."
      },
      ...
    ]
  }
  `;

  // Call GPT-4, parse response
  // Return quiz object
}
```

**Cost**: ~$0.02 per quiz generation

---

#### **7. AI Cultural Advisor** 🌍

**Tool**: **GPT-4** fine-tuned on Saudi business culture

**Features:**
- Answer culture-specific questions
- Scenario analysis ("Is it appropriate to...?")
- Dos and don'ts advisor
- Real-time guidance during practice

**Example Prompts:**
```
User: "Is it okay to discuss business immediately in a meeting?"
AI: "❌ Not recommended in Saudi culture.

In Saudi Arabia, meetings typically start with:
1. Extended greetings (5-10 minutes)
2. Tea/coffee hospitality ritual
3. Personal small talk (family, health, weather)
4. THEN business discussion

Rushing to business matters can be seen as rude or transactional.

💡 Tip: Allow the Saudi host to transition to business topics naturally. Follow their lead."
```

---

### **B. AI TOOLS TECHNOLOGY STACK**

#### **Recommended Platform:**

```
┌─────────────────────────────────────────┐
│         FRONTEND                         │
│  Next.js 14 + React + TypeScript        │
│  Tailwind CSS + Framer Motion           │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│         BACKEND                          │
│  Node.js + Express / Next.js API Routes │
│  Python (for AI processing)             │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│         DATABASE                         │
│  PostgreSQL (user data, progress)       │
│  Redis (caching, sessions)              │
│  S3 (media storage)                     │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│         AI SERVICES                      │
│  ├─ OpenAI GPT-4 (chatbot, content)    │
│  ├─ ElevenLabs (pronunciation)          │
│  ├─ Whisper (transcription)             │
│  ├─ LanguageTool (grammar check)        │
│  └─ AssemblyAI (backup transcription)   │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│         INTEGRATIONS                     │
│  ├─ Zoom API (live sessions)            │
│  ├─ Stripe (payments - if needed)       │
│  ├─ SendGrid (email notifications)      │
│  └─ Google Analytics (tracking)         │
└─────────────────────────────────────────┘
```

#### **Cost Estimate (Monthly for 50 users):**

| Service | Usage | Cost |
|---------|-------|------|
| OpenAI GPT-4 | ~5,000 conversations | $150 |
| ElevenLabs | 1.5M characters (pronunciation) | $99 |
| Whisper API | ~100 hours video transcription | $36 |
| LanguageTool | 50 users | €6 ($6.5) |
| Hosting (Vercel/Railway) | Standard plan | $20 |
| Database (Supabase/PlanetScale) | Hobby tier | $25 |
| **TOTAL** | | **~$336.50/month** |

**Per User Cost**: ~$6.73/month (reasonable untuk program premium)

---

### **C. NO-CODE / LOW-CODE AI TOOLS (Alternative)**

Jika ingin lebih cepat tanpa heavy coding:

#### **1. Voiceflow** (Chatbot Builder)
- Visual chatbot designer
- Built-in GPT integration
- Arabic support
- **Cost**: $40/month (unlimited bots)

#### **2. Descript** (Video Editing + Transcription)
- Auto-generate subtitles (Arabic support)
- Edit video by editing text
- **Cost**: $12/month (Creator plan)

#### **3. Synthesia** (AI Video Generation)
- Create instructor videos with AI avatars
- Multilingual (including Arabic)
- **Cost**: $30/month (Personal plan)

#### **4. Anki / AnkiDroid** (Flashcards)
- Open-source spaced repetition
- FREE
- Can import custom decks

#### **5. Typeform** (Interactive Quizzes)
- Beautiful quiz interface
- Logic jumps
- **Cost**: $25/month (Basic plan)

---

## 7. TECHNICAL STACK RECOMMENDATION

### **OPTION 1: Custom Build (Full Control)** ⭐ Recommended

```
Frontend:
├─ Next.js 14 (App Router)
├─ React 18
├─ TypeScript
├─ Tailwind CSS
├─ Framer Motion (animations)
├─ Zustand (state management)
└─ React Query (data fetching)

Backend:
├─ Next.js API Routes
├─ Prisma ORM
├─ PostgreSQL
└─ Redis (caching)

AI & Media:
├─ OpenAI API (GPT-4, Whisper)
├─ ElevenLabs API
├─ LanguageTool API
└─ AWS S3 (file storage)

Authentication:
└─ NextAuth.js (supports email, Google, etc.)

Video Conferencing:
└─ Zoom SDK / Daily.co

Deployment:
├─ Vercel (frontend + API)
├─ Supabase / Railway (database)
└─ Cloudflare (CDN)
```

**Pros:**
- Full customization
- Better performance
- Scalable
- Own your data

**Cons:**
- Longer development time (8-12 weeks)
- Requires technical team

**Cost**: $300-400/month operational + development cost

---

### **OPTION 2: LMS Platform + AI Plugins** (Faster Launch)

```
Base Platform:
└─ Moodle / LearnDash / Teachable

AI Enhancements:
├─ H5P (interactive content)
├─ Zapier (AI integrations)
├─ Voiceflow chatbot (embedded)
└─ Custom plugins for AI features

Video Hosting:
└─ Vimeo / YouTube (private)

Live Sessions:
└─ Zoom (integrated)
```

**Pros:**
- Faster to launch (2-4 weeks)
- Lower initial cost
- Less technical expertise needed

**Cons:**
- Limited customization
- Platform fees
- Less scalable

**Cost**: $100-200/month

---

### **OPTION 3: Hybrid (Best of Both)** 💡 Best Balance

```
Phase 1 (Month 1-2): MVP
├─ Use Teachable / Thinkific for base LMS
├─ Custom landing page (Next.js)
├─ Embed AI chatbot (Voiceflow)
└─ Manual grading initially

Phase 2 (Month 3-4): Enhancements
├─ Add custom practice zone
├─ Integrate pronunciation AI
├─ Build progress dashboard
└─ Community forum (Discourse)

Phase 3 (Month 5-6): Full Platform
├─ Migrate to fully custom platform
├─ All AI features integrated
├─ Mobile app (React Native)
└─ Advanced analytics
```

**Pros:**
- Quick launch for pilot
- Iterative improvement based on feedback
- Lower risk

**Cons:**
- Migration work in Phase 3

**Cost**:
- Phase 1: $100/month
- Phase 2: $200/month
- Phase 3: $350/month

---

## 8. IMPLEMENTATION ROADMAP

### **12-WEEK IMPLEMENTATION PLAN**

```
WEEK 1-2: PLANNING & DESIGN
├─ Finalize detailed requirements
├─ Create high-fidelity mockups (Figma)
├─ Design component library
├─ Choose technology stack
└─ Set up development environment

WEEK 3-4: CORE PLATFORM
├─ Set up Next.js project
├─ Build authentication system
├─ Create database schema
├─ Develop main dashboard page
└─ Build session page template

WEEK 5-6: CONTENT MANAGEMENT
├─ Upload Session 1-2 content
├─ Build video player
├─ Create quiz system
├─ Develop flashcard interface
└─ Implement progress tracking

WEEK 7-8: AI INTEGRATION
├─ Integrate OpenAI chatbot
├─ Add pronunciation checker (ElevenLabs)
├─ Grammar checker (LanguageTool)
├─ Auto-generate flashcards
└─ Build AI writing assistant

WEEK 9-10: COMMUNITY & ENGAGEMENT
├─ Build discussion forum
├─ Create leaderboard
├─ Develop achievement system
├─ Add study buddy matching
└─ Implement notifications

WEEK 11: TESTING & QA
├─ Internal testing (all features)
├─ Bug fixes
├─ Performance optimization
├─ Mobile responsiveness check
└─ Security audit

WEEK 12: LAUNCH PREP
├─ Content finalization (all 8 sessions)
├─ User onboarding flow
├─ Documentation (user guide)
├─ Instructor training
└─ PILOT LAUNCH (10-15 users)
```

---

## 9. NEXT IMMEDIATE STEPS

### **Priority 1: Design Phase**

1. **Create Wireframes in Figma**
   - Dashboard mockup
   - Session page mockup
   - Mobile version
   - Component library

2. **Content Preparation**
   - Session 1 full content (pilot)
   - Video scripts
   - Vocabulary lists
   - Quiz questions

3. **Technical Setup**
   - Register domain
   - Set up hosting
   - Create GitHub repo
   - Set up development environment

### **Priority 2: Pilot Development**

1. **Build MVP** (4 weeks)
   - Dashboard (basic)
   - Session 1 only (fully functional)
   - AI chatbot (basic)
   - User authentication

2. **Test with 5 Users** (1 week)
   - Internal ESQ team
   - Gather feedback
   - Iterate

3. **Expand to 8 Sessions** (3 weeks)
   - Upload all content
   - Full feature set
   - Ready for cohort 1

---

## CONCLUSION

This dashboard design provides:

✅ **Complete user experience** from onboarding to certification
✅ **AI-powered learning** (chatbot, pronunciation, writing assistant)
✅ **Engaging interface** with gamification
✅ **Mobile-responsive** design
✅ **Scalable architecture** for growth
✅ **Bilingual support** (Arabic + Indonesia)
✅ **Cultural integration** throughout

**Estimated Total Cost:**
- Development: $3,000-5,000 (if outsourced) or free (if in-house)
- Monthly Operations: $300-400 (for 50 users)
- **Per User**: ~$7-8/month (sustainable pricing)

**Timeline to Launch:**
- MVP (Session 1 only): 4 weeks
- Full Platform (8 sessions): 12 weeks
- Pilot cohort: Week 13

---

**Prepared for**: ESQ 165 Leadership
**Date**: 2025-10-26
**Version**: Final Design Specification
**Status**: Ready for development kickoff
**Recommended Next Action**: Create Figma wireframes → Build MVP → Pilot test

import Link from 'next/link'

export default function SilabusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-arabi-green via-primehub-navy to-arabi-orange text-white py-8 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-2">SILABUS LENGKAP</h1>
          <h2 className="text-2xl font-light mb-1">BizArabic for ESQ165</h2>
          <p className="text-lg text-white/90 italic">Beyond Language: Building Bridges with Arabic Business Culture</p>
          <p className="text-lg text-gold-accent font-semibold mt-2 arabic-text" dir="rtl">من اللغة إلى الثقافة إلى الشراكة</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            Table of Contents | جدول المحتويات
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#overview" className="block p-3 rounded-lg hover:bg-arabi-green/5 transition border-l-4 border-arabi-green">
              <span className="font-semibold text-arabi-green">1.</span> Program Overview
            </a>
            <a href="#concept" className="block p-3 rounded-lg hover:bg-arabi-green/5 transition border-l-4 border-arabi-green">
              <span className="font-semibold text-arabi-green">2.</span> Big Concept & Unique Value
            </a>
            <a href="#objectives" className="block p-3 rounded-lg hover:bg-arabi-green/5 transition border-l-4 border-arabi-green">
              <span className="font-semibold text-arabi-green">3.</span> Learning Objectives
            </a>
            <a href="#approach" className="block p-3 rounded-lg hover:bg-arabi-green/5 transition border-l-4 border-arabi-green">
              <span className="font-semibold text-arabi-green">4.</span> Teaching Approach
            </a>
            <a href="#structure" className="block p-3 rounded-lg hover:bg-arabi-green/5 transition border-l-4 border-arabi-green">
              <span className="font-semibold text-arabi-green">5.</span> Program Structure
            </a>
            <a href="#level1" className="block p-3 rounded-lg hover:bg-arabi-orange/5 transition border-l-4 border-arabi-orange">
              <span className="font-semibold text-arabi-orange">6.</span> Level 1: Basic (8 Sessions)
            </a>
            <a href="#level2" className="block p-3 rounded-lg hover:bg-primehub-blue/5 transition border-l-4 border-primehub-blue">
              <span className="font-semibold text-primehub-blue">7.</span> Level 2: Intermediate
            </a>
            <a href="#level3" className="block p-3 rounded-lg hover:bg-primehub-navy/5 transition border-l-4 border-primehub-navy">
              <span className="font-semibold text-primehub-navy">8.</span> Level 3: Advanced
            </a>
          </div>
        </div>

        {/* Section 1: Program Overview */}
        <section id="overview" className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-arabi-green mb-6 pb-3 border-b-2 border-arabi-green">
            1. Program Overview | نظرة عامة على البرنامج
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Name</h3>
              <p className="text-lg font-bold text-arabi-green">BizArabic for ESQ165</p>
              <p className="text-lg arabic-text text-gray-700" dir="rtl">اللغة العربية للأعمال لفريق إي إس كيو ١٦٥</p>
            </div>

            <div className="bg-gradient-to-r from-arabi-green/10 to-arabi-orange/10 p-6 rounded-lg border-l-4 border-arabi-green">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Tagline</h3>
              <p className="text-lg italic text-gray-800 mb-1">"From Language to Culture to Partnership"</p>
              <p className="text-lg arabic-text text-gray-700" dir="rtl">من اللغة إلى الثقافة إلى الشراكة</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">⏱️</span>
                  Program Duration
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Level 1 (Basic):</strong> 8 weeks | 8 أسابيع</li>
                  <li><strong>Level 2 (Intermediate):</strong> 12 weeks (optional)</li>
                  <li><strong>Level 3 (Advanced):</strong> 12 weeks (optional)</li>
                  <li><strong className="text-arabi-green">Total:</strong> 32 weeks (8 months)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📚</span>
                  Time Commitment per Week
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Pre-Session: 30-45 minutes</li>
                  <li>Live Session: 120 minutes (2 hours)</li>
                  <li>Post-Session Practice: 20-30 minutes</li>
                  <li><strong className="text-arabi-green">Total:</strong> ~3 hours/week</li>
                </ul>
              </div>
            </div>

            <div className="bg-primehub-blue/10 p-6 rounded-lg border-l-4 border-primehub-navy">
              <h3 className="text-lg font-semibold text-primehub-navy mb-3">Target Participants</h3>
              <p className="text-gray-700 mb-2"><strong>ESQ 165 Team Members</strong> who are:</p>
              <ul className="space-y-2 text-gray-700 ml-5">
                <li>✓ Preparing for collaboration with Saudi Arabian partners</li>
                <li>✓ Interested in Arabic business communication</li>
                <li>✓ Committed to spiritual-professional growth</li>
                <li>✓ Ready for intensive, practical learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Big Concept */}
        <section id="concept" className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-arabi-green mb-6 pb-3 border-b-2 border-arabi-green">
            2. Big Concept & Unique Value
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-arabi-green to-arabi-orange text-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Program Philosophy</h3>
              <p className="text-xl italic mb-2">"Beyond Language: Building Bridges with Arabic Business Culture"</p>
              <p className="text-white/90">This is not just an Arabic language course. It's a <strong>holistic transformation program</strong> that integrates three essential dimensions.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-5 rounded-lg border-t-4 border-arabi-green">
                <h4 className="text-lg font-bold text-arabi-green mb-3">1. Arabic Professional Language</h4>
                <p className="text-sm arabic-text text-gray-600 mb-2" dir="rtl">اللغة العربية المهنية</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Practical communication skills</li>
                  <li>• Business vocabulary & phrases</li>
                  <li>• 200+ terminology mastery</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-primehub-blue">
                <h4 className="text-lg font-bold text-primehub-navy mb-3">2. Cultural Intelligence</h4>
                <p className="text-sm arabic-text text-gray-600 mb-2" dir="rtl">الذكاء الثقافي</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Saudi business culture understanding</li>
                  <li>• Etiquette & protocols</li>
                  <li>• Building trust across cultures</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg border-t-4 border-arabi-orange">
                <h4 className="text-lg font-bold text-arabi-orange mb-3">3. Spiritual Alignment</h4>
                <p className="text-sm arabic-text text-gray-600 mb-2" dir="rtl">التوافق الروحي والمهني</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• ESQ values with Arab-Islamic principles</li>
                  <li>• Adab, Amanah, Ihsan</li>
                  <li>• Building silaturahmi</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Values | قيم البرنامج</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-arabi-green">Excellence (Ihsan - إحسان)</p>
                    <p className="text-sm text-gray-600">Striving for the best in every aspect</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-semibold text-arabi-green">Integrity (Amanah - أمانة)</p>
                    <p className="text-sm text-gray-600">Trustworthy and authentic communication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🙏</span>
                  <div>
                    <p className="font-semibold text-arabi-green">Respect (Ihtram - احترام)</p>
                    <p className="text-sm text-gray-600">Honoring cultural differences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💪</span>
                  <div>
                    <p className="font-semibold text-arabi-green">Patience (Sabr - صبر)</p>
                    <p className="text-sm text-gray-600">Understanding that mastery takes time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Level 1 Sessions */}
        <section id="level1" className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-arabi-orange mb-6 pb-3 border-b-2 border-arabi-orange">
            6. Level 1: Basic Business Arabic (8 Sessions)
          </h2>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div>
              <h3 className="text-2xl font-bold text-arabi-green mb-4">Phase 1: Foundation 🏗️</h3>

              <div className="space-y-4">
                {/* Session 1 */}
                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Session 1: Opening Doors - First Impressions</h4>
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Week 1</span>
                  </div>
                  <p className="text-sm arabic-text text-green-700 mb-3" dir="rtl">فتح الأبواب: الانطباعات الأولى</p>
                  <p className="text-sm text-gray-700 mb-3"><strong>Learning Objectives:</strong> Master Arabic pronunciation, introduce yourself professionally, use formal greetings</p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pronunciation & phonetics (28 Arabic letters)</li>
                      <li>• Formal greetings (السلام عليكم، صباح الخير)</li>
                      <li>• Self-introduction structure</li>
                      <li>• Company & position vocabulary</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">📚 Vocabulary: 25-30 words | 🎯 Assignment: 1-min self-introduction video</p>
                </div>

                {/* Session 2 */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Session 2: Building Connections - Small Talk</h4>
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Week 2</span>
                  </div>
                  <p className="text-sm arabic-text text-blue-700 mb-3" dir="rtl">بناء العلاقات: الحديث الصغير</p>
                  <p className="text-sm text-gray-700 mb-3"><strong>Learning Objectives:</strong> Conduct professional small talk, express gratitude and apologies</p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Asking about wellbeing (كيف حالك؟)</li>
                      <li>• Thank you variations (شكراً / جزاك الله خيراً)</li>
                      <li>• Professional courtesy phrases</li>
                      <li>• Understanding takarrub (relationship building)</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">📚 Vocabulary: 20-25 words | 🎯 Assignment: 2-min small talk audio recording</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-2xl font-bold text-arabi-orange mb-4">Phase 2: Practical Skills 🛠️</h3>

              <div className="space-y-4">
                {/* Session 3-5 abbreviated */}
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">Session 3: Time & Communication</h4>
                  <p className="text-sm text-gray-600">Scheduling, phone conversations, understanding Arab concept of time</p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">Session 4: Workplace Talk</h4>
                  <p className="text-sm text-gray-600">Jobs, organizations, financial vocabulary, company introduction</p>
                </div>
                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">Session 5: Business Correspondence</h4>
                  <p className="text-sm text-gray-600">Email structure, business phrases, formal writing</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-2xl font-bold text-primehub-navy mb-4">Phase 3: Integration 🎯</h3>

              <div className="space-y-4">
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">Session 6: Requests & Negotiations</h4>
                  <p className="text-sm text-gray-600">Polite requests, negotiation language, accepting/refusing gracefully</p>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">Session 7: Meeting Essentials</h4>
                  <p className="text-sm text-gray-600">Opening/closing meetings, expressing opinions, product presentation</p>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">Session 8: Presentation & Final Project</h4>
                  <p className="text-sm text-gray-600">Business presentations, Q&A handling, final assessment & certification</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Dashboard */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-arabi-green hover:text-arabi-green/80 font-semibold transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm mb-2">© 2025 ESQ Leadership Center. All rights reserved.</p>
          <p className="text-xs text-gray-500">BizArabic for ESQ165 Training Program</p>
          <p className="text-gold-accent mt-3 arabic-text" dir="rtl">من اللغة إلى الثقافة إلى الشراكة</p>
        </div>
      </footer>
    </div>
  )
}

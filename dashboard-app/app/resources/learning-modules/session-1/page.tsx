import Link from 'next/link'
import Image from 'next/image'

export default function Session1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-arabi-green via-primehub-navy to-arabi-orange text-white py-8 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Resources
          </Link>
          <div className="mb-2 text-sm font-semibold text-white/80">LEARNER WORKBOOK - SESSION 2</div>
          <h1 className="text-4xl font-bold mb-2" dir="rtl">بناء العلاقات: Small Talk & Professional Courtesy</h1>
          <h2 className="text-2xl font-semibold mb-3">Building Connections</h2>
          <p className="text-white/90">BizArabic for ESQ Team</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Session Overview Section */}
        <section id="overview" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-sm font-bold text-arabi-green mb-2">الجلسة الثانية</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Building Connections - بناء العلاقات</h2>
            <p className="text-xl text-gray-600 italic">The Art of Small Talk & Professional Courtesy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-arabi-green/10 to-arabi-green/5 p-6 rounded-lg">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-bold text-gray-700 mb-1">Pre-Session</div>
              <div className="text-2xl font-bold text-arabi-green">45 min</div>
            </div>
            <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-navy/5 p-6 rounded-lg">
              <div className="text-2xl mb-2">👨‍🏫</div>
              <div className="font-bold text-gray-700 mb-1">Live Session</div>
              <div className="text-2xl font-bold text-primehub-navy">120 min</div>
            </div>
            <div className="bg-gradient-to-br from-arabi-orange/10 to-arabi-orange/5 p-6 rounded-lg">
              <div className="text-2xl mb-2">✍️</div>
              <div className="font-bold text-gray-700 mb-1">Assignment</div>
              <div className="text-2xl font-bold text-arabi-orange">30 min</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primehub-navy/5 to-arabi-green/5 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4">📋 What's in This Workbook</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Understanding small talk in Arab culture</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>35+ essential phrases for building connections</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Cultural insights on hospitality and relationships</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Practice exercises for real conversations</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Coffee ritual etiquette</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Your audio assignment</span>
              </div>
            </div>
          </div>

          <div className="bg-arabi-green/10 p-6 rounded-lg border-r-4 border-arabi-green" dir="rtl">
            <p className="font-arabic text-lg mb-3">
              <strong>الفكرة الكبرى:</strong>
            </p>
            <p className="font-arabic text-gray-700 mb-4">
              في الثقافة العربية، الأعمال تُبنى على العلاقات، وليس على العقود فقط. المحادثة القصيرة ليست "قصيرة" - إنها أساس كل علاقة عمل ذات معنى.
            </p>
            <div className="border-t border-arabi-green/30 pt-4 mt-4" dir="ltr">
              <p className="text-gray-600 italic">
                <strong>English Translation:</strong> In Arab culture, business is built on relationships, not just contracts. Small talk isn't "small"—it's the foundation of all meaningful business relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Goals Section */}
        <section id="goals" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Learning Goals | أهداف التعلم</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-arabi-green text-white p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl">Language Skills</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Conduct culturally appropriate small talk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Ask about health and family respectfully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Express courtesy, gratitude, and good wishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Use question words correctly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Master possessive pronouns</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primehub-navy text-white p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl">Cultural Intelligence</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Understand <em>takarrub</em> (drawing closer)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Navigate personal vs. professional boundaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Recognize the importance of family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Apply hospitality rituals (<em>karam</em>)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Demonstrate <em>adab</em> (proper manners)</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="bg-arabi-orange text-white p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl">Business Application</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Build rapport with Saudi partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Show genuine interest in wellbeing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Use small talk strategically for trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Recognize cultural cues for transitions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Spiritual Reflection */}
        <section id="reflection" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🕌 Spiritual Reflection | التأمل الروحي</h2>

          <div className="bg-gradient-to-br from-arabi-green/10 to-primehub-navy/10 p-8 rounded-lg border-r-4 border-arabi-green">
            <div className="mb-6" dir="rtl">
              <p className="font-arabic text-xl font-bold mb-4">الحديث النبوي:</p>
              <p className="font-arabic text-2xl mb-2">"من كان يؤمن بالله واليوم الآخر فليكرم ضيفه"</p>
              <p className="text-sm text-gray-600 italic">(رواه البخاري ومسلم)</p>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <p className="font-bold mb-3">English Translation & Reflection:</p>
              <p className="text-lg italic mb-4 text-gray-700">
                <strong>Hadith:</strong> "Whoever believes in Allah and the Last Day should honor his guest" <br/>
                <span className="text-sm">(Narrated by Bukhari and Muslim)</span>
              </p>
              <p className="mb-4">
                <strong>Meaning:</strong> Honoring guests—whether in your home or your office—is not just good manners; it's an act of worship. In Arab culture, <em>karam</em> (generosity/hospitality) is one of the highest virtues.
              </p>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold mb-2">Reflection Questions:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Think of a time when someone showed you extraordinary hospitality. How did it make you feel?</li>
                  <li>How can you embody <em>karam</em> (generosity) when you meet your Saudi partners?</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Relationship-First Mindset */}
        <section id="mindset" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Relationship-First Mindset</h2>
          <p className="text-xl text-gray-600 italic mb-8">In Arab culture, relationships come before transactions</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚡</span>
                <h3 className="text-xl font-bold">Western Business (Transaction-First)</h3>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                Meeting → Quick greeting → Agenda → <br/>
                Business discussion → Decision → Goodbye
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">Time: 30-60 minutes</span>
              </div>
            </div>

            <div className="border-2 border-arabi-green rounded-lg p-6 bg-arabi-green/5">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤝</span>
                <h3 className="text-xl font-bold">Arab Business (Relationship-First)</h3>
              </div>
              <div className="bg-white p-4 rounded-lg mb-4 font-mono text-sm">
                Meeting → Extended greeting → Coffee/tea → <br/>
                Small talk → Build rapport → THEN business → <br/>
                More tea → Continued relationship-building
              </div>
              <div className="flex items-center text-arabi-green">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">Time: 60-180 minutes (or multiple meetings)</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-primehub-navy p-6 rounded-r-lg">
            <p className="flex items-start">
              <span className="text-2xl mr-3">💡</span>
              <span className="text-gray-700">
                <strong>Key Insight:</strong> In Arab culture, <strong>contracts are secondary to trust</strong>. A handshake from a trusted friend is worth more than a 50-page legal document. Rushing signals disrespect—taking time shows you value the relationship.
              </span>
            </p>
          </div>
        </section>

        {/* Coffee Ritual */}
        <section id="coffee" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">☕ The Arabic Coffee Ritual</h2>
          <p className="text-xl text-gray-600 mb-8">More Than Just a Drink</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-arabi-green/10 to-arabi-green/5 p-6 rounded-lg border-l-4 border-arabi-green">
              <div className="text-3xl font-bold text-arabi-green mb-2">1️⃣</div>
              <h4 className="font-bold mb-2">Host offers coffee</h4>
              <p className="text-sm text-gray-600">Usually in small cups, no handles</p>
            </div>

            <div className="bg-gradient-to-br from-arabi-green/10 to-arabi-green/5 p-6 rounded-lg border-l-4 border-arabi-green">
              <div className="text-3xl font-bold text-arabi-green mb-2">2️⃣</div>
              <h4 className="font-bold mb-2">Guest accepts</h4>
              <p className="text-sm text-gray-600">With right hand, say "شكراً" (Thank you)</p>
            </div>

            <div className="bg-gradient-to-br from-arabi-green/10 to-arabi-green/5 p-6 rounded-lg border-l-4 border-arabi-green">
              <div className="text-3xl font-bold text-arabi-green mb-2">3️⃣</div>
              <h4 className="font-bold mb-2">Drinks coffee</h4>
              <p className="text-sm text-gray-600">Usually 3-5 sips—it's strong!</p>
            </div>

            <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-navy/5 p-6 rounded-lg border-l-4 border-primehub-navy">
              <div className="text-3xl font-bold text-primehub-navy mb-2">4️⃣</div>
              <h4 className="font-bold mb-2">Host refills</h4>
              <p className="text-sm text-gray-600">Hospitality continues</p>
            </div>

            <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-navy/5 p-6 rounded-lg border-l-4 border-primehub-navy">
              <div className="text-3xl font-bold text-primehub-navy mb-2">5️⃣</div>
              <h4 className="font-bold mb-2">Guest signals "enough"</h4>
              <p className="text-sm text-gray-600">Gently shake cup side-to-side</p>
            </div>

            <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-navy/5 p-6 rounded-lg border-l-4 border-primehub-navy">
              <div className="text-3xl font-bold text-primehub-navy mb-2">6️⃣</div>
              <h4 className="font-bold mb-2">Host stops pouring</h4>
              <p className="text-sm text-gray-600">Takes cup respectfully</p>
            </div>
          </div>

          <div className="bg-arabi-orange/10 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4">🎯 Cultural Significance:</h4>
            <ul className="space-y-2">
              <li><strong>Offering coffee</strong> = "You are welcome here; I respect you"</li>
              <li><strong>Accepting coffee</strong> = "I trust you; I'm open to connection"</li>
              <li><strong>Multiple cups</strong> = "I'm comfortable; I want to stay"</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-arabi-orange/30">
              <p className="italic text-gray-700">
                <strong>Business Implication:</strong> The coffee ritual is relationship-building time. Don't rush it. This is when rapport is formed.
              </p>
            </div>
          </div>
        </section>

        {/* Essential Phrases */}
        <section id="phrases" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">💬 Essential Small Talk Phrases</h2>

          <div className="space-y-8">
            {/* Questions About Wellbeing */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-arabi-green text-white px-3 py-1 rounded-lg mr-3">🤝</span>
                Questions About Wellbeing
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-arabi-green text-white">
                      <th className="border border-arabi-green/30 p-3 text-right">Arabic</th>
                      <th className="border border-arabi-green/30 p-3 text-left">Transliteration</th>
                      <th className="border border-arabi-green/30 p-3 text-left">English</th>
                      <th className="border border-arabi-green/30 p-3 text-left">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-arabi-green/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">كيف حالك؟</td>
                      <td className="border border-gray-300 p-3">Kayfa ḥaluk?</td>
                      <td className="border border-gray-300 p-3">How are you?</td>
                      <td className="border border-gray-300 p-3">📌 Most common greeting question</td>
                    </tr>
                    <tr className="hover:bg-arabi-green/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">كيف العائلة؟</td>
                      <td className="border border-gray-300 p-3">Kayfa al-'aila?</td>
                      <td className="border border-gray-300 p-3">How is the family?</td>
                      <td className="border border-gray-300 p-3">👨‍👩‍👧‍👦 Safe, respectful way to ask</td>
                    </tr>
                    <tr className="hover:bg-arabi-green/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">كيف الصحة؟</td>
                      <td className="border border-gray-300 p-3">Kayfa aṣ-ṣiḥḥa?</td>
                      <td className="border border-gray-300 p-3">How is your health?</td>
                      <td className="border border-gray-300 p-3">💪 Shows genuine care</td>
                    </tr>
                    <tr className="hover:bg-arabi-green/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">كيف الأحوال؟</td>
                      <td className="border border-gray-300 p-3">Kayfa al-aḥwal?</td>
                      <td className="border border-gray-300 p-3">How are things?</td>
                      <td className="border border-gray-300 p-3">General inquiry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Common Responses */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-primehub-navy text-white px-3 py-1 rounded-lg mr-3">✅</span>
                Common Responses
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primehub-navy text-white">
                      <th className="border border-primehub-navy/30 p-3 text-right">Arabic</th>
                      <th className="border border-primehub-navy/30 p-3 text-left">Transliteration</th>
                      <th className="border border-primehub-navy/30 p-3 text-left">English</th>
                      <th className="border border-primehub-navy/30 p-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-primehub-navy/5 bg-yellow-50">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">الحمد لله</td>
                      <td className="border border-gray-300 p-3">Alḥamdulillah</td>
                      <td className="border border-gray-300 p-3">Praise be to God</td>
                      <td className="border border-gray-300 p-3">⭐ <strong>MOST COMMON</strong></td>
                    </tr>
                    <tr className="hover:bg-primehub-navy/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">بخير، الحمد لله</td>
                      <td className="border border-gray-300 p-3">Bi-khayr, alḥamdulillah</td>
                      <td className="border border-gray-300 p-3">Well, praise be to God</td>
                      <td className="border border-gray-300 p-3">Positive response</td>
                    </tr>
                    <tr className="hover:bg-primehub-navy/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">ممتاز</td>
                      <td className="border border-gray-300 p-3">Mumtaz</td>
                      <td className="border border-gray-300 p-3">Excellent</td>
                      <td className="border border-gray-300 p-3">Very positive</td>
                    </tr>
                    <tr className="hover:bg-primehub-navy/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">تمام</td>
                      <td className="border border-gray-300 p-3">Tamam</td>
                      <td className="border border-gray-300 p-3">Perfect/Great</td>
                      <td className="border border-gray-300 p-3">Casual, positive</td>
                    </tr>
                    <tr className="hover:bg-primehub-navy/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">لا بأس</td>
                      <td className="border border-gray-300 p-3">La ba's</td>
                      <td className="border border-gray-300 p-3">Not bad / Okay</td>
                      <td className="border border-gray-300 p-3">Neutral</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-lg">
                <p className="flex items-start text-sm">
                  <span className="text-xl mr-2">💡</span>
                  <span><strong>Cultural Note:</strong> Arabs almost always include "الحمد لله" (Alhamdulillah) in responses. It's a way of attributing all good to Allah.</span>
                </p>
              </div>
            </div>

            {/* Expressing Gratitude */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-arabi-orange text-white px-3 py-1 rounded-lg mr-3">🙏</span>
                Expressing Gratitude
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-arabi-orange text-white">
                      <th className="border border-arabi-orange/30 p-3 text-right">Arabic</th>
                      <th className="border border-arabi-orange/30 p-3 text-left">Transliteration</th>
                      <th className="border border-arabi-orange/30 p-3 text-left">English</th>
                      <th className="border border-arabi-orange/30 p-3 text-left">Formality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-arabi-orange/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">شكراً</td>
                      <td className="border border-gray-300 p-3">Shukran</td>
                      <td className="border border-gray-300 p-3">Thank you</td>
                      <td className="border border-gray-300 p-3">Casual</td>
                    </tr>
                    <tr className="hover:bg-arabi-orange/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">شكراً جزيلاً</td>
                      <td className="border border-gray-300 p-3">Shukran jazilan</td>
                      <td className="border border-gray-300 p-3">Thank you very much</td>
                      <td className="border border-gray-300 p-3">Formal</td>
                    </tr>
                    <tr className="hover:bg-arabi-orange/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">جزاك الله خيراً</td>
                      <td className="border border-gray-300 p-3">Jazak Allahu khayran</td>
                      <td className="border border-gray-300 p-3">May Allah reward you</td>
                      <td className="border border-gray-300 p-3">Religious, warm</td>
                    </tr>
                    <tr className="hover:bg-arabi-orange/5">
                      <td className="border border-gray-300 p-3 font-arabic text-right text-lg" dir="rtl">بارك الله فيك</td>
                      <td className="border border-gray-300 p-3">Barak Allahu fik</td>
                      <td className="border border-gray-300 p-3">May Allah bless you</td>
                      <td className="border border-gray-300 p-3">Religious, formal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4 rounded-r-lg">
                <p className="flex items-start text-sm">
                  <span className="text-xl mr-2">✨</span>
                  <span><strong>Pro Tip:</strong> Using religious expressions (جزاك الله خيراً) is more meaningful than simple شكراً. It shows you're acknowledging Allah in your gratitude.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Insights */}
        <section id="cultural" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🌍 Deep Cultural Understanding</h2>

          <div className="space-y-8">
            {/* Takarrub */}
            <div className="bg-gradient-to-br from-arabi-green/10 to-primehub-navy/10 p-6 rounded-lg border-r-4 border-arabi-green">
              <h3 className="text-2xl font-bold mb-4">Understanding Takarrub (تقرب) - "Drawing Closer"</h3>

              <div className="mb-6" dir="rtl">
                <p className="font-arabic text-lg font-bold mb-2">تقرب = بناء الاتصال الشخصي قبل العمل</p>
                <p className="font-arabic text-gray-700">
                  في الثقافة العربية، نبني علاقة شخصية قوية قبل الحديث عن الأعمال. هذا ليس مضيعة للوقت - إنه الأساس للثقة.
                </p>
              </div>

              <p className="mb-4">
                <strong>Definition:</strong> تقرب (takarrub) means "to draw closer" or "to seek closeness."
              </p>

              <p className="mb-4">
                In business context, takarrub is the intentional process of:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Building personal connection</li>
                <li>Finding common ground</li>
                <li>Showing genuine interest in the other person</li>
                <li>Creating emotional rapport before business</li>
              </ul>

              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="font-bold mb-2">How Arabs Practice Takarrub:</p>
                <ul className="space-y-1">
                  <li>✅ Asking about health, family, hometown</li>
                  <li>✅ Sharing personal stories</li>
                  <li>✅ Finding mutual connections</li>
                  <li>✅ Complimenting genuinely</li>
                  <li>✅ Expressing care and concern</li>
                </ul>
              </div>

              <div className="bg-arabi-green/20 p-4 rounded-lg">
                <p className="flex items-start">
                  <span className="text-xl mr-2">🎯</span>
                  <span>
                    <strong>For ESQ Team:</strong> Practice takarrub by researching your partner's background, asking thoughtful questions, listening more than you speak, and finding shared values (faith, family, education).
                  </span>
                </p>
              </div>
            </div>

            {/* Ma Sha Allah */}
            <div className="bg-gradient-to-br from-arabi-orange/10 to-gold-accent/10 p-6 rounded-lg border-r-4 border-arabi-orange">
              <h3 className="text-2xl font-bold mb-4">Using "Ma Sha' Allah" (ماشاء الله)</h3>

              <div className="mb-4">
                <h4 className="font-bold text-lg mb-2">Cultural Belief: The Evil Eye (العين)</h4>
                <p className="text-gray-700 mb-4">
                  Many Arabs believe in the "evil eye" (<em>al-'ayn</em> - العين)—the idea that excessive praise or envy can bring bad luck.
                </p>
                <p className="text-gray-700">
                  <strong>Protection:</strong> The phrase <strong>ماشاء الله</strong> (Ma sha' Allah - "What Allah wills") is used to ward off the evil eye when giving compliments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="font-bold mb-3">✅ How to Use It - Before a compliment:</p>
                <div className="space-y-3">
                  <div className="bg-arabi-orange/10 p-3 rounded" dir="rtl">
                    <p className="font-arabic text-lg mb-1">ماشاء الله، مكتبك رائع</p>
                    <p className="text-sm text-gray-600 italic" dir="ltr">Ma sha' Allah, your office is wonderful</p>
                  </div>
                  <div className="bg-arabi-orange/10 p-3 rounded" dir="rtl">
                    <p className="font-arabic text-lg mb-1">ماشاء الله، عائلتك جميلة</p>
                    <p className="text-sm text-gray-600 italic" dir="ltr">Ma sha' Allah, your family is beautiful</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold mb-2">Why?</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Shows you're attributing beauty/success to Allah, not taking credit</li>
                  <li>Protects the person from envy</li>
                  <li>Demonstrates cultural awareness</li>
                </ul>
              </div>

              <div className="bg-arabi-orange/20 p-4 rounded-lg mt-4">
                <p className="flex items-start">
                  <span className="text-xl mr-2">🎯</span>
                  <span>
                    <strong>For ESQ Team:</strong> Using ماشاء الله before compliments shows respect for both Islamic belief and Arab culture. It's a small phrase with big cultural significance.
                  </span>
                </p>
              </div>
            </div>

            {/* Time Perception */}
            <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-blue/10 p-6 rounded-lg border-r-4 border-primehub-navy">
              <h3 className="text-2xl font-bold mb-4">Time Perception: Polychronic vs. Monochronic</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold mb-3">Western (Monochronic) Time:</h4>
                  <ul className="space-y-2">
                    <li>⏰ Time is linear: One thing at a time</li>
                    <li>⏰ Punctuality is sacred</li>
                    <li>⏰ "Time is money"</li>
                    <li>⏰ Schedules are rigid</li>
                  </ul>
                </div>

                <div className="bg-arabi-green/10 p-5 rounded-lg border-2 border-arabi-green">
                  <h4 className="font-bold mb-3">Arab (Polychronic) Time:</h4>
                  <ul className="space-y-2">
                    <li>🕰️ Time is fluid: Multiple things at once</li>
                    <li>🕰️ Relationships matter more than schedules</li>
                    <li>🕰️ "Time is abundant"</li>
                    <li>🕰️ Schedules are flexible</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold mb-2">❌ Don't:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Rush through small talk to "get to business"</li>
                    <li>• Show impatience if the meeting runs long</li>
                    <li>• Complain about "wasting time"</li>
                    <li>• Check your watch repeatedly</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold mb-2">✅ Do:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Allow extra time for meetings (double your estimate!)</li>
                    <li>• Embrace the slow pace</li>
                    <li>• See small talk as productive relationship-building</li>
                    <li>• Be flexible with schedules</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primehub-navy/20 p-4 rounded-lg mt-4">
                <p className="flex items-start">
                  <span className="text-xl mr-2">🎯</span>
                  <span>
                    <strong>For ESQ Team:</strong> Adjust your internal clock when working with Saudi partners. A "30-minute meeting" might be 90 minutes—and that's normal and expected.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section id="practice" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Practice Exercises | تمارين</h2>
          <p className="text-lg text-gray-600 mb-8">Time to Practice!</p>

          <div className="space-y-8">
            {/* Exercise 1 */}
            <div className="bg-gradient-to-br from-arabi-green/10 to-arabi-green/5 p-6 rounded-lg border-l-4 border-arabi-green">
              <h3 className="text-xl font-bold mb-4">Exercise 1: Small Talk Dialogue - Fill in the Blanks</h3>
              <p className="mb-4">Complete the conversation with appropriate phrases:</p>

              <div className="bg-white p-6 rounded-lg mb-4 font-mono text-sm">
                <p>أحمد: السلام عليكم</p>
                <p>خالد: وعليكم السلام</p>
                <p>أحمد: __________ (1) [How are you?]</p>
                <p>خالد: __________ (2) [Praise God, well]</p>
                <p>أحمد: __________ (3) [How is the family?]</p>
                <p>خالد: بخير، الحمد لله</p>
                <p>أحمد: __________ (4) [May Allah protect them]</p>
                <p>خالد: __________ (5) [Thank you for asking]</p>
              </div>

              <div className="bg-arabi-green/20 p-4 rounded-lg" dir="rtl">
                <p className="font-bold mb-2">Word Bank:</p>
                <p className="font-arabic text-lg">الحمد لله • كيف حالك • كيف العائلة • الله يحفظهم • شكراً لسؤالك</p>
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-navy/5 p-6 rounded-lg border-l-4 border-primehub-navy">
              <h3 className="text-xl font-bold mb-4">Exercise 2: Cultural Scenario Response</h3>
              <p className="mb-4">Write appropriate Arabic responses:</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold mb-2">Scenario 1:</p>
                  <p className="mb-3">Your Saudi colleague offers you Arabic coffee. What do you say?</p>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="text-sm text-gray-500">Your Response: _______________________________</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold mb-2">Scenario 2:</p>
                  <p className="mb-3">Your host shows you their beautiful office. Give a compliment using "Ma sha' Allah".</p>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="text-sm text-gray-500">Your Response: _______________________________</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold mb-2">Scenario 3:</p>
                  <p className="mb-3">Someone tells you their family is well. Respond with a blessing.</p>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="text-sm text-gray-500">Your Response: _______________________________</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercise 3 */}
            <div className="bg-gradient-to-br from-arabi-orange/10 to-arabi-orange/5 p-6 rounded-lg border-l-4 border-arabi-orange">
              <h3 className="text-xl font-bold mb-4">Exercise 3: Build Your Own Small Talk Script</h3>
              <p className="mb-4">Write a complete small talk conversation (6-8 exchanges) including:</p>

              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Greetings</li>
                <li>Asking about health</li>
                <li>Asking about family</li>
                <li>A compliment (using ماشاء الله)</li>
                <li>Expressing thanks</li>
              </ul>

              <div className="bg-white p-6 rounded-lg">
                <p className="font-bold mb-3">Your Script:</p>
                <div className="space-y-3 text-sm font-mono">
                  <p>Person A (You): _______________________________</p>
                  <p>Person B (Saudi Partner): _______________________________</p>
                  <p>Person A: _______________________________</p>
                  <p>Person B: _______________________________</p>
                  <p className="text-gray-400">[Continue...]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment */}
        <section id="assignment" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🎙️ Your Assignment | الواجب</h2>
          <h3 className="text-2xl font-bold text-arabi-orange mb-6">Audio Assignment: Small Talk Dialogue</h3>

          <div className="bg-gradient-to-br from-arabi-orange/10 to-arabi-orange/5 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-lg mb-4">Task:</h4>
            <p className="mb-4">Record a <strong>2-3 minute audio dialogue</strong> demonstrating small talk between you and a Saudi colleague.</p>

            <h4 className="font-bold text-lg mb-3">Requirements:</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-arabi-green text-white px-3 py-1 rounded-lg mr-3 font-bold">1️⃣</span>
                <div>
                  <p className="font-bold">Greetings</p>
                  <p className="font-arabic text-lg" dir="rtl">السلام عليكم</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-arabi-green text-white px-3 py-1 rounded-lg mr-3 font-bold">2️⃣</span>
                <div>
                  <p className="font-bold">Ask about health</p>
                  <p className="font-arabic text-lg" dir="rtl">كيف حالك؟</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-primehub-navy text-white px-3 py-1 rounded-lg mr-3 font-bold">3️⃣</span>
                <div>
                  <p className="font-bold">Ask about family</p>
                  <p className="font-arabic text-lg" dir="rtl">كيف العائلة؟</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-primehub-navy text-white px-3 py-1 rounded-lg mr-3 font-bold">4️⃣</span>
                <div>
                  <p className="font-bold">Small talk topic</p>
                  <p className="text-gray-600">Weather, travel, or work</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-arabi-orange text-white px-3 py-1 rounded-lg mr-3 font-bold">5️⃣</span>
                <div>
                  <p className="font-bold">Give compliment</p>
                  <p className="font-arabic text-lg" dir="rtl">ماشاء الله</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-arabi-orange text-white px-3 py-1 rounded-lg mr-3 font-bold">6️⃣</span>
                <div>
                  <p className="font-bold">Express thanks</p>
                  <p className="font-arabic text-lg" dir="rtl">جزاك الله خيراً</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-lg mb-4">Grading Criteria (20 points):</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-arabi-green text-white">
                    <th className="border border-arabi-green/30 p-3 text-left">Criteria</th>
                    <th className="border border-arabi-green/30 p-3 text-center">Points</th>
                    <th className="border border-arabi-green/30 p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-arabi-green/5">
                    <td className="border border-gray-300 p-3">🗣️ <strong>Pronunciation</strong></td>
                    <td className="border border-gray-300 p-3 text-center font-bold">5</td>
                    <td className="border border-gray-300 p-3">Clear pronunciation of all phrases</td>
                  </tr>
                  <tr className="hover:bg-arabi-green/5">
                    <td className="border border-gray-300 p-3">📚 <strong>Vocabulary Usage</strong></td>
                    <td className="border border-gray-300 p-3 text-center font-bold">5</td>
                    <td className="border border-gray-300 p-3">Correct use of Session 2 vocabulary</td>
                  </tr>
                  <tr className="hover:bg-arabi-green/5">
                    <td className="border border-gray-300 p-3">🌍 <strong>Cultural Appropriateness</strong></td>
                    <td className="border border-gray-300 p-3 text-center font-bold">5</td>
                    <td className="border border-gray-300 p-3">Understanding of cultural norms</td>
                  </tr>
                  <tr className="hover:bg-arabi-green/5">
                    <td className="border border-gray-300 p-3">💫 <strong>Natural Flow</strong></td>
                    <td className="border border-gray-300 p-3 text-center font-bold">3</td>
                    <td className="border border-gray-300 p-3">Dialogue sounds natural</td>
                  </tr>
                  <tr className="hover:bg-arabi-green/5">
                    <td className="border border-gray-300 p-3">✅ <strong>Completeness</strong></td>
                    <td className="border border-gray-300 p-3 text-center font-bold">2</td>
                    <td className="border border-gray-300 p-3">Includes all required elements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gold-accent/20 to-gold-accent/10 p-6 rounded-lg border-l-4 border-gold-accent">
            <h4 className="font-bold text-lg mb-2">🌟 Bonus Challenge (+5 points):</h4>
            <p>Practice this with an actual Arabic speaker (if available) and record it. Include a brief reflection on the experience.</p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section id="takeaways" className="mb-12 bg-gradient-to-r from-arabi-green via-primehub-navy to-arabi-orange text-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">🎯 Key Takeaways</h2>

          <div className="text-center mb-6">
            <p className="font-arabic text-2xl mb-2" dir="rtl">بناء العلاقات هو أساس النجاح</p>
            <p className="text-xl italic">Building relationships is the foundation of success</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <p className="text-lg mb-6">
              In Arab culture, <strong>small talk isn't small</strong>—it's the bridge to trust, partnership, and meaningful business relationships. Take your time, show genuine care, and embrace the slower pace. This is where real connections are made.
            </p>

            <div className="space-y-2">
              <p className="flex items-start">
                <span className="mr-3">✅</span>
                <span><strong>Small talk isn't small in Arab culture</strong>—it's the foundation of trust</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">✅</span>
                <span><strong>Relationships come before transactions</strong>—invest time in getting to know your partner</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">✅</span>
                <span><strong>Use ماشاء الله before compliments</strong> to show cultural awareness</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">✅</span>
                <span><strong>Asking about family shows you care</strong>—but respect gender boundaries</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">✅</span>
                <span><strong>Accept coffee when offered</strong>—it's relationship-building time</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">✅</span>
                <span><strong>Practice silaturahmi daily</strong>—it's a universal Islamic value</span>
              </p>
            </div>
          </div>
        </section>

        {/* Next Session Preview */}
        <section id="next" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 Next Session Preview</h2>
          <div className="bg-gradient-to-br from-primehub-navy/10 to-primehub-blue/10 p-6 rounded-lg border-l-4 border-primehub-navy">
            <h3 className="text-xl font-bold mb-3">Session 3: Time & Communication</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primehub-navy mr-2">•</span>
                <span>Telling time in Arabic</span>
              </li>
              <li className="flex items-start">
                <span className="text-primehub-navy mr-2">•</span>
                <span>Scheduling meetings</span>
              </li>
              <li className="flex items-start">
                <span className="text-primehub-navy mr-2">•</span>
                <span>Phone conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primehub-navy mr-2">•</span>
                <span>Cultural understanding of time in Saudi Arabia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primehub-navy mr-2">•</span>
                <span>Navigating prayer times and business hours</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-8">
          <p className="mb-2">© 2025 PrimeHub Training Center. All rights reserved.</p>
          <p className="font-arabic text-xl text-arabi-green" dir="rtl">بارك الله فيكم</p>
          <p className="italic">May Allah bless you all!</p>
        </footer>

      </main>
    </div>
  )
}

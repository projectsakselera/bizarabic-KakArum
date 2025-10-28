'use client'
import Link from 'next/link'

export default function ResourcesPage() {
  const learningModules = [
    { id: 1, title: "Session 1: Opening Doors", titleAr: "التعارف", available: true },
    { id: 2, title: "Session 2: Building Connections", titleAr: "بناء العلاقات", available: false },
    { id: 3, title: "Session 3: Time & Communication", titleAr: "الوقت والمواعيد", available: false },
    { id: 4, title: "Session 4: Workplace Talk", titleAr: "الحديث عن العمل", available: false },
    { id: 5, title: "Session 5: Business Correspondence", titleAr: "البريد الإلكتروني", available: false },
    { id: 6, title: "Session 6: Requests & Negotiations", titleAr: "الطلبات والمفاوضات", available: false },
    { id: 7, title: "Session 7: Meeting Essentials", titleAr: "أساسيات الاجتماعات", available: false },
    { id: 8, title: "Session 8: Presentation & Final Project", titleAr: "العرض والختام", available: false }
  ]

  const presentationSlides = [
    { id: 1, title: "Session 1: Opening Doors", titleAr: "التعارف", available: false },
    { id: 2, title: "Session 2: Building Connections", titleAr: "بناء العلاقات", available: false },
    { id: 3, title: "Session 3: Time & Communication", titleAr: "الوقت والمواعيد", available: false },
    { id: 4, title: "Session 4: Workplace Talk", titleAr: "الحديث عن العمل", available: false },
    { id: 5, title: "Session 5: Business Correspondence", titleAr: "البريد الإلكتروني", available: false },
    { id: 6, title: "Session 6: Requests & Negotiations", titleAr: "الطلبات والمفاوضات", available: false },
    { id: 7, title: "Session 7: Meeting Essentials", titleAr: "أساسيات الاجتماعات", available: false },
    { id: 8, title: "Session 8: Presentation & Final Project", titleAr: "العرض والختام", available: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-arabi-green via-primehub-navy to-arabi-orange text-white py-8 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-2">Downloads & Resources</h1>
          <p className="text-white/90 text-lg">Access all learning materials and presentation slides</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Learning Modules Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-arabi-green to-primehub-navy text-white p-3 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">📄 Learning Modules</h2>
              <p className="text-gray-600">Comprehensive workbooks for each session</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningModules.map((module) => (
              <div key={module.id}>
                {module.available ? (
                  <Link
                    href={`/resources/learning-modules/session-${module.id}`}
                    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-arabi-green group"
                  >
                    <div className="bg-gradient-to-br from-arabi-green to-primehub-navy p-4 text-white">
                      <div className="text-sm font-semibold mb-1">Session {module.id}</div>
                      <div className="text-xs opacity-90">Available Now</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-arabi-green transition">
                        {module.title}
                      </h3>
                      <p className="text-right text-lg font-arabic text-arabi-orange mb-3" dir="rtl">
                        {module.titleAr}
                      </p>
                      <div className="flex items-center text-arabi-green text-sm font-semibold">
                        <span>View Module</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200 opacity-60 cursor-not-allowed">
                    <div className="bg-gray-400 p-4 text-white">
                      <div className="text-sm font-semibold mb-1">Session {module.id}</div>
                      <div className="text-xs opacity-90">Coming Soon</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-600 mb-2">
                        {module.title}
                      </h3>
                      <p className="text-right text-lg font-arabic text-gray-400 mb-3" dir="rtl">
                        {module.titleAr}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm font-semibold">
                        <span>Not Available Yet</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Presentation Slides Section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-arabi-orange to-primehub-blue text-white p-3 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">🎯 Presentation Slides</h2>
              <p className="text-gray-600">Slide decks for live sessions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentationSlides.map((slide) => (
              <div key={slide.id}>
                {slide.available ? (
                  <Link
                    href={`/resources/presentation-slides/session-${slide.id}`}
                    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-arabi-orange group"
                  >
                    <div className="bg-gradient-to-br from-arabi-orange to-primehub-blue p-4 text-white">
                      <div className="text-sm font-semibold mb-1">Session {slide.id}</div>
                      <div className="text-xs opacity-90">Available Now</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-arabi-orange transition">
                        {slide.title}
                      </h3>
                      <p className="text-right text-lg font-arabic text-arabi-orange mb-3" dir="rtl">
                        {slide.titleAr}
                      </p>
                      <div className="flex items-center text-arabi-orange text-sm font-semibold">
                        <span>View Slides</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200 opacity-60 cursor-not-allowed">
                    <div className="bg-gray-400 p-4 text-white">
                      <div className="text-sm font-semibold mb-1">Session {slide.id}</div>
                      <div className="text-xs opacity-90">Coming Soon</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-600 mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-right text-lg font-arabic text-gray-400 mb-3" dir="rtl">
                        {slide.titleAr}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm font-semibold">
                        <span>Not Available Yet</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

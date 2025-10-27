import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header with Logos */}
      <header className="bg-white border-b-2 border-gray-200 py-6 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logos Section */}
          <div className="flex items-center justify-between mb-6">
            {/* Provider Logos (Left) */}
            <div className="flex items-center space-x-6">
              <Image src="/logos/logo-arabic-1.png" alt="Arabi.id" width={150} height={48} className="object-contain" />
              <div className="w-px h-12 bg-gray-300"></div>
              <Image src="/logos/logo-primehub-type.png" alt="PrimeHub" width={150} height={40} className="object-contain" />
            </div>

            {/* Client Logo (Right) */}
            <div>
              <Image src="/logos/logo-esq-blue.png" alt="ESQ" width={120} height={64} className="object-contain" />
            </div>
          </div>

          {/* Hero Section with Title */}
          <div className="hero-section text-center mb-6 py-12 px-6 rounded-2xl relative z-10">
            <div className="relative z-10">
              {/* Decorative Arabic Pattern Icon */}
              <div className="inline-block mb-4">
                <svg className="w-20 h-20 text-gold-accent floating" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">BizArabic for ESQ Team</h1>
              <p className="arabic-text text-3xl text-gold-accent mb-3 drop-shadow" dir="rtl">نتكلم بلغتهم، نفهم ثقافتهم، نبني جسور الثقة</p>
              <p className="text-xl text-white/90 italic font-light">Speak Their Language, Understand Their Culture, Build Bridges of Trust</p>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center gap-8 mt-6">
                <div className="text-white/80 text-center">
                  <div className="text-3xl font-bold text-gold-accent">8</div>
                  <div className="text-sm">Sessions</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-white/80 text-center">
                  <div className="text-3xl font-bold text-gold-accent">7</div>
                  <div className="text-sm">Participants</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-white/80 text-center">
                  <div className="text-3xl font-bold text-gold-accent">Oct-Nov</div>
                  <div className="text-sm">2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Description */}
          <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200 shadow-md relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2d5f3f" d="M47.5,-57.9C59.6,-48.2,66.3,-31.5,69.2,-14.2C72.1,3.1,71.2,21,63.4,35.8C55.6,50.6,41,62.3,24.5,68.1C8,73.9,-10.4,73.8,-26.9,67.8C-43.4,61.8,-58,49.9,-65.9,34.8C-73.8,19.7,-75,1.4,-70.7,-15.2C-66.4,-31.8,-56.6,-46.7,-43.5,-56.2C-30.4,-65.7,-15.2,-69.8,1.1,-71.1C17.4,-72.4,35.4,-67.6,47.5,-57.9Z" transform="translate(100 100)" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">📚</span> Program Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm relative z-10">
              <div className="bg-gradient-to-br from-arabi-green/5 to-arabi-green/10 p-4 rounded-lg border-l-4 border-arabi-green">
                <h3 className="font-semibold text-arabi-green mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  Tujuan Program
                </h3>
                <p className="text-gray-700 leading-relaxed">Membekali tim ESQ dengan kemampuan komunikasi bahasa Arab bisnis dan pemahaman budaya Arab untuk membangun kemitraan strategis yang berkelanjutan dengan klien dari Saudi Arabia dan negara-negara Timur Tengah</p>
              </div>
              <div className="bg-gradient-to-br from-primehub-blue/5 to-primehub-blue/10 p-4 rounded-lg border-l-4 border-primehub-navy">
                <h3 className="font-semibold text-primehub-navy mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  Learning Outcomes
                </h3>
                <p className="text-gray-700 leading-relaxed">Peserta mampu melakukan small talk, presentasi bisnis, dan negosiasi dasar dalam bahasa Arab dengan sensitivitas budaya tinggi serta kepercayaan diri dalam berkomunikasi dengan mitra Arab</p>
              </div>
            </div>
          </div>

          {/* Trainer & Participants Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Trainer Profile */}
            <div className="bg-white border-2 border-arabi-green/20 rounded-xl p-5 hover:border-arabi-green/40 transition shadow-lg relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-arabi-green/5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-arabi-orange/5 rounded-full"></div>

              <h3 className="text-lg font-semibold text-arabi-green mb-4 flex items-center relative z-10">
                <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
                Profil Trainer
              </h3>
              <div className="flex items-start space-x-4 relative z-10">
                <div className="w-20 h-20 trainer-avatar rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base">Lina Husnul Karimah, S.Pd., M.Pd.</h4>
                  <p className="text-sm text-arabi-green font-semibold mb-3">Arabic Education & Curriculum Development Specialist</p>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    <li className="flex items-start">
                      <span className="text-arabi-green mr-2 font-bold">✓</span>
                      <span>Dosen Pendidikan Bahasa Arab UNU Purwokerto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-arabi-green mr-2 font-bold">✓</span>
                      <span>8+ tahun pengalaman mengajar Bahasa Arab akademik & praktis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-arabi-green mr-2 font-bold">✓</span>
                      <span>Certified TOAFL Trainer & PEKERTI Instructor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-arabi-green mr-2 font-bold">✓</span>
                      <span>Spesialisasi: Desain Pembelajaran, Project-Based Learning, Digital Teaching Tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Participants Profile */}
            <div className="bg-white border-2 border-primehub-blue/20 rounded-xl p-5 hover:border-primehub-blue/40 transition shadow-lg relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primehub-blue/5 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-esq-blue/5 rounded-full"></div>

              <h3 className="text-lg font-semibold text-primehub-navy mb-4 flex items-center relative z-10">
                <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                Profil Peserta
              </h3>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between bg-gradient-to-r from-primehub-blue/10 to-esq-blue/10 p-3 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primehub-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                    Jumlah Peserta
                  </span>
                  <span className="text-xl font-bold text-primehub-navy">7 orang</span>
                </div>
                <div className="text-sm text-gray-600 space-y-2 bg-gray-50 p-3 rounded-lg">
                  <p className="flex items-start">
                    <span className="text-primehub-blue font-bold mr-2">◆</span>
                    <span><strong>Organisasi:</strong> ESQ Leadership Center</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primehub-blue font-bold mr-2">◆</span>
                    <span><strong>Posisi:</strong> Business Development, Partnership, Senior Management</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primehub-blue font-bold mr-2">◆</span>
                    <span><strong>Background:</strong> Tidak ada/minimal pengalaman Bahasa Arab</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primehub-blue font-bold mr-2">◆</span>
                    <span><strong>Kebutuhan:</strong> Komunikasi bisnis untuk kemitraan dengan Arab/Saudi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule & Location */}
          <div className="bg-gradient-to-br from-primehub-navy via-primehub-blue to-arabi-green text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">📅</span> Jadwal & Format Pelatihan
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs mr-2">EDITABLE</span>
                  📆 Jadwal Lengkap
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Format:</strong> 8 sesi online interaktif via Zoom<br/>
                      <span className="text-white/80">(Live session + Pre-work materials)</span>
                    </div>
                  </li>
                  <li>• <strong>Durasi:</strong> 1 jam per sesi (60 menit)</li>
                  <li>• <strong>Hari:</strong> Selasa & Kamis</li>
                  <li>• <strong>Waktu:</strong> 16:00 - 17:00 WIB</li>
                  <li className="mt-3 pt-3 border-t border-white/30">
                    <strong>Periode Pelatihan:</strong><br/>
                    <span className="bg-arabi-orange px-3 py-1 rounded text-sm font-bold inline-block mt-1 shadow-md">
                      Oktober - November 2025
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">🌐 Platform & Akses Zoom</h4>
                <div className="bg-white/10 rounded-lg p-4 space-y-3 text-sm">
                  <div className="flex items-center space-x-2 pb-2 border-b border-white/20">
                    <span className="font-semibold">Platform:</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Zoom Meeting</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-gold-accent">🔗 Join Link:</p>
                    <a href="https://us06web.zoom.us/j/84795669685?pwd=qbBlZNjYtOQrcLUSTrnXzSrnkq8brf.1"
                       className="text-white underline hover:text-gold-accent break-all text-xs bg-white/5 p-2 rounded block">
                      https://us06web.zoom.us/j/84795669685?pwd=qbBlZNjYtOQrcLUSTrnXzSrnkq8brf.1
                    </a>
                  </div>
                  <div className="pt-3 border-t border-white/30 space-y-1">
                    <p><strong>Meeting ID:</strong> <span className="bg-white/20 px-2 py-1 rounded font-mono">847 9566 9685</span></p>
                    <p><strong>Passcode:</strong> <span className="bg-white/20 px-2 py-1 rounded font-mono">750767</span></p>
                  </div>
                  <div className="pt-3 border-t border-white/30 text-xs text-white/70">
                    💡 Link Zoom yang sama digunakan untuk semua 8 sesi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Cards akan dilanjutkan di message berikutnya */}
      <p className="text-center text-gray-600 py-8">Loading feature cards...</p>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm mb-2">Powered by <span className="text-white font-semibold">Akselera Tech</span></p>
          <p className="text-xs text-gray-500">AI-Powered Learning Management System for Corporate Training</p>
        </div>
      </footer>
    </div>
  )
}

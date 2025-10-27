# BizArabic Dashboard - Next.js Application

Dashboard pelatihan BizArabic for ESQ Team yang dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Project Structure

```
dashboard-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles
├── public/
│   └── logos/              # Logo images
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## 🎨 Features

- ✅ Responsive design dengan Tailwind CSS
- ✅ Custom color palette (Arabi Green, PrimeHub Blue, ESQ Blue, Gold Accent)
- ✅ Floating animations & hover effects
- ✅ Arabic font support (Noto Naskh Arabic)
- ✅ SVG icons & illustrations
- ✅ Gradient backgrounds & decorative elements
- ✅ Professional trainer & participant profiles
- ✅ Interactive feature cards
- ✅ Schedule & Zoom integration info

## 🎨 Color Palette

- **Arabi Green**: `#2d5f3f`
- **Arabi Orange**: `#e17834`
- **PrimeHub Navy**: `#003d7a`
- **PrimeHub Blue**: `#00a8e8`
- **ESQ Blue**: `#003087`
- **Gold Accent**: `#d4af37`

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Noto Naskh Arabic (Google Fonts)

## 🔧 Customization

### Update Trainer Info
Edit `app/page.tsx` line ~145

### Update Schedule
Edit `app/page.tsx` line ~220

### Change Colors
Edit `tailwind.config.js` → `theme.extend.colors`

## 📝 Notes

- Logo images harus ada di folder `public/logos/`
- Untuk production, pastikan semua images sudah optimized
- Font Arabic akan auto-load dari Google Fonts

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build Manual
```bash
npm run build
npm start
```

## 📄 License

© 2025 BizArabic for ESQ165 | ESQ Leadership Center

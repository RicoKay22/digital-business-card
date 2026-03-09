# 💳 Rico Kay — Digital Business Card

> A modern, interactive digital business card built with React. Fast, mobile-first, and deployable in seconds.

🔗 **Live Demo:** [rico-card.vercel.app](https://rico-card.vercel.app) *(update after deploy)*

---

## ✨ Features

- 🌗 **5 Theme Switcher** — Cyberpunk (default), Blue, Purple, Green, Light
- 🌀 **Animated Profile Ring** — rotating gradient glow with pulse effect
- 🟢 **Status Indicator** — "Available for Work" badge
- 🎉 **Easter Egg** — click profile photo 5x for confetti explosion
- 📊 **Skills Radar Chart** — interactive chart with hover tooltips (Recharts)
- 🗂️ **Project Cards** — modal popups with GitHub + Live links
- 📱 **Floating Action Buttons** — Call, WhatsApp, Email (fixed bottom)
- 📋 **Copy Buttons** — one-click copy for email & phone
- 💾 **Save Contact** — downloads a `.vcf` file for contacts
- 🔗 **Share Card** — native share sheet or clipboard fallback
- 📷 **QR Code Flip Card** — animated flip with QR code for card URL
- 👋 **Visitor Guestbook** — drop your name, stored in localStorage
- 📈 **Scroll Progress Bar** — top-of-page progress indicator
- 🔲 **Animated Tech Grid Background**
- 📚 **Currently Learning** section
- 📱 **Mobile-first design**

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React | UI framework |
| Recharts | Skills radar chart |
| Lucide React | Icons |
| Vite | Build tool |
| Vercel | Deployment |
| Google Fonts | Space Mono + Plus Jakarta Sans |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/RicoKay22/rico-card.git

# Navigate into the project
cd rico-card

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Customization

All personal data lives in the `CONFIG` object at the top of `src/App.jsx`. You never need to touch the component code — just update your info there.

```js
const CONFIG = {
  name: "Your Name",
  nick: "Your Nickname",
  title: "Your Title",
  email: "your@email.com",
  // ... etc
};
```

---

## 📦 Deployment

This project is deployed on **Vercel**.

```bash
# Build for production
npm run build
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📁 Project Structure

```
rico-card/
├── src/
│   ├── App.jsx        # Main card component (all-in-one)
│   ├── main.jsx       # React entry point
│   └── index.css      # Global styles
├── public/
├── index.html
└── package.json
```

---

## 👤 Author

**Olayinka Olumide (Rico Kay)**
- GitHub: [@RicoKay22](https://github.com/RicoKay22)
- LinkedIn: [olumideolayinka](https://www.linkedin.com/in/olumideolayinka)
- Twitter/X: [@Rico_Kay0](https://x.com/Rico_Kay0)

---

## 📄 License

MIT — feel free to fork and build your own version!

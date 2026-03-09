# 💳 Rico Kay — Digital Business Card

> Ditch the paper. This is a fully interactive digital business card built with React, featuring animated themes, a skills radar chart, live project showcase, QR code sharing, Supabase-powered visitor tracking, and one-tap contact saving. Mobile-first, production-ready, and built to impress.

🔗 **Live Demo:** [digital-business-card-beta-opal.vercel.app](https://digital-business-card-beta-opal.vercel.app)

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
- 📷 **QR Code Flip Card** — animated flip with Copy Link + WhatsApp share buttons
- 👋 **Visitor Guestbook** — drop your name, saved to Supabase database in real time
- 📡 **Supabase Backend** — every visitor name tracked with timestamp, visible in your dashboard
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
| Supabase | Visitor tracking database |
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

## 🗄️ Supabase Setup (Visitor Tracking)

This project uses [Supabase](https://supabase.com) to track visitors in real time.

1. Create a free Supabase project
2. Create a table called `Visitors` with columns:
   - `visited_at` — type: `timestamptz`, default: `now()`
   - `name` — type: `text`
3. Disable Row Level Security on the table
4. Replace the Supabase URL and anon key in `App.jsx`:

```js
const supabase = createClient(
  "https://your-project.supabase.co",
  "your-anon-key"
);
```

Every time someone drops their name in the guestbook, it saves to your Supabase dashboard with a timestamp — so you always know who visited. 👀

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

MIT © 2026 Olayinka Olumide (Rico Kay), feel free to fork and build your own version!

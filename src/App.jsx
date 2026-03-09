import { useState, useEffect, useRef } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import { Github, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Share2, Download, Copy, Check, ExternalLink, X, BookOpen } from "lucide-react";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://ukolxbbccnukwtpmlogw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrb2x4YmJjY251a3d0cG1sb2d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMjc3MjMsImV4cCI6MjA4ODYwMzcyM30.xAuDT6bDRDlGyfsD49xGitVMNLd4T1d4gApO_43XI8I"
);

const PHOTO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIA2YCEAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAUBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAC9KpAABSUAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk08/E9zwYPpT5+V9Wvkj7r5/tTozSwAAAAAAAAAAAAAAAAAAAAAAABCvLxPb8qc1tzoZ3o59JTnOkWWYs9fp+VY+3v4XrPpM6QAAAAAAAAAAAAAAAAAAAAAcB8/jFl0G8aNS9Dk7QztTnnpk5zpDnN8yyF7fV+L7E+nBAAAAAAAAAAAAAAAAAAAAM/G+h85ZL1OXXtTlroMasCiAzNQzKM46DhO2DnbF93v+D60+olQAAAAAAAAAAAAAAAAABjfyjlM+ldbUihKJNQgIozNZMkKQk1DOeg4ztzPT9P4P0T2hAAAAAAAAAAAAAAAAByPL8+l335dzoAQqCgk1CAk1DmuRLFES2C40Xg1g+11+X9RkAAAAAAAAAAAAAAAB8z6fwzGs1rt24902gSwAtlAIozNQxneTMsIQtzVoTnz6c16/Z+P9dnQAAAAAAAAAAAAAAAJ8L7PxVWaXp6OfZACiKCkiiKJnUXOOmDEsJKJRalOfPryTf2/hfYOwQAAAAAAAAAAAAAADj8j7vzF8epo9W5oS4KxDprgPReOzcUijM1DOeg4ztg5LkBaVMce/Av2fk/aKEAAAAAAAAAAAAAAAcew+F6+fvWZ6c05ze1889MPPPTg5ami2DTIrI0zkcbgkolDW+XQvm9flN/Z+Z9NKAAAAAAAAAAAAAAAAcjz8+vgX6O55zGeI65zodeOD23waPXOHqMyAQZ3Dnnpo4vTTyu+DldDp5fZD1ejGkoAAAAAAAAAAAAAAAHyvq/JOhtevk6cjm1CT2eUzh6Dhr08TO9U9HDpkznryNenPhN5kNRzNLg7dvL2PT083oL38/pSgAAAAAAAAAAAAAAAnz/AKHgNXh6F5qJz7czLIWDbWh15bOWc7OO3E9Xm9HIu8U8+9Q7ea0zuU9Hfz+g33ztIAAAAAAAAAAAAAAACeH3+M8/fj2Vm1EpYohSXVTm6YXWNQ4cu3M3lRLDLQ5twlo6e7xe46BAAAAAAAAAAAAAAAAHm9OTwmV3eejeudNsU3cQ3MRLZtZNQ48+3M59OejU1khABZ1L7vn/AETQQAAAAAAAAAAAAAAABYOXi9viM3Jd65bOmufQoSAt54PROcW8mC42JaJGDd5DrMaOv0vJ60ssAAAAAAAAAAAAAAAAFlM+L3eY8YVrOi9Oezog58PT5zi70Scy8qN75aOmsUmdZJQus9z29BAAAAAAAAAAAAAAAAAFgce3M+cFWU1vGzVySxFiQZ1DnKBVEGdRIUe7x/TNrEAAAAAAAAAAAAAAAAAAZ0PlzWFoLrEOt49DbMNsUNZMY3khCoUBROv0vN6kSwAAAAAAAAAAAAAAAAAAc+nmPBrvxWWCy05uw4vTo8t68zMsJNDKYOjFN6x0FnpPZqVEsAAAAAAAAAAAAAAAAAAAHzvo/POKxVlNawN9OFPXjl0FxRxvAkCVTWoNfT4+hALAAAAAAAAAAAAAAAAAAAAnz/d4TGd5WWCgk1kt55OrjDec0tgus7L7fJ9UBAAAAAAAAAAAAAAAAAAAAAOPk78CTRec3zLeY6Ml1MC5ozNQlkN3Gk9P0vH6wEAAAAAAAAAAAAAAAAAAAHkPVz8WxKIFmdw4cvTwMEW3FOjkOmci2Uu8dE+l3x0ASAAAAAAAAAAAAAAAEKzDc55OmcU1873+A67BLFgEozjpk8/P0cznOmFyolUpR159E+vry+g0hAAAAAAAAAAAABCs4OmcCzMNSCyDVxTXk9eTix0VLCASiZ1DOOmTnz7YXnOkMqALvNT0Lg9Xo+dpPovJ6DYAAAACKogAAkNZxDUkLM8zpnFKVZVFRJrFN3NXhrpyS51FyAQSwzLDMsXMsJKSKVVT0TUJVLZTt28lT2vN3NAASwFACZLmQsQsxg3i6I3giVaUmpURBBbvls3x6DkzszNQksIuSSwznWSSxUpC1Z0x1TZSAus6CkmpDv28ez1TGyywAqDMQZzCZ3g1JC6xtd43hIVaVJRZLCLCWDbOhx78wxsmdDE3kxnUMzQxOuDJslQnqyKUijOoN3NLLAlNb5E9d8vU6pQDnyaCwmaXlNZS9OXRemdQxqaQUhkrNLKJNRc2w1eekce9PPrfNa56MzWRubMcu3IkdDHfWRZolACTeRrGzWdQx05dDILYO/TzdU6pThUEsMlWce/Iz059E6glBGBmUtlFUAFMNQoKguNDlnmXprjDrcaNznS2wqaAQClMW5XpFOPTnslmgVC5PTrzeg4oNQMkNZpePTOk6WUGFnNC6mi6mkloiiVCRS51lVVIYOF9VXx592DyPbTyO/mOllNBClllRc1dY3DO8U56YN6zS1RjWS9uG0XOyWCRC6zted1DZzS8WVbnUm1RQAAZsFBjWTVlHLtwO1FY0QsOfm9PmXrZTQSpVgFlTRVzNQzw9HlPTLDdYE3gthL057LnQxLlb05dCxhLxvNbudibVFAAUgJKBFkDXfh3R5vT5Sb4c19zl1S8+mFx5fV5TsU0UlzoSiA3c0TUTPk9fmXvcbNc9Q3z3g0EbxV6AxjeB149BzchrPoG1FEAAAQFnRc57+ZMXPM9F49CuOV1mjG0PRvxU7+X0eY7axs1ZTNlKCTWS7xTaVM8e2V8/p8frMdOXYznWDWsbM2Drc0xxnI79cDGL0NdZoUQAUgEABqC87yLzVY3Tlx9ODn1zg7TOjM0MZ6hrno3rnoqDVzS5ollLrGiA8vfFN756MyUnXl2M46cTtrFPKD08uvEno59i6lQAUgEAFA315aTj5+8OG+ZexSS5MY3Dm3k6a8/c1WjGO0OWrg0g1cjSUlg1c6CUxz7cU3rl0XFgd+PUvm9XkO95bOfLvyPRz3DpvO0WUKEBmwWUBQLjUTOZFNU5a1k1nNJNwk0OWPRg1049DoVJncXi6+Y6M01c0oLrNJrOicO/nLWTpmw6ag6eX1+c5dvN3Ny0laN1UWQ1OejUQFABFtlRLDnz6YXWs0S5Jz3knTnDslGdwxNh14jvMUzw6cydOPUtlLYNXNFlHDvwMdOXQdMdDWN8j0Y0PBtzPXvj2HTO0qczXPGi9JoELZQFgS2UQMZul1z9PiK47BQtOW7zO157EozNZIwNYsM6mDvZS2UoKlL5+/mM9Mdi6x1MZU7JTz+b1+U36vF6jvrhDXIL1xs1vOkgKAQWVQEEzLhevLfIxx9WTl14YPYxsSjOgqBLg5xDUgSw3vj2LZS2C2C+T1eU30x1NZ1glDesbM+T2eY4enzdTvmiabL0zsSxFAQsACwCFmN5N8ekMs6M8+sPP065NufUgJLkZZJLACSwdeWjrrNKg1c0nl78ztvNEsJZSdfP3Lx7YPFbg9rOi6zo3rOklZNsDUgqF1JDTMNScjtM+c9Tn0Lz7RONFtAok1kzjWCQWLEAiwSw7uOzZCoMM6N9OfQuNZGpo8/fy9zrA83L0+U16eHqGrom81Neb0cVu+NM7lMa3THL00459NODtDGqJA6Y3hJmljWDRCyw5ZuSBU1CKJLBLCdeVT0483oCZMdeXQ3vns1AqDyduejvrlsz5PXwOvr8nrNFSZ1CBSkihKJRQREWxAVN8+nMBbKOdmTfNggAEogVBJKM530OPT0+M6c98V1149TesaNWVAOXL0+U7axovLrwOns83c6XGksozNQgKgoUEAgIRW89UxjWS2VSic+sPM68iTQyoiiSiSlk1DNmD1+fGyc+gzvNN75aOuuek1ZoeX2eY59OWjpx1TvuU1ZRZE1rnToxoqCxCoLAZuRJpdaE5gWVaRLAmNxeLeTMUiiTUJNFyuTfH3cjyaEoUBbUaaNbzsvDtyPNbgvfz+pd1UtlFVJNUxdQgFlUVJLkkBvPRbjfNM0FlWggSLFzvOzlw9XE578nc6ywksJz1zX2+TntKlAAJqF6b4VPRvzdDtz6cjlx78i+rz+k1QA1c1NMl1BAFlBCZuQtNVSY1hSVFlKRRCgzqaM8+uDw7cz6Xi7eQ7ejw+w387pktlFFBAKFFTGekPZz3zMZ1k335djSiSgEpVBBQCRCQLqaLYM5uVWVGoXWbCFFDOs6RjeF8vD0+dd9OfQ461lCiBQAQChQQD1cwxgPR0DYEEUFAChUEmQBdaEuQxBVCgBFADOgYF5eUXXQScw0BAAAoAAAP/EAAL/2gAMAwEAAgADAAAAIUBnOtPvvvvvvvvvvvvvvvPvvvvvvvvvvvnHLnvvvvvvvvvvvvvvvvvvvvvvvvvvvvvnvkvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvrjjvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvus5cLEzHPvvvvvvvvvvvvvvvvvvvvvvuqyu2Y2oSmtvvvvvvvvvvvvvvvvvvvvvu/rU+8zx38wtlvvvvvvvvvvvvvvvvvvvvuNyx586oA298v8A/wC+++++++++++++++++1/OyS2Ky2nH3vH+++++++++++++++++++376iCC0ujnSHj+u/wDvvvvvvvvvvvvvvvlzuytvqiIsgQ57k9h/vvvvvvvvvvvvvvvkss7whn++0kj24is9vvvvvvvvvvvvvvvvuv8ANCo65rr7LevYN/b7777777777777777s6O5IqJKobpOMO/d/77777777777777776qIH+ct77bLNePtd/wC+++++++++++++++TuCBH7jz62eXT/AJ4qvvvvvvvvvvvvvvvvo+itu11ghhk487/1Mvvvvvvvvvvvvvvvvr8m2gjg1ikzz6991vPvvvvvvvvvvvvvvvr/AIob4bPr6usO8OeZz7777777777777776zGtpKmOvIZqdc+9db7777777777777776i+uq5aYroMu+ccp777777777777777776y6L/K/rwdtr5PuDT7777777777777777774ZO/wC2vFzTi2vzU++++++++++++++++++6KvTnWqn7nDL+IU+++++++++++++++++++jv7C+Wjr/rf9+c+++++++++++++++++++zfvsDjPrn/ACvPvvvvvvvvvvvvvvvvvvvvr6z59uukrm5vPvvvvvo/vvvvvvvvvvvt7ezlx8mikom8gPPvvvrg/vvvvvvvvsMeneQvOpn1stgqyDPvvvvvg/vvvvvssOUc788jvsks1knnoxr/AL7776owP77hiWV8izse7Nr4cH+KLvb+LJ5NL777oOLzEVO9zqOsoo7LY6WtcZ9Iuo6Lee15bwwEl1/79RvLaK7IYpq5s9cPsdo64YJZd/jw+Gbs76tu89MbY9vKoauPuuKAaIpC6LxNoWfpbuEN/sfN/vtN/soy/wC26/8A/wBJTboOPJ1/M7eurL4uNOf9qM/7IrI4vKM44Ya7h59fM3IYdqK+MMN9deffZuvqqs5qtIKpaBZ/dsKY9Yr+MMsP8AAcdIdYDJIopIbd6bJbOaJqa7raMM9t/wCX7f8Arcghqgllloq+rgpoqBqikrox2ey/5xykql5/uxrlqmouvghlsiPgvtow2eUxFK+2vju74qpijBuqklu+s6oq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";

const CONFIG = {
  name: "Olayinka Olumide",
  nick: "Rico Kay",
  title: "Frontend Developer",
  tagline: "Building modern web experiences & exploring AI-powered tools.",
  bio: "I\'m Olumide aka Rico, a frontend developer passionate about building clean, responsive, and user-focused web applications. I enjoy turning ideas into functional digital products and continuously improving my skills as I work toward becoming a full-stack engineer.",
  status: "available",
  email: "olumideolayinka13@gmail.com",
  phone: "+2348083545793",
  whatsapp: "2348083545793",
  location: "Lagos, Nigeria",
  github: "https://github.com/RicoKay22",
  linkedin: "https://www.linkedin.com/in/olumideolayinka",
  twitter: "https://x.com/Rico_Kay0",
  facebook: "https://www.facebook.com/share/1CPxFd3XiB/",
  learning: ["React (Advanced)", "Node.js", "Full-Stack Development"],
  skills: [
    { name: "HTML/CSS", level: 85, years: 2, projects: 5 },
    { name: "JavaScript", level: 80, years: 2, projects: 5 },
    { name: "React", level: 45, years: 0.5, projects: 1 },
    { name: "UI Design", level: 70, years: 2, projects: 4 },
    { name: "Git/GitHub", level: 75, years: 1, projects: 5 },
    { name: "API Integ.", level: 65, years: 1, projects: 2 },
  ],
  projects: [
    { id: 1, title: "RicoAI Chatbot", desc: "ChatGPT-style AI chatbot powered by real LLM models via OpenRouter API. Built for Web3Bridge Frontend JS Advanced Cohort XIV.", github: "https://github.com/RicoKay22/ai-chatbot", live: "https://ai-chatbot-two-psi-58.vercel.app/", tags: ["JavaScript", "AI", "OpenRouter"], color: "#00ffcc" },
    { id: 2, title: "Rico Movie Vault", desc: "Production-ready movie library showcasing advanced JS OOP, smart caching, and scalable architecture.", github: "https://github.com/RicoKay22/rico-movies-library", live: "https://rico-movies-library.vercel.app/", tags: ["JavaScript", "OOP", "API"], color: "#ff6b6b" },
    { id: 3, title: "Travel Visa App", desc: "Multi-step visa form with passport-themed UI, animated stamps, drag and drop upload, and downloadable PDF approval certificate.", github: "https://github.com/RicoKay22/travel-visa-application", live: "https://travel-visa-application.vercel.app/", tags: ["HTML/CSS", "JavaScript"], color: "#ffd93d" },
  ],
  vcf: "BEGIN:VCARD\nVERSION:3.0\nFN:Olayinka Olumide\nNICKNAME:Rico Kay\nTITLE:Frontend Developer\nEMAIL:olumideolayinka13@gmail.com\nTEL;TYPE=CELL:+2348083545793\nURL:https://github.com/RicoKay22\nADR:;;Lagos;;Nigeria\nEND:VCARD",
  liveUrl: "https://digital-business-card-beta-opal.vercel.app/",
};

const THEMES = {
  cyberpunk: { name: "Cyberpunk", p: "#00ffcc", s: "#ff00aa", bg: "#07070f", card: "#0d0d1a", border: "#1a1a35", text: "#e0ffff", muted: "#4a6680", glow: "0 0 25px #00ffcc55" },
  blue:      { name: "Blue",      p: "#4facfe", s: "#00f2fe", bg: "#060c14", card: "#0c1824", border: "#0e2040", text: "#e0f4ff", muted: "#4a6888", glow: "0 0 25px #4facfe55" },
  purple:    { name: "Purple",    p: "#c084fc", s: "#f472b6", bg: "#08060e", card: "#100818", border: "#1e0e35", text: "#f0e8ff", muted: "#7855a0", glow: "0 0 25px #c084fc55" },
  green:     { name: "Green",     p: "#4ade80", s: "#22d3ee", bg: "#060e08", card: "#0a1a0c", border: "#0e2e14", text: "#e8ffe8", muted: "#406050", glow: "0 0 25px #4ade8055" },
  light:     { name: "Light",     p: "#4f46e5", s: "#7c3aed", bg: "#f0f2ff", card: "#ffffff", border: "#dde3ff", text: "#1a1240", muted: "#6b7280", glow: "0 4px 20px #4f46e533" },
};

const STATIC_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
  *{ box-sizing:border-box;margin:0;padding:0; }
  body{ margin:0; }
  @keyframes gridMove { 0%{background-position:0 0} 100%{background-position:40px 40px} }
  @keyframes spin { to{transform:rotate(360deg)} }
  @keyframes pulse { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:.3;transform:scale(1.1)} }
  @keyframes fall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
  @keyframes slideUp { from{transform:translateY(25px);opacity:0} to{transform:translateY(0);opacity:1} }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
  .grid-bg { position:fixed;inset:0;z-index:0;pointer-events:none;
    background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);
    background-size:40px 40px; animation:gridMove 20s linear infinite; }
  .ring-spin { position:absolute;inset:-4px;border-radius:50%;
    background:conic-gradient(var(--rp),var(--rs),var(--rp)); animation:spin 3s linear infinite; }
  .ring-pulse { position:absolute;inset:-12px;border-radius:50%;
    background:radial-gradient(circle,var(--rpulse) 0%,transparent 65%); animation:pulse 2.2s ease-in-out infinite; }
  .status-dot { animation:blink 2s ease-in-out infinite;display:inline-block;width:8px;height:8px;border-radius:50%; }
  .confetti-p { position:fixed;top:-12px;z-index:9999;pointer-events:none;animation:fall 3.5s ease-in forwards; }
  .card-content { animation:slideUp .7s ease forwards; }
  .flip-wrap { perspective:1000px; }
  .flip-inner { transition:transform .65s ease;transform-style:preserve-3d;position:relative;width:100%;padding-top:65%; }
  .flip-inner.flipped { transform:rotateY(180deg); }
  .flip-front,.flip-back { backface-visibility:hidden;-webkit-backface-visibility:hidden;position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:14px; }
  .flip-back { transform:rotateY(180deg); }
  ::-webkit-scrollbar { width:3px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:var(--rp);border-radius:2px; }
`;

export default function RicoCard() {
  const [theme, setTheme] = useState("cyberpunk");
  const [greeting, setGreeting] = useState("Good morning");
  const [copied, setCopied] = useState(null);
  const [modal, setModal] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const [visitorInput, setVisitorInput] = useState("");
  const [visitors, setVisitors] = useState([]);
  const [progress, setProgress] = useState(0);
  const [qrFlipped, setQrFlipped] = useState(false);
  const [tooltip, setTooltip] = useState(null);
  const [hov, setHov] = useState({});
  const scrollRef = useRef(null);
  const T = THEMES[theme];

  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting("Good morning");
    else if (h < 17) setGreeting("Good afternoon");
    else if (h < 21) setGreeting("Good evening");
    else setGreeting("Good night");
  }, []);

  useEffect(() => {
    try { const v = localStorage.getItem("rico_visitors"); if (v) setVisitors(JSON.parse(v)); } catch {}
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const fn = () => {
      const p = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(isNaN(p) ? 0 : Math.min(p * 100, 100));
    };
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  const copy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(id); setTimeout(() => setCopied(null), 2000); }).catch(() => {});
  };

  const handleProfileClick = () => {
    const n = clicks + 1;
    if (n >= 5) {
      setClicks(0);
      const pieces = Array.from({ length: 60 }, (_, i) => ({
        id: i, x: Math.random() * 100,
        color: ["#00ffcc","#ff00aa","#ffd93d","#4facfe","#4ade80","#f472b6"][i % 6],
        delay: Math.random() * 0.8, size: 6 + Math.random() * 10,
      }));
      setConfetti(pieces);
      setTimeout(() => setConfetti([]), 4000);
    } else { setClicks(n); }
  };

  const saveContact = () => {
    const vcf = CONFIG.vcf.replace(/\\n/g, "\n");
    const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "Rico_Olumide.vcf";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  const shareCard = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Rico Kay — Frontend Developer", text: CONFIG.tagline, url: CONFIG.liveUrl }); return; } catch {}
    }
    copy(CONFIG.liveUrl, "share");
  };

 const addVisitor = async () => {
  if (!visitorInput.trim()) return;
  const name = visitorInput.trim();
  const updated = [name, ...visitors].slice(0, 8);
  setVisitors(updated);
  setVisitorInput("");
  try {
    localStorage.setItem("rico_visitors", JSON.stringify(updated));
    await supabase.from("Visitors").insert({ Name: name });
  } catch {}
};

  const radarData = CONFIG.skills.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));

  const h = (id) => setHov(p => ({ ...p, [id]: true }));
  const hl = (id) => setHov(p => ({ ...p, [id]: false }));

  const rootStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    background: T.bg, color: T.text,
    minHeight: "100vh", height: "100vh",
    overflowY: "auto", overflowX: "hidden",
    position: "relative",
    "--rp": T.p, "--rs": T.s,
    "--grid": T.p + "18",
    "--rpulse": T.p + "44",
  };

  const card = { background: T.card, border: `1px solid ${T.border}`, borderRadius: 16, padding: "20px", marginBottom: 14, position: "relative", zIndex: 1 };
  const sec = { fontFamily: "'Space Mono', monospace", fontSize: "0.66rem", letterSpacing: "3px", textTransform: "uppercase", color: T.p, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 };
  const tag = (c) => ({ padding: "3px 9px", borderRadius: 20, fontSize: "0.68rem", background: (c||T.p) + "22", color: c||T.p, border: `1px solid ${(c||T.p)}44`, fontFamily: "'Space Mono', monospace" });
  const btnP = { background: T.p, color: T.bg, border: "none", padding: "10px 18px", borderRadius: 9, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, cursor: "pointer", fontSize: "0.87rem", display: "flex", alignItems: "center", gap: 6, boxShadow: T.glow };
  const btnO = { background: "transparent", color: T.p, border: `1px solid ${T.p}`, padding: "10px 18px", borderRadius: 9, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, cursor: "pointer", fontSize: "0.87rem", display: "flex", alignItems: "center", gap: 6 };
  const btnG = { background: T.border + "cc", color: T.muted, border: `1px solid ${T.border}`, padding: "7px 10px", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 };
  const socBtn = (id) => ({ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 12, background: hov[id] ? T.p : T.border + "cc", border: `1px solid ${T.border}`, color: hov[id] ? T.bg : T.muted, cursor: "pointer", transition: "all .2s", textDecoration: "none", boxShadow: hov[id] ? T.glow : "none" });
  const floatBtn = { display: "flex", alignItems: "center", gap: 5, padding: "9px 13px", borderRadius: 50, background: T.card, border: `1px solid ${T.border}`, color: T.text, cursor: "pointer", fontSize: "0.78rem", fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(0,0,0,.45)" };
  const inputS = { background: T.bg, border: `1px solid ${T.border}`, color: T.text, padding: "10px 14px", borderRadius: 9, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.87rem", outline: "none", width: "100%" };

  return (
    <>
      <style>{STATIC_CSS}</style>
      {confetti.map(p => <div key={p.id} className="confetti-p" style={{ left:`${p.x}%`, width:p.size, height:p.size, background:p.color, borderRadius: p.id%3===0?"50%":"3px", animationDelay:`${p.delay}s` }} />)}

      {modal && (
        <div onClick={()=>setModal(null)} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.88)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(6px)" }}>
          <div onClick={e=>e.stopPropagation()} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:20, padding:24, maxWidth:380, width:"100%", maxHeight:"90vh", overflowY:"auto" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
              <h3 style={{ fontFamily:"'Space Mono',monospace", color:modal.color, fontSize:"0.92rem" }}>{modal.title}</h3>
              <button onClick={()=>setModal(null)} style={{ background:"none",border:"none",color:T.muted,cursor:"pointer" }}><X size={18}/></button>
            </div>
            <div style={{ height:130, background:`linear-gradient(135deg,${modal.color}25,${T.bg})`, borderRadius:10, marginBottom:14, display:"flex", alignItems:"center", justifyContent:"center", border:`1px solid ${modal.color}44` }}>
             <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"2.8rem", color:modal.color, opacity:.7 }}>{"</>"}</span>
            </div>
            <p style={{ fontSize:"0.83rem", color:T.muted, lineHeight:1.65, marginBottom:12 }}>{modal.desc}</p>
            <div style={{ display:"flex", gap:5, flexWrap:"wrap", marginBottom:16 }}>
              {modal.tags.map(t => <span key={t} style={tag(modal.color)}>{t}</span>)}
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <a href={modal.github} target="_blank" rel="noreferrer" style={{ ...btnO, flex:1, justifyContent:"center", textDecoration:"none" }}><Github size={14}/> GitHub</a>
              <a href={modal.live} target="_blank" rel="noreferrer" style={{ ...btnP, flex:1, justifyContent:"center", textDecoration:"none" }}><ExternalLink size={14}/> Live</a>
            </div>
          </div>
       </div> 
      )}

      <div ref={scrollRef} style={rootStyle}>
        <div className="grid-bg"/>
        <div style={{ position:"fixed",top:0,left:0,height:3,background:`linear-gradient(90deg,${T.p},${T.s})`,zIndex:1000,width:`${progress}%`,transition:"width .1s" }}/>

        <div style={{ maxWidth:480,margin:"0 auto",padding:"20px 15px 110px",width:"100%",position:"relative",zIndex:1 }} className="card-content">

          {/* Theme Switcher */}
          <div style={{ display:"flex",justifyContent:"flex-end",gap:8,marginBottom:18 }}>
            {Object.entries(THEMES).map(([k,v]) => (
              <div key={k} onClick={()=>setTheme(k)} title={v.name}
                style={{ width:26,height:26,borderRadius:"50%",background:v.p,cursor:"pointer",border:theme===k?`3px solid ${T.text}`:"2px solid transparent",transition:"all .2s",transform:theme===k?"scale(1.2)":"scale(1)" }}
              />
            ))}
          </div>

          {/* HEADER */}
          <div style={{ ...card, textAlign:"center" }}>
            <p style={{ fontFamily:"'Space Mono',monospace",fontSize:"0.73rem",color:T.muted,marginBottom:18,letterSpacing:1 }}>{greeting} 👋</p>

            {/* Profile Ring */}
            <div onClick={handleProfileClick} style={{ width:124,height:124,position:"relative",margin:"0 auto 16px",cursor:"pointer" }}>
              <div className="ring-pulse"/>
              <div className="ring-spin"/>
              <div style={{ position:"relative",zIndex:1,width:124,height:124,borderRadius:"50%",overflow:"hidden",border:`3px solid ${T.bg}` }}>
                <img src={PHOTO} alt="Rico Kay" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
              </div>
            </div>

            {/* Status */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8 }}>
              <span className="status-dot" style={{ background:"#4ade80" }}/>
              <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",color:T.muted }}>Available for work</span>
            </div>

            <h1 style={{ fontFamily:"'Space Mono',monospace",fontSize:"1.5rem",fontWeight:700,color:T.text,textShadow:`0 0 22px ${T.p}66`,marginBottom:3 }}>{CONFIG.name}</h1>
            <p style={{ fontSize:"0.78rem",color:T.muted,fontFamily:"'Space Mono',monospace",marginBottom:2 }}>aka</p>
            <p style={{ fontSize:"1rem",color:T.p,fontWeight:700,marginBottom:6 }}>{CONFIG.nick}</p>
            <p style={{ fontSize:"0.88rem",color:T.p,fontWeight:600,marginBottom:10 }}>{CONFIG.title}</p>
            <p style={{ fontSize:"0.81rem",color:T.muted,lineHeight:1.7,maxWidth:300,margin:"0 auto 18px" }}>{CONFIG.tagline}</p>

            <div style={{ display:"flex",justifyContent:"center",gap:10 }}>
              {[["github",CONFIG.github,<Github size={17}/>],["linkedin",CONFIG.linkedin,<Linkedin size={17}/>],["twitter",CONFIG.twitter,<Twitter size={17}/>],["facebook",CONFIG.facebook,<Facebook size={17}/>]].map(([id,url,icon])=>(
                <a key={id} href={url} target="_blank" rel="noreferrer" style={socBtn(id)} onMouseEnter={()=>h(id)} onMouseLeave={()=>hl(id)}>{icon}</a>
              ))}
            </div>
            {clicks>0&&clicks<5&&<p style={{marginTop:10,fontSize:"0.68rem",color:T.muted,fontFamily:"'Space Mono',monospace"}}>🤫 {5-clicks} more clicks...</p>}
          </div>

          {/* ABOUT */}
          <div style={card}>
            <div style={sec}><span>About</span><div style={{flex:1,height:1,background:T.border}}/></div>
            <p style={{fontSize:"0.84rem",color:T.muted,lineHeight:1.7,marginBottom:14}}>{CONFIG.bio}</p>
            <div style={{display:"flex",alignItems:"center",gap:8,color:T.p,fontSize:"0.84rem"}}><MapPin size={14}/><span>{CONFIG.location}</span></div>
          </div>

          {/* CURRENTLY LEARNING */}
          <div style={card}>
            <div style={sec}><BookOpen size={12}/><span>Currently Learning</span><div style={{flex:1,height:1,background:T.border}}/></div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {CONFIG.learning.map((item,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:T.bg,border:`1px solid ${T.border}`,borderRadius:10}}>
                  <span style={{color:T.p,fontSize:"0.95rem"}}>→</span>
                  <span style={{fontSize:"0.85rem"}}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div style={card}>
            <div style={sec}><span>Skills</span><div style={{flex:1,height:1,background:T.border}}/></div>
            <div style={{height:210,marginBottom:18}}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{top:8,right:20,bottom:8,left:20}}>
                  <PolarGrid stroke={T.border}/>
                  <PolarAngleAxis dataKey="subject" tick={{fill:T.muted,fontSize:9,fontFamily:"'Space Mono',monospace"}}/>
                  <Radar name="Skills" dataKey="A" stroke={T.p} fill={T.p} fillOpacity={0.2} strokeWidth={2}/>
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {CONFIG.skills.map(skill=>(
                <div key={skill.name} style={{position:"relative"}} onMouseEnter={()=>setTooltip(skill.name)} onMouseLeave={()=>setTooltip(null)} onTouchStart={()=>setTooltip(tooltip===skill.name?null:skill.name)}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                    <span style={{fontSize:"0.8rem",fontFamily:"'Space Mono',monospace"}}>{skill.name}</span>
                    <span style={{fontSize:"0.73rem",color:T.p,fontFamily:"'Space Mono',monospace"}}>{skill.level}%</span>
                  </div>
                  <div style={{height:4,background:T.border,borderRadius:2,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${skill.level}%`,background:`linear-gradient(90deg,${T.p},${T.s})`,borderRadius:2}}/>
                  </div>
                  {tooltip===skill.name&&(
                    <div style={{position:"absolute",bottom:"calc(100% + 28px)",left:"50%",transform:"translateX(-50%)",background:T.card,border:`1px solid ${T.p}`,borderRadius:9,padding:"8px 13px",zIndex:100,whiteSpace:"nowrap",boxShadow:T.glow}}>
                      <div style={{color:T.p,fontWeight:700,fontSize:"0.75rem",fontFamily:"'Space Mono',monospace",marginBottom:2}}>{skill.name}</div>
                      <div style={{color:T.muted,fontSize:"0.73rem"}}>{skill.years}yr exp · {skill.projects} project{skill.projects!==1?"s":""}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div style={card}>
            <div style={sec}><span>Projects</span><div style={{flex:1,height:1,background:T.border}}/></div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {CONFIG.projects.map(proj=>(
                <div key={proj.id} onClick={()=>setModal(proj)} onMouseEnter={()=>h(`p${proj.id}`)} onMouseLeave={()=>hl(`p${proj.id}`)}
                  style={{background:T.bg,border:`1px solid ${hov[`p${proj.id}`]?proj.color:T.border}`,borderRadius:12,padding:14,cursor:"pointer",transition:"all .2s",boxShadow:hov[`p${proj.id}`]?`0 0 18px ${proj.color}33`:"none"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                    <h4 style={{fontFamily:"'Space Mono',monospace",fontSize:"0.86rem",color:proj.color}}>{proj.title}</h4>
                    <ExternalLink size={12} color={T.muted}/>
                  </div>
                  <p style={{fontSize:"0.77rem",color:T.muted,lineHeight:1.55,marginBottom:8}}>{proj.desc.slice(0,90)}...</p>
                  <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                    {proj.tags.map(t=><span key={t} style={tag(proj.color)}>{t}</span>)}
                  </div>
                </div>
              ))}
              <a href={CONFIG.github} target="_blank" rel="noreferrer" style={{textAlign:"center",fontSize:"0.77rem",color:T.p,textDecoration:"none",padding:8,fontFamily:"'Space Mono',monospace"}}>View more on GitHub →</a>
            </div>
          </div>

          {/* CONTACT */}
          <div style={card}>
            <div style={sec}><span>Contact</span><div style={{flex:1,height:1,background:T.border}}/></div>
            {[["email",CONFIG.email,`mailto:${CONFIG.email}`,"email",<Mail size={12}/>],["+234 phone",CONFIG.phone,`tel:${CONFIG.phone}`,"phone",<Phone size={12}/>]].map(([label,val,href,id,Icon])=>(
              <div key={id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 14px",background:T.bg,border:`1px solid ${T.border}`,borderRadius:10,gap:8,marginBottom:8}}>
                <div style={{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0}}>
                  {id==="email"?<Mail size={13} color={T.p}/>:<Phone size={13} color={T.p}/>}
                  <span style={{fontSize:"0.77rem",color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{val}</span>
                </div>
                <div style={{display:"flex",gap:5,flexShrink:0}}>
                  <a href={href} style={{...btnG,textDecoration:"none"}}>{Icon}</a>
                  <button style={btnG} onClick={()=>copy(val,id)}>{copied===id?<Check size={12} color="#4ade80"/>:<Copy size={12}/>}</button>
                </div>
              </div>
            ))}
            <div style={{display:"flex",gap:8,marginTop:8}}>
              <button style={{...btnP,flex:1,justifyContent:"center"}} onClick={saveContact}><Download size={14}/> Save Contact</button>
              <button style={{...btnO,flex:1,justifyContent:"center"}} onClick={shareCard}><Share2 size={14}/> Share Card</button>
            </div>
            {copied==="share"&&<p style={{textAlign:"center",fontSize:"0.72rem",color:T.p,marginTop:8,fontFamily:"'Space Mono',monospace"}}>✓ Link copied to clipboard!</p>}
          </div>

          {/* QR CODE */}
          <div style={card}>
            <div style={sec}><span>Scan Card</span><div style={{flex:1,height:1,background:T.border}}/></div>
            <div className="flip-wrap">
              <div className={`flip-inner ${qrFlipped?"flipped":""}`}>
                <div className="flip-front" style={{background:T.bg,border:`1px solid ${T.border}`}}>
                  <p style={{fontFamily:"'Space Mono',monospace",color:T.muted,fontSize:"0.76rem",marginBottom:14,textAlign:"center",lineHeight:1.6}}>Share this card<br/>via QR code</p>
                  <button style={btnP} onClick={()=>setQrFlipped(true)}>📱 Show QR Code</button>
                </div>
                <div className="flip-back" style={{background:T.bg,border:`1px solid ${T.border}`}}>
                  <p style={{fontFamily:"'Space Mono',monospace",color:T.p,fontSize:"0.62rem",marginBottom:10,letterSpacing:2}}>SCAN TO VISIT CARD</p>
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(CONFIG.liveUrl)}&margin=8`}
                    alt="QR Code" style={{width:148,height:148,borderRadius:8,border:`2px solid ${T.p}`}}/> 
                  <div style={{display:"flex",gap:8,marginTop:10}}>
                    <button style={{...btnG}} onClick={()=>copy(CONFIG.liveUrl,"qr")}>
                      {copied==="qr"?<Check size={12} color="#4ade80"/>:<Copy size={12}/>}
                      {copied==="qr"?" Copied!":" Copy Link"}
                    </button>
                    <a href={`https://wa.me/?text=${encodeURIComponent("Check out my digital card: "+CONFIG.liveUrl)}`} target="_blank" rel="noreferrer" style={{...btnG,textDecoration:"none",color:T.muted}}>💬 WhatsApp</a>
                  </div>
                  <button style={{...btnG,marginTop:8}} onClick={()=>setQrFlipped(false)}>↩ Flip back</button>
                </div>
              </div>
            </div>
          </div>

          {/* VISITORS */}
          <div style={card}>
            <div style={sec}><span>Visitors</span><div style={{flex:1,height:1,background:T.border}}/></div>
            <p style={{fontSize:"0.81rem",color:T.muted,marginBottom:12}}>👋 Drop your name — let Rico know you visited!</p>
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <input style={inputS} placeholder="Your name..." value={visitorInput} onChange={e=>setVisitorInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addVisitor()}/>
              <button style={{...btnP,whiteSpace:"nowrap"}} onClick={addVisitor}>Say Hi 👋</button>
            </div>
            {visitors.length>0&&(
              <div>
                <p style={{fontSize:"0.65rem",color:T.muted,marginBottom:8,fontFamily:"'Space Mono',monospace",letterSpacing:2}}>RECENT VISITORS</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {visitors.map((v,i)=><span key={i} style={{padding:"4px 12px",background:T.p+"22",border:`1px solid ${T.p}44`,borderRadius:20,fontSize:"0.79rem",color:T.p}}>{v}</span>)}
                </div>
              </div>
            )}
          </div>

          <p style={{textAlign:"center",fontSize:"0.67rem",color:T.muted,fontFamily:"'Space Mono',monospace",padding:"0 0 8px"}}>Built with ❤️ by Rico Kay · {new Date().getFullYear()}</p>
        </div>

        {/* FLOATING BUTTONS */}
        <div style={{position:"fixed",bottom:18,left:0,right:0,display:"flex",justifyContent:"center",gap:8,zIndex:50,padding:"0 12px"}}>
          <a href={`tel:${CONFIG.phone}`} style={floatBtn}><Phone size={13}/> Call</a>
          <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noreferrer" style={{...floatBtn,color:"#4ade80"}}>💬 WhatsApp</a>
          <a href={`mailto:${CONFIG.email}`} style={floatBtn}><Mail size={13}/> Email</a>
        </div>
      </div>
    </>
  );
}

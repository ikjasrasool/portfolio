import { useState, useEffect, useRef } from "react";

// ─── GOOGLE FONTS ─────────────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:ital,wght@0,200;0,400;0,600;1,300&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    emoji: "🎓", planetColor: "#e74c3c", glowColor: "rgba(231,76,60,0.5)",
    name: "Placematics", tagline: "Placement Management System",
    desc: "Built placement management system with role-based authentication and automated recruiter-student matching. Designed RESTful API architecture and MySQL schema reducing coordinator workload by 60%.",
    tags: ["Spring Boot", "MySQL", "Thymeleaf", "REST API"], date: "May 2024",
    github: "https://github.com/ikjasrasool/Placematics", live: null, stat: "60% workload reduction",
  },
  {
    emoji: "🚌", planetColor: "#e67e22", glowColor: "rgba(230,126,34,0.5)",
    name: "Saravana Bhavan Express", tagline: "Food Pre-Ordering Platform",
    desc: "Full-stack food pre-ordering platform reducing customer wait time by 75% with RESTful APIs. Built dual dashboard (User & Admin) with real-time order tracking, Razorpay payment integration, and analytics.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"], date: "Jan 2025",
    github: "https://github.com/ikjasrasool/hotel", live: "https://hotel-1-f248.onrender.com", stat: "75% wait time reduction",
  },
  {
    emoji: "🤟", planetColor: "#8e44ad", glowColor: "rgba(142,68,173,0.5)",
    name: "SignTalk", tagline: "AI Sign Language Translator",
    desc: "Created AI-powered sign language translator achieving 78% accuracy with LSTM+GNN hybrid model. Bidirectional translation with 3D ISL animations supporting 150+ vocabulary signs.",
    tags: ["Flutter", "FastAPI", "MediaPipe", "LSTM"], date: "Nov 2024",
    github: "https://github.com/ikjasrasool/SignTalk", live: null, stat: "78% accuracy",
  },
  {
    emoji: "📚", planetColor: "#2980b9", glowColor: "rgba(41,128,185,0.5)",
    name: "LibraSync", tagline: "Library Management System",
    desc: "System for managing book borrowing, returns, and extensions with QR code scanning for user authentication. Real-time book availability tracking with automated due date reminders.",
    tags: ["React", "Firebase", "QR Code", "Tailwind CSS"], date: "2024",
    github: "https://github.com/ikjasrasool/library", live: "https://ikjasrasool.github.io/library/", stat: "QR Auth System",
  },
  {
    emoji: "🚗", planetColor: "#27ae60", glowColor: "rgba(39,174,96,0.5)",
    name: "ReSellify", tagline: "Used Vehicle Trading Platform",
    desc: "Platform for buying and selling used vehicles. Features real-time chat for negotiation, ownership verification, and secure transactions with messaging capabilities.",
    tags: ["Flask", "MySQL", "SQLAlchemy", "JavaScript"], date: "2024",
    github: "https://github.com/ikjasrasool/ReSellify", live: null, stat: "Real-time Chat",
  },
  {
    emoji: "🛍️", planetColor: "#f39c12", glowColor: "rgba(243,156,18,0.5)",
    name: "E-Commerce Platform", tagline: "Online Shopping Platform",
    desc: "Online shopping platform with secure transactions, product listings, and order management. Features shopping cart, payment integration, and admin dashboard.",
    tags: ["HTML", "CSS", "JavaScript", "Backend"], date: "2024",
    github: "https://github.com/ikjasrasool/Ecommerce_fullsatck_project", live: null, stat: "Full Stack Store",
  },
  {
    emoji: "🌤️", planetColor: "#00bcd4", glowColor: "rgba(0,188,212,0.5)",
    name: "Weather Forecast App", tagline: "Real-time Weather Application",
    desc: "Weather app providing real-time forecasts, temperature updates, and weather alerts for locations worldwide using live weather APIs with a responsive interface.",
    tags: ["React", "Weather API", "CSS"], date: "2024",
    github: "https://github.com/ikjasrasool/weatherApp", live: "https://ikjasrasool.github.io/weatherApp/", stat: "Live Weather Data",
  },
  {
    emoji: "🏥", planetColor: "#e91e63", glowColor: "rgba(233,30,99,0.5)",
    name: "Hospital Management System", tagline: "Patient & Doctor Records System",
    desc: "System to manage patient records, appointments, and doctor schedules efficiently. Streamlines administrative tasks and automates complex hospital workflows.",
    tags: ["Node.js", "PostgreSQL", "EJS", "Express"], date: "2024",
    github: "https://github.com/ikjasrasool/hospital_Management", live: null, stat: "Workflow Automation",
  },
  {
    emoji: "🧮", planetColor: "#9c27b0", glowColor: "rgba(156,39,176,0.5)",
    name: "Worker Calculator", tagline: "Piece Rate Earnings Calculator",
    desc: "Piece rate earnings calculator for home-based workers. Supports price input in Rupees or Paisa with automatic conversion, instant totals, and data persistence across sessions.",
    tags: ["React", "Vite", "Tailwind CSS", "LocalStorage"], date: "2024",
    github: "https://github.com/ikjasrasool/worker_calculator", live: "https://worker-calculator.vercel.app", stat: "Session Persistence",
  },
];

const SKILLS = [
  { cat: "Languages", color: "#f39c12", items: [{ name: "Java", icon: "☕" }, { name: "Python", icon: "🐍" }, { name: "JavaScript", icon: "📜" }, { name: "C++", icon: "⚙️" }, { name: "C", icon: "🔵" }] },
  { cat: "Frontend", color: "#3498db", items: [{ name: "React.js", icon: "⚛️" }, { name: "HTML5", icon: "📄" }, { name: "CSS3", icon: "🎨" }, { name: "Tailwind", icon: "🌊" }, { name: "Bootstrap", icon: "🅱️" }] },
  { cat: "Backend", color: "#2ecc71", items: [{ name: "Node.js", icon: "🟢" }, { name: "Express.js", icon: "🚂" }, { name: "Spring Boot", icon: "🍃" }, { name: "Flask", icon: "🌶️" }, { name: "FastAPI", icon: "⚡" }] },
  { cat: "Databases", color: "#e74c3c", items: [{ name: "MongoDB", icon: "🍃" }, { name: "MySQL", icon: "🐬" }, { name: "PostgreSQL", icon: "🐘" }, { name: "Firebase", icon: "🔥" }] },
  { cat: "Tools", color: "#9b59b6", items: [{ name: "Git", icon: "🌿" }, { name: "GitHub", icon: "🐙" }, { name: "VS Code", icon: "💻" }, { name: "Postman", icon: "📮" }, { name: "Figma", icon: "🎨" }, { name: "Vercel", icon: "▲" }, { name: "Docker", icon: "🐳" }, { name: "Jira", icon: "🔷" }] },
  { cat: "Core CS", color: "#00bcd4", items: [{ name: "DSA", icon: "📊" }, { name: "OOP", icon: "🎯" }, { name: "DBMS", icon: "🗄️" }, { name: "System Design", icon: "🏗️" }, { name: "REST APIs", icon: "🔌" }, { name: "Problem Solving", icon: "💡" }] },
];

const EXPERIENCE = [
  {
    icon: "🏆", role: "Development Team Lead",
    company: "Hacknovate'24 – Kongu Engineering College", location: "Erode, Tamil Nadu",
    period: "May 2024", type: "Hackathon",
    points: ["Led 3-member team to 1st place among 50+ teams in a 24-hour hackathon.", "Architected role-based authentication and automated matching with Spring Boot & MySQL.", "Conducted code reviews and debugging for a production-ready scalable delivery."],
  },
  {
    icon: "🤖", role: "AI / ML Intern",
    company: "SystimaNX IT Solutions Pvt Ltd", location: "Remote",
    period: "Oct 2024 – Nov 2024", type: "Internship",
    points: ["Developed Python ML classification models with full preprocessing and training pipelines.", "Optimized model evaluation metrics and handled real-world datasets.", "Managed collaborative development workflows using Git and GitHub."],
  },
];

const EDUCATION = [
  { icon: "🎓", degree: "B.E. Computer Science Engineering", school: "Kongu Engineering College, Erode", period: "2022 – 2026", grade: "CGPA: 8.40" },
  { icon: "📘", degree: "Higher Secondary Education (HSC)", school: "Blue Bird Higher Secondary School, Tiruppur", period: "2021 – 2022", grade: "91.5%" },
  { icon: "📗", degree: "Secondary Education (SSLC)", school: "Government Higher Secondary School, Tirunelveli", period: "2019 – 2020", grade: "86.2%" },
];

const ACHIEVEMENTS = [
  { icon: "🥇", title: "1st Place – Hacknovate 2024", desc: "Led 3-person team to victory among 50+ teams with a full placement portal solution." },
  { icon: "🥈", title: "2nd Prize – IDEALOGY 2024", desc: "Developed Smart Glass solution for the visually impaired." },
  { icon: "🥈", title: "2nd Prize – COGNISSANCE 2024", desc: "AR/AI-enabled Smart Glass for real-time object recognition." },
  { icon: "📜", title: "MongoDB Certified Developer", desc: "Associate Certification (C100DEV) – February 2025." },
  { icon: "⭐", title: "2000+ Git Contributions", desc: "Active open-source contributor with consistent daily development practice." },
  { icon: "💡", title: "457+ LeetCode Problems", desc: "Strong DSA and algorithmic problem-solving with consistent practice." },
];

const CONTACT_LINKS = [
  { icon: "📧", label: "Email", value: "ikjasrasool2022@gmail.com", href: "mailto:ikjasrasool2022@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 9361300503", href: "tel:+919361300503" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ikjasrasool", href: "https://linkedin.com/in/ikjasrasool" },
  { icon: "🐙", label: "GitHub", value: "github.com/ikjasrasool", href: "https://github.com/ikjasrasool" },
  { icon: "💡", label: "LeetCode", value: "457 Problems Solved", href: "https://leetcode.com/u/Ikjas_Rasool_22CSR071/" },
  { icon: "🌐", label: "Portfolio", value: "You're looking at it! 🚀", href: "https://github.com/ikjasrasool" },
];

// ─── STARFIELD CANVAS ─────────────────────────────────────────────────────────
function StarfieldCanvas({ scrollYRef }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W, H, raf, frame = 0;
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.7 + 0.2,
      brightness: Math.random(), ts: Math.random() * 0.025 + 0.004,
      to: Math.random() * Math.PI * 2, pf: Math.random() * 0.35 + 0.05,
      color: ["#ffffff","#ffe8c0","#c8e0ff","#ffd0d0","#d0ffd8"][Math.floor(Math.random() * 5)],
    }));
    const nebulas = [
      { cx: 0.15, cy: 0.12, rx: 260, ry: 140, r: 100, g: 50, b: 200, op: 0.12 },
      { cx: 0.78, cy: 0.3, rx: 300, ry: 180, r: 200, g: 50, b: 100, op: 0.09 },
      { cx: 0.5, cy: 0.65, rx: 380, ry: 220, r: 30, g: 100, b: 210, op: 0.09 },
      { cx: 0.85, cy: 0.75, rx: 200, ry: 130, r: 50, g: 190, b: 160, op: 0.07 },
    ];
    const shooters = [];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize(); window.addEventListener("resize", resize);
    function spawnShooter() { shooters.push({ x: Math.random() * W, y: Math.random() * H * 0.5, len: Math.random() * 130 + 80, speed: Math.random() * 9 + 5, angle: Math.PI / 5 + (Math.random() - 0.5) * 0.3, opacity: 1, width: Math.random() * 1.5 + 0.5 }); }
    function draw() {
      const scroll = (scrollYRef.current || 0) * 0.08;
      ctx.fillStyle = "#00000e"; ctx.fillRect(0, 0, W, H);
      const bg = ctx.createRadialGradient(W*0.5, H*0.3, 0, W*0.5, H*0.5, Math.max(W,H));
      bg.addColorStop(0,"rgba(5,2,30,1)"); bg.addColorStop(0.5,"rgba(2,0,15,1)"); bg.addColorStop(1,"rgba(0,0,8,1)");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      nebulas.forEach(n => {
        const nx = n.cx*W, ny = n.cy*H - scroll*0.04;
        const grd = ctx.createRadialGradient(nx,ny,0,nx,ny,Math.max(n.rx,n.ry));
        grd.addColorStop(0,`rgba(${n.r},${n.g},${n.b},${n.op*1.8})`); grd.addColorStop(0.5,`rgba(${n.r},${n.g},${n.b},${n.op*0.8})`); grd.addColorStop(1,`rgba(${n.r},${n.g},${n.b},0)`);
        ctx.save(); ctx.scale(1, n.ry/n.rx); ctx.beginPath(); ctx.arc(nx, ny*(n.rx/n.ry), n.rx, 0, Math.PI*2); ctx.fillStyle=grd; ctx.fill(); ctx.restore();
      });
      stars.forEach(s => {
        const sy = (s.y*H - scroll*s.pf*60 + H*10) % H;
        const tw = Math.max(0.1, 0.4 + 0.6*Math.sin(frame*s.ts+s.to));
        const al = Math.max(0.05, tw*(0.4+s.brightness*0.6));
        const r = Math.max(0.1, s.r*tw);
        ctx.globalAlpha=al; ctx.beginPath(); ctx.arc(s.x*W, sy, r, 0, Math.PI*2); ctx.fillStyle=s.color; ctx.fill();
        if(s.brightness>0.78){ const gr6=Math.max(0.5, s.r*6); const gw=ctx.createRadialGradient(s.x*W,sy,0,s.x*W,sy,gr6); gw.addColorStop(0,`rgba(255,255,255,${al*0.14})`); gw.addColorStop(1,"rgba(255,255,255,0)"); ctx.beginPath(); ctx.arc(s.x*W,sy,gr6,0,Math.PI*2); ctx.fillStyle=gw; ctx.fill(); }
        ctx.globalAlpha=1;
      });
      shooters.forEach((ss, i) => {
        const tx=ss.x+Math.cos(ss.angle)*ss.len, ty=ss.y+Math.sin(ss.angle)*ss.len;
        const gr=ctx.createLinearGradient(ss.x,ss.y,tx,ty); gr.addColorStop(0,"rgba(255,255,255,0)"); gr.addColorStop(0.7,`rgba(200,220,255,${ss.opacity*0.6})`); gr.addColorStop(1,`rgba(255,255,255,${ss.opacity})`);
        ctx.beginPath(); ctx.moveTo(ss.x,ss.y); ctx.lineTo(tx,ty); ctx.strokeStyle=gr; ctx.lineWidth=ss.width; ctx.stroke();
        ss.x+=Math.cos(ss.angle)*ss.speed; ss.y+=Math.sin(ss.angle)*ss.speed; ss.opacity-=0.016;
        if(ss.opacity<=0||ss.x>W+200) shooters.splice(i,1);
      });
      if(frame%90===0) spawnShooter();
      frame++; raf=requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position:"fixed", top:0, left:0, width:"100%", height:"100%", zIndex:0, pointerEvents:"none" }} />;
}

// ─── GLITCH TEXT ──────────────────────────────────────────────────────────────
function GlitchText({ text, style = {} }) {
  const [g, setG] = useState(false);
  useEffect(() => { const id=setInterval(()=>{setG(true);setTimeout(()=>setG(false),280);},4500+Math.random()*2500); return()=>clearInterval(id); },[]);
  return (
    <span style={{ position:"relative", display:"inline-block", ...style }}>
      {text}
      {g && <><span style={{ position:"absolute",left:0,top:0,color:"#ff006e",clipPath:"inset(30% 0 50% 0)",transform:"translateX(-3px)",opacity:0.85 }}>{text}</span><span style={{ position:"absolute",left:0,top:0,color:"#00f5ff",clipPath:"inset(60% 0 10% 0)",transform:"translateX(3px)",opacity:0.85 }}>{text}</span></>}
    </span>
  );
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
function Typewriter({ texts }) {
  const [cur, setCur] = useState(0); const [disp, setDisp] = useState(""); const [del, setDel] = useState(false);
  useEffect(() => {
    const full=texts[cur]; let t;
    if(!del&&disp.length<full.length) t=setTimeout(()=>setDisp(full.slice(0,disp.length+1)),75);
    else if(!del&&disp.length===full.length) t=setTimeout(()=>setDel(true),2200);
    else if(del&&disp.length>0) t=setTimeout(()=>setDisp(disp.slice(0,-1)),38);
    else{ setDel(false); setCur(c=>(c+1)%texts.length); }
    return()=>clearTimeout(t);
  },[disp,del,cur,texts]);
  return <span style={{color:"#7dd3fc"}}>{disp}<span style={{animation:"blink 1s step-end infinite",color:"#a78bfa"}}>|</span></span>;
}

// ─── REVEAL ──────────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);obs.disconnect();}},{threshold:0.1}); if(ref.current)obs.observe(ref.current); return()=>obs.disconnect(); },[]);
  return [ref, v];
}
function Reveal({ children, delay=0 }) {
  const [ref, v] = useReveal();
  return <div ref={ref} style={{ opacity:v?1:0, transform:v?"translateY(0) scale(1)":"translateY(40px) scale(0.97)", transition:`opacity 0.85s ease ${delay}s,transform 0.85s ease ${delay}s` }}>{children}</div>;
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, fontSize:11, letterSpacing:"0.35em", textTransform:"uppercase", color:"#a78bfa", marginBottom:16, fontFamily:"'Orbitron',sans-serif" }}>
      <span style={{ width:40, height:1, background:"linear-gradient(to right,transparent,#a78bfa)", display:"block" }} />
      {children}
      <span style={{ width:40, height:1, background:"linear-gradient(to left,transparent,#a78bfa)", display:"block" }} />
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [navVisible, setNavVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("all");
  const scrollYRef = useRef(0);

  useEffect(() => {
    const h = () => { scrollYRef.current=window.scrollY; setNavVisible(window.scrollY>80); };
    window.addEventListener("scroll",h,{passive:true}); return()=>window.removeEventListener("scroll",h);
  },[]);

  useEffect(() => {
    const ids=["hero","about","skills","projects","experience","achievements","contact"];
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActiveSection(e.target.id);}),{threshold:0.3});
    ids.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el);}); return()=>obs.disconnect();
  },[]);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); setMenuOpen(false); };
  const NAV_ITEMS = ["about","skills","projects","experience","achievements","contact"];
  const techFilters = ["all","React","Spring Boot","Node.js","Python","Flutter"];
  const filteredProjects = projectFilter==="all" ? PROJECTS : PROJECTS.filter(p=>p.tags.some(t=>t.toLowerCase().includes(projectFilter.toLowerCase())));
  const F = { fontFamily:"'Orbitron',sans-serif" };

  return (
    <div style={{ background:"#00000e", color:"#e2e8f0", fontFamily:"'Exo 2',sans-serif", overflowX:"hidden", position:"relative" }}>
      <FontLoader />
      <StarfieldCanvas scrollYRef={scrollYRef} />

      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbit{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
        @keyframes orbitRev{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes scrollBounce{0%,100%{transform:translateX(-50%) translateY(0);opacity:0.4}50%{transform:translateX(-50%) translateY(8px);opacity:0.8}}
        *{box-sizing:border-box;}html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#000010}::-webkit-scrollbar-thumb{background:#4c1d95;border-radius:4px}
        ::selection{background:rgba(167,139,250,0.35)}
        .nb:hover{color:#c4b5fd !important}
        .sc:hover{background:rgba(167,139,250,0.15) !important;border-color:rgba(167,139,250,0.45) !important;transform:translateY(-4px) scale(1.05) !important;color:#e9d5ff !important;}
        .pc:hover{transform:translateY(-10px) !important;box-shadow:0 28px 60px rgba(0,0,0,0.55) !important;}
        .ac:hover{transform:translateY(-6px) !important;border-color:rgba(167,139,250,0.4) !important;}
        .cc:hover{background:rgba(167,139,250,0.1) !important;border-color:rgba(167,139,250,0.5) !important;color:#e9d5ff !important;transform:translateY(-4px) !important;}
        .fb:hover{border-color:rgba(167,139,250,0.5) !important;color:#c4b5fd !important;}
        .ec:hover{border-color:rgba(167,139,250,0.35) !important;transform:translateX(8px) !important;}
        @media(max-width:900px){.deskNav{display:none !important}.hmb{display:flex !important}.heroOrbit{display:none !important}.aboutGrid{grid-template-columns:1fr !important}.statsRow{grid-template-columns:repeat(2,1fr) !important}}
        @media(max-width:600px){.statsRow{grid-template-columns:repeat(2,1fr) !important}.projGrid{grid-template-columns:1fr !important}.achGrid{grid-template-columns:1fr !important}.ctGrid{grid-template-columns:1fr !important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 48px",background:navVisible?"rgba(0,0,14,0.88)":"transparent",backdropFilter:navVisible?"blur(20px)":"none",borderBottom:navVisible?"1px solid rgba(167,139,250,0.12)":"none",transition:"all 0.4s ease" }}>
        <div style={{...F,fontSize:16,fontWeight:700,letterSpacing:"0.1em",cursor:"pointer"}} onClick={()=>scrollTo("hero")}>
          <GlitchText text="IKJAS.DEV" style={{color:"#a78bfa"}} />
        </div>
        <div className="deskNav" style={{display:"flex",gap:28}}>
          {NAV_ITEMS.map(id=>(
            <button key={id} className="nb" onClick={()=>scrollTo(id)} style={{ background:"none",border:"none",outline:"none",cursor:"pointer",...F,fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",fontWeight:400,color:activeSection===id?"#c4b5fd":"rgba(200,200,230,0.45)",borderBottom:activeSection===id?"1px solid #a78bfa":"1px solid transparent",paddingBottom:2,transition:"color 0.2s" }}>{id}</button>
          ))}
        </div>
        <button className="hmb" onClick={()=>setMenuOpen(!menuOpen)} style={{ display:"none",flexDirection:"column",gap:5,background:"none",border:"1px solid rgba(167,139,250,0.3)",padding:"8px 10px",borderRadius:4,cursor:"pointer" }}>
          {[0,1,2].map(i=><span key={i} style={{width:20,height:2,background:"#a78bfa",borderRadius:2,display:"block"}} />)}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen&&(
        <div style={{position:"fixed",top:60,left:0,right:0,zIndex:199,background:"rgba(0,0,14,0.97)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(167,139,250,0.12)",padding:"20px 0"}}>
          {NAV_ITEMS.map(id=>(
            <button key={id} onClick={()=>scrollTo(id)} style={{display:"block",width:"100%",background:"none",border:"none",padding:"14px 48px",textAlign:"left",cursor:"pointer",...F,fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",color:activeSection===id?"#c4b5fd":"rgba(200,210,240,0.5)",borderBottom:"1px solid rgba(167,139,250,0.06)"}}>{id}</button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="hero" style={{position:"relative",zIndex:1,minHeight:"100vh",display:"flex",alignItems:"center",padding:"90px 80px 70px",overflow:"hidden"}}>
        {/* Orbit */}
        <div className="heroOrbit" style={{position:"absolute",right:"7%",top:"50%",transform:"translateY(-50%)",width:400,height:400,pointerEvents:"none"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:85,height:85,borderRadius:"50%",background:"radial-gradient(circle at 35% 35%,#6d28d9,#1e1b4b)",boxShadow:"0 0 45px rgba(109,40,217,0.7),0 0 90px rgba(109,40,217,0.2)",animation:"float 5s ease-in-out infinite"}} />
          <div style={{width:210,height:210,borderRadius:"50%",border:"1px dashed rgba(167,139,250,0.25)",position:"absolute",top:"50%",left:"50%",animation:"orbit 11s linear infinite",transform:"translate(-50%,-50%)"}}>
            <div style={{position:"absolute",top:-5,left:"50%",marginLeft:-5,width:10,height:10,borderRadius:"50%",background:"#7dd3fc",boxShadow:"0 0 14px #7dd3fc"}} />
          </div>
          <div style={{width:310,height:310,borderRadius:"50%",border:"1px dashed rgba(167,139,250,0.15)",position:"absolute",top:"50%",left:"50%",animation:"orbitRev 19s linear infinite",transform:"translate(-50%,-50%)"}}>
            <div style={{position:"absolute",top:-4,left:"50%",marginLeft:-4,width:8,height:8,borderRadius:"50%",background:"#f472b6",boxShadow:"0 0 10px #f472b6"}} />
          </div>
          <div style={{width:395,height:395,borderRadius:"50%",border:"1px dashed rgba(167,139,250,0.07)",position:"absolute",top:"50%",left:"50%",animation:"orbit 30s linear infinite",transform:"translate(-50%,-50%)"}}>
            <div style={{position:"absolute",top:-3,left:"50%",marginLeft:-3,width:6,height:6,borderRadius:"50%",background:"#34d399",boxShadow:"0 0 8px #34d399"}} />
          </div>
        </div>

        <div style={{maxWidth:700,position:"relative"}}>
          <div style={{opacity:0,animation:"fadeUp 0.9s 0.1s forwards",...F,fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",color:"#a78bfa",marginBottom:24}}>✦ Exploring the Universe of Code ✦</div>
          <h1 style={{opacity:0,animation:"fadeUp 0.9s 0.3s forwards",...F,fontSize:"clamp(2.4rem,6vw,5.2rem)",fontWeight:900,lineHeight:1.05,marginBottom:8,color:"#e2e8f0"}}><GlitchText text="IKJAS" /></h1>
          <h1 style={{opacity:0,animation:"fadeUp 0.9s 0.5s forwards, shimmer 4s linear 1.5s infinite",...F,fontSize:"clamp(2.4rem,6vw,5.2rem)",fontWeight:900,lineHeight:1.05,marginBottom:28,background:"linear-gradient(135deg,#a78bfa,#7dd3fc,#f472b6,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% auto"}}>RASOOL P</h1>
          <div style={{opacity:0,animation:"fadeUp 0.9s 0.7s forwards",fontSize:"1.15rem",color:"rgba(200,210,240,0.7)",marginBottom:10,fontWeight:300}}>
            <Typewriter texts={["Full-Stack Developer","MERN Stack Engineer","Spring Boot Architect","AI/ML Enthusiast","Hackathon Champion 🏆","MongoDB Certified Dev 📜"]} />
          </div>
          <p style={{opacity:0,animation:"fadeUp 0.9s 0.9s forwards",fontSize:15,color:"rgba(170,180,220,0.58)",lineHeight:1.85,maxWidth:520,marginBottom:36,fontWeight:300}}>
            Computer Science undergraduate (2026) at Kongu Engineering College, Erode. Building scalable, production-ready systems from the depths of clean code. Open to full-stack, backend, and software engineering roles.
          </p>
          <div style={{opacity:0,animation:"fadeUp 0.9s 1.1s forwards",display:"flex",gap:14,flexWrap:"wrap"}}>
            <button onClick={()=>scrollTo("projects")} style={{...F,background:"linear-gradient(135deg,#6d28d9,#4f46e5)",border:"none",color:"#fff",borderRadius:4,padding:"14px 32px",fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",cursor:"pointer",fontWeight:700,boxShadow:"0 0 30px rgba(109,40,217,0.5)"}}>🚀 View Projects</button>
            <a href="https://github.com/ikjasrasool" target="_blank" rel="noreferrer" style={{...F,background:"transparent",border:"1px solid rgba(167,139,250,0.4)",color:"#c4b5fd",borderRadius:4,padding:"14px 32px",fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",fontWeight:400}}>GitHub ↗</a>
          </div>
          {/* Stats */}
          <div className="statsRow" style={{opacity:0,animation:"fadeUp 0.9s 1.3s forwards",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginTop:52}}>
            {[["8.40","CGPA","#7dd3fc"],["457+","LeetCode","#a78bfa"],["2000+","Commits","#f472b6"],["9+","Projects","#34d399"]].map(([n,l,c])=>(
              <div key={l} style={{textAlign:"center",padding:"16px 12px",background:"rgba(255,255,255,0.028)",border:`1px solid ${c}22`,borderRadius:6,boxShadow:`0 0 20px ${c}10`}}>
                <div style={{...F,fontSize:"1.55rem",fontWeight:900,color:c,lineHeight:1}}>{n}</div>
                <div style={{fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(180,190,230,0.4)",marginTop:6}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{position:"absolute",bottom:28,left:"50%",animation:"scrollBounce 2.5s ease-in-out infinite",display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
          <div style={{width:1,height:46,background:"linear-gradient(to bottom,#a78bfa,transparent)"}} />
          <span style={{...F,fontSize:9,letterSpacing:"0.22em",color:"rgba(167,139,250,0.5)"}}>SCROLL</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{position:"relative",zIndex:1,padding:"100px 0"}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 60px"}}>
          <Reveal><div style={{textAlign:"center",marginBottom:56}}><SectionLabel>Mission Log</SectionLabel><h2 style={{...F,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"#e2e8f0"}}>About Me</h2></div></Reveal>
          <div className="aboutGrid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"start"}}>
            <Reveal delay={0.1}>
              <p style={{color:"rgba(180,190,230,0.65)",fontSize:15,lineHeight:1.9,marginBottom:18,fontWeight:300}}>I'm a <strong style={{color:"#e2e8f0"}}>product-focused Computer Science undergraduate (2026)</strong> at Kongu Engineering College with a strong foundation in data structures, algorithms, and full-stack development using <strong style={{color:"#a78bfa"}}>MERN Stack</strong> and <strong style={{color:"#a78bfa"}}>Spring Boot</strong>.</p>
              <p style={{color:"rgba(180,190,230,0.55)",fontSize:14,lineHeight:1.9,marginBottom:18,fontWeight:300}}>I've solved <strong style={{color:"#7dd3fc"}}>457+ LeetCode problems</strong> and maintain <strong style={{color:"#7dd3fc"}}>2000+ GitHub contributions</strong>. Certified as <strong style={{color:"#f472b6"}}>MongoDB Associate Developer (C100DEV)</strong> — February 2025.</p>
              <p style={{color:"rgba(180,190,230,0.5)",fontSize:14,lineHeight:1.9,fontWeight:300}}>From leading a hackathon team to 1st place, to building AI-powered apps and interning as an ML engineer — I navigate every layer of the tech stack with curiosity and ambition.</p>
              <div style={{marginTop:28,display:"flex",flexDirection:"column",gap:10}}>
                {[["📍","Tiruppur, Tamil Nadu, India"],["🎓","B.E. CSE · Kongu Engineering College · 2022–2026"],["✉️","ikjasrasool2022@gmail.com"],["📞","+91 9361300503"]].map(([icon,text])=>(
                  <div key={text} style={{display:"flex",gap:12,fontSize:13,color:"rgba(180,190,230,0.5)"}}><span>{icon}</span><span>{text}</span></div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <div style={{...F,fontSize:10,letterSpacing:"0.25em",color:"#a78bfa",marginBottom:4}}>EDUCATION</div>
                {EDUCATION.map(e=>(
                  <div key={e.degree} className="ec" style={{padding:"20px 22px",background:"rgba(255,255,255,0.025)",border:"1px solid rgba(167,139,250,0.1)",borderRadius:6,transition:"all 0.3s",cursor:"default"}}>
                    <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
                      <span style={{fontSize:22,flexShrink:0}}>{e.icon}</span>
                      <div>
                        <div style={{fontSize:14,fontWeight:600,color:"#e2e8f0",marginBottom:3}}>{e.degree}</div>
                        <div style={{fontSize:12,color:"rgba(167,139,250,0.7)",marginBottom:4}}>{e.school}</div>
                        <div style={{display:"flex",gap:14,fontSize:11,color:"rgba(160,170,210,0.45)"}}><span>{e.period}</span><span style={{color:"#7dd3fc"}}>{e.grade}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{position:"relative",zIndex:1,padding:"100px 0",background:"rgba(255,255,255,0.014)",borderTop:"1px solid rgba(167,139,250,0.07)",borderBottom:"1px solid rgba(167,139,250,0.07)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 60px"}}>
          <Reveal><div style={{textAlign:"center",marginBottom:56}}><SectionLabel>Arsenal</SectionLabel><h2 style={{...F,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"#e2e8f0"}}>Skills & Technologies</h2></div></Reveal>
          <div style={{display:"flex",flexDirection:"column",gap:40}}>
            {SKILLS.map((group,gi)=>(
              <Reveal key={group.cat} delay={gi*0.07}>
                <div>
                  <div style={{...F,fontSize:10,letterSpacing:"0.3em",textTransform:"uppercase",color:group.color,marginBottom:16,display:"flex",alignItems:"center",gap:10}}>
                    <span style={{width:24,height:1,background:group.color,display:"block",opacity:0.5}} />{group.cat}
                  </div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
                    {group.items.map(item=>(
                      <div key={item.name} className="sc" style={{display:"flex",alignItems:"center",gap:8,padding:"10px 18px",background:`${group.color}08`,border:`1px solid ${group.color}20`,borderRadius:5,fontSize:13,color:"rgba(200,210,240,0.68)",cursor:"default",transition:"all 0.25s"}}>
                        <span style={{fontSize:16}}>{item.icon}</span>{item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{position:"relative",zIndex:1,padding:"100px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 60px"}}>
          <Reveal>
            <div style={{textAlign:"center",marginBottom:40}}>
              <SectionLabel>Expeditions</SectionLabel>
              <h2 style={{...F,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"#e2e8f0",marginBottom:8}}>Projects</h2>
              <p style={{color:"rgba(160,170,210,0.5)",fontSize:14}}>9 production-ready applications across full-stack, AI/ML, and systems engineering</p>
            </div>
          </Reveal>
          {/* Filters */}
          <Reveal delay={0.1}>
            <div style={{display:"flex",justifyContent:"center",gap:10,flexWrap:"wrap",marginBottom:40}}>
              {techFilters.map(f=>(
                <button key={f} className="fb" onClick={()=>setProjectFilter(f)} style={{...F,fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",padding:"8px 18px",borderRadius:4,cursor:"pointer",background:projectFilter===f?"rgba(167,139,250,0.2)":"rgba(255,255,255,0.03)",border:`1px solid ${projectFilter===f?"rgba(167,139,250,0.6)":"rgba(167,139,250,0.15)"}`,color:projectFilter===f?"#c4b5fd":"rgba(180,190,230,0.45)",transition:"all 0.25s"}}>{f==="all"?"All Projects":f}</button>
              ))}
            </div>
          </Reveal>
          <div className="projGrid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(330px,1fr))",gap:22}}>
            {filteredProjects.map((p,i)=>(
              <Reveal key={p.name} delay={i*0.07}>
                <div className="pc" style={{position:"relative",overflow:"hidden",padding:"28px 24px",background:"rgba(255,255,255,0.024)",border:hoveredProject===i?`1px solid ${p.planetColor}45`:"1px solid rgba(167,139,250,0.09)",borderRadius:8,transition:"all 0.4s cubic-bezier(0.23,1,0.32,1)",cursor:"default"}} onMouseEnter={()=>setHoveredProject(i)} onMouseLeave={()=>setHoveredProject(null)}>
                  <div style={{position:"absolute",top:-50,right:-50,width:160,height:160,borderRadius:"50%",background:`radial-gradient(circle,${p.glowColor.replace("0.5","0.07")},transparent 70%)`,pointerEvents:"none"}} />
                  <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${p.planetColor},transparent)`,opacity:hoveredProject===i?1:0.4,transition:"opacity 0.3s"}} />
                  <div style={{fontSize:30,marginBottom:12}}>{p.emoji}</div>
                  <div style={{...F,fontSize:9,letterSpacing:"0.2em",color:p.planetColor,marginBottom:7,textTransform:"uppercase"}}>{p.date}</div>
                  <h3 style={{...F,fontSize:"1.08rem",fontWeight:700,color:"#e2e8f0",marginBottom:5}}>{p.name}</h3>
                  <div style={{fontSize:12,color:"rgba(160,170,220,0.5)",marginBottom:12}}>{p.tagline}</div>
                  <p style={{fontSize:13,color:"rgba(160,170,210,0.52)",lineHeight:1.72,marginBottom:16}}>{p.desc}</p>
                  <div style={{display:"inline-block",padding:"4px 12px",background:`${p.planetColor}16`,border:`1px solid ${p.planetColor}32`,borderRadius:20,fontSize:11,color:p.planetColor,marginBottom:16}}>▲ {p.stat}</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:20}}>
                    {p.tags.map(t=><span key={t} style={{fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",padding:"3px 9px",borderRadius:3,border:"1px solid rgba(167,139,250,0.18)",color:"rgba(180,190,240,0.48)",background:"rgba(167,139,250,0.05)"}}>{t}</span>)}
                  </div>
                  <div style={{display:"flex",gap:16}}>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(160,170,220,0.42)",textDecoration:"none",...F}}>GitHub ↗</a>
                    {p.live&&<a href={p.live} target="_blank" rel="noreferrer" style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:p.planetColor,textDecoration:"none",...F}}>Live Demo ↗</a>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{position:"relative",zIndex:1,padding:"100px 0",background:"rgba(255,255,255,0.014)",borderTop:"1px solid rgba(167,139,250,0.07)",borderBottom:"1px solid rgba(167,139,250,0.07)"}}>
        <div style={{maxWidth:820,margin:"0 auto",padding:"0 60px"}}>
          <Reveal><div style={{textAlign:"center",marginBottom:56}}><SectionLabel>Flight Log</SectionLabel><h2 style={{...F,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"#e2e8f0"}}>Experience</h2></div></Reveal>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",left:18,top:10,bottom:0,width:1,background:"linear-gradient(to bottom,#a78bfa,rgba(167,139,250,0.04))"}} />
            {EXPERIENCE.map((e,i)=>(
              <Reveal key={e.role} delay={i*0.12}>
                <div style={{paddingLeft:56,marginBottom:50,position:"relative"}}>
                  <div style={{position:"absolute",left:8,top:5,width:22,height:22,borderRadius:"50%",background:"#0a0014",border:"2px solid #a78bfa",boxShadow:"0 0 22px rgba(167,139,250,0.65)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10}}>{e.icon}</div>
                  <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:8}}>
                    <span style={{...F,fontSize:9,color:"#a78bfa",letterSpacing:"0.2em",textTransform:"uppercase"}}>{e.period}</span>
                    <span style={{fontSize:10,color:"rgba(160,170,210,0.4)",background:"rgba(167,139,250,0.08)",border:"1px solid rgba(167,139,250,0.15)",borderRadius:20,padding:"2px 10px"}}>{e.type}</span>
                  </div>
                  <h3 style={{...F,fontSize:"1.1rem",fontWeight:700,color:"#e2e8f0",marginBottom:4}}>{e.role}</h3>
                  <div style={{fontSize:12,color:"rgba(167,139,250,0.65)",marginBottom:4}}>{e.company}</div>
                  <div style={{fontSize:11,color:"rgba(160,170,210,0.38)",marginBottom:16}}>📍 {e.location}</div>
                  <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:10}}>
                    {e.points.map(pt=><li key={pt} style={{display:"flex",gap:12,fontSize:13,color:"rgba(160,170,210,0.58)",lineHeight:1.65}}><span style={{color:"#a78bfa",flexShrink:0,marginTop:2}}>▸</span>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" style={{position:"relative",zIndex:1,padding:"100px 0"}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 60px"}}>
          <Reveal><div style={{textAlign:"center",marginBottom:56}}><SectionLabel>Hall of Fame</SectionLabel><h2 style={{...F,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"#e2e8f0"}}>Achievements & Certifications</h2></div></Reveal>
          <div className="achGrid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:18}}>
            {ACHIEVEMENTS.map((a,i)=>(
              <Reveal key={a.title} delay={i*0.08}>
                <div className="ac" style={{padding:"28px 22px",background:"rgba(255,255,255,0.024)",border:"1px solid rgba(167,139,250,0.1)",borderRadius:8,transition:"all 0.35s",cursor:"default"}}>
                  <span style={{fontSize:36,marginBottom:16,display:"block"}}>{a.icon}</span>
                  <h4 style={{...F,fontSize:"0.85rem",fontWeight:700,color:"#e2e8f0",marginBottom:10,lineHeight:1.4}}>{a.title}</h4>
                  <p style={{fontSize:12,color:"rgba(160,170,210,0.5)",lineHeight:1.65}}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{position:"relative",zIndex:1,padding:"100px 0",textAlign:"center",background:"rgba(255,255,255,0.012)",borderTop:"1px solid rgba(167,139,250,0.07)"}}>
        <div style={{maxWidth:900,margin:"0 auto",padding:"0 60px"}}>
          <Reveal>
            <SectionLabel>Open Comms</SectionLabel>
            <h2 style={{...F,fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:"#e2e8f0",lineHeight:1.1,marginBottom:18}}>
              <GlitchText text="INITIATE" />{" "}<span style={{background:"linear-gradient(135deg,#a78bfa,#7dd3fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>CONTACT</span>
            </h2>
            <p style={{color:"rgba(160,170,210,0.52)",fontSize:15,lineHeight:1.8,fontWeight:300,maxWidth:520,margin:"0 auto 50px"}}>Open to internships and full-time roles in Full Stack Development, Software Engineering, and Backend Development. Let's build something remarkable.</p>
            <div className="ctGrid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16,marginBottom:40}}>
              {CONTACT_LINKS.map(c=>(
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="cc" style={{display:"flex",alignItems:"center",gap:14,padding:"20px 22px",border:"1px solid rgba(167,139,250,0.15)",borderRadius:8,textDecoration:"none",transition:"all 0.3s",background:"rgba(255,255,255,0.022)",textAlign:"left",color:"inherit"}}>
                  <span style={{fontSize:26,flexShrink:0}}>{c.icon}</span>
                  <div>
                    <div style={{...F,fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(167,139,250,0.7)",marginBottom:4}}>{c.label}</div>
                    <div style={{fontSize:12,color:"rgba(180,190,230,0.55)"}}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{fontSize:12,color:"rgba(160,170,210,0.3)",letterSpacing:"0.1em",...F}}>📍 TIRUPPUR, TAMIL NADU, INDIA</div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{position:"relative",zIndex:1,textAlign:"center",padding:"28px",borderTop:"1px solid rgba(167,139,250,0.07)",color:"rgba(160,170,210,0.25)",fontSize:12}}>
        <GlitchText text="IKJAS RASOOL P" style={{color:"rgba(167,139,250,0.4)",...F,fontSize:11,letterSpacing:"0.2em"}} />
        <div style={{fontSize:11,marginTop:5,opacity:0.4}}>Software Engineering Graduate (2026) · Kongu Engineering College · CGPA 8.40</div>
        <div style={{fontSize:10,marginTop:3,opacity:0.3}}>Built with React · Orbitron Font · Live Starfield Canvas</div>
      </footer>
    </div>
  );
}
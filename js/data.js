/* ============================================================
   data.js — Portfolio Content + Tech Stack with Real SVG Logos
============================================================ */

/* ---- TECH STACK with REAL SVGs, Categories & Details ---- */
const STACK = [

  /* ── FRONTEND ── */
  {
    name:"React", category:"Frontend",
    color:"#61DAFB", year:"2013", creator:"Meta (Facebook)",
    tagline:"A JavaScript library for building user interfaces",
    desc:"React adalah library JavaScript yang dikembangkan oleh Meta untuk membangun antarmuka pengguna yang interaktif dan cepat menggunakan komponen reusable dan Virtual DOM.",
    usage:"Digunakan untuk SPA, dashboard, dan aplikasi real-time. React menjadi fondasi Next.js, Remix, dan banyak framework modern lainnya.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="3.5" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="1.8"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="1.8" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="1.8" transform="rotate(120 20 20)"/></svg>`
  },
  {
    name:"Next.js", category:"Frontend",
    color:"#ffffff", year:"2016", creator:"Vercel",
    tagline:"The React framework for production",
    desc:"Next.js adalah framework React production-ready dari Vercel yang mendukung SSR, SSG, ISR, dan App Router. Memungkinkan pengembangan full-stack dalam satu codebase.",
    usage:"Ideal untuk website SEO-friendly, e-commerce, blog, dan aplikasi enterprise yang butuh performa tinggi.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#000"/><path d="M14 28V13l14 17.5c-2 1-4.2 1.5-6.5 1.5A13.5 13.5 0 0 1 14 28z" fill="url(#ng)"/><path d="M26.5 27V13" stroke="white" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="ng" x1="20" y1="13" x2="28" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>`
  },
  {
    name:"Vue.js", category:"Frontend",
    color:"#42B883", year:"2014", creator:"Evan You",
    tagline:"The progressive JavaScript framework",
    desc:"Vue.js adalah framework JavaScript progresif yang dirancang agar mudah diintegrasikan secara bertahap. Menggabungkan konsep terbaik dari Angular dan React dengan kurva belajar yang lebih rendah.",
    usage:"Cocok untuk aplikasi web interaktif, prototyping cepat, dan proyek yang butuh fleksibilitas tinggi antara library dan framework.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><polygon points="20,6 32,6 20,28 8,6" fill="#42B883"/><polygon points="20,6 26,6 20,18 14,6" fill="#35495E"/></svg>`
  },
  {
    name:"TypeScript", category:"Frontend",
    color:"#3178C6", year:"2012", creator:"Microsoft",
    tagline:"JavaScript with syntax for types",
    desc:"TypeScript adalah superset JavaScript dengan static typing. Dikembangkan oleh Microsoft untuk mendeteksi error lebih awal, meningkatkan developer experience, dan membuat kode lebih mudah di-maintain.",
    usage:"Wajib di project skala besar. Semua framework modern (Next.js, NestJS, Angular) mendukung TypeScript sebagai bahasa utama.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="4" fill="#3178C6"/><text x="5" y="28" font-family="Arial Black,sans-serif" font-size="18" font-weight="900" fill="white">TS</text></svg>`
  },
  {
    name:"Tailwind CSS", category:"Frontend",
    color:"#38BDF8", year:"2017", creator:"Adam Wathan",
    tagline:"Rapidly build modern websites without leaving HTML",
    desc:"Tailwind CSS adalah utility-first CSS framework yang memungkinkan styling langsung di HTML menggunakan class-class yang sudah disiapkan, tanpa perlu menulis CSS custom.",
    usage:"Digunakan di hampir semua project modern karena mempercepat proses styling secara signifikan. Sangat cocok dikombinasikan dengan React/Next.js.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.96 1.11 2.86 2.03C22.1 17.33 23.77 19 27.5 19c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.96-1.11-2.86-2.03C25.4 11.67 23.73 10 20 10zM12.5 19c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.96 1.11 2.86 2.03C14.6 26.33 16.27 28 20 28c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.96-1.11-2.86-2.03C17.9 20.67 16.23 19 12.5 19z" fill="#38BDF8"/></svg>`
  },
  {
    name:"HTML5", category:"Frontend",
    color:"#E34F26", year:"2014", creator:"W3C / WHATWG",
    tagline:"The standard markup language for the Web",
    desc:"HTML5 adalah versi terbaru dari HyperText Markup Language yang menjadi fondasi setiap halaman web. HTML5 memperkenalkan elemen semantik, Canvas, Web Storage, dan banyak API baru.",
    usage:"Dasar dari semua pengembangan web. Digunakan bersama CSS dan JavaScript untuk membangun struktur dan konten halaman web.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l2.8 31.4L20 39l11.2-3.6L34 4H6z" fill="#E34F26"/><path d="M20 36.2V7.6h-.1L8.4 10.4l1.9 22L20 36.2z" fill="#EF652A"/><path d="M27.6 15H20v3.4h7.2l-.5 5.6H20v3.4h6.4l-.6 6.6L20 35.2v3.5l7.9-2.2 1-10.8.3-3.3.7-7.4H27.6z" fill="white"/><path d="M20 15H12.8l.3 3.4H20v-3.4zm0 9H14l.4 5.6 5.6 1.6V24z" fill="#EBEBEB"/></svg>`
  },
  {
    name:"CSS3", category:"Frontend",
    color:"#1572B6", year:"1996", creator:"W3C",
    tagline:"Style sheet language for HTML documents",
    desc:"CSS3 adalah versi terbaru dari Cascading Style Sheets yang menambahkan fitur seperti animasi, transisi, flexbox, grid, custom properties, dan media queries untuk desain responsif.",
    usage:"Digunakan untuk semua styling visual di web. Bersama HTML dan JavaScript membentuk trio fundamental pengembangan web.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l2.8 31.4L20 39l11.2-3.6L34 4H6z" fill="#1572B6"/><path d="M20 36.2V7.6h-.1L8.4 10.4l1.9 22L20 36.2z" fill="#33A9DC"/><path d="M27.6 15H20v3.4h7.2l-.5 5.6H20v3.4h6.4l-.6 6.6L20 35.2v3.5l7.9-2.2 1-10.8.3-3.3.7-7.4H27.6z" fill="white"/><path d="M20 15H12.8l.3 3.4H20v-3.4zm0 9H14l.4 5.6 5.6 1.6V24z" fill="#EBEBEB"/></svg>`
  },
  {
    name:"Redux", category:"Frontend",
    color:"#764ABC", year:"2015", creator:"Dan Abramov",
    tagline:"Predictable state container for JS apps",
    desc:"Redux adalah library manajemen state yang predictable untuk JavaScript. Menggunakan pola single source of truth dengan actions dan reducers untuk mengelola state aplikasi secara terstruktur.",
    usage:"Digunakan di aplikasi React skala besar dimana state perlu dibagi antar banyak komponen. Kini banyak yang beralih ke Zustand atau React Query untuk kasus lebih sederhana.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M26.5 8.5c.7-3.5-2-4.5-3.5-3l-2 2c-.5.5-.5 1.5 0 2l1 1c.5.5 1.5.5 2 0l.5-.5c.5 1 .3 2.5-.8 3.5-1.5 1.3-4 .8-5.2-.8-1.5-2-1-5 1-6.5" fill="none" stroke="#764ABC" stroke-width="2" stroke-linecap="round"/><path d="M13.5 13.5c-3.5-.7-4.5 2-3 3.5l2 2c.5.5 1.5.5 2 0l1-1c.5-.5.5-1.5 0-2l-.5-.5c1-.5 2.5-.3 3.5.8 1.3 1.5.8 4-.8 5.2-2 1.5-5 1-6.5-1" fill="none" stroke="#764ABC" stroke-width="2" stroke-linecap="round"/><path d="M16 30c-.7 3.5 2 4.5 3.5 3l2-2c.5-.5.5-1.5 0-2l-1-1c-.5-.5-1.5-.5-2 0l-.5.5c-.5-1-.3-2.5.8-3.5 1.5-1.3 4-.8 5.2.8 1.5 2 1 5-1 6.5" fill="none" stroke="#764ABC" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="20" r="3" fill="#764ABC"/></svg>`
  },

  /* ── BACKEND ── */
  {
    name:"Node.js", category:"Backend",
    color:"#68A063", year:"2009", creator:"Ryan Dahl",
    tagline:"JavaScript runtime built on Chrome's V8 engine",
    desc:"Node.js adalah runtime JavaScript sisi server yang memungkinkan JavaScript berjalan di luar browser. Menggunakan arsitektur event-driven dan non-blocking I/O yang membuat server sangat efisien.",
    usage:"Digunakan untuk REST API, real-time apps (chat, gaming), microservices, dan CLI tools. Menjadi ekosistem npm yang terbesar di dunia.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3L5 11.5v17L20 37l15-8.5v-17L20 3z" fill="#68A063"/><path d="M20 3L5 11.5v17L20 37l15-8.5v-17L20 3z" fill="url(#ng2)" opacity="0.3"/><path d="M20 8v24M5 11.5l15 8.5 15-8.5" fill="none" stroke="white" stroke-width="1.2" opacity="0.4"/><text x="20" y="24" text-anchor="middle" font-family="Arial" font-size="9" font-weight="bold" fill="white">JS</text><defs><linearGradient id="ng2" x1="5" y1="3" x2="35" y2="37" gradientUnits="userSpaceOnUse"><stop stop-color="#87BF65"/><stop offset="1" stop-color="#3D7A2A"/></linearGradient></defs></svg>`
  },
  {
    name:"Laravel", category:"Backend",
    color:"#FF2D20", year:"2011", creator:"Taylor Otwell",
    tagline:"The PHP Framework for Web Artisans",
    desc:"Laravel adalah framework PHP yang elegan dengan sintaks ekspresif dan tools lengkap: Eloquent ORM, Blade templating, Artisan CLI, Queue, Broadcasting, dan ekosistem Forge/Vapor.",
    usage:"Pilihan utama untuk aplikasi web PHP. Digunakan untuk e-commerce, SaaS, CMS, dan REST API. Kombinasi sempurna dengan Vue.js atau React di frontend.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M36.5 8.2c.1.2.1.4 0 .5L25.9 20.3l5.2 9.5c.1.2.1.4 0 .6-.1.1-.3.2-.5.1L20 27.3l-3.2 9.6c-.1.2-.3.3-.5.3s-.4-.1-.5-.3L3.5 9.4c-.1-.3 0-.6.2-.7L8.8 6c.2-.1.5 0 .7.2l9.4 16.1 3.5-5.8c.1-.2.4-.3.6-.2l3.5 1.8 7.8-10.4c.2-.2.5-.3.7-.2l1.5.8c.2.1.3.3.4.4-.4-.1-.4-.1-.4-.3z" fill="#FF2D20"/></svg>`
  },
  {
    name:"PHP", category:"Backend",
    color:"#8892BF", year:"1994", creator:"Rasmus Lerdorf",
    tagline:"Hypertext Preprocessor — server-side scripting",
    desc:"PHP adalah bahasa scripting server-side yang sangat populer dan menguasai lebih dari 77% server web di dunia. PHP 8.x membawa JIT compiler, fitur OOP lengkap, dan performa yang jauh meningkat.",
    usage:"Digunakan di WordPress, Laravel, Symfony, dan jutaan website. Meski ada stigma lama, PHP modern sangat powerful dan tetap relevan.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="20" rx="19" ry="12" fill="#8892BF"/><text x="20" y="25" text-anchor="middle" font-family="Arial Black,sans-serif" font-size="14" font-weight="900" fill="white">php</text></svg>`
  },
  {
    name:"Express.js", category:"Backend",
    color:"#ffffff", year:"2010", creator:"TJ Holowaychuk",
    tagline:"Fast, unopinionated, minimalist web framework",
    desc:"Express.js adalah framework web minimalis untuk Node.js yang menyediakan routing, middleware, dan abstraksi HTTP yang sederhana. Menjadi fondasi dari banyak framework Node.js lainnya seperti NestJS.",
    usage:"Digunakan untuk membangun REST API, web server, dan middleware pipeline yang cepat dan ringan. Sering dikombinasikan dengan MongoDB (MEAN/MERN stack).",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#000"/><text x="7" y="16" font-family="Arial,sans-serif" font-size="7" fill="white" font-weight="bold">express</text><line x1="7" y1="20" x2="33" y2="20" stroke="#444" stroke-width="1"/><text x="7" y="30" font-family="Arial,sans-serif" font-size="6.5" fill="#888">fast · minimal</text></svg>`
  },
  {
    name:"Python", category:"Backend",
    color:"#3776AB", year:"1991", creator:"Guido van Rossum",
    tagline:"Simple, readable, and powerful programming language",
    desc:"Python adalah bahasa pemrograman high-level yang terkenal karena sintaksnya yang bersih dan mudah dibaca. Python mendominasi di bidang data science, AI/ML, automasi, dan web backend.",
    usage:"Digunakan untuk Django/FastAPI web backend, data analysis, machine learning (TensorFlow, PyTorch), scripting, dan automasi. Bahasa paling populer di dunia saat ini.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 4c-4.5 0-8 1.5-8 4v4h8v1H9c-2.5 0-5 2-5 8s2.5 8 5 8h3v-5c0-2.5 2-4 5-4h8c2.5 0 4-1.5 4-4V8c0-2.5-3.5-4-8-4zm-2 3.5c.8 0 1.5.7 1.5 1.5S18.8 10.5 18 10.5 16.5 9.8 16.5 9s.7-1.5 1.5-1.5z" fill="#3776AB"/><path d="M20 36c4.5 0 8-1.5 8-4v-4h-8v-1h11c2.5 0 5-2 5-8s-2.5-8-5-8h-3v5c0 2.5-2 4-5 4h-8c-2.5 0-4 1.5-4 4v8c0 2.5 3.5 4 8 4zm2-3.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFD43B"/></svg>`
  },

  /* ── DATABASE ── */
  {
    name:"PostgreSQL", category:"Database",
    color:"#336791", year:"1996", creator:"PostgreSQL Global Dev Group",
    tagline:"The world's most advanced open source database",
    desc:"PostgreSQL adalah relational database yang sangat powerful dengan dukungan penuh terhadap ACID, JSON/JSONB, full-text search, window functions, CTEs, dan extensibility yang luar biasa.",
    usage:"Pilihan database utama untuk aplikasi enterprise, financial systems, dan aplikasi yang butuh konsistensi data. Digunakan oleh Apple, Instagram, Spotify, dan banyak perusahaan besar.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M29 10c-1.5-3.5-5-6-9-6-5.5 0-10 4.5-10 10 0 2 .5 3.8 1.5 5.3" fill="none" stroke="#336791" stroke-width="2.5"/><path d="M20 4C14.5 4 10 8.5 10 14c0 3 1.3 5.7 3.3 7.6C14.5 22.8 17 24 20 24s5.5-1.2 6.7-2.4C28.7 19.7 30 17 30 14c0-5.5-4.5-10-10-10z" fill="#336791"/><path d="M20 4c2 0 3.8.6 5.3 1.5" fill="none" stroke="#336791" stroke-width="1.5"/><ellipse cx="25" cy="9" rx="4" ry="2.5" fill="#336791" transform="rotate(-30 25 9)"/><path d="M20 24v12M16 28l4 8 4-8" fill="none" stroke="#336791" stroke-width="2" stroke-linecap="round"/><path d="M13 18c0 0-3 2-3 6" fill="none" stroke="#336791" stroke-width="1.5" stroke-linecap="round"/><circle cx="20" cy="14" r="4" fill="white" opacity="0.2"/></svg>`
  },
  {
    name:"MySQL", category:"Database",
    color:"#4479A1", year:"1995", creator:"MySQL AB (now Oracle)",
    tagline:"The world's most popular open source database",
    desc:"MySQL adalah relational database management system yang paling banyak digunakan di dunia. Dikenal karena kecepatan, reliabilitas, dan kemudahan penggunaannya.",
    usage:"Digunakan di WordPress, Facebook (awalnya), Twitter, dan jutaan website. Pilihan populer untuk LAMP stack dan aplikasi web yang butuh database relasional.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M6 28c0 0 2-8 4-12s5-8 8-8 4 3 3 8-2 12-2 12" fill="none" stroke="#4479A1" stroke-width="2.5" stroke-linecap="round"/><path d="M17 8c0 0 4 6 6 12s3 8 5 8" fill="none" stroke="#4479A1" stroke-width="2.5" stroke-linecap="round"/><path d="M28 28c0 0 2-5 4-6" fill="none" stroke="#F29111" stroke-width="2.5" stroke-linecap="round"/><circle cx="34" cy="23" r="2" fill="#F29111"/></svg>`
  },
  {
    name:"MongoDB", category:"Database",
    color:"#47A248", year:"2007", creator:"MongoDB Inc.",
    tagline:"The developer data platform for modern applications",
    desc:"MongoDB adalah NoSQL document database yang menyimpan data dalam format BSON (JSON binary). Menawarkan fleksibilitas schema, horizontal scaling, dan performa tinggi untuk data tidak terstruktur.",
    usage:"Cocok untuk aplikasi yang butuh schema fleksibel seperti CMS, social media, IoT, dan real-time analytics. Sering digunakan dalam MEAN/MERN stack.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3c0 0-8 8-8 17 0 5.5 3.5 10 8 10s8-4.5 8-10c0-9-8-17-8-17z" fill="#47A248"/><path d="M20 3c0 0 8 8 8 17 0 5.5-3.5 10-8 10" fill="#A8C5A0"/><line x1="20" y1="30" x2="20" y2="37" stroke="#47A248" stroke-width="2.5" stroke-linecap="round"/></svg>`
  },
  {
    name:"Redis", category:"Database",
    color:"#DC382D", year:"2009", creator:"Salvatore Sanfilippo",
    tagline:"In-memory data structure store",
    desc:"Redis adalah in-memory database yang sangat cepat, mendukung berbagai struktur data: string, hash, list, set, sorted set, stream. Digunakan sebagai cache, message broker, dan session store.",
    usage:"Digunakan untuk caching database query, session management, real-time leaderboards, pub/sub messaging, dan rate limiting. Kecepatan Redis mencapai jutaan operasi per detik.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M8 22l12 5 12-5-12-5-12 5z" fill="#DC382D"/><path d="M8 17l12 5 12-5-12-5-12 5z" fill="#DC382D"/><path d="M8 17l12 5v5l-12-5v-5z" fill="#A82622"/><path d="M32 17l-12 5v5l12-5v-5z" fill="#A82622"/><path d="M8 12l12 5 12-5-12-5-12 5z" fill="#DC382D"/><path d="M20 5l4 2-2 1 3 1-5 2-5-2 3-1-2-1 4-2z" fill="#FFF"/></svg>`
  },

  /* ── DEVOPS / TOOLS ── */
  {
    name:"Docker", category:"DevOps",
    color:"#2496ED", year:"2013", creator:"Solomon Hykes",
    tagline:"Build, ship, and run any app, anywhere",
    desc:"Docker adalah platform containerization yang memungkinkan aplikasi berjalan dalam lingkungan yang terisolasi (container). Memastikan aplikasi berjalan konsisten di development, staging, dan production.",
    usage:"Standar industri untuk deployment. Digunakan untuk containerize aplikasi, manage dependencies, dan membangun CI/CD pipeline yang reproducible.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="16" width="30" height="14" rx="3" fill="#2496ED"/><rect x="8" y="19" width="5" height="5" rx="1" fill="white"/><rect x="15" y="19" width="5" height="5" rx="1" fill="white"/><rect x="22" y="19" width="5" height="5" rx="1" fill="white"/><rect x="15" y="12" width="5" height="5" rx="1" fill="#2496ED" stroke="#2496ED" stroke-width="0.5"/><rect x="22" y="12" width="5" height="5" rx="1" fill="#2496ED" stroke="#2496ED" stroke-width="0.5"/><rect x="22" y="6" width="5" height="5" rx="1" fill="#2496ED" stroke="#2496ED" stroke-width="0.5"/><path d="M35 21c2 0 4 1.5 4 3s-1 2-2.5 2" fill="none" stroke="white" stroke-width="1.5"/><circle cx="34" cy="18" r="1.5" fill="white"/></svg>`
  },
  {
    name:"Git", category:"DevOps",
    color:"#F05032", year:"2005", creator:"Linus Torvalds",
    tagline:"Distributed version control system",
    desc:"Git adalah version control system terdistribusi yang diciptakan oleh Linus Torvalds. Memungkinkan developer melacak perubahan kode, berkolaborasi dalam tim, dan mengelola berbagai versi software.",
    usage:"Wajib di setiap project software. Digunakan bersama GitHub, GitLab, atau Bitbucket untuk collaboration, code review, dan CI/CD.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M37.5 18.3L21.7 2.5c-1.4-1.4-3.6-1.4-5 0l-3.5 3.5 4.4 4.4c1-.4 2.2-.2 3 .7.8.9.9 2.2.4 3.2l4.3 4.3c1-.4 2.2-.2 3 .7 1.1 1.1 1.1 3 0 4.1-1.1 1.1-3 1.1-4.1 0-.9-.9-1.1-2.3-.5-3.4l-4-4v10.5c.7.3 1.3.8 1.8 1.4 1.1 1.1 1.1 3 0 4.1-1.1 1.1-3 1.1-4.1 0-1.1-1.1-1.1-3 0-4.1.5-.5 1.2-.9 1.9-1V16c-.7-.3-1.4-.8-1.9-1.4-.9-.9-1.1-2.2-.6-3.3L12.4 7l-9.9 9.9c-1.4 1.4-1.4 3.6 0 5l15.8 15.8c1.4 1.4 3.6 1.4 5 0l14.2-14.2c1.4-1.4 1.4-3.7 0-5.2z" fill="#F05032"/></svg>`
  },
  {
    name:"GraphQL", category:"Backend",
    color:"#E535AB", year:"2015", creator:"Meta (Facebook)",
    tagline:"A query language for your API",
    desc:"GraphQL adalah query language dan runtime untuk API yang dikembangkan Meta. Memungkinkan client meminta data yang spesifik dalam satu request, menghindari over-fetching dan under-fetching.",
    usage:"Digunakan di aplikasi dengan data yang kompleks dan beragam kebutuhan client (mobile vs web). Sering dikombinasikan dengan Apollo Client dan React.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3l15 8.7v17.3L20 37 5 29V11.7L20 3z" fill="none" stroke="#E535AB" stroke-width="2"/><circle cx="20" cy="3" r="2.5" fill="#E535AB"/><circle cx="35" cy="11.7" r="2.5" fill="#E535AB"/><circle cx="35" cy="28.3" r="2.5" fill="#E535AB"/><circle cx="20" cy="37" r="2.5" fill="#E535AB"/><circle cx="5" cy="28.3" r="2.5" fill="#E535AB"/><circle cx="5" cy="11.7" r="2.5" fill="#E535AB"/><line x1="5" y1="11.7" x2="35" y2="28.3" stroke="#E535AB" stroke-width="1.5"/><line x1="5" y1="28.3" x2="35" y2="11.7" stroke="#E535AB" stroke-width="1.5"/><line x1="20" y1="3" x2="20" y2="37" stroke="#E535AB" stroke-width="1.5"/><circle cx="20" cy="20" r="4" fill="#E535AB"/></svg>`
  },
  {
    name:"Linux", category:"DevOps",
    color:"#FCC624", year:"1991", creator:"Linus Torvalds",
    tagline:"Open source Unix-like operating system kernel",
    desc:"Linux adalah kernel sistem operasi open-source yang menjadi fondasi server dunia, Android, dan embedded systems. Dikenal karena stabilitas, keamanan, dan fleksibilitasnya.",
    usage:"Server production hampir semuanya berjalan di Linux (Ubuntu, CentOS, Debian). Pengetahuan Linux wajib untuk DevOps, system administration, dan deployment.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="14" rx="7" ry="9" fill="#FCC624"/><circle cx="16.5" cy="13" r="1.5" fill="#333"/><circle cx="23.5" cy="13" r="1.5" fill="#333"/><path d="M16 17c1 1.5 2 2 4 2s3-.5 4-2" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round"/><path d="M13 12c-1-3 0-7 3-8" fill="none" stroke="#FCC624" stroke-width="1.5" stroke-linecap="round"/><path d="M27 12c1-3 0-7-3-8" fill="none" stroke="#FCC624" stroke-width="1.5" stroke-linecap="round"/><path d="M13 23c-2 2-5 3-6 6 0 2 2 3 4 3h18c2 0 4-1 4-3-1-3-4-4-6-6" fill="#FCC624"/><path d="M15 23l-2 8h14l-2-8" fill="#FCC624"/><ellipse cx="16" cy="28" rx="2.5" ry="1.5" fill="#333" opacity="0.4"/><ellipse cx="24" cy="28" rx="2.5" ry="1.5" fill="#333" opacity="0.4"/></svg>`
  },
  {
    name:"Figma", category:"Design",
    color:"#F24E1E", year:"2016", creator:"Dylan Field & Evan Wallace",
    tagline:"Collaborative interface design tool",
    desc:"Figma adalah platform desain UI/UX berbasis browser yang memungkinkan kolaborasi real-time. Menjadi standar industri untuk desain antarmuka, prototyping, dan design system.",
    usage:"Digunakan oleh designer dan developer untuk membuat mockup, prototype, component library, dan design system. Fitur Dev Mode memudahkan handoff ke developer.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="4" width="9" height="9" rx="4.5" fill="#F24E1E"/><rect x="20" y="4" width="9" height="9" rx="4.5" fill="#FF7262"/><rect x="11" y="13" width="9" height="9" fill="#A259FF"/><rect x="11" y="22" width="9" height="9" rx="4.5" fill="#0ACF83"/><circle cx="24.5" cy="17.5" r="4.5" fill="#1ABCFE"/></svg>`
  },

  /* ── MOBILE ── */
  {
    name:"React Native", category:"Mobile",
    color:"#61DAFB", year:"2015", creator:"Meta (Facebook)",
    tagline:"Build mobile apps using React",
    desc:"React Native adalah framework untuk membangun aplikasi mobile native menggunakan JavaScript dan React. Satu codebase dapat menghasilkan aplikasi iOS dan Android yang benar-benar native.",
    usage:"Digunakan oleh Facebook, Instagram, Airbnb (awalnya), Microsoft, Shopify untuk aplikasi mobile. Pengetahuan React sangat membantu karena konsep yang sama.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="3.5" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="1.8"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="1.8" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="1.8" transform="rotate(120 20 20)"/><rect x="14" y="12" width="12" height="16" rx="2" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.4"/></svg>`
  },
  {
    name:"Flutter", category:"Mobile",
    color:"#54C5F8", year:"2018", creator:"Google",
    tagline:"Build apps for any screen from one codebase",
    desc:"Flutter adalah UI toolkit dari Google untuk membangun aplikasi natively compiled dari satu codebase untuk mobile (iOS/Android), web, desktop, dan embedded. Menggunakan bahasa Dart.",
    usage:"Digunakan untuk membuat aplikasi cross-platform dengan performa mendekati native. Populer di startup dan enterprise karena produktivitas tinggi dan tampilan yang konsisten.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><polygon points="20,4 36,20 20,20" fill="#54C5F8"/><polygon points="20,4 36,20 20,20" fill="#01579B" opacity="0.3"/><polygon points="13,27 20,20 36,36 22,36" fill="#54C5F8"/><polygon points="20,20 27.5,27.5 22,36 13,27" fill="#29B6F6"/><polygon points="13,27 20,20 22,22 15,29" fill="#01579B" opacity="0.2"/></svg>`
  },
  {
    name:"Kotlin", category:"Mobile",
    color:"#7F52FF", year:"2011", creator:"JetBrains",
    tagline:"A modern programming language for Android",
    desc:"Kotlin adalah bahasa pemrograman modern yang sepenuhnya interoperable dengan Java. Google menjadikannya bahasa resmi untuk pengembangan Android sejak 2017.",
    usage:"Digunakan untuk Android native development, Kotlin Multiplatform Mobile (KMM) untuk sharing code antara iOS dan Android, serta backend dengan Ktor.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7F52FF"/><stop offset="0.5" stop-color="#C811E1"/><stop offset="1" stop-color="#E8821A"/></linearGradient></defs><polygon points="5,5 22,22 5,38" fill="url(#kg)"/><polygon points="22,22 38,5 38,38" fill="url(#kg)" opacity="0.8"/></svg>`
  },
  {
    name:"Swift", category:"Mobile",
    color:"#F05138", year:"2014", creator:"Apple",
    tagline:"Build apps for Apple platforms",
    desc:"Swift adalah bahasa pemrograman modern yang dikembangkan Apple untuk iOS, macOS, watchOS, dan tvOS. Menggantikan Objective-C dengan sintaks yang lebih bersih dan performa yang lebih baik.",
    usage:"Wajib untuk pengembangan aplikasi Apple ecosystem. Digunakan bersama SwiftUI untuk membuat native app yang smooth dan terintegrasi sempurna dengan hardware Apple.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F05138"/><stop offset="1" stop-color="#EF4128"/></linearGradient></defs><rect width="40" height="40" rx="9" fill="url(#sg)"/><path d="M31 14.5c-3.5-4-9-5-13.5-3 3.5 2 6 5.5 6.5 9.5-2-2.5-5.5-4.5-8-4 4 3.5 6.5 8 5 13-1 3-3.5 5-6.5 5.5 7 2 14.5-2 17-9 1.5-4 1-8.5-0.5-12z" fill="white"/></svg>`
  },

  /* ── CLOUD / OTHER ── */
  {
    name:"AWS", category:"Cloud",
    color:"#FF9900", year:"2006", creator:"Amazon",
    tagline:"On-demand cloud computing platforms & APIs",
    desc:"Amazon Web Services adalah platform cloud computing terbesar di dunia dengan 200+ layanan meliputi komputasi (EC2), storage (S3), database (RDS), serverless (Lambda), dan banyak lagi.",
    usage:"Digunakan oleh startup hingga enterprise untuk hosting, deployment, dan scaling aplikasi. Netflix, Airbnb, dan NASA menggunakan AWS untuk infrastruktur mereka.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M12 25l-4 2 1.5 2.5c2.5 1.5 5.5 2.5 8.5 2.5s6-1 8.5-2.5L28 27l-4-2" fill="none" stroke="#FF9900" stroke-width="2" stroke-linecap="round"/><path d="M8 21c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="none" stroke="#FF9900" stroke-width="2.5"/><path d="M12 21l3.5-7 4.5 2 4.5-2L28 21" fill="none" stroke="#FF9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="20" y="23" text-anchor="middle" font-family="Arial Black" font-size="5" font-weight="900" fill="#FF9900">AWS</text></svg>`
  },
  {
    name:"Supabase", category:"Cloud",
    color:"#3ECF8E", year:"2020", creator:"Paul Copplestone",
    tagline:"The open source Firebase alternative",
    desc:"Supabase adalah platform Backend-as-a-Service open source yang menyediakan database PostgreSQL, authentication, real-time subscriptions, storage, dan Edge Functions dalam satu platform.",
    usage:"Alternatif Firebase yang lebih powerful karena berbasis PostgreSQL. Ideal untuk project yang butuh backend cepat tanpa setup server kompleks.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sbg" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#3ECF8E"/><stop offset="1" stop-color="#1A9E6A"/></linearGradient></defs><path d="M22 5l-15 20h13l-2 10 15-20H20l2-10z" fill="url(#sbg)"/></svg>`
  },
  {
    name:"Prisma", category:"Database",
    color:"#2D3748", year:"2019", creator:"Prisma",
    tagline:"Next-generation ORM for Node.js & TypeScript",
    desc:"Prisma adalah ORM generasi baru untuk TypeScript dan Node.js yang menawarkan type-safety penuh, auto-generated query builder, dan Prisma Studio untuk manajemen data visual.",
    usage:"Digunakan bersama Next.js, NestJS, atau Express untuk database access yang type-safe. Mendukung PostgreSQL, MySQL, MongoDB, SQLite, dan SQL Server.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 4L6 32l8 4L20 4z" fill="#2D3748"/><path d="M20 4l14 28-8 4L20 4z" fill="#4A5568"/><path d="M6 32l14-10 8 14-14-4H6z" fill="#718096"/></svg>`
  },
  {
    name:"Vite", category:"Frontend",
    color:"#646CFF", year:"2020", creator:"Evan You",
    tagline:"Next generation frontend tooling",
    desc:"Vite adalah build tool dan dev server generasi terbaru yang memanfaatkan native ES modules browser. Memberikan cold start yang sangat cepat dan Hot Module Replacement yang instan.",
    usage:"Menggantikan Create React App dan Webpack untuk development modern. Digunakan sebagai build tool default untuk Vue 3, dan semakin populer untuk React, Svelte, dan Vanilla JS.",
    svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="vg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#41D1FF"/><stop offset="1" stop-color="#BD34FE"/></linearGradient></defs><polygon points="20,3 37,34 20,30 3,34" fill="url(#vg)"/><polygon points="20,3 30,16 20,15 10,16" fill="#FFD62E"/></svg>`
  },
];

/* ---- TIMELINE ---- */
const TIMELINE = [
  {type:"work",date:"2023 — Present",role:"Full-Stack Developer",company:"Freelance / Remote",desc:"Building custom web & mobile applications for clients. Specializing in React, Node.js, Laravel backends, and cloud deployments."},
  {type:"work",date:"2022 — 2023",role:"Junior Web Developer",company:"Startup Surabaya",desc:"Developed and maintained web products using Laravel and Vue.js. Collaborated with design team to implement pixel-perfect UIs."},
  {type:"education",date:"2020 — 2024",role:"Bachelor of Informatics",company:"Universitas — Surabaya",desc:"Studied software engineering, data structures, algorithms, and web development. Active in campus tech community."},
  {type:"education",date:"2022",role:"Dicoding Learning Path",company:"Dicoding Indonesia",desc:"Completed intensive learning paths: front-end, back-end with Node.js, and cloud computing fundamentals."},
];

/* ---- PROJECTS ---- */
const PROJECTS = [
  {
    id:1,
    title:"DISHUB — Dinas Perhubungan Jombang",
    category:"fullstack",
    tags:["Laravel","MySQL","Bootstrap","PHP"],
    desc_id:"Sistem informasi resmi Dinas Perhubungan Kabupaten Jombang. Menampilkan informasi layanan transportasi, berita, dan data perhubungan daerah secara publik.",
    desc_en:"Official information system for Jombang Transportation Department. Displays transportation service information, news, and regional transportation data publicly.",
    desc:"Sistem informasi resmi Dinas Perhubungan Kabupaten Jombang.",
    icon:"🚌",
    screenshot:"",
    features_id:["Portal informasi publik","Manajemen berita & pengumuman","Data layanan perhubungan","Desain responsif","Panel admin","Integrasi data daerah"],
    features_en:["Public information portal","News & announcement management","Transportation service data","Responsive design","Admin panel","Regional data integration"],
    features:["Portal informasi publik","Manajemen berita","Panel admin","Desain responsif"],
    demo:"https://dishub.petikjombang.com",
    github:"https://github.com/ilhamhakim463-hash",
    year:"2024"
  },
  {
    id:2,
    title:"Approval Sosmed — Petik Jombang",
    category:"fullstack",
    tags:["Laravel","MySQL","Bootstrap","PHP"],
    desc_id:"Sistem approval konten media sosial untuk Pesantren Petik Jombang. Memungkinkan proses pengajuan, review, dan persetujuan konten sosial media secara terstruktur sebelum dipublikasikan.",
    desc_en:"Social media content approval system for Pesantren Petik Jombang. Enables structured content submission, review, and approval workflow before publishing.",
    desc:"Sistem approval konten media sosial Pesantren Petik Jombang.",
    icon:"⚡",
    screenshot:"",
    features_id:["Alur kerja pengajuan konten","Sistem review multi-level","Notifikasi real-time","Manajemen pengguna & role","Riwayat approval","Dashboard statistik"],
    features_en:["Content submission workflow","Multi-level review system","Real-time notifications","User & role management","Approval history","Statistics dashboard"],
    features:["Alur kerja approval","Review multi-level","Notifikasi","Manajemen role"],
    demo:"https://approvalsosmed.petikjombang.com",
    github:"https://github.com/ilhamhakim463-hash",
    year:"2024"
  },
  {
    id:3,
    title:"SATYA — Sistem Santri Petik Jombang",
    category:"fullstack",
    tags:["Laravel","MySQL","Tailwind","PHP"],
    desc_id:"Sistem informasi manajemen santri untuk Pesantren Petik Jombang. Mengelola data santri, kehadiran, prestasi, dan administrasi pesantren secara digital dan terintegrasi.",
    desc_en:"Student management information system for Pesantren Petik Jombang. Manages student data, attendance, achievements, and pesantren administration digitally and in an integrated manner.",
    desc:"Sistem manajemen santri Pesantren Petik Jombang.",
    icon:"🎓",
    screenshot:"",
    features_id:["Manajemen data santri","Sistem absensi digital","Tracking prestasi","Administrasi pesantren","Laporan & rekap data","Notifikasi wali santri"],
    features_en:["Student data management","Digital attendance system","Achievement tracking","Pesantren administration","Reports & data recap","Parent notifications"],
    features:["Data santri","Absensi digital","Tracking prestasi","Laporan"],
    demo:"https://satya.santripetikjombang.com",
    github:"https://github.com/ilhamhakim463-hash",
    year:"2024"
  },
  {
    id:4,
    title:"SIKOKK — Sistem Informasi Kos",
    category:"fullstack",
    tags:["HTML","CSS","JavaScript","GitHub Pages"],
    desc_id:"Sistem informasi kos-kosan berbasis web yang memudahkan pencarian dan manajemen data kamar kos. Dibangun dengan teknologi web dasar dan di-hosting di GitHub Pages.",
    desc_en:"Web-based boarding house information system that makes it easy to search and manage room data. Built with basic web technologies and hosted on GitHub Pages.",
    desc:"Sistem informasi kos-kosan berbasis web.",
    icon:"🏗",
    screenshot:"",
    features_id:["Pencarian kamar kos","Data fasilitas kamar","Informasi harga & lokasi","Antarmuka yang simpel","Hosting gratis GitHub Pages"],
    features_en:["Room search","Room facilities data","Price & location info","Simple interface","Free GitHub Pages hosting"],
    features:["Pencarian kamar","Data fasilitas","Informasi harga","GitHub Pages"],
    demo:"https://ilhamhakim463-hash.github.io/sikokk/",
    github:"https://github.com/ilhamhakim463-hash/sikokk",
    year:"2024"
  },
];

/* ---- CERTIFICATES ---- */
let CERTIFICATES = [
  {id:"c1",name:"Belajar Dasar Pemrograman Web",issuer:"Dicoding Indonesia",date:"2024-01",credId:"",desc:"Memahami HTML, CSS, dan JavaScript untuk membangun halaman web interaktif.",icon:"🌐"},
  {id:"c2",name:"Belajar Membuat Aplikasi Back-End",issuer:"Dicoding Indonesia",date:"2024-04",credId:"",desc:"Pengembangan back-end menggunakan Node.js, RESTful API, dan database.",icon:"⚙"},
  {id:"c3",name:"Menjadi Front-End Web Developer Expert",issuer:"Dicoding Indonesia",date:"2024-08",credId:"",desc:"Sertifikasi expert front-end modern: PWA, performa, dan aksesibilitas.",icon:"🏆"},
];

/* ---- TESTIMONIALS ---- */
const TESTIMONIALS = [
  {text:"Ilham delivered exceptional work on our e-commerce project. His attention to detail and ability to handle both frontend and backend seamlessly made collaboration incredibly smooth.",name:"Budi Santoso",role:"Founder, TokoBudi.id",initials:"BS"},
  {text:"One of the most reliable developers I've worked with. Clean, well-documented code delivered ahead of schedule. Would absolutely hire again.",name:"Rina Maharani",role:"Product Manager, StartupSBY",initials:"RM"},
  {text:"Ilham transformed our outdated system into a modern, fast web application. His expertise in both design and development is truly rare.",name:"Ahmad Fauzi",role:"CTO, TechVenture",initials:"AF"},
];

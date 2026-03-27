import Image from "next/image";

export default function Introduce({ mounted }) {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6">
        {/* Text Content */}
        <div className="flex-[1.5] text-center md:text-left">
          <p
            className="font-mono text-[18px] text-[var(--accent)] tracking-[0.3em] uppercase mb-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateX(-20px)",
              transition: "all 0.6s 0.1s ease-out",
            }}
          >
            Full Stack Developer
          </p>

          <h1
            className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(30px)",
              transition: "all 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="text-[var(--text)]">Thanapol</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
              Jai-uea
            </span>
          </h1>

          <p
            className="text-[var(--muted)] text-lg max-w-xl leading-relaxed mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s 0.4s",
            }}
          >
            Hi, I'm{" "}
            <span className="font-semibold text-[var(--text)]">Ham</span> —{" "}
            Full-Stack Developer with over 2 years of experience building
            scalable web and mobile applications across multiple domains,
            including{" "}
            <span className="text-[var(--accent2)]">AI-powered platforms</span>{" "}
            and enterprise systems. Skilled in modern frontend technologies such
            as React and Next.js, along with backend development using Node.js
            and relational databases. Proven ability to develop end-to-end
            solutions, integrate APIs, and implement AI features, including
            vector search and local LLMs. Experienced in delivering
            user-focused, high-performance applications while collaborating with
            cross-functional teams. Successfully transitioned into software
            development through intensive technical training, demonstrating
            strong adaptability, fast learning ability, and a commitment to
            continuous improvement.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(10px)",
              transition: "all 0.8s 0.6s",
            }}
          >
            <a
              href="mailto:harukasenpais@gmail.com"
              className="group relative px-8 py-3 bg-[var(--text)] text-[var(--bg)] rounded-full font-bold transition-all hover:scale-105 active:scale-95"
            >
              ✉ Let's Connect
              <div className="absolute inset-0 rounded-full bg-[var(--accent)] blur opacity-0 group-hover:opacity-30 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Avatar Area */}
        <div
          className="flex-1 relative group"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.8)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* กรอบตกแต่งด้านหลังรูป */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] rounded-3xl rotate-6 scale-105 opacity-20 group-hover:rotate-12 transition-transform duration-500" />

            {/* รูปภาพหลัก */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[var(--muted)] bg-[var(--bg)]">
              <Image
                src="/profile.png"
                alt="Thanapol Jai-uea"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Floating Card - อวดสกิลเบาๆ */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--bg)] p-4 rounded-xl border border-[var(--muted)] shadow-2xl hidden md:block animate-bounce-slow">
              <p className="text-xs font-bold text-[var(--accent)]">
                2+ Years Exp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

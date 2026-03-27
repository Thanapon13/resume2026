"use client";

import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Introduce", href: "#introduce" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const isClickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight active section on scroll
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.replace("#", ""));

    const getActiveSection = () => {
      if (isClickingRef.current) return;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }

      // ถ้า Scroll จนสุดหน้า ให้ Active ที่ Contact (อันสุดท้าย) ไว้เสมอ
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 10
      ) {
        current = ids[ids.length - 1];
      }

      setActive(`#${current}`);
    };

    window.addEventListener("scroll", getActiveSection, { passive: true });
    getActiveSection(); // run ครั้งแรกตอน mount
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  const handleClick = (href) => {
    setOpen(false);

    // ล็อคป้องกันไม่ให้ scroll event เปลี่ยน active ระหว่างสมูทสกรอล
    setActive(href);
    isClickingRef.current = true;

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // เลื่อนให้พอดีกับ Navbar เพื่อไม่ให้บังเนื้อหา
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    // ปลดล็อคหลังจากเลื่อนเสร็จ
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 w-full justify-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="font-mono text-xs px-4 py-1.5 rounded-full transition-all"
                style={{
                  color:
                    active === item.href ? "var(--accent3)" : "var(--muted)",
                  background:
                    active === item.href
                      ? "rgba(124,106,247,0.12)"
                      : "transparent",
                  border:
                    active === item.href
                      ? "1px solid rgba(124,106,247,0.3)"
                      : "1px solid transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-full transition-all duration-300 origin-center"
              style={{
                background: "var(--text)",
                transform: open ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                background: "var(--text)",
                width: open ? "0%" : "75%",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-full transition-all duration-300 origin-center"
              style={{
                background: "var(--text)",
                transform: open ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: open ? `${NAV_ITEMS.length * 56}px` : "0px",
            borderTop: open ? "1px solid var(--border)" : "none",
            background: "rgba(10,10,15,0.95)",
            backdropFilter: "blur(16px)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="w-full text-left px-6 py-4 font-mono text-sm transition-colors flex items-center gap-3"
              style={{
                color: active === item.href ? "var(--accent3)" : "var(--muted)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{
                  background:
                    active === item.href ? "var(--accent)" : "var(--border)",
                }}
              />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="h-14" />
    </>
  );
}

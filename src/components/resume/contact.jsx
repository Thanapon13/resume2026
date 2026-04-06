import { useState } from "react";
import Section from "../../components/resume/section";

const contactMeta = {
  1: { href: (title) => `tel:${title.replace(/-/g, "")}`, label: "Phone" },
  2: { href: (title) => `mailto:${title}`, label: "Email", copyable: true },
  3: { href: () => null, label: "Line ID" },
};

export default function Contact({ contact }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, title) => {
    e.preventDefault();
    navigator.clipboard.writeText(title).then(() => {
      setCopiedId(2);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <Section className="mb-20">
      <p className="section-label">Contact</p>
      <div className="flex flex-col md:flex-row gap-4">
        {contact.map((c) => {
          const meta = contactMeta[c.id];
          const href = meta?.href(c.title);
          const isCopyable = meta?.copyable;
          const isCopied = copiedId === c.id;

          const inner = (
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background: "rgba(124, 106, 247, 0.12)",
                  color: "var(--accent)",
                  border: "1px solid rgba(124, 106, 247, 0.25)",
                }}
              >
                {c.icons}
              </div>
              <div className="flex-1">
                <p
                  className="font-mono text-[10px] uppercase tracking-widest mb-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {meta?.label}
                </p>
                <p
                  className="font-mono text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {c.title}
                </p>
              </div>
              {isCopyable && (
                <div
                  className="font-mono text-[10px] px-2 py-1 rounded-md transition-all"
                  style={{
                    background: isCopied
                      ? "rgba(124, 106, 247, 0.25)"
                      : "rgba(124, 106, 247, 0.08)",
                    color: isCopied ? "var(--accent)" : "var(--muted)",
                    border: "1px solid rgba(124, 106, 247, 0.2)",
                  }}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </div>
              )}
            </div>
          );

          if (isCopyable) {
            return (
              <a
                key={c.id}
                href={href}
                onClick={(e) => handleCopy(e, c.title)}
                className="flex-1 project-card group hover:border-[var(--accent)] transition-all cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                {inner}
              </a>
            );
          }

          return href ? (
            <a
              key={c.id}
              href={href}
              target={c.id === 2 ? "_self" : "_blank"}
              rel="noreferrer"
              className="flex-1 project-card group hover:border-[var(--accent)] transition-all"
              style={{ textDecoration: "none" }}
            >
              {inner}
            </a>
          ) : (
            <div key={c.id} className="flex-1 project-card">
              {inner}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

import Section from "../../components/resume/section";

export default function Projects({ projects }) {
  function Tag({ label }) {
    return (
      <span className="px-2 py-0.5 text-xs rounded-full border border-[var(--accent)] text-[var(--accent)] font-mono tracking-wide">
        {label}
      </span>
    );
  }

  return (
    <Section className="mb-20">
      <p className="section-label">Projects</p>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card ${p.highlight ? "highlight md:col-span-2" : ""}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {p.highlight && (
              <span
                className="font-mono text-xs px-2 py-0.5 rounded-full mb-3 inline-block"
                style={{
                  background: "rgba(240,192,96,0.12)",
                  color: "var(--gold)",
                  border: "1px solid rgba(240,192,96,0.3)",
                }}
              >
                ★ Featured
              </span>
            )}
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <h3
                  className="font-display font-700 text-base mb-0.5"
                  style={{ color: "var(--text)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {p.company}
                </p>
              </div>
            </div>
            <p
              className="text-sm mb-3"
              style={{ color: "var(--muted)", lineHeight: 1.6 }}
            >
              {p.desc}
            </p>
            {p.features && (
              <ul className="mb-3 flex flex-col gap-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 font-mono text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>→</span> {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            {p.links && (
              <div className="relative z-10 flex flex-wrap gap-3 mt-4">
                <p
                  className="font-mono text-xs flex items-center"
                  style={{ color: "var(--accent2)" }}
                >
                  Links:
                </p>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs flex items-center gap-1 transition-colors hover:opacity-70 hover:border-b-2 hover:border-[var(--accent2)]"
                    style={{ color: "var(--accent2)" }}
                  >
                    ↗ {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

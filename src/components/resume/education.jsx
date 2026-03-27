import Section from "../../components/resume/section";

export default function Education({ education }) {
  return (
    <Section className="mb-20">
      <p className="section-label">Education</p>
      <div className="flex flex-col gap-6">
        {education.map((e, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex flex-col items-center gap-2 pt-1">
              <div
                className="timeline-dot"
                style={{ background: "var(--muted)", boxShadow: "none" }}
              />
              {i < education.length - 1 && (
                <div
                  className="flex-1 w-px bg-[var(--border)]"
                  style={{ minHeight: 40 }}
                />
              )}
            </div>
            <div className="pb-2">
              <h3
                className="font-display font-600 text-sm mb-0.5"
                style={{ color: "var(--text)" }}
              >
                {e.school}
              </h3>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                {e.degree}
              </p>
              <p
                className="font-mono text-xs"
                style={{ color: "var(--border)" }}
              >
                {e.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

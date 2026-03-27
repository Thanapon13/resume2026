"use client";

import Section from "../../components/resume/section";

export default function Experience({ experiences }) {
  return (
    <Section className="mb-20">
      <p className="section-label text-[18px]">Work Experience</p>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex flex-col items-center gap-2 pt-1">
              <div className="timeline-dot" />
              {i < experiences.length - 1 && (
                <div
                  className="flex-1 w-px bg-[var(--border)]"
                  style={{ minHeight: 40 }}
                />
              )}
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3
                  className="font-display font-700 text-base"
                  style={{ color: "var(--text)" }}
                >
                  {exp.title}
                </h3>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(124,106,247,0.12)",
                    color: "var(--accent3)",
                    border: "1px solid rgba(124,106,247,0.25)",
                  }}
                >
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="font-mono text-xs mt-0.5 text-gray-500">
                {exp.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

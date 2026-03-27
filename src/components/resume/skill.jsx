import { useState } from "react";
import Section from "../../components/resume/section";

export default function Skill({ skills }) {
  const [activeSkill, setActiveSkill] = useState("Frontend");

  return (
    <Section className="mb-20">
      <p className="section-label">Technical Skills</p>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {Object.keys(skills).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveSkill(cat)}
            className={`tab-btn ${activeSkill === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {skills[activeSkill].map((s, i) => (
          <span
            key={s}
            className="skill-pill"
            style={{
              animationDelay: `${i * 40}ms`,
              opacity: 1,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}

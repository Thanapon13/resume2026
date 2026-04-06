"use client";

import { useEffect, useRef, useState } from "react";

import Introduce from "../../components/resume/introduce";
import Experience from "../../components/resume/experienc";
import Skill from "../../components/resume/skill";
import Projects from "../../components/resume/projects";
import Education from "../../components/resume/education";
import Contact from "../../components/resume/contact";
import { CgPhone } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { FaLine } from "react-icons/fa";
import Navbar from "../../components/resume/navbar";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Yojoies Technology Co., Ltd.",
    duration: "2 Years",
    period: "Mar 2024 - Mar 2026",
  },
  {
    title: "Full Stack Developer",
    company: "DEVDEVA Co., Ltd.",
    duration: "4 Months",
    period: "Jul 2023 - Nov 2023",
  },
];

const skills = {
  Frontend: [
    "React (Vite)",
    "Next.js 15",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Radix UI",
    "Material UI",
    "Vercel AI SDK",
    "Tone.js",
    "Bootstrap",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Sequelize",
    "pgvector",
    "JWT",
    "Bcrypt",
    "Ollama",
    "Transformers.js",
    "Multer",
    "Sharp",
    "Nodemailer",
  ],
  Database: ["PostgreSQL", "MySQL"],
  "DevOps & Tools": [
    "Docker",
    "Cloudinary",
    "AWS",
    "Git",
    "pnpm",
    "REST APIs",
    "Figma",
    "Postman",
    "Dataflare",
    "Antigravity",
    "Visual Studio Code",
    "Termius",
  ],
};

const projects = [
  {
    name: "Musical AI Platform",
    company: "Yojoies Technology",
    desc: "AI-powered music generation and chord analysis platform",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "Cloudinary",
      "Ollama",
    ],
    highlight: true,
    features: [
      "Vector similarity search for semantic matching",
      "AI chord recommendation system (3,300+ patterns)",
      "Local LLM integration via Ollama",
      "WAV & MIDI file management",
      "Payment & subscription system",
    ],
  },
  {
    name: "MJM AI",
    company: "Yojoies Technology",
    desc: "AI-powered mobile application available on iOS & Android",
    tags: ["JavaScript", "jQuery", "PostgreSQL", "Docker"],
    features: [
      "Integrated backend APIs with smooth data flow",
      "Containerized deployment using Docker",
      "Database management with PostgreSQL",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/mjm-ai/id6742097032",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.yojoies.mjm_app",
      },
    ],
  },
  {
    name: "MJM Pad",
    company: "Yojoies Technology",
    desc: "Tablet-based application for iOS & Android",
    tags: ["JavaScript", "jQuery", "PostgreSQL", "Docker"],
    features: [
      "Interactive UI and application logic",
      "RESTful API integration with performance optimization",
      "Docker for environment consistency",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/mjm-pad/id6751707171",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.yojoies.mjmpad_android",
      },
    ],
  },
  {
    name: "SolarApp",
    company: "Yojoies Technology",
    desc: "Web application for solar-related services (SPA)",
    tags: ["HTML", "CSS", "jQuery", "iScroll", "Git", "Figma"],
    features: [
      "Single-page application (SPA) architecture",
      "Multi-language functionality",
      "API integration from backend systems",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/th/app/yojosolar/id6470901716?l=th",
      },
    ],
  },
  {
    name: "Corporate Websites",
    company: "Yojoies Technology",
    desc: "yojoies.com & yojosolar.com — Corporate & Solar product websites",
    tags: ["React (Vite)", "Tailwind CSS"],
    links: [
      {
        label: "yojoies.com",
        url: "https://website-yojoies.vercel.app/ABOUTUS",
      },
      {
        label: "yojosolar.com",
        url: "https://website-yojo-solar.vercel.app/ABOUTUS",
      },
    ],
  },
  {
    name: "Asset Management System",
    company: "DEVDEVA Co., Ltd.",
    desc: "Enterprise-grade asset tracking & management system for hospital client",
    tags: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Microsoft SQL Server",
      "Git",
    ],
    features: [
      "QR Code & Barcode scanning",
      "JWT-based authentication",
      "Asset tracking & management",
      "Report generation & printing",
    ],
    links: [
      {
        label: "Git: assetManagement-Frontend",
        url: "https://github.com/Thanapon13/assetManagement-Frontend.git",
      },
      {
        label: "Git: assetManagement-Backend",
        url: "https://github.com/Thanapon13/assetManagement-Backend.git",
      },
    ],
  },

  {
    name: "Project Ecommerce",
    company: "Personal Project 2023",
    desc: "E-commerce website for selling products",
    tags: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Git",
    ],
    features: [""],
    links: [
      {
        label: "Git: Ecommerce-Frontend",
        url: "https://github.com/Thanapon13/ProjectGart-frontend.git",
      },
      {
        label: "Git: Ecommerce-Backend",
        url: "https://github.com/Thanapon13/ProjectGart-backend.git",
      },
    ],
  },

  {
    name: "Project Resume 2026",
    company: "Personal Project 2026",
    desc: "Resume website for selling products",
    tags: ["Next.js 15", "Tailwind CSS", "Git"],
    features: [""],
    links: [
      {
        label: "Git: resume2026",
        url: "https://github.com/Thanapon13/resume2026.git",
      },
    ],
  },
];

const education = [
  {
    school: "CODECAMP THAILAND #13",
    degree: "Full-Stack Web Development",
    period: "Nov 2022 – Mar 2023",
  },
  {
    school: "Burapha University",
    degree:
      "Bachelor's Degree — Computer Graphic Animation, Faculty of Fine and Applied Arts",
    period: "2016 – 2021",
  },
  {
    school: "Kingston Pattaya Vocational College",
    degree: "Vocational — Computer Graphic Animation",
    period: "2012 – 2015",
  },
];

const contact = [
  {
    id: 1,
    title: "063-483-9598",
    icons: <CgPhone />,
  },
  {
    id: 2,
    title: "harukasenpais@gmail.com",
    icons: <TfiEmail />,
  },

  {
    id: 3,
    title: "0968280399",
    icons: <FaLine />,
  },
];

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-col w-full p-10 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="glow-orb w-[500px] h-[500px] top-[-100px] left-[-100px] bg-purple-600 opacity-[0.07]" />
          <div className="glow-orb w-[400px] h-[400px] top-[60vh] right-[-80px] bg-indigo-500 opacity-[0.06]" />
          <div className="glow-orb w-[300px] h-[300px] bottom-[10vh] left-[20%] bg-violet-500 opacity-[0.05]" />
        </div>

        <div id="introduce">
          <Introduce mounted={mounted} />
        </div>

        <div id="experience">
          <Experience experiences={experiences} />
        </div>

        <div id="skills">
          <Skill skills={skills} />
        </div>

        <div id="projects">
          <Projects projects={projects} />
        </div>

        <div id="education">
          <Education education={education} />
        </div>

        <div id="contact">
          <Contact contact={contact} />
        </div>

        <div className="text-center pt-8 border-t border-[var(--border)]">
          <p className="font-mono text-xs">
            Thanapol Jai-uea · Full Stack Developer · 2026
          </p>
        </div>
      </div>
    </>
  );
}

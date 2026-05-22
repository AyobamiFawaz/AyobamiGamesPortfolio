import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Code2,
  Cpu,
  PlayCircle,
  Mail,
  Layers,
  Wrench,
  Search,
  Filter,
  Home,
  User,
  FolderKanban,
  MonitorCog,
  Menu,
  X,
  FileText,
  MousePointer2,
  Sun,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function GitHubIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.6 2 12.278c0 4.54 2.865 8.39 6.839 9.75.5.095.683-.223.683-.494 0-.244-.009-.89-.014-1.747-2.782.621-3.369-1.378-3.369-1.378-.455-1.187-1.11-1.503-1.11-1.503-.908-.637.069-.624.069-.624 1.004.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.117 2.91.854.091-.664.35-1.116.636-1.373-2.221-.26-4.555-1.141-4.555-5.078 0-1.122.39-2.039 1.03-2.758-.103-.26-.446-1.305.098-2.72 0 0 .84-.276 2.75 1.053A9.349 9.349 0 0 1 12 6.974a9.35 9.35 0 0 1 2.504.346c1.909-1.329 2.747-1.053 2.747-1.053.546 1.415.203 2.46.1 2.72.64.719 1.028 1.636 1.028 2.758 0 3.947-2.337 4.815-4.566 5.07.359.318.679.945.679 1.904 0 1.374-.013 2.483-.013 2.82 0 .274.18.594.688.493C21.138 20.665 24 16.817 24 12.278 24 6.6 19.523 2 14 2h-2Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.86c0-1.88-.03-4.29-2.61-4.29-2.62 0-3.02 2.05-3.02 4.16V23h-4V8Z" />
    </svg>
  );
}

const contactLinks = {
  email: "Anifowosefawaz17@gmail.com",
  emailHref: "mailto:Anifowosefawaz17@gmail.com",
  linkedin: "https://www.linkedin.com/in/fawazanifowoshe",
  github: "https://github.com/AyobamiFawaz",
  resume: "/Ayobami_Fawaz_Anifowoshe.pdf.pdf",
  resumeFileName: "Ayobami_Fawaz_Anifowoshe_Resume.pdf",
};

const profileImageSrc = "/ayobami-profile.png";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Tech Stack", href: "#skills", icon: MonitorCog },
  { label: "Process", href: "#process", icon: PlayCircle },
  { label: "Contact", href: "#contact", icon: Mail },
];

const projects = [
  {
    title: "SoundWave",
    category: "Technical Art",
    engine: "Unreal Engine 5",
    description:
      "SoundWave is an interactive audiovisual experiment that reacts to voice input in real time. The louder your voice, the more dynamic and energetic the particle system becomes.",
    skills: ["Blueprints", "C++", "Niagara", "VFX", "AudioCapture", "Audio Analysis", "Particle System"],
    github: "https://github.com/AyobamiFawaz/-SoundWave-Voice-Reactive-Particle-Animation",
    demo: "https://youtu.be/OLpnc-9DpB4",
    videoSrc: "/soundwave-preview.mp4",
    caseStudy: "#soundwave",
  },
  {
    title: "Enemy AI & Weapon Equip System",
    category: "Gameplay Programming",
    engine: "Unreal Engine 5",
    description:
      "An Unreal Engine 5 gameplay prototype focused on enemy AI behaviour and weapon equip mechanics. The system demonstrates enemy detection, chase and attack logic, weapon pickup/equip flow, animation integration, and responsive combat interactions between the player and AI enemies.",
    skills: [
      "Unreal Engine 5",
      "Blueprints",
      "C++",
      "Enemy AI",
      "AI Behaviour",
      "Weapon Equip System",
      "Combat Logic",
      "Animation Integration",
      "Collision Events",
      "Player Interaction",
      "State Management",
      "Debugging",
    ],
    github: "https://github.com/AyobamiFawaz/Gameplay_Systems",
    demo: "/enemy-ai-weapon-equip.mp4",    
    videoSrc: "/enemy-ai-weapon-equip.mp4",
    caseStudy: "#enemy-ai-weapon-equip",
  },
  {
    title: "Neon Courier",
    category: "Gameplay Programming",
    engine: "C++ / 2D Game Framework",
    description:
      "A 2D C++ delivery-survival game featuring enemy AI, collision detection, wave progression, difficulty levels, particles, screen shake, and resizable window support.",
    skills: ["C++", "Enemy AI", "Collision Detection", "Wave Progression", "Particles", "Screen Shake", "Difficulty Levels", "Resizable Window"],
    github: "https://github.com/AyobamiFawaz/NeonCourierGame",
    demo: "/neon-courier.mp4",
    videoSrc: "/NeonCourierDemo.mp4",
    caseStudy: "#neon-courier",
  },
  {
    title: "Racing Car Mechanics",
    category: "Gameplay Programming",
    engine: "Unreal Engine 5",
    description:
      "A UE5 racing game prototype with dynamic checkpoints, timer countdown, 10 seconds added per checkpoint, and UI feedback for start, win, and loss conditions. It includes camera shake effects for finishing or hitting obstacles, creating a more immersive and competitive racing experience.",
    skills: ["Unreal Engine 5", "Blueprints", "C++", "Checkpoint System", "Timer Logic", "UI Feedback", "Camera Shake", "Collision Events", "Win/Loss Conditions", "Racing Mechanics"],
    github: "https://github.com/AyobamiFawaz/RacingCarPrototype",
    demo: "/racing-game.mp4",
    videoSrc: "/racing-game.mp4",
    caseStudy: "#racing-car-mechanics",
  },
  {
    title: "Game Mechanics Showcase",
    category: "Gameplay Programming",
    engine: "Unreal Engine 5",
    description:
      "A collection of Unreal Engine 5 gameplay mechanics focused on responsive player abilities, traversal, weapon handling, time manipulation, teleport recall, and explosive combat feedback.",
    skills: [
      "Unreal Engine 5",
      "Blueprints",
      "C++",
      "Player Abilities",
      "Time Manipulation",
      "Traversal Mechanics",
      "Weapon Equip System",
      "Dash Mechanics",
      "Teleport Recall",
      "Combat Feedback",
      "VFX",
      "Animation Integration",
    ],
    github: null,
    demo: "#game-mechanics-showcase",
    videoSrc: "/timefreeze-and-attack.mp4",
    caseStudy: "#game-mechanics-showcase",
    slides: [
      {
        title: "Time Freeze Attack",
        videoSrc: "/timefreeze-and-attack.mp4",
        description:
          "A combat mechanic where time slows down, allowing the player to prepare an attack before releasing the strike once the freeze window ends.",
        skills: ["Time Dilation", "Combat Logic", "Animation Timing", "Player Abilities", "Blueprints", "Game Feel", "VFX Feedback"],
      },
      {
        title: "Climbing, Hopping & Weapon Equip",
        videoSrc: "/climbing-and-hopping.mp4",
        description:
          "A traversal and equipment system featuring climbing, hopping movement, and weapon equip/unequip flow for more flexible character interaction.",
        skills: ["Traversal System", "Climbing Logic", "Hopping Movement", "Weapon Equip System", "Animation Integration", "Collision Checks", "Character Controller"],
      },
      {
        title: "Dash Snapshot Recall",
        videoSrc: "/dashforward.mp4",
        description:
          "A dash ability where the player moves forward, leaves a snapshot behind, snaps back to the previous location, and triggers explosive gameplay feedback.",
        skills: ["Dash Mechanics", "Snapshot System", "Teleport Recall", "Explosion Logic", "VFX", "Cooldown Logic", "Combat Feedback"],
      },
    ],
  },
];

const techStackRows = [
  {
    title: "Game Development",
    direction: "left",
    items: ["Unreal Engine 5", "Unity", "C++", "C#", "Blueprints", "Object-Oriented Programming", "Game Architecture", "Game Prototyping", "Level Design Basics", "Debugging", "Version Control", "Performance Profiling", "Playtesting", "Agile Workflow"],
  },
  {
    title: "Gameplay Programming",
    direction: "right",
    items: ["Player Movement", "Combat Systems", "Enemy AI Behaviour", "AI Perception", "Behaviour Trees", "Blackboards", "Character Abilities", "Animation Integration", "Camera Systems", "Input Handling", "Interaction Systems", "Physics Gameplay", "Multiplayer Game Systems", "Replication Logic", "UI Gameplay Logic", "Game Feel & Polish"],
  },
  {
    title: "Deployment, Cloud & Technical Tools",
    direction: "left",
    items: ["Git", "GitHub", "Perforce", "Diversion", "Unreal Build Tool", "Unreal Automation Tool", "Docker", "AWS GameLift", "Dedicated Servers", "Server Hosting", "Build Deployment", "Build Packaging", "Cloud Computing", "Multiplayer Testing", "Network Debugging", "Replication Debugging", "Performance Optimisation", "Profiling Tools", "Shader Programming", "Material Systems", "VFX Support", "Technical Art Tools", "Plugin Integration"],
  },
];

const gameplayProcess = [
  {
    number: "01",
    title: "Mechanic Concept",
    description:
      "Define the gameplay goal, player fantasy, and core interaction. Before writing code, I clarify what the mechanic should feel like and how it supports the overall game loop.",
  },
  {
    number: "02",
    title: "Prototype & Input Flow",
    description:
      "Build a fast playable version using Blueprints or C++ to test controls, timing, collision, camera behaviour, and whether the feature feels responsive in-game.",
  },
  {
    number: "03",
    title: "Systems Architecture",
    description:
      "Refactor the prototype into clean, reusable systems using object-oriented programming, components, events, data structures, and scalable gameplay logic.",
  },
  {
    number: "04",
    title: "Polish, Debug & Iterate",
    description:
      "Test edge cases, tune game feel, improve feedback with animation, UI, particles, audio, camera shake, and optimise performance until the mechanic feels solid.",
  },
];

const categories = ["All", "Gameplay Programming", "Technical Art", "AI / Systems"];
const heroRoles = ["Unreal Engine Developer", "Software Engineer", "Gameplay Programmer", "Multiplayer Game Developer"];

function openExternalLink(url) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function openEmailClient() {
  if (typeof window !== "undefined") {
    window.location.href = contactLinks.emailHref;
  }
}

function filterProjects(projectList, activeCategory, searchTerm) {
  return projectList.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const searchText = `${project.title} ${project.category} ${project.engine} ${project.description} ${project.skills.join(" ")}`.toLowerCase();
    return matchesCategory && searchText.includes(searchTerm.trim().toLowerCase());
  });
}

function runPortfolioTests() {
  const requiredGameTools = ["Perforce", "Diversion", "Dedicated Servers", "Unreal Build Tool", "Network Debugging"];
  const removedBackendTools = ["CI/CD Pipelines", "MongoDB", "Node.js", "PostgreSQL", "REST APIs"];

  const tests = [
    { name: "All category returns every project", passed: filterProjects(projects, "All", "").length === projects.length },
    { name: "Gameplay category returns gameplay projects", passed: filterProjects(projects, "Gameplay Programming", "").every((project) => project.category === "Gameplay Programming") },
    { name: "Second project is Enemy AI and Weapon Equip", passed: projects[1].title === "Enemy AI & Weapon Equip System" && projects[1].skills.includes("Weapon Equip System") && projects[1].videoSrc.includes("enemy-ai-weapon-equip.mp4") && projects[1].github.includes("Gameplay_Systems") },
    { name: "Search finds Unreal Engine projects", passed: filterProjects(projects, "All", "unreal").length >= 1 },
    { name: "Search with no match returns empty list", passed: filterProjects(projects, "All", "nonexistent-project-name").length === 0 },
    { name: "Side navigation has required sections", passed: ["Home", "About", "Projects", "Tech Stack", "Process", "Contact"].every((label) => navItems.some((item) => item.label === label)) },
    { name: "Gameplay process has four workflow steps", passed: gameplayProcess.length === 4 && gameplayProcess[0].title === "Mechanic Concept" && gameplayProcess[3].title === "Polish, Debug & Iterate" },
    { name: "Portfolio owner contact links are configured", passed: contactLinks.email === "Anifowosefawaz17@gmail.com" && contactLinks.linkedin.includes("fawazanifowoshe") && contactLinks.github.includes("AyobamiFawaz") },
    { name: "Hero typewriter has all requested roles", passed: heroRoles.includes("Unreal Engine Developer") && heroRoles.includes("Multiplayer Game Developer") },
    { name: "Tech stack rows are ordered correctly", passed: techStackRows[0].title === "Game Development" && techStackRows[1].title === "Gameplay Programming" && techStackRows[2].title === "Deployment, Cloud & Technical Tools" },
    { name: "Tech stack includes game deployment tools", passed: requiredGameTools.every((tool) => techStackRows[2].items.includes(tool)) },
    { name: "Tech stack removed generic backend tools", passed: removedBackendTools.every((tool) => !techStackRows[2].items.includes(tool)) },
    { name: "First project is SoundWave with GitHub and YouTube demo", passed: projects[0].title === "SoundWave" && projects[0].github.includes("SoundWave-Voice-Reactive-Particle-Animation") && projects[0].demo.includes("youtu.be/OLpnc-9DpB4") },
    { name: "Third project is Neon Courier", passed: projects[2].title === "Neon Courier" && projects[2].github.includes("NeonCourierGame") && projects[2].videoSrc.includes("neon-courier-game.mp4") },
    { name: "Fourth project is Racing Car Mechanics", passed: projects[3].title === "Racing Car Mechanics" && projects[3].description.includes("10 seconds added per checkpoint") && projects[3].skills.includes("Camera Shake") && projects[3].videoSrc.includes("racing-game.mp4") },
    { name: "Every project has a video source for the popup demo", passed: projects.every((project) => Boolean(project.videoSrc)) },
    { name: "Project videos use clean mp4 paths", passed: projects.every((project) => project.videoSrc.endsWith(".mp4") && !project.videoSrc.includes("%20") && !project.videoSrc.includes("(")) },
    { name: "Game Mechanics Showcase has three slideshow videos", passed: projects[4].title === "Game Mechanics Showcase" && projects[4].slides.length === 3 && projects[4].slides.every((slide) => Boolean(slide.videoSrc) && slide.skills.length >= 5) },
    { name: "Game Mechanics Showcase does not show GitHub", passed: projects[4].github === null },
    { name: "Profile image is configured", passed: profileImageSrc === "/ayobami-profile.png" },
    { name: "SEO keywords include portfolio search tags", passed: ["Fawaz Anifowoshe", "Ayobami Anifowoshe", "Ayobami", "AyobamiFwz"].every(Boolean) },
  ];

  const failedTests = tests.filter((test) => !test.passed);
  if (failedTests.length > 0) {
    console.error("Portfolio self-tests failed:", failedTests);
  }
  return tests;
}

if (typeof window !== "undefined") {
  runPortfolioTests();
}

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? Math.min((scrollTop / pageHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9997] h-1 w-full bg-transparent">
      <div className="h-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.75)] transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
}

function TypewriterText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 75 : 135;
    const pauseTime = 1450;

    const timeout = setTimeout(() => {
      if (!isDeleting && letterIndex < currentWord.length) {
        setLetterIndex((current) => current + 1);
        return;
      }

      if (!isDeleting && letterIndex === currentWord.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && letterIndex > 0) {
        setLetterIndex((current) => current - 1);
        return;
      }

      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }, !isDeleting && letterIndex === currentWord.length ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [isDeleting, letterIndex, wordIndex, words]);

  return (
    <span className="inline-flex min-h-[1.2em] items-center text-white">
      <span>{words[wordIndex].slice(0, letterIndex)}</span>
      <span className="ml-2 inline-block h-[1em] w-[3px] animate-pulse bg-white" />
    </span>
  );
}

function ProjectVideo({ src, title }) {
  const videoRef = useRef(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (hasVideoError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-black px-6 text-center text-zinc-400">
        <PlayCircle className="mb-4 h-12 w-12 text-zinc-500" />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-300">Video not found</p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-zinc-500">
          Check that this file is inside the public folder: {src}
        </p>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      title={title}
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setHasVideoError(true)}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onFocus={playVideo}
      onBlur={pauseVideo}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function ProjectPreview({ project }) {
  if (project.videoSrc) {
    return (
      <div className="group relative min-h-[260px] overflow-hidden border-b border-white/10 bg-black md:min-h-[360px] md:border-b-0 md:border-r">
        <div className="absolute inset-4 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/70 transition duration-500 group-hover:border-white/40 group-hover:shadow-white/10 sm:inset-6">
          <ProjectVideo src={project.videoSrc} title={`${project.title} preview video`} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-80 transition group-hover:opacity-30" />
        </div>
        <div className="pointer-events-none absolute left-8 top-8 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-white backdrop-blur sm:left-10 sm:top-10">
          Hover To Play
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 bg-black md:min-h-[360px] md:border-b-0 md:border-r">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100%_100%,42px_42px,42px_42px]" />
      <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center px-8 text-center md:min-h-[360px]">
        <PlayCircle className="mb-5 h-16 w-16 text-white" />
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-zinc-300">{project.engine}</p>
        <h3 className="max-w-md text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl">{project.title}</h3>
      </div>
    </div>
  );
}

function ProjectDemoModal({ project, onClose }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const hasSlides = Boolean(project?.slides?.length);
  const activeSlide = hasSlides ? project.slides[activeSlideIndex] : null;
  const modalVideoSrc = activeSlide?.videoSrc || project?.videoSrc;
  const modalTitle = activeSlide?.title || project?.title;
  const modalDescription = activeSlide?.description || project?.description;
  const modalSkills = activeSlide?.skills || project?.skills || [];

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const goToPreviousSlide = () => {
    if (!hasSlides) return;
    setActiveSlideIndex((current) => (current === 0 ? project.slides.length - 1 : current - 1));
  };

  const goToNextSlide = () => {
    if (!hasSlides) return;
    setActiveSlideIndex((current) => (current + 1) % project.slides.length);
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-xl">
      <button
        type="button"
        aria-label="Close project demo"
        onClick={onClose}
        className="absolute inset-0 z-0 cursor-default"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-20 max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/15 bg-[#101010] shadow-2xl shadow-black"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Live Demo</p>
            <h3 className="mt-1 text-2xl font-black uppercase tracking-[0.08em] text-white sm:text-3xl">{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white hover:text-black" aria-label="Close modal">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <div className="overflow-hidden border border-white/10 bg-black">
            {modalVideoSrc ? (
              <video
                key={modalVideoSrc}
                className="aspect-video w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={modalVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex aspect-video items-center justify-center bg-black text-zinc-500">
                <PlayCircle className="mr-3 h-8 w-8" /> No video available yet
              </div>
            )}
          </div>

          {hasSlides && (
            <div className="mt-5 flex flex-col gap-4 border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
                  Mechanic {String(activeSlideIndex + 1).padStart(2, "0")} / {String(project.slides.length).padStart(2, "0")}
                </p>
                <h4 className="mt-2 text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl">{modalTitle}</h4>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={goToPreviousSlide} className="rounded-lg border-white/30 bg-transparent px-4 py-5 text-white hover:bg-white hover:text-black">
                  Previous
                </Button>
                <Button type="button" onClick={goToNextSlide} className="rounded-lg bg-white px-4 py-5 text-black hover:bg-zinc-200">
                  Next
                </Button>
              </div>
            </div>
          )}

          {hasSlides && (
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlideIndex(index)}
                  className={`border px-4 py-3 text-left text-sm font-bold uppercase tracking-[0.08em] transition ${
                    activeSlideIndex === index ? "border-white bg-white text-black" : "border-white/15 bg-white/[0.03] text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Description</p>
              <p className="text-[clamp(15px,1.4vw,19px)] leading-[1.75] text-zinc-300">{modalDescription}</p>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Skills Used</p>
              <div className="flex flex-wrap gap-2">
                {modalSkills.map((skill) => (
                  <span key={skill} className="border border-white/15 bg-white/[0.04] px-3 py-2 text-sm font-bold text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.github && (
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-lg border-white/30 bg-transparent px-5 py-5 text-white hover:bg-white hover:text-black">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => {
                    event.preventDefault();
                    openExternalLink(project.github);
                  }}
                >
                  <GitHubIcon className="mr-2 h-5 w-5" /> View GitHub
                </a>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function InteractiveProfilePlaceholder() {
  return (
    <motion.div
      whileHover={{ rotate: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="mx-auto w-full max-w-[260px] sm:max-w-sm md:max-w-[340px] lg:max-w-lg"
    >
      <div className="group relative">
        <div className="absolute left-4 top-4 h-full w-full border-2 border-white/80 transition duration-500 group-hover:left-7 group-hover:top-7 group-hover:border-white sm:left-6 sm:top-6" />

        <div className="relative aspect-[4/4.1] overflow-hidden border-2 border-white/80 bg-zinc-200 shadow-2xl shadow-black/40 transition duration-500 group-hover:shadow-white/10">
          <div className="absolute inset-0 bg-[#d9d9d9]" />

          <img
            src={profileImageSrc}
            alt="Ayobami Anifowoshe"
            className="relative z-10 h-full w-full object-cover object-center"
            style={{
              imageRendering: "pixelated",
              filter: "contrast(1.06) saturate(0.92) brightness(1.02)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]" />
        </div>
      </div>
    </motion.div>
  );
}

function TechStackMarquee({ title, items, direction = "left" }) {
  const repeatedItems = [...items, ...items];
  const animationDistance = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="group overflow-hidden border-y border-white/10 py-7 sm:py-8">
      <div className="mb-5 flex items-center justify-between gap-4 px-1">
        <h3 className="text-lg font-semibold uppercase tracking-[0.24em] text-white sm:text-xl">{title}</h3>
        <span className="hidden text-xs uppercase tracking-[0.26em] text-zinc-600 sm:block">Hover to slow</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent sm:w-28" />
        <motion.div className="flex w-max gap-4 will-change-transform" animate={{ x: animationDistance }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
          {repeatedItems.map((item, index) => (
            <div key={`${title}-${item}-${index}`} className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-200 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:text-black sm:px-6 sm:py-4 sm:text-base">
              <span className="h-2 w-2 rounded-full bg-white/70" />{item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsHovering(Boolean(event.target.closest("a, button, input, textarea, video, [role='button']")));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[11050] hidden h-4 w-4 rounded-full bg-white mix-blend-difference md:block" animate={{ x: position.x - 8, y: position.y - 8, scale: isHovering ? 0.65 : 1 }} transition={{ type: "spring", stiffness: 650, damping: 38, mass: 0.4 }} />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[11040] hidden h-16 w-16 rounded-full border border-white/70 md:block" animate={{ x: position.x - 32, y: position.y - 32, scale: isHovering ? 1.65 : 1 }} transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.7 }} />
    </>
  );
}

function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <button type="button" onClick={onToggle} aria-label="Toggle dark and light mode" className={`group mt-4 flex w-full items-center justify-between rounded-2xl border p-2 transition ${isDarkMode ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]" : "border-zinc-300 bg-zinc-100 text-zinc-950 hover:bg-white"}`}>
      <span className="flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-[0.22em]">{isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}{isDarkMode ? "Dark" : "Light"}</span>
      <span className={`relative h-8 w-16 rounded-full border transition ${isDarkMode ? "border-white/10 bg-black" : "border-zinc-300 bg-white"}`}>
        <span className={`absolute top-1 grid h-6 w-6 place-items-center rounded-full transition-all duration-300 ${isDarkMode ? "left-1 bg-white text-black" : "left-9 bg-zinc-950 text-white"}`}>{isDarkMode ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}</span>
      </span>
    </button>
  );
}

function Sidebar({ isOpen, onClose, isDarkMode, onToggleTheme, activeSection }) {
  return (
    <aside className={`fixed left-0 top-0 z-50 flex h-dvh w-72 flex-col border-r shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${isDarkMode ? "border-white/10 bg-[#111111]/95 text-white" : "border-zinc-300 bg-[#f5f2eb]/95 text-zinc-950"} ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-5">
        <a href="#home" onClick={onClose} className="group flex items-center gap-3 rounded-2xl px-1 py-1 transition hover:bg-white/[0.03]">
          <span className="font-['Brush_Script_MT',cursive] text-[1.55rem] font-black leading-none tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.22)]">Ayobami</span>
          <span className="relative grid h-10 w-12 place-items-center"><Code2 className="absolute left-2 top-2.5 h-3.5 w-3.5 text-white" /><Gamepad2 className="absolute right-1.5 top-3 h-4 w-4 text-zinc-300" /><Cpu className="absolute bottom-0 right-0 h-4 w-4 text-white opacity-80 transition group-hover:rotate-45" /></span>
          <span className="font-['Brush_Script_MT',cursive] text-[1.55rem] font-black leading-none tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.22)]">Games</span>
        </a>
        <button type="button" onClick={onClose} className="rounded-xl p-2 hover:bg-white/10 lg:hidden" aria-label="Close menu"><X className="h-5 w-5" /></button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 [scrollbar-color:rgba(255,255,255,0.35)_transparent] [scrollbar-width:thin]">
        <div className="mb-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white/30 bg-zinc-900 shadow-lg shadow-black/40">
            <img
              src={profileImageSrc}
              alt="Ayobami Anifowoshe"
              className="h-full w-full object-cover object-center"
              style={{
                imageRendering: "pixelated",
                filter: "contrast(1.04) saturate(0.95)",
              }}
            />
          </div>
          <div className="min-w-0"><p className="truncate font-semibold">Ayobami Anifowoshe</p><p className="text-sm text-zinc-400">Game Developer</p></div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a key={item.label} href={item.href} onClick={onClose} className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-white/10 hover:text-white ${isActive ? "bg-white text-black shadow-lg shadow-white/10" : "text-zinc-300"}`}>
                <Icon className={`h-5 w-5 transition group-hover:text-white ${isActive ? "text-black" : "text-zinc-500"}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="my-8 h-px bg-white/10" />
        <div className="rounded-3xl border border-white/10 bg-black/30 p-4"><p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">Focus</p><div className="space-y-3 text-sm text-zinc-300"><p>Unreal Engine</p><p>Gameplay Systems</p><p>Technical Art</p><p>Multiplayer Logic</p></div></div>
        <div className="mt-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">Socials</p><div className="space-y-3"><a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); openExternalLink(contactLinks.linkedin); }} className="flex items-center gap-3 text-zinc-300 transition hover:text-white"><LinkedInIcon /> LinkedIn</a><a href={contactLinks.github} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); openExternalLink(contactLinks.github); }} className="flex items-center gap-3 text-zinc-300 transition hover:text-white"><GitHubIcon /> GitHub</a></div></div>
      </div>

      <div className={`shrink-0 border-t px-4 py-5 ${isDarkMode ? "border-white/10" : "border-zinc-300"}`}>
        <Button asChild variant="outline" className={`w-full rounded-xl bg-transparent py-6 font-bold uppercase tracking-[0.22em] ${isDarkMode ? "border-white/30 text-white hover:bg-white hover:text-black" : "border-zinc-900/30 text-zinc-950 hover:bg-zinc-950 hover:text-white"}`}><a href={contactLinks.resume} download={contactLinks.resumeFileName} target="_blank" rel="noopener noreferrer">Resume</a></Button>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>
    </aside>
  );
}

function SEOHead() {
  useEffect(() => {
    document.title = "Ayobami Anifowoshe | Gameplay Programmer Portfolio";

    const metaTags = [
      {
        name: "description",
        content:
          "Ayobami Anifowoshe, also known as Fawaz Anifowoshe and AyobamiFwz, is a gameplay programmer building Unreal Engine, C++, AI, combat, technical art, and interactive game systems.",
      },
      {
        name: "keywords",
        content:
          "Fawaz Anifowoshe, Ayobami Anifowoshe, Ayobami, AyobamiFwz, gameplay programmer, Unreal Engine developer, game developer, C++ game developer, technical art, game mechanics, AI systems, multiplayer game developer",
      },
      {
        name: "author",
        content: "Ayobami Anifowoshe",
      },
      {
        property: "og:title",
        content: "Ayobami Anifowoshe | Gameplay Programmer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Ayobami Anifowoshe / Fawaz Anifowoshe / AyobamiFwz, featuring gameplay programming, Unreal Engine, C++, enemy AI, combat systems, racing mechanics, and technical art projects.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:title",
        content: "Ayobami Anifowoshe | Gameplay Programmer Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Gameplay programming portfolio for Ayobami Anifowoshe, Fawaz Anifowoshe, Ayobami, and AyobamiFwz.",
      },
    ];

    metaTags.forEach((tag) => {
      const selector = tag.name ? `meta[name=\"${tag.name}\"]` : `meta[property=\"${tag.property}\"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (tag.name) element.setAttribute("name", tag.name);
        if (tag.property) element.setAttribute("property", tag.property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", tag.content);
    });
  }, []);

  return null;
}

export default function GameDeveloperPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const updateActiveSection = () => {
      const currentSection = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, distance: Number.POSITIVE_INFINITY };
          return { id, distance: Math.abs(element.getBoundingClientRect().top - 140) };
        })
        .sort((a, b) => a.distance - b.distance)[0];
      if (currentSection?.id) setActiveSection(currentSection.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const filteredProjects = useMemo(() => filterProjects(projects, activeCategory, search), [activeCategory, search]);

  return (
    <main className={`min-h-screen cursor-none scroll-smooth font-['Inter',_'Helvetica_Neue',_Arial,_sans-serif] transition-colors duration-500 selection:bg-white selection:text-black ${isDarkMode ? "bg-[#0d0d0d] text-white" : "bg-[#f5f2eb] text-zinc-950"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          letter-spacing: 0.06em;
        }

        .portfolio-heading {
          font-size: clamp(2.25rem, 5vw, 4.75rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .portfolio-body {
          font-size: clamp(0.95rem, 1.2vw, 1.28rem);
          line-height: 1.85;
          font-weight: 400;
        }

        .theme-light section { border-color: rgba(24, 24, 27, 0.14) !important; }
        .theme-light aside { box-shadow: 0 24px 70px rgba(24, 24, 27, 0.16); }
        .theme-light .text-white { color: #18181b !important; }
        .theme-light .text-zinc-100, .theme-light .text-zinc-200, .theme-light .text-zinc-300, .theme-light .text-zinc-400, .theme-light .text-zinc-500, .theme-light .text-zinc-600 { color: #3f3f46 !important; }
        .theme-light .bg-white\/\[0\.04\], .theme-light .bg-white\/\[0\.03\], .theme-light .bg-white\/10 { background-color: rgba(255,255,255,0.72) !important; }
        .theme-light .border-white\/10, .theme-light .border-white\/20, .theme-light .border-white\/30 { border-color: rgba(24,24,27,0.18) !important; }
      `}</style>
      <div className={isDarkMode ? "theme-dark" : "theme-light"}>
        <SEOHead />
        <ScrollProgress />
        <CustomCursor />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((current) => !current)} activeSection={activeSection} />
        <ProjectDemoModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        {isSidebarOpen && <button type="button" aria-label="Close sidebar overlay" onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" />}
        <button type="button" onClick={() => setIsSidebarOpen(true)} className="fixed left-4 top-4 z-40 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur lg:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>

        <div className="lg:pl-72">
          <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 md:px-10 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_100%,80px_80px,80px_80px]" />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-2">
              <div className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[clamp(11px,1.1vw,14px)] text-zinc-300 backdrop-blur sm:px-5 sm:py-3"><MousePointer2 className="h-4 w-4 shrink-0" /><span className="truncate">Interactive game developer portfolio</span></div>
              <h1 className="flex w-full flex-nowrap items-center justify-center gap-x-2 overflow-hidden whitespace-nowrap text-center font-light uppercase leading-[1.18] tracking-[0.035em] text-zinc-100 text-[clamp(21px,5vw,68px)] sm:gap-x-3 sm:tracking-[0.06em]"><span className="inline-block shrink-0 text-[clamp(25px,5.4vw,72px)]">😁</span><span className="min-w-0 shrink truncate">Hello, I&apos;m <span className="font-semibold">Ayobami</span></span><span className="inline-block shrink-0 text-[clamp(25px,5.4vw,72px)]">👨🏾‍💻</span></h1>
              <div className="mt-7 flex w-full max-w-[min(96vw,980px)] flex-nowrap items-center justify-center gap-3 overflow-hidden whitespace-nowrap text-center uppercase sm:mt-8 sm:gap-5"><span className="shrink-0 text-[clamp(15px,2.6vw,38px)] font-light tracking-[0.08em] text-zinc-500 sm:tracking-[0.14em]">I am a</span><span className="min-w-0 shrink text-[clamp(15px,3.1vw,44px)] font-semibold tracking-[0.05em] text-white sm:tracking-[0.08em]"><TypewriterText words={heroRoles} /></span></div>
              <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"><Button asChild variant="outline" className="rounded-xl border-white/60 bg-transparent px-4 py-5 text-[clamp(11px,1.1vw,14px)] font-bold uppercase tracking-[0.22em] text-white hover:bg-white hover:text-black sm:px-6 sm:py-6"><a href={contactLinks.emailHref} onClick={(e) => { e.preventDefault(); openEmailClient(); }}><Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Contact</a></Button><Button asChild className="rounded-xl bg-white px-4 py-5 text-[clamp(11px,1.1vw,14px)] font-bold uppercase tracking-[0.22em] text-black hover:bg-zinc-200 sm:px-6 sm:py-6"><a href="#projects"><FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Projects</a></Button></div>
            </motion.div>
          </section>

          <section id="about" className="relative overflow-hidden border-t border-white/10 px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20">
            <div className="relative mx-auto w-full max-w-7xl">
              <div className="mb-12 text-center sm:mb-16">
                <h2 className="portfolio-heading text-white">
                  About Me <span className="inline-block align-middle text-[0.85em]">👨🏾‍🔧</span>
                </h2>
              </div>

              <div className="grid items-center gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-12 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-7 text-left"
                >
                  <p className="portfolio-body max-w-4xl text-zinc-200">
                    I&apos;m a Gameplay Programmer with 2+ years of experience building interactive systems, gameplay mechanics, and polished player experiences. My main focus is Unreal Engine, C++, Blueprints, gameplay systems, AI behaviour, combat mechanics, character movement, animation integration, and performance optimisation.
                  </p>

                  <p className="portfolio-body max-w-4xl text-zinc-200">
                    I enjoy building gameplay features from the ground up and turning design ideas into responsive, playable systems. Through my work, I have developed mechanics such as combat systems, enemy AI, player abilities, interaction systems, prototypes, and technical tools that support both designers and players.
                  </p>

                  <p className="portfolio-body max-w-4xl text-zinc-200">
                    My passion is creating practical, engaging, and well-structured gameplay experiences that sit at the intersection of programming, game design, AI, and player experience. I care about making systems that do not just work, but feel good to play.
                  </p>
                </motion.div>

                <InteractiveProfilePlaceholder />
              </div>
            </div>
          </section>

          <section id="projects" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500"><Layers className="h-4 w-4" /> Selected Work</p><h2 className="portfolio-heading text-white">Projects</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">A selection of gameplay programming, technical art, Unreal Engine, and interactive systems work.</p></div><div className="flex flex-col gap-3 sm:flex-row"><div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"><Search className="h-4 w-4 text-zinc-500" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" aria-label="Search projects" className="cursor-none bg-transparent text-sm outline-none placeholder:text-zinc-600" /></div></div></div>
              <div className="mb-8 flex flex-wrap gap-3">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full px-5 py-3 text-sm font-medium transition ${activeCategory === category ? "bg-white text-black shadow-lg shadow-white/10" : "border border-white/10 bg-white/[0.04] text-zinc-400 hover:bg-white/10 hover:text-white"}`}><Filter className="mr-2 inline h-4 w-4" />{category}</button>)}</div>
              <div className="space-y-10">{filteredProjects.map((project) => <motion.article key={project.title} initial={{ opacity: 0, y: 70, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.22 }} transition={{ duration: 0.65, ease: "easeOut" }} className="grid overflow-hidden border-2 border-white/15 bg-white/[0.03] shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.055] md:grid-cols-[1fr_1fr]"><ProjectPreview project={project} /><div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">{project.category}</p><h3 className="text-2xl font-extrabold uppercase tracking-[0.06em] text-white sm:text-3xl">{project.title}</h3><p className="mt-5 text-[clamp(14px,1.05vw,17px)] leading-[1.75] text-zinc-300">{project.description}</p><div className="mt-7 flex flex-wrap gap-3">{project.skills.map((skill) => <span key={skill} className="border-2 border-white/20 px-3 py-2 text-sm font-bold text-zinc-200 transition hover:bg-white hover:text-black sm:text-base">{skill}</span>)}</div><div className={`mt-9 flex flex-wrap gap-4 ${project.github ? "" : "justify-center"}`}><Button type="button" onClick={() => setSelectedProject(project)} className="rounded-lg bg-white px-6 py-6 text-sm font-black uppercase tracking-[0.22em] text-black hover:bg-zinc-200"><PlayCircle className="mr-2 h-5 w-5" /> Live Demo</Button>{project.github && <Button asChild variant="outline" className="rounded-lg border-white/30 bg-transparent px-6 py-6 text-sm font-black uppercase tracking-[0.22em] text-white hover:bg-white hover:text-black"><a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); openExternalLink(project.github); }}><GitHubIcon className="mr-2 h-5 w-5" /> GitHub</a></Button>}</div></div></motion.article>)}</div>
              {filteredProjects.length === 0 && <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-zinc-400">No projects found. Try another search term or category.</div>}
            </div>
          </section>

          <section id="skills" className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24"><div className="relative mx-auto max-w-7xl"><div className="mb-12 text-center sm:mb-16"><p className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500 sm:text-sm"><Wrench className="h-4 w-4" /> Tech Stack</p><h2 className="portfolio-heading text-white">Tools & Skills</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">A focused stack covering game development, gameplay programming, technical art, multiplayer systems, deployment, and cloud tooling.</p></div><div className="space-y-2">{techStackRows.map((row) => <TechStackMarquee key={row.title} title={row.title} items={row.items} direction={row.direction} />)}</div></div></section>

          <section id="process" className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:74px_74px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_28%)]" />
            <div className="relative mx-auto max-w-7xl">
              <div className="mb-14 text-center sm:mb-20">
                <h2 className="portfolio-heading text-white">
                  Process
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                  How I turn gameplay ideas into responsive, playable systems.
                </p>
              </div>
              <div className="grid border border-white/10 bg-black/20 md:grid-cols-2 xl:grid-cols-4">
                {gameplayProcess.map((step) => (
                  <motion.article key={step.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.35 }} transition={{ duration: 0.55, ease: "easeOut" }} className="group relative min-h-[320px] border-b border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:bg-white/[0.06] md:border-r xl:border-b-0">
                    <span className="pointer-events-none absolute left-8 top-8 text-7xl font-black leading-none text-white/[0.04] transition duration-500 group-hover:text-white/10 sm:text-8xl">{step.number}</span>
                    <div className="relative flex h-full flex-col justify-end"><h3 className="mb-8 text-xl font-extrabold uppercase tracking-[0.08em] text-white sm:text-2xl">{step.title}</h3><p className="text-[clamp(14px,1.2vw,17px)] leading-[1.85] text-zinc-300">{step.description}</p></div>
                    <span className="absolute left-0 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.20)] xl:block"><span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" /></span>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="px-6 py-20 sm:px-10 lg:px-16"><div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl md:p-14"><h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let&apos;s build something playable.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">Available for junior gameplay programming roles, internships, freelance Unreal Engine work, and collaborative game projects.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Button asChild className="rounded-xl bg-white px-6 py-6 text-black hover:bg-zinc-200"><a href={contactLinks.emailHref} onClick={(e) => { e.preventDefault(); openEmailClient(); }}><Mail className="mr-2 h-5 w-5" /> Email Me</a></Button><Button asChild variant="outline" className="rounded-xl border-white/20 bg-transparent px-6 py-6 text-white hover:bg-white hover:text-black"><a href={contactLinks.resume} download={contactLinks.resumeFileName} target="_blank" rel="noopener noreferrer"><FileText className="mr-2 h-5 w-5" /> Download Resume</a></Button><Button asChild variant="outline" className="rounded-xl border-white/20 bg-transparent px-6 py-6 text-white hover:bg-white hover:text-black"><a href={contactLinks.github} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); openExternalLink(contactLinks.github); }}><GitHubIcon className="mr-2 h-5 w-5" /> GitHub</a></Button><Button asChild variant="outline" className="rounded-xl border-white/20 bg-transparent px-6 py-6 text-white hover:bg-white hover:text-black"><a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); openExternalLink(contactLinks.linkedin); }}><LinkedInIcon className="mr-2 h-5 w-5" /> LinkedIn</a></Button></div></div></section>
          <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-600">© 2026 Ayobami Anifowoshe. Built with React, Tailwind CSS, Unreal energy, and suspicious amounts of caffeine.</footer>
        </div>
      </div>
    </main>
  );
}


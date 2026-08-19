import React from "react";
import { CheckCircle2, ExternalLink, Code2 } from "lucide-react";
import Reveal from "../components/Reveal";
import Tilt3D from "../components/Tilt3D";
import TodoMockup from "./mockups/TodoMockup";
import WeatherMockup from "./mockups/WeatherMockup";
import AuthMockup from "./mockups/AuthMockup";
import RpsMockup from "./mockups/RpsMockup";

const PROJECTS = [
  {
    title: "TaskFlow — Todo App",
    tagline: "A fast, keyboard-friendly task manager with persistent storage and smooth micro-interactions.",
    mockup: <TodoMockup />,
    tags: ["React", "Context API", "LocalStorage", "Tailwind"],
    features: [
      "Add, complete, and delete tasks with animated transitions",
      "Filter by all / active / completed, with a live task counter",
      "Persisted local store so tasks survive a refresh",
      "Dark theme and fully responsive layout",
    ],
  },
  {
    title: "SkyCast — Weather App",
    tagline: "Real-time weather lookup with geolocation, search, and a 4-day outlook.",
    mockup: <WeatherMockup />,
    tags: ["React", "OpenWeather API", "Geolocation", "CSS animations"],
    features: [
      "Search any city or auto-detect location on load",
      "Animated weather icons that react to current conditions",
      "4-day forecast strip with min/max temperatures",
      "Graceful loading and error states for flaky networks",
    ],
  },
  {
    title: "SecureAuth — Login & Auth System",
    tagline: "A production-style authentication flow: signup, login, and protected routes.",
    mockup: <AuthMockup />,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    features: [
      "Signup and login with hashed passwords via bcrypt",
      "JWT-based sessions with protected client-side routes",
      "Real-time form validation with inline error messages",
      "Password-visibility toggle and 'remember me' persistence",
    ],
  },
  {
    title: "ShootOut — Rock, Paper, Scissors",
    tagline: "A snappy browser game against the computer, with score tracking and round animations.",
    mockup: <RpsMockup />,
    tags: ["JavaScript", "React", "Framer Motion"],
    features: [
      "Best-of-N match mode with a running scoreboard",
      "Randomized computer opponent with real win/lose/tie logic",
      "Animated choice reveal and win/lose/tie states",
      "Fully playable on touch and keyboard",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <span className="font-mono text-xs px-2 py-1 rounded glass text-primary">Projects.jsx</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-2">Featured work</h2>
          <p className="text-sm mb-12 text-muted-foreground">Four builds that cover the full stack — UI, state, auth, and data.</p>
        </Reveal>

        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Tilt3D
                max={4}
                className={`group relative rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0 glass-strong hover:shadow-xl hover:shadow-primary/10 transition-shadow ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="p-6 sm:p-8 flex items-center bg-secondary/40">
                  <div className="w-full max-w-sm mx-auto">{p.mockup}</div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono text-[11px] uppercase tracking-wide text-primary">Project</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm mb-4 text-muted-foreground">{p.tagline}</p>
                  <ul className="space-y-2 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                      Live demo <ExternalLink size={14} />
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:gap-2.5 transition-all">
                      Source <Code2 size={14} />
                    </a>
                  </div>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

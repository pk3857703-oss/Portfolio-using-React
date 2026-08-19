import React from "react";
import { Sparkles, Calendar, Braces, Coffee } from "lucide-react";
import Reveal from "../components/Reveal";
import Tilt3D from "../components/Tilt3D";
import { STATS, EXPERIENCE } from "../components/data";

const ICONS = [Sparkles, Calendar, Braces, Coffee];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <span className="font-mono text-xs px-2 py-1 rounded glass text-primary">About.jsx</span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start mb-16">
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-5">
              I like software that <span className="text-primary">just works.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4 text-muted-foreground">
              I'm a full-stack developer focused on building products end to end — designing the
              interface, wiring up the logic, and shipping a backend that holds up under real use.
              I care about clean code, fast load times, and interfaces that don't make people think.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Outside of client work, I build small tools and games to sharpen fundamentals —
              a few of them are in the projects section below.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={s.label} delay={150 + i * 100}>
                  <Tilt3D max={6} className="group relative rounded-2xl p-5 glass hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                    <Icon size={20} className="mb-3 text-primary" />
                    <p className="font-serif text-2xl sm:text-3xl font-bold">{s.value}</p>
                    <p className="text-xs mt-1 text-muted-foreground">{s.label}</p>
                  </Tilt3D>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* compact timeline */}
        <Reveal>
          <h3 className="font-serif text-xl font-semibold mb-6">Experience &amp; education</h3>
        </Reveal>
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 120}>
              <div className="relative mb-8 last:mb-0">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <div className="rounded-xl p-5 sm:p-6 glass">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <h4 className="font-semibold text-base">{exp.role}</h4>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{exp.time}</span>
                  </div>
                  <p className="text-sm mb-2 text-primary">{exp.org}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

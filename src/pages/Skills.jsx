import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Atom, Braces, FileCode2, Palette, Coffee, Cpu, Layers, Database } from "lucide-react";
import Reveal from "../components/Reveal";
import Tilt3D from "../components/Tilt3D";
import { CORE_SKILLS, SYSTEMS_SKILLS, TOOLS } from "../components/data";

const ICON_MAP = {
  React: Atom,
  JavaScript: Braces,
  HTML: FileCode2,
  CSS: Palette,
  Java: Coffee,
  C: Cpu,
  "C++": Layers,
  MongoDB: Database,
};

function SkillCard({ name, note, level, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const Icon = ICON_MAP[name] || Braces;

  return (
    <Reveal delay={delay}>
      <Tilt3D max={8} className="group relative rounded-2xl p-5 h-full glass hover:shadow-lg hover:shadow-primary/10 transition-shadow">
        <div ref={ref} className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-primary/10 text-primary">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <p className="font-medium text-sm sm:text-base truncate">{name}</p>
            <p className="font-mono text-[11px] text-muted-foreground">{note}</p>
          </div>
        </div>
        <div className="h-1.5 w-full rounded-full overflow-hidden bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: inView ? `${level}%` : "0%" }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 0.84, 0.44, 1] }}
          />
        </div>
        <p className="text-right font-mono text-[11px] mt-1 text-muted-foreground">{level}%</p>
      </Tilt3D>
    </Reveal>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <span className="font-mono text-xs px-2 py-1 rounded glass text-primary">Skills.jsx</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-2">Skills &amp; stack</h2>
          <p className="text-sm mb-10 text-muted-foreground">The languages and tools I reach for most.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {CORE_SKILLS.map((s, i) => <SkillCard key={s.name} {...s} delay={i * 80} />)}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SYSTEMS_SKILLS.map((s, i) => <SkillCard key={s.name} {...s} delay={i * 80} />)}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-mono text-xs mb-4 text-muted-foreground">// also comfortable with</p>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full glass">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;

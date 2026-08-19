import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Crown } from "lucide-react";
import { Button } from "../components/Button";
import Tilt3D from "../components/Tilt3D";
import { PROFILE } from "../components/data";

const CODE = `const dev = {
  name: "Prince",
  role: "Full Stack Developer",
  stack: ["React", "JavaScript", "Java", "MongoDB"],
  status: "open to opportunities",
};`;

function TypedCode() {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(CODE.slice(0, i));
      if (i >= CODE.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, []);
  return (
    <pre className="font-mono text-[12px] sm:text-sm leading-relaxed whitespace-pre-wrap break-words text-foreground">
      {text}
      <span className="inline-block w-2 ml-0.5 bg-primary animate-blink-caret" style={{ height: "1em" }} />
    </pre>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 0.84, 0.44, 1] } },
};

const Home = () => {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid">
      {/* floating gradient orbs, teal + gold, matching your palette */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-slow-zoom" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-highlight/10 blur-3xl animate-float" />

      <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center relative">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full mb-6 glass text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            available for full-stack roles
          </motion.span>

          <motion.p variants={item} className="font-serif text-lg sm:text-xl text-muted-foreground mb-2 flex items-center gap-2">
            <Crown size={18} className="text-highlight" /> Hi, I'm {PROFILE.name}
          </motion.p>

          <motion.h1 variants={item} className="font-serif text-5xl sm:text-7xl font-bold leading-[1.05] mb-6">
            Full Stack <span className="text-primary">Developer</span>
          </motion.h1>

          <motion.p variants={item} className="text-base sm:text-lg text-muted-foreground max-w-lg mb-9">
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollTo("#contact")}>
              Contact me <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#projects")}>
              View projects
            </Button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              <Download size={15} /> resume.pdf
            </a>
          </motion.div>
        </motion.div>

        {/* 3D tilt code card — swap this block for your own photo/art if you'd rather */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 0.84, 0.44, 1] }}
          style={{ perspective: 1000 }}
        >
          <Tilt3D className="group relative rounded-2xl glass-strong shadow-2xl shadow-primary/10 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-highlight/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/80" />
              <span className="font-mono text-[11px] ml-3 text-muted-foreground">prince.js</span>
            </div>
            <div className="p-6">
              <TypedCode />
            </div>
            <div className="px-6 pb-6 flex flex-wrap gap-2">
              {["React", "JavaScript", "Java", "C++", "MongoDB"].map((t) => (
                <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </Tilt3D>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
};

export default Home;

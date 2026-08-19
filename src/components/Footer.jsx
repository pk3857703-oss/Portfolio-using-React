import React from "react";
import { Code2, Briefcase, Mail, Crown } from "lucide-react";
import { PROFILE } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          {/* your uploaded logo, presented as a small wax-seal badge */}
          <img
            src="/prince-seal.jpg"
            alt="Prince logo"
            className="w-10 h-10 rounded-lg object-cover shadow-lg shadow-primary/10 border border-border"
          />
          <div>
            <p className="font-serif text-sm font-semibold flex items-center gap-1">
              <Crown size={13} className="text-highlight" /> Prince
            </p>
            <p className="font-mono text-[11px] text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>

        <p className="font-mono text-xs text-muted-foreground">&copy; 2026 {PROFILE.name}. Built with React, Tailwind &amp; Framer Motion.</p>

        <div className="flex items-center gap-4">
          <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Code2 size={18} /></a>
          <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Briefcase size={18} /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

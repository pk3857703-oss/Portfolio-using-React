import React, { useState } from "react";
import { Mail, Code2, Briefcase, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { Button } from "../components/Button";
import { PROFILE } from "../components/data";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Fill in all three fields first.");
      return;
    }
    setError("");
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <span className="font-mono text-xs px-2 py-1 rounded glass text-primary">Contact.jsx</span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Let's build something.</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-muted-foreground">
              Have a project in mind, or just want to talk shop? My inbox is open —
              I try to reply within a day or two.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 glass">
                  <Mail size={16} className="text-primary" />
                </span>
                {PROFILE.email}
              </a>
              <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 glass">
                  <Code2 size={16} className="text-primary" />
                </span>
                {PROFILE.github}
              </a>
              <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 glass">
                  <Briefcase size={16} className="text-highlight" />
                </span>
                {PROFILE.linkedin}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={submit} className="rounded-2xl p-6 sm:p-7 space-y-4 glass-strong">
              <div>
                <label className="font-mono text-[11px] block mb-1.5 text-muted-foreground">name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none bg-background border border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] block mb-1.5 text-muted-foreground">email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none bg-background border border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] block mb-1.5 text-muted-foreground">message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none resize-none bg-background border border-border focus:border-primary transition-colors"
                />
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
              <Button type="submit" size="lg" className="w-full justify-center">
                {sent ? <>Sent <CheckCircle2 size={16} /></> : <>Send message <Send size={16} /></>}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

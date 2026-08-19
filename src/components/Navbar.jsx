import { Button } from "./Button"
import React, { useEffect, useState } from 'react'
import { Menu, X, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "./data";

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { threshold: 0.4, rootMargin: "-90px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-[9999] animate-fade-in transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a
          href='#home'
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className='flex items-center gap-2 text-xl font-serif font-bold tracking-tight hover:text-primary transition-colors'
        >
          <Crown size={22} className="text-highlight" strokeWidth={2} />
          <span>The <span className="text-primary">Prince</span></span>
        </a>

        {/* desktop nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {NAV_LINKS.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                  active === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* cta btn */}
        <div className="hidden md:block">
          <Button onClick={() => scrollTo("#contact")}>Contact me</Button>
        </div>

        {/* Mobile Menu btn */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); setIsMobileMenuOpen(false); }}
                  className={`text-sm py-2 ${active === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={() => { scrollTo("#contact"); setIsMobileMenuOpen(false); }}>Contact me</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

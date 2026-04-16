"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { links } from "@/constants/links";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Approach", href: "#approach" },
  { label: "Evidence", href: "#evidence" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-surface-border"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent">
                <span className="text-sm font-bold text-white">CSY</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground group-hover:text-accent-light transition-colors">
                CSY Group
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-5 py-2.5 text-base text-text-secondary transition-colors hover:text-foreground hover:bg-surface-light"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <a
                href={links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-gradient-accent px-7 py-3 text-base font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
              >
                Join Discord
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:bg-surface-light md:hidden"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={
                      mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                    className="block h-0.5 w-6 bg-foreground"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-0.5 w-6 bg-foreground"
                  />
                  <motion.span
                    animate={
                      mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    className="block h-0.5 w-6 bg-foreground"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 border-b border-surface-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-lg text-text-secondary transition-colors hover:text-foreground hover:bg-surface-light"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-gradient-accent px-6 py-4 text-center text-base font-medium text-white"
              >
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, whatsappUrl } from "@/lib/constants";

const HEADER_OFFSET = 88;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    window.history.pushState(null, "", href);
  }, []);

  const handleMobileNav = (href: string) => {
    closeMobile();
    document.body.style.overflow = "";
    // Wait for menu to close before scrolling (body was locked)
    window.setTimeout(() => scrollToSection(href), 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-luxury-black/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            if (window.innerWidth < 1024) {
              e.preventDefault();
              handleMobileNav("#home");
            }
          }}
          aria-label="Lewis Garden and Suites — Home"
          className="relative z-[80] shrink-0"
        >
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "nav-link-active text-luxury-gold" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold relative z-[80] hidden text-xs lg:inline-flex"
        >
          Enquire Now
        </a>

        <button
          type="button"
          className="relative z-[80] rounded-sm p-2 text-luxury-gold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              className="fixed inset-0 z-[60] bg-black/70 lg:hidden"
              onClick={closeMobile}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile"
              className="fixed left-0 right-0 top-[72px] z-[70] mx-4 flex flex-col gap-1 rounded-lg border border-luxury-gold/20 bg-luxury-black p-4 shadow-2xl lg:hidden"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleMobileNav(link.href)}
                  className="rounded-sm px-3 py-3 text-left text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:bg-luxury-gold/10 hover:text-luxury-gold"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-2 w-full text-center"
                onClick={closeMobile}
              >
                Enquire on WhatsApp
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

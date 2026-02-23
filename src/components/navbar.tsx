"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { DemoModal } from "@/components/demo-modal";
import { PilotModal } from "@/components/pilot-modal";
const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#metrics" },
  { label: "Contact", href: "#cta" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [pilotOpen, setPilotOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
            CH
          </div>
          <span className="text-lg font-bold text-foreground">
            CampaignHub
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDemoOpen(true)}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-50 transition-colors"
          >
            Request Demo
          </button>
          <button
            onClick={() => setPilotOpen(true)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
          >
            Start Pilot
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-border">
            <button
              onClick={() => {
                setMobileOpen(false);
                setDemoOpen(true);
              }}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground text-center hover:bg-gray-50 transition-colors"
            >
              Request Demo
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                setPilotOpen(true);
              }}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white text-center hover:bg-primary-hover transition-colors"
            >
              Start Pilot
            </button>
          </div>
        </div>
      )}

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <PilotModal isOpen={pilotOpen} onClose={() => setPilotOpen(false)} />
    </header>
  );
};

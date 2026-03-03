"use client";

import { useState } from "react";
import { ContactModal } from "@/components/contact-modal";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white font-bold text-xs">
              CA
            </div>
            <span className="text-sm font-semibold text-foreground">
              CampaignAgent
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} CampaignAgent. All rights reserved.
          </p>
        </div>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
};

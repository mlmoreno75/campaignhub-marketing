import Image from "next/image";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "mailto:hello@campaignhub.io" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%202-8-26%20at%209.56%E2%80%AFPM-JD3RT0F6to7pICwUJFfIuU8hN78BUY.jpeg"
              alt="Sequence"
              width={140}
              height={35}
              className="h-7 w-auto"
            />
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
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Sequence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

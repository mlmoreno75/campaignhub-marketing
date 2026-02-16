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
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white font-bold text-xs">
              CH
            </div>
            <span className="text-sm font-semibold text-foreground">
              CampaignHub
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
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} CampaignHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

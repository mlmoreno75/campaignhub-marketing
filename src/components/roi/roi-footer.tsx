const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Contact", href: "mailto:hello@campaignhub.io" },
];

export const ROIFooter = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-bold text-xs text-surface">
              CH
            </div>
            <span className="text-sm font-semibold text-foreground">
              CampaignHub
            </span>
          </div>

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

          <p className="text-sm text-muted">
            {"© 2026 CampaignHub"}
          </p>
        </div>
      </div>
    </footer>
  );
};

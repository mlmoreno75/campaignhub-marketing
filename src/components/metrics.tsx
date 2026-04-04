const metrics = [
  { value: "60%", label: "Faster campaign launches" },
  { value: "3x", label: "Better cross-channel visibility" },
  { value: "40%", label: "Reduction in approval bottlenecks" },
  { value: "$150k", label: "Avg. budget optimized per quarter" },
];

export const Metrics = () => {
  return (
    <section id="metrics" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Teams Using CampaignAgent Are Built to Achieve
          </h2>
          <p className="mt-4 text-lg text-muted">
            Marketing teams using CampaignAgent see measurable improvements across
            the board.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="text-center rounded-2xl border border-border bg-background p-8 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {metric.value}
              </p>
              <p className="mt-3 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

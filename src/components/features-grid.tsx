"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Sparkles,
  CheckCircle2,
  Radio,
  BarChart3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Campaign Dashboard",
    description:
      "See all campaigns, budgets, and statuses in one centralized view. No more switching between tabs.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Recommendations",
    description:
      "Get intelligent suggestions for tactics, budget allocation, and channel mix based on historical performance.",
  },
  {
    icon: CheckCircle2,
    title: "Approval Workflows",
    description:
      "Route campaigns for review with configurable approval chains. Track status and eliminate email bottlenecks.",
  },
  {
    icon: Radio,
    title: "Multi-Channel Orchestration",
    description:
      "Coordinate email, social media, paid ads, events, and content marketing from a single campaign plan.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track performance across all channels in real time. Identify what's working and pivot faster.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Shared visibility, comments, and assignments keep everyone aligned from planning through execution.",
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Run Smarter Campaigns
          </h2>
          <p className="mt-4 text-lg text-muted">
            Purpose-built for marketing teams that demand clarity, speed, and
            intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-background p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

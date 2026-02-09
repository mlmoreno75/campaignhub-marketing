"use client";

import { motion } from "framer-motion";
import { Layers, Clock, Eye, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Layers,
    problem: "Fragmented campaigns across disconnected tools",
    solution: "Unified dashboard to plan, track, and manage every channel",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    problem: "Manual approval bottlenecks slow down launches",
    solution: "Streamlined workflows that route approvals automatically",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Eye,
    problem: "No cross-channel visibility into campaign performance",
    solution: "Real-time analytics and AI-powered optimization insights",
    color: "text-success",
    bg: "bg-success/10",
  },
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Challenges Modern Marketers Face
          </h2>
          <p className="mt-4 text-lg text-muted">
            Marketing teams waste hours juggling tools, chasing approvals, and
            flying blind. CampaignHub changes that.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-8 hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <item.icon size={24} className={item.color} />
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-red-400 line-through">
                  {item.problem}
                </p>
                <div className="my-3 flex items-center gap-2">
                  <ArrowRight size={14} className="text-muted" />
                </div>
                <p className="text-base font-medium text-foreground">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

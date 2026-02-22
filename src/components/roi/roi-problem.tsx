"use client";

import { motion } from "framer-motion";
import { Clock, GitBranch, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Reporting Takes Too Long",
    text: "Campaign performance data lives in CRM reports, BI dashboards, ad platforms, and spreadsheets. Getting a simple answer takes days.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: GitBranch,
    title: "Marketing Ops Becomes the Bottleneck",
    text: "CMOs depend on marketing operations to stitch together metrics, slowing decisions and increasing internal friction.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: DollarSign,
    title: "Headcount Is the Default Fix",
    text: "When visibility breaks, companies hire more marketing ops. But daily campaign reporting shouldn't require another $130K salary.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

export const ROIProblem = () => {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Marketing Visibility Is Broken
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <item.icon size={24} className={item.color} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

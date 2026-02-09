"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Campaigns Managed" },
  { value: "12", label: "Enterprise Teams" },
  { value: "98%", label: "Approval Efficiency" },
  { value: "$2.4M", label: "Budget Optimized" },
];

export const TrustBar = () => {
  return (
    <section className="border-y border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-muted mb-8 tracking-wide uppercase">
          Trusted by forward-thinking marketing teams
        </p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const ROISocialProof = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            What CMOs Are Saying
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-border bg-surface p-10 md:p-14 text-center"
        >
          <Quote
            size={40}
            className="absolute top-6 left-6 text-primary/10"
          />

          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            &ldquo;We were about to hire our third marketing ops analyst just
            for reporting. CampaignHub replaced that entire need in under
            60 days. The ROI was immediate.&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center font-bold text-surface">
              CMO
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">
                Chief Marketing Officer
              </p>
              <p className="text-sm text-muted">
                B2B SaaS, $85M ARR
              </p>
            </div>
          </div>
        </motion.div>

        {/* Placeholder logo bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {["Company A", "Company B", "Company C", "Company D"].map((name) => (
            <div
              key={name}
              className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-muted/50"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

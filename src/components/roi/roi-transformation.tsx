"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const outcomes = [
  'Answer "How is Campaign X performing?" in under 60 seconds',
  "Eliminate daily reporting dependency on marketing ops",
  "Reduce campaign visibility lag from days to minutes",
  "Avoid hiring additional ops just for reporting clarity",
  "Present board-ready performance snapshots instantly",
];

export const ROITransformation = () => {
  return (
    <section id="transformation" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-blue-50/60 to-background p-10 md:p-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center text-balance">
            What Changes in 90 Days
          </h2>

          <ul className="mt-10 space-y-5">
            {outcomes.map((outcome, i) => (
              <motion.li
                key={outcome}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check size={16} className="text-primary" />
                </div>
                <span className="text-base md:text-lg text-foreground leading-relaxed">
                  {outcome}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

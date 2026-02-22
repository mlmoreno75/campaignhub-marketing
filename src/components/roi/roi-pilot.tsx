"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gem, Map, Headset, Tag } from "lucide-react";

const perks = [
  { icon: Gem, text: "White-glove onboarding" },
  { icon: Map, text: "Direct influence on product roadmap" },
  { icon: Headset, text: "Dedicated implementation support" },
  { icon: Tag, text: "Preferential founding pricing" },
];

export const ROIPilot = () => {
  return (
    <section id="pilot" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Become a 90-Day Design Partner
          </h2>

          <p className="mt-6 text-base text-muted leading-relaxed max-w-xl mx-auto">
            {"We're onboarding a limited number of B2B SaaS marketing teams as pilot partners. You'll receive:"}
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <perk.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground leading-relaxed pt-1.5">
                  {perk.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://campaign-hub-central.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-surface hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
            >
              Apply for a 90-Day Pilot
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

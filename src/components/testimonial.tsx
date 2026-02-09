"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-border bg-white p-10 md:p-16 text-center"
        >
          <Quote
            size={48}
            className="absolute top-6 left-6 text-primary/10"
          />

          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            &ldquo;CampaignHub gave us the visibility we never had. Our team
            went from juggling spreadsheets and email chains to launching
            campaigns 60% faster with full stakeholder alignment.&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              VP
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">
                VP of Marketing Operations
              </p>
              <p className="text-sm text-muted">
                Fortune 500 Enterprise Software
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-8 py-16 md:px-16 md:py-24 text-center"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform Your
            <br />
            Campaign Operations?
          </h2>
          <p className="relative mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Join marketing teams that are launching faster, spending smarter,
            and seeing better results with AI-powered campaign intelligence.
          </p>

          <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@campaignhub.io"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-gray-50 transition-colors shadow-lg"
            >
              Request a Demo
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hello@campaignhub.io"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Start Your Free Pilot
            </a>
          </div>

          <p className="relative mt-6 text-sm text-white/50">
            No credit card required · 14-day pilot · Full onboarding included
          </p>
        </motion.div>
      </div>
    </section>
  );
};

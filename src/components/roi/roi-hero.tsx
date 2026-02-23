"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PilotModal } from "@/components/pilot-modal";

export const ROIHero = () => {
  const [pilotOpen, setPilotOpen] = useState(false);
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-background to-background -z-10" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Before You Hire Another Marketing Ops Manager, Read This.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto text-pretty">
            CampaignHub gives CMOs instant daily campaign ROI visibility across
            CRM, ads, and sales — without adding headcount.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              onClick={() => setPilotOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-surface hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
            >
              Apply for a 90-Day Pilot
              <ArrowRight size={18} />
            </button>
            <p className="text-sm text-muted">
              No dashboards. No BI rebuild. No additional headcount.
            </p>
          </div>
        </motion.div>
      </div>

      <PilotModal isOpen={pilotOpen} onClose={() => setPilotOpen(false)} />
    </section>
  );
};

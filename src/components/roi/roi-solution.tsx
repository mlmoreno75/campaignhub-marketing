"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Instant campaign ROI visibility",
  "Cross-channel performance clarity",
  "Budget vs. impact tracking",
  "Messaging alignment across GTM teams",
];

export const ROISolution = () => {
  return (
    <section id="solution" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Meet the Daily Campaign Command Center
            </h2>
            <p className="mt-6 text-base text-muted leading-relaxed">
              CampaignHub sits on top of your CRM and campaign stack to
              automatically structure, track, and surface the metrics that
              matter — campaign by campaign.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Instead of chasing numbers, you get:
            </p>

            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm font-medium text-muted">
              All without hiring additional marketing ops support.
            </p>
          </motion.div>

          {/* Right - Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-border bg-gray-900 p-2 shadow-2xl shadow-black/10">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="mx-auto max-w-xs rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-400">
                    app.campaignhub.io/command-center
                  </div>
                </div>
              </div>
              <div className="rounded-b-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%202-8-26%20at%209.03%E2%80%AFPM-muNf1HQ2vv18QQ28dtqW25vtymt7YU.jpeg"
                  alt="CampaignHub command center dashboard showing campaign ROI metrics, cross-channel performance, and budget tracking"
                  width={1400}
                  height={875}
                  className="w-full h-auto rounded-b-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

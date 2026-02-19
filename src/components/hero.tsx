"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { DemoModal } from "@/components/demo-modal";

export const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-violet-50/50 to-background -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/20 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm text-muted mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
              Now in Early Access
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              AI-Powered Campaign{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Intelligence
              </span>{" "}
              for Modern Marketing Teams
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Plan, approve, and optimize integrated marketing campaigns from a
              single command center. Make smarter decisions with AI-driven
              insights.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
              >
                Request a Demo
                <ArrowRight size={18} />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-base font-medium text-foreground hover:bg-gray-50 transition-colors"
              >
                <Play size={16} />
                See How It Works
              </a>
            </div>
          </motion.div>

          {/* Right — Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotateY: -5 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-gray-900 p-2 shadow-2xl shadow-black/10">
              {/* Browser chrome mockup */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="mx-auto max-w-xs rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-400">
                    app.campaignhub.io/dashboard
                  </div>
                </div>
              </div>
              {/* Product screenshot */}
              <div className="rounded-b-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%202-8-26%20at%209.03%E2%80%AFPM-muNf1HQ2vv18QQ28dtqW25vtymt7YU.jpeg"
                  alt="CampaignHub dashboard showing Q1 Product Launch Campaign with tactics, budget details, approval workflow, and campaign details"
                  width={1400}
                  height={875}
                  className="w-full h-auto rounded-b-lg"
                  priority
                />
              </div>
            </div>
            {/* Floating accent elements */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-success text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Campaign Approved
                  </p>
                  <p className="text-xs text-muted">Just now</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl bg-white p-3 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Budget Optimized
                  </p>
                  <p className="text-xs text-muted">Saved 23%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

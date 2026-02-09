"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Create & plan campaigns with AI assistance",
    description:
      "Define your campaign objectives, target audience, and channels. Our AI recommends optimal tactics and budget allocation based on your goals and historical performance data.",
    screenshotLabel: "Campaign Creation View",
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%202-8-26%20at%209.04%E2%80%AFPM-RiWjbJsace0PK0u5rWdfTH8SZMdjEO.jpeg",
    screenshotAlt: "New Campaign creation form showing fields for campaign name, description, budget, target audience, dates, channel selection, and messaging document link",
  },
  {
    step: "02",
    title: "Route for approval with built-in workflows",
    description:
      "Submit campaigns for review through configurable approval chains. Stakeholders get clear visibility into what's pending, with inline comments and one-click approvals.",
    screenshotLabel: "Approval Workflow View",
  },
  {
    step: "03",
    title: "Launch, track, and optimize in real time",
    description:
      "Monitor cross-channel performance from a unified dashboard. AI surfaces insights and recommendations so you can adapt campaigns while they're live.",
    screenshotLabel: "Analytics Dashboard View",
  },
];

export const ProductShowcase = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted">
            From ideation to optimization in three simple steps.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((item, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
              >
                {/* Text */}
                <div className={isReversed ? "md:order-2" : ""}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Screenshot placeholder */}
                <div className={isReversed ? "md:order-1" : ""}>
                  <div className="rounded-2xl border border-border bg-gray-900 p-2 shadow-xl">
                    <div className="flex items-center gap-1.5 px-3 py-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    {item.screenshot ? (
                      <div className="rounded-b-lg overflow-hidden">
                        <Image
                          src={item.screenshot}
                          alt={item.screenshotAlt || item.screenshotLabel}
                          width={1024}
                          height={1024}
                          className="w-full h-auto rounded-b-lg"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] rounded-b-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <p className="text-sm">{item.screenshotLabel}</p>
                          <p className="text-xs text-gray-600 mt-1">
                            Replace with screenshot
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

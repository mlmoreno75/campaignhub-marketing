"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 60, suffix: "%", label: "Faster campaign launches" },
  { value: 3, suffix: "x", label: "Better cross-channel visibility" },
  { value: 40, suffix: "%", label: "Reduction in approval bottlenecks" },
  { value: 150, suffix: "k", prefix: "$", label: "Avg. budget optimized per quarter" },
];

const AnimatedCounter = ({
  value,
  suffix,
  prefix,
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const Metrics = () => {
  return (
    <section id="metrics" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-muted">
            Marketing teams using CampaignHub see measurable improvements across
            the board.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center rounded-2xl border border-border bg-background p-8"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />
              </p>
              <p className="mt-3 text-sm text-muted">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

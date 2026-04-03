"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

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
            &ldquo;I built CampaignAgent because I kept running into the same
            problem at every company — great marketing teams flying blind on
            campaign performance and drowning in approval chaos. Governance was
            always the missing layer.&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2019_MichaelMorenobyABhadouriya_2mb-oPlYwvyDRBg7DGxEY03LLNo96IWfVC.jpeg"
              alt="Michael Moreno"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-foreground">Michael Moreno</p>
              <p className="text-sm text-muted">
                Founder, CampaignAgent | Former PMM at Cloudflare, Procore, SADA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

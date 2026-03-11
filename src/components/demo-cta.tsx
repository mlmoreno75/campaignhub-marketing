"use client";

import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";

interface DemoCTAProps {
  heading: string;
  subheading: string;
}

export function DemoCTA({ heading, subheading }: DemoCTAProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="bg-indigo-600 py-16 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-white">{heading}</h2>
        <p className="mt-4 text-lg text-indigo-200">{subheading}</p>
        <button
          onClick={() => setDemoOpen(true)}
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Request a Demo
        </button>
      </div>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}

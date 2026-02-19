"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setName("");
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Request a Demo"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-7 w-7 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Thank You!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {"We've received your demo request. Our team will reach out to you shortly."}
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white font-bold text-[10px]">
                  CH
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Request a Demo
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Fill out the form below and our team will get in touch to
                schedule a personalized demo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="demo-name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="demo-email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Submitting..."
                  : "Submit Request"}
              </button>

              <p className="text-xs text-center text-gray-500">
                {"We'll never share your information with third parties."}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

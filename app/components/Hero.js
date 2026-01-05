"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-shell" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay opacity-60 dark:opacity-30" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 md:flex-row md:items-center md:pb-28 md:pt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ocean">
            AI Automation Specialist
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-display font-semibold text-ink md:text-5xl lg:text-6xl dark:text-white">
              Hi, I&apos;m <span className="text-sunrise">Pierce Xander</span> -{" "}
              <span className="whitespace-nowrap">AI Automation</span>
              <br />
              Specialist
            </h1>
            <p className="text-lg text-slate md:text-xl dark:text-white">
              I build smart automations to save time, reduce costs, and scale impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-mist"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
            >
              Book a Call
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate dark:text-white">
            <div className="rounded-2xl bg-white/70 px-4 py-3 shadow-card dark:bg-white/10">
              <p className="text-2xl font-semibold text-ink dark:text-white">40+ hrs</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate dark:text-white">
                Saved weekly
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 px-4 py-3 shadow-card dark:bg-white/10">
              <p className="text-2xl font-semibold text-ink dark:text-white">3 years</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate dark:text-white">
                Automation experience
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 px-4 py-3 shadow-card dark:bg-white/10">
              <p className="text-2xl font-semibold text-ink dark:text-white">3x</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate dark:text-white">
                Team velocity
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute -right-10 -top-8 hidden h-32 w-32 rounded-full bg-sunrise/20 blur-2xl md:block" />
          <div className="absolute -bottom-8 left-6 hidden h-28 w-28 rounded-full bg-ocean/20 blur-2xl md:block" />
          <div className="relative w-full rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate dark:text-white">
                <span>Automation Studio</span>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-white">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-display font-semibold text-ink dark:text-white">
                  Automation Control Center
                </p>
                <p className="text-sm text-slate dark:text-white">
                  Orchestrates lead routing, client reporting, content production, and
                  chatbot handoffs with AI-driven workflows built for real operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Make.com", "n8n", "OpenAI", "Zoho CRM", "Google Workspace"].map(
                  (tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink dark:bg-white/10 dark:text-white"
                  >
                    {tool}
                  </span>
                  )
                )}
              </div>
              <button className="mt-2 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3 text-left text-sm text-ink shadow-card dark:border-white/10 dark:bg-white/10 dark:text-white">
                Generate weekly automation summary
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

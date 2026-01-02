"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pierce-xander-giron-883266323/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.5 7.5h4v16h-4v-16zM8 7.5h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.66 4.78 6.12v7.88h-4v-6.99c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7v7.11H8v-16z"
        />
      </svg>
    ),
  },
  {
    name: "OnlineJobs.ph",
    href: "https://www.onlinejobs.ph/jobseekers/info/4383530",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M7 6V4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5V6h3a2 2 0 0 1 2 2v9.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5V8a2 2 0 0 1 2-2h3zm2 0h6V4.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V6zm3 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:piercexander1314@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.6-.5 6.9 5.18c.3.22.7.22 1 0L19.4 6H4.6zm14.9 2.47-4.96 3.72 4.96 3.72V8.47zM4.5 17.5h15l-5.83-4.38-1.08.81a2 2 0 0 1-2.4 0l-1.08-.81L4.5 17.5z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] border border-mist bg-white p-10 shadow-soft md:p-14 dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Work With Me"
                title="Let's automate your business and save you hours every week."
                subtitle="Book a discovery call to explore high-impact automations for your team."
              />
              <a
                href="https://calendar.app.google/dVSGN9NCxGpDcuQx5"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-mist"
                target="_blank"
                rel="noreferrer"
              >
                Book a Discovery Call
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ocean">
                Connect
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-ink/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

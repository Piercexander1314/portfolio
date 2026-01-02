"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const tools = [
  { name: "Zapier", file: "zapier logo.svg" },
  { name: "Make.com", file: "make.com.png" },
  { name: "n8n", file: "n8n-logo.png" },
  { name: "Airtable", file: "Airtable logo.png" },
  { name: "Google Workspace", file: "Google-Workspace-Symbol.png" },
  { name: "Gorgias", file: "gorgias logo.png" },
  { name: "Zoho CRM", file: "zoho-logo.png" },
  { name: "Calendly", file: "calendly.svg", size: "h-10" },
  { name: "GoHighLevel", file: "gohighlevel logo.webp" },
  { name: "ManyChat", file: "manychat logo.webp", size: "h-11" },
  { name: "Typeform", file: "Typeform_logo.png" },
  { name: "ClickUp", file: "clickup logo.png" },
  { name: "Slack", file: "Slack_icon_2019.svg.png" },
  { name: "Telegram", file: "Telegram_logo.svg.webp" },
  { name: "WhatsApp", file: "whatsapp logo.png" },
  { name: "Facebook", file: "fb logo.webp", size: "h-11" },
  { name: "Instagram", file: "Instagram_icon.png" },
  { name: "Notion", file: "Notion_app_logo.png" },
  { name: "OpenAI", file: "OpenAI_Logo.svg.png" },
  { name: "Claude", file: "claude logo.png", size: "h-11" },
  { name: "Grok", file: "grok logo.png" },
  { name: "Gemini", file: "gemini logo.png", size: "h-11" },
];

export default function ToolsCarousel() {
  return (
    <section className="bg-mist/40 px-6 py-20 dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          eyebrow="Tool Stack"
          title="Automation Platforms I Orchestrate"
          subtitle="Specialized across no-code, low-code, and AI systems that power modern operations."
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[32px] border border-white bg-white/80 px-4 py-6 shadow-card dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex gap-6 marquee-track animate-marquee" aria-hidden="true">
            {[...tools, ...tools].map((tool, index) => {
              const sizeClass = tool.size || "h-8";
              return (
              <div
                key={`${tool.name}-${index}`}
                className="flex h-14 w-36 items-center justify-center rounded-2xl border border-ink/10 bg-white px-4 shadow-sm dark:border-white/10 dark:bg-white"
              >
                <Image
                  src={encodeURI(`/images/tools/${tool.file}`)}
                  alt={`${tool.name} logo`}
                  width={120}
                  height={48}
                  className={`${sizeClass} w-auto object-contain bg-white`}
                />
              </div>
              );
            })}
          </div>
        </motion.div>
        <p className="text-center text-sm text-slate dark:text-slate-300">
          Need a different tool? I adapt quickly and wire in anything with an API.
        </p>
      </div>
    </section>
  );
}

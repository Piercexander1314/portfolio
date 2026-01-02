"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Social Media Content Studio",
    description:
      "Automates social media content creation with AI-generated images, videos, and copy, triggered via Slack and scheduled for posting across channels.",
    tools: [
      "Make.com",
      "Slack",
      "Airtable",
      "Placid",
      "Eden AI",
      "Google Drive",
      "Veo",
      "OpenAI",
      "Social Media",
    ],
    images: [
      "/images/projects/Social Media Posting.png",
      "/images/projects/Social media posting 1.png",
    ],
  },
  {
    title: "Social Media Chatbot",
    description:
      "Built a social media chatbot in Make.com that answers inquiries with OpenAI, logs conversations to a built-in data store, and syncs qualified leads into Zoho CRM.",
    tools: ["Make.com", "OpenAI", "Zoho CRM", "Data Store"],
    images: ["/images/projects/Social media chatbot .png"],
  },
  {
    title: "Client Reporting Automation",
    description:
      "Built in n8n with an email trigger that ingests client purchase data and savings, generates a weekly transaction summary with tables and files, and delivers individualized reports to each client.",
    tools: [
      "n8n",
      "Supabase",
      "PDF.co",
      "JavaScript",
      "Grok AI Agent",
      "Gmail",
      "Google Sheets",
    ],
    images: [
      "/images/projects/Automated AI generated client reporting.png",
      "/images/projects/Client reporting.png",
    ],
  },
  {
    title: "FB Messenger Sales Assistant",
    description:
      "Built an n8n-powered Facebook business page chatbot that answers inquiries like a human, guides prospects through applications, and routes sales-ready leads to the team.",
    tools: [
      "n8n",
      "Supabase",
      "SQL",
      "OpenAI",
      "Gemini",
      "Gmail",
      "Messenger",
      "AI Agent",
    ],
    images: ["/images/projects/FB chatbot.png"],
  },
  {
    title: "LinkedIn Content Automation",
    description:
      "Automates LinkedIn content creation and posting in n8n using AI-generated copy and visuals, with Blotato handling scheduling.",
    tools: ["n8n", "OpenAI", "Nano Banana", "Blotato"],
    images: ["/images/projects/LinkedIn posting.png"],
  },
  {
    title: "Ticketing-to-Task Automation",
    description:
      "Built for an ecommerce client: pulls Gorgias tickets, auto-classifies and assigns them to the right department and owner, then creates ClickUp tasks—cutting a 1-hour manual handoff to about a minute.",
    tools: ["Gorgias", "ClickUp", "Automation"],
    images: ["/images/projects/Ticketing automation to task management.png"],
  },
  {
    title: "Zapier Lead-to-Onboarding Automation",
    description:
      "End-to-end lead automation for a Wix site: form submission redirects to Calendly, then Zapier creates the CRM record, sets statuses, spins up tasks in ClickUp, triggers follow-ups, and streamlines onboarding from discovery to delivery.",
    tools: [
      "Wix",
      "Zapier",
      "Calendly",
      "Tutorbird",
      "ClickUp",
      "Google Drive",
      "Gmail",
      "DocuSign",
    ],
    images: [
      "/images/projects/zap1.png",
      "/images/projects/zap2.png",
      "/images/projects/zap3.5.png",
      "/images/projects/zap4.png",
      "/images/projects/zap5.png",
      "/images/projects/zap6.png",
      "/images/projects/zap7.png",
      "/images/projects/zap8.png",
      "/images/projects/zap9.png",
      "/images/projects/Zap 10.png",
    ],
  },
  {
    title: "AI Lease Agreement Automation",
    description:
      "Automates lease agreement creation in n8n by pulling lead data from Zoho CRM and Google Sheets, generating drafts with Gemini AI and Google Docs templates, and routing approvals via Telegram before emailing finalized agreements.",
    tools: [
      "n8n",
      "Google Docs",
      "Gmail",
      "Zoho CRM",
      "Google Sheets",
      "Gemini",
      "Google Drive",
      "Telegram",
    ],
    images: [],
    video: "/images/projects/AI Lease Agreement Automation.mp4",
  },
  {
    title: "Invoice Automation",
    description:
      "Automates invoice requests captured via Google Forms, syncs data into Google Sheets, generates files in Google Drive, and sends invoices through Gmail using Make.com.",
    tools: ["Google Forms", "Google Sheets", "Make.com", "Google Drive", "Gmail"],
    images: [
      "/images/projects/invoice automation.png",
      "/images/projects/invoice sample.png",
    ],
  },
  {
    title: "Internship Application Automation",
    description:
      "End-to-end internship application workflow: pulls new applications, uses Gemini to score resumes and match roles, organizes files by role, sends personalized emails, and schedules interviews with calendar integration.",
    tools: ["Make.com", "Google Workspace", "Gemini", "Calendly"],
    images: [
      "/images/projects/Insternship application and onboarding automation.png",
      "/images/projects/Insternship application and onboarding automation1.png",
      "/images/projects/Insternship application and onboarding automation2.png",
      "/images/projects/Insternship application and onboarding automation3.png",
    ],
  },
  {
    title: "Multi-Platform Content Engine",
    description:
      "Developed a multi-platform content engine integrating OpenAI, Google Sheets, and Metricool via Telegram to automate the creation, scheduling, and posting of social content (Carousels, Stories, and Reels).",
    tools: ["OpenAI", "Google Workspace", "Metricool", "Telegram", "Make.com", "Claudinary"],
    images: [
      "/images/projects/MMC generate content Scenario.png",
      "/images/projects/Regenerate content and schedule post.png",
      "/images/projects/Regenerate content and schedule post 2.png",
      "/images/projects/Regenerate content and schedule post 3.png",
    ],
  },
  {
    title: "SEO Blog Intelligence Automation",
    description:
      "Automates end-to-end SEO blog creation by scoring keywords with real search volume and difficulty, generating briefs and drafts with AI, and tracking rankings to prioritize the next article.",
    tools: ["DataforSEO", "Google Sheets", "Telegram", "OpenAI", "Make.com"],
    images: [
      "/images/projects/SEO blog article automation.png",
      "/images/projects/SEO blog article automation 1.png",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState(() =>
    Object.fromEntries(projects.map((project) => [project.title, 0]))
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Make.com", "n8n", "Zapier"];

  const getNextIndex = (current, length, delta) =>
    (current + delta + length) % length;

  const updateCardImage = (project, delta) => {
    setCardImageIndex((prev) => ({
      ...prev,
      [project.title]: getNextIndex(
        prev[project.title] ?? 0,
        project.images.length,
        delta
      ),
    }));
  };

  useEffect(() => {
    if (!activeProject) return;
    setActiveImageIndex(0);
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tools.includes(activeFilter));

  return (
    <section id="projects" className="bg-white px-6 py-20 dark:bg-[#0B1120]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Automations"
          subtitle="A snapshot of the systems I build to connect teams, data, and AI for measurable impact."
        />
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                activeFilter === filter
                  ? "border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink"
                  : "border-ink/10 bg-white text-ink hover:-translate-y-0.5 hover:border-ink/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-mist bg-white shadow-card transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} details`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                {project.video ? (
                  <video
                    src={encodeURI(project.video)}
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls={false}
                    controlsList="nodownload"
                    disablePictureInPicture
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                ) : (
                  <Image
                    src={encodeURI(
                      project.images[
                        cardImageIndex[project.title] ?? 0
                      ] || project.images[0]
                    )}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                )}
                {project.images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        updateCardImage(project, -1);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/80 p-2 text-ink shadow-sm backdrop-blur transition hover:-translate-y-1/2 hover:bg-white"
                      aria-label={`Previous ${project.title} image`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M15.5 5.5a1 1 0 0 1 0 1.4L10.4 12l5.1 5.1a1 1 0 1 1-1.4 1.4l-5.8-5.8a1 1 0 0 1 0-1.4l5.8-5.8a1 1 0 0 1 1.4 0z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        updateCardImage(project, 1);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/80 p-2 text-ink shadow-sm backdrop-blur transition hover:-translate-y-1/2 hover:bg-white"
                      aria-label={`Next ${project.title} image`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M8.5 18.5a1 1 0 0 1 0-1.4l5.1-5.1-5.1-5.1a1 1 0 0 1 1.4-1.4l5.8 5.8a1 1 0 0 1 0 1.4l-5.8 5.8a1 1 0 0 1-1.4 0z"
                        />
                      </svg>
                    </button>
                  </>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-ink dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate dark:text-white">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink dark:bg-white/10 dark:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6 py-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-soft dark:bg-[#0F172A]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-xs font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                Close
              </button>
              <div className="relative h-[420px] w-full bg-white">
                {activeProject.video ? (
                  <video
                    src={encodeURI(activeProject.video)}
                    className="h-full w-full object-contain"
                    controls
                    playsInline
                    controlsList="nodownload"
                    disablePictureInPicture
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                ) : (
                  <Image
                    src={encodeURI(
                      activeProject.images[activeImageIndex] ||
                        activeProject.images[0]
                    )}
                    alt={`${activeProject.title} detailed preview`}
                    fill
                    className="object-contain"
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                )}
                {activeProject.images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((current) =>
                          getNextIndex(
                            current,
                            activeProject.images.length,
                            -1
                          )
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/90 p-2 text-ink shadow-sm backdrop-blur transition hover:-translate-y-1/2 hover:bg-white"
                      aria-label="Previous image"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M15.5 5.5a1 1 0 0 1 0 1.4L10.4 12l5.1 5.1a1 1 0 1 1-1.4 1.4l-5.8-5.8a1 1 0 0 1 0-1.4l5.8-5.8a1 1 0 0 1 1.4 0z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((current) =>
                          getNextIndex(
                            current,
                            activeProject.images.length,
                            1
                          )
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/90 p-2 text-ink shadow-sm backdrop-blur transition hover:-translate-y-1/2 hover:bg-white"
                      aria-label="Next image"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M8.5 18.5a1 1 0 0 1 0-1.4l5.1-5.1-5.1-5.1a1 1 0 0 1 1.4-1.4l5.8 5.8a1 1 0 0 1 0 1.4l-5.8 5.8a1 1 0 0 1-1.4 0z"
                        />
                      </svg>
                    </button>
                  </>
                ) : null}
              </div>
              {activeProject.images.length > 1 ? (
                <div className="flex items-center justify-center gap-2 pb-2">
                  {activeProject.images.map((_, index) => (
                    <button
                      key={`${activeProject.title}-dot-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        activeImageIndex === index
                          ? "bg-ink"
                          : "bg-ink/20"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              ) : null}
              <div className="space-y-4 p-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-semibold text-ink dark:text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-slate dark:text-white">
                    {activeProject.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink dark:bg-white/10 dark:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

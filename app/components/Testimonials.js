"use client";

import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The lead-to-onboarding automation cleaned up our intake process and kept every step moving without manual follow-ups.",
    name: "Solomon",
    company: "Tutoring Company",
  },
  {
    quote:
      "The SEO blog automation and multi-platform content engine now drive consistent output and stronger visibility with almost no manual lift.",
    name: "Nicolas",
    company: "Digital Expand CEO",
  },
  {
    quote:
      "The client reporting automation gives each customer a personalized weekly report without manual effort. It’s accurate, fast, and reliable.",
    name: "David",
    company: "Trucking Company",
  },
  {
    quote:
      "Their social media chatbot and AI lease agreement automation cut our response time and sped up approvals across the team.",
    name: "Client Team",
    company: "StartupLab Business Center",
  },
  {
    quote:
      "Our Gorgias ticket automation now routes feedback, inquiries, and complaints to the right team instantly.",
    name: "Conny",
    company: "Ecommerce Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-[#0B1120]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Clients Say"
          subtitle="Real results from automation projects delivered end-to-end."
          align="center"
        />
        <div className="overflow-hidden rounded-[32px] border border-mist bg-white/70 px-4 py-6 shadow-card dark:border-white/10 dark:bg-white/5">
          <div className="flex gap-6 marquee-track animate-marquee" aria-hidden="true">
            {[...testimonials, ...testimonials].map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="flex w-80 flex-none flex-col justify-between gap-6 rounded-3xl border border-mist bg-white p-6 shadow-card dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm text-slate dark:text-white">“{item.quote}”</p>
                <div className="text-sm">
                  <p className="font-semibold text-ink dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-slate dark:text-white">{item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

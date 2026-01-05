"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const certificates = [
  { name: "Basic ChatGPT", file: "Basic ChatGPT.png" },
  { name: "Basic Machine Learning", file: "Basic machine learning.jpg" },
  {
    name: "Intro to AI (1)",
    file: "CertificateOfCompletion_Introduction to Artificial Intelligence (1).png",
  },
  {
    name: "Intro to AI",
    file: "CertificateOfCompletion_Introduction to Artificial Intelligence.png",
  },
  { name: "Coursera Foundation of UX", file: "Coursera Foundation of UX.png" },
  {
    name: "Coursera Python OS",
    file: "Coursera Using Python to Interact with the Operating System.png",
  },
  { name: "Coursera GitHub", file: "Coursera github.png" },
  { name: "Coursera Python", file: "Coursera python cert.png" },
  { name: "Machine Learning for Beginners", file: "Machine Learning for beginners.png" },
  { name: "Make Basics", file: "Make Basics.png" },
  { name: "Make Intermediate", file: "Make Intermediate.png" },
  { name: "Make Foundation", file: "Make foundation.png" },
  {
    name: "ChatGPT Certificate",
    file: "Pierce Xander Giron - 2024-07-25 (ChatGPT).png",
  },
  { name: "UI UX", file: "UI UX.png" },
  { name: "What is ChatGPT", file: "What is ChatGPT.png" },
];

export default function Certificates() {
  return (
    <section className="bg-mist/40 px-6 py-20 dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <SectionHeading
            eyebrow="Credentials"
            title="Certificates"
            subtitle="Training and certifications that support my automation and AI work."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.file}
                className="overflow-hidden rounded-3xl border border-mist bg-white p-4 shadow-card dark:border-white/10 dark:bg-white/5"
                onContextMenu={(event) => event.preventDefault()}
              >
                <Image
                  src={encodeURI(`/images/certificates/${certificate.file}`)}
                  alt={`${certificate.name} certificate`}
                  width={520}
                  height={380}
                  className="h-48 w-full select-none object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const badges = [
  { name: "Make Basics", file: "make-basics.png" },
  { name: "Make Foundation", file: "make-foundation.1.png" },
  { name: "Make Intermediate", file: "make-intermediate (1).png" },
];

export default function Badges() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-[#0B1120]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <SectionHeading
            eyebrow="Make.com"
            title="Badges"
            subtitle="Verified Make.com training badges earned through hands-on automation work."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="flex items-center justify-center rounded-3xl border border-mist bg-white p-6 shadow-card dark:border-white/10 dark:bg-white/5"
                onContextMenu={(event) => event.preventDefault()}
              >
                <Image
                  src={encodeURI(`/images/badges/${badge.file}`)}
                  alt={`${badge.name} badge`}
                  width={320}
                  height={240}
                  className="h-32 w-auto select-none object-contain"
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

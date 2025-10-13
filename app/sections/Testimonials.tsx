"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    quote:
      "The agency’s architects have a unique ability to capture the essence of modern living.",
    name: "Greg, Canada",
    role: "Owner who loves smooth architecture",
  },
  {
    quote:
      "An agency that blends aesthetics and functionality in their modern buildings.",
    name: "Sara, Italy",
    role: "Curator who blends aesthetics into urbanicity",
  },
  {
    quote:
      "With you guys, living in the future will be way more aesthetic than I thought.",
    name: "Anthony, Spain",
    role: "Shows aesthetics in our buildings as we",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Clients glittering testimonials
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600"
        >
          The voices of satisfaction as clients share their experiences with our
          cutting-edge modern buildings and visionary architectures.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">“</div>
              <p className="mt-2 text-sm text-gray-800">{t.quote}</p>
              <footer className="mt-6 text-xs text-gray-500">
                <div className="font-medium text-black">{t.name}</div>
                <div>{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

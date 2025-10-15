"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Discover() {
  return (
    <section id="architectures" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Discover modern architectures
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600"
        >
          Experience the seamless integration of creativity and aesthetics as
          architects push boundaries to create structures that captivate the eye
          and inspire the mind.
        </motion.p>

        <div className="mt-10 grid gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl bg-gray-200 shadow-sm"
          >
            <motion.img
              src="/images/architectures/s1first.webp"
              alt="Modern facade"
              className="h-72 w-full object-cover md:h-96 transition-all duration-300 hover:scale-110"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              "/images/architectures/s1second.webp",
              "/images/architectures/s1third.webp",
              "/images/architectures/s1fourth.webp",
            ].map((src) => (
              <motion.div
                key={src}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-gray-200 shadow-sm"
              >
                <motion.img
                  src={src}
                  alt="Architecture detail"
                  className="h-44 w-full object-cover md:h-56 transition-all duration-300 hover:scale-110"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

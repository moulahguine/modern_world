"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cards = [
  { src: "/fut-1.jpg", title: "Meyer Cube", city: "Tokyo, Japan" },
  { src: "/fut-2.jpg", title: "Triangles Stack", city: "Doha, Qatar" },
  { src: "/fut-3.jpg", title: "Nebula Plaza", city: "Toronto, Canada" },
];

export default function Futuristic() {
  return (
    <section id="buildings" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Futuristic buildings worldwide
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600"
        >
          In every corner of the world, we craft aesthetic buildings, each
          standing as a timeless work of art that captures the essence of modern
          and futuristic aesthetics.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <motion.img
                src={card.src}
                alt={card.title}
                className="h-60 w-full object-cover"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="p-4">
                <h3 className="font-medium">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.city}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

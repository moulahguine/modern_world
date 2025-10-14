"use client";

import { motion } from "framer-motion";
import ExploreButton from "../ui/ExploreButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-gray-50"
    >
      <div className="absolute inset-0 bg-[url('/images/hero/hero.svg')]  bg-bottom bg-no-repeat bg-cover" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          Walk through the modern world
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl text-sm text-gray-600 md:text-base"
        >
          In a world where every structure tells a unique story, we redefine
          architectural excellence by crafting modern, imaginative buildings
          that push the skyline’s boundaries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <ExploreButton />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ExploreButton from "../ui/ExploreButton";

export default function Hero() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="display-title text-5xl md:text-8xl"
      >
        Walk through the modern world
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        className="leading-[1.7] mx-auto mt-4 max-w-xl text-sm text-gray-600 md:text-base"
      >
        In a world where every structure tells a unique story, we redefine
        architectural excellence by crafting modern, imaginative buildings that
        push the skyline’s boundaries.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8"
      >
        <ExploreButton />
      </motion.div>
    </>
  );
}

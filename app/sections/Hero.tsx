"use client";

import { motion, useReducedMotion } from "framer-motion";
import ExploreButton from "../ui/ExploreButton";
import Image from "next/image";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="relative top-0 flex min-h-[100vh] items-center justify-center overflow-hidden bg-gray-50"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero/hero.svg"
          alt=""
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 -top-7 mx-auto max-w-3xl px-4 text-center">
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, ease: "easeOut" }
          }
          className="display-title text-5xl md:text-8xl "
        >
          Walk through the modern world
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { delay: 0.15, duration: 0.8, ease: "easeOut" }
          }
          className="leading-[1.7] mx-auto mt-4 max-w-xl text-sm text-gray-600 md:text-base"
        >
          In a world where every structure tells a unique story, we redefine
          architectural excellence by crafting modern, imaginative buildings
          that push the skyline’s boundaries.
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? undefined : { delay: 0.3, duration: 0.6 }
          }
          className="mt-8"
        >
          <ExploreButton />
        </motion.div>
      </div>
    </section>
  );
}

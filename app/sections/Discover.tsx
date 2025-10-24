"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Discover() {
  const prefersReducedMotion = useReducedMotion();
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  useEffect(() => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const handle = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      if (idx !== activeMobileIdx)
        setActiveMobileIdx(Math.max(0, Math.min(2, idx)));
    };
    el.addEventListener("scroll", handle, { passive: true });
    return () => el.removeEventListener("scroll", handle as any);
  }, [activeMobileIdx]);

  return (
    <section id="architectures" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={
            prefersReducedMotion ? undefined : { once: true, margin: "-100px" }
          }
          className="display-title text-center lg:text-6xl text-5xl my-2.5"
        >
          Discover modern architectures
        </motion.h2>
        <motion.p
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={
            prefersReducedMotion ? undefined : { once: true, margin: "-100px" }
          }
          className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-700"
        >
          Experience the seamless integration of creativity and aesthetics as
          architects push boundaries to create structures that captivate the eye
          and inspire the mind.
        </motion.p>

        {/* Mobile swipe carousel */}
        <div className="mt-10 md:hidden flex flex-col gap-5">
          <div className="relative h-72 md:h-96 w-full rounded-2xl">
            <Image
              src="/images/architectures/s1first.webp"
              alt="Modern architectural facade with geometric paneling"
              fill
              className="object-cover transition-transform duration-300 rounded-2xl hover:scale-110"
              sizes="(min-width: 768px) 100vw, 100vw"
              priority={false}
            />
          </div>
          <div
            ref={mobileTrackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4"
            style={{ scrollbarWidth: "none" }}
          >
            {[
              "/images/architectures/s1second.webp",
              "/images/architectures/s1third.webp",
              "/images/architectures/s1fourth.webp",
            ].map((src) => (
              <div key={src} className="relative min-w-full snap-start">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                  <Image
                    src={src}
                    alt={
                      src.includes("second")
                        ? "Minimalist atrium with natural light"
                        : src.includes("third")
                        ? "Curved modern staircase with concrete finish"
                        : "Facade detail with glass and steel patterns"
                    }
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden
                className={`block h-2 w-2 rounded-full ${
                  activeMobileIdx === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet grid */}
        <div className="mt-10 hidden md:grid gap-6">
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            className="overflow-hidden rounded-2xl bg-gray-200 shadow-sm"
          >
            <div className="relative h-72 md:h-96 w-full">
              <Image
                src="/images/architectures/s1first.webp"
                alt="Modern architectural facade with geometric paneling"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(min-width: 768px) 100vw, 100vw"
                priority={false}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              "/images/architectures/s1second.webp",
              "/images/architectures/s1third.webp",
              "/images/architectures/s1fourth.webp",
            ].map((src) => (
              <motion.div
                key={src}
                variants={prefersReducedMotion ? undefined : fadeUp}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "show"}
                viewport={prefersReducedMotion ? undefined : { once: true }}
                className="overflow-hidden rounded-2xl bg-gray-200 shadow-sm"
              >
                <div className="relative h-44 md:h-56 w-full">
                  <Image
                    src={src}
                    alt={
                      src.includes("second")
                        ? "Minimalist atrium with natural light"
                        : src.includes("third")
                        ? "Curved modern staircase with concrete finish"
                        : "Facade detail with glass and steel patterns"
                    }
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

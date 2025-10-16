"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const totalSlides = 10;

const images = Array.from(
  { length: totalSlides },
  (_, idx) => `/images/Buildings/building-${idx + 1}.webp`
);

const imagesAndInfo = [
  { title: "nebula skyline", subTitle: "milan, italy" },
  { title: "cantardi house", subTitle: "marseille, france" },
  { title: "meyer cube", subTitle: "tokyo, japan" },
  { title: "triangles stack", subTitle: "doha, qatar" },
  { title: "nebula plaza", subTitle: "toronto, canada" },
  { title: "luxoria apartments", subTitle: "berlin, germany" },
  { title: "elysium skyscape", subTitle: "sydney, austalia" },
  { title: "dimensional dwellings", subTitle: "chicago, united states" },
  { title: "the apex tower", subTitle: "sylvania, cascadia" },
  { title: "haven residence", subTitle: "madrid, spain" },
];

export default function Futuristic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const prefersReducedMotion = useReducedMotion();

  const items = useMemo(() => {
    const length = Math.min(images.length, imagesAndInfo.length);
    return Array.from({ length }, (_, i) => ({
      id: `building-${i}`,
      title: imagesAndInfo[i].title,
      subTitle: imagesAndInfo[i].subTitle,
      image: images[i],
    }));
  }, []);

  const baseLength = items.length;
  const loopedItems = useMemo(() => {
    if (baseLength === 0) return [];
    if (baseLength === 1) return [...items, ...items, ...items];
    const first = items[0];
    const last = items[items.length - 1];
    return [last, ...items, first];
  }, [items, baseLength]);

  useEffect(() => {
    if (baseLength > 0 && currentIndex === 0) {
      setCurrentIndex(1);
    }
  }, [baseLength, currentIndex]);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [slideStepPx, setSlideStepPx] = useState<number>(0);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const firstChild = el.children.item(0) as HTMLElement | null;
    if (!firstChild) return;
    const childWidth = firstChild.offsetWidth;
    const styles = window.getComputedStyle(el);
    const columnGap = parseFloat(styles.columnGap || "0");
    setSlideStepPx(childWidth + columnGap);
  }, [baseLength]);

  const goNext = () => {
    setCurrentIndex((next) => next + 1);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless boundary handling
  const [isInstant, setIsInstant] = useState(false);
  const TRANSITION_MS = 500;
  useEffect(() => {
    if (baseLength === 0) return;
    const maxIndex = loopedItems.length - 2; // before trailing first clone
    if (currentIndex > maxIndex) {
      const t = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(1);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
    if (currentIndex <= 0) {
      const t = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(loopedItems.length - 2);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [currentIndex, baseLength, loopedItems.length]);

  useEffect(() => {
    if (!isInstant) return;
    const id = setTimeout(() => setIsInstant(false), 0);
    return () => clearTimeout(id);
  }, [isInstant]);

  const targetX = -(currentIndex * (slideStepPx || 0));

  const view = [] as Array<{
    id: string;
    title?: string;
    subTitle?: string;
    image: string;
  }>;
  for (let offset = 0; offset < visibleCount; offset++) {
    const idx = (currentIndex + offset) % items.length;
    view.push(items[idx]);
  }

  return (
    <section
      id="buildings"
      className="py-20 bg-[#F2F2F2]"
      aria-labelledby="buildings-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          id="buildings-heading"
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={
            prefersReducedMotion ? undefined : { once: true, margin: "-100px" }
          }
          className="display-title text-center lg:text-6xl md:text-4xl my-2.5"
        >
          Futuristic buildings worldwide
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
          In every corner of the world, we craft aesthetic buildings, each
          standing as a timeless work of art that captures the essence of modern
          and futuristic aesthetics.
        </motion.p>

        <div className="mt-10">
          <div
            className="relative mx-auto max-w-6xl  select-none group"
            role="region"
            aria-roledescription="carousel"
            aria-label="Futuristic buildings carousel"
          >
            <div className="overflow-hidden  ">
              <motion.div
                ref={trackRef}
                animate={prefersReducedMotion ? undefined : { x: targetX }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : isInstant
                    ? { duration: 0 }
                    : { type: "tween", duration: 0.5, ease: "easeInOut" }
                }
                className="flex gap-5"
              >
                {loopedItems.map((slide, idx) => (
                  <div
                    key={slide.id + "-" + idx}
                    className="basis-1/3 shrink-0 grow-0 "
                  >
                    <div className="relative h-56 md:h-72 lg:h-[530px] w-full  overflow-hidden ">
                      <Image
                        fill
                        src={slide.image}
                        alt={
                          slide.title
                            ? `${slide.title} — ${slide.subTitle}`
                            : "Futuristic building exterior"
                        }
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                        priority={false}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                        <p className="text-white font-bold text-3xl capitalize">
                          {slide.title}
                        </p>
                        <p className="text-white/80 text-lg capitalize">
                          {slide.subTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              aria-label="Previous"
              onClick={goPrev}
              className="relative left-1 -top-65 -translate-y-1/2  bg-black/70 p-2  hover:bg-black focus-visible:outline-2 focus-visible:outline-white w-12 h-12 rotate-90 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
            >
              <div className="arrowDown absolute left-1/2 top-[50%] translate-y-[-50%] w-[2px] h-[30px] translate-x-[-50%] transition-all duration-300  bg-white"></div>
            </button>

            <button
              aria-label="Next"
              onClick={goNext}
              className="relative -right-255.5 -top-65 -translate-y-1/2  bg-black/70 p-2  hover:bg-black focus-visible:outline-2 focus-visible:outline-white w-12 h-12 -rotate-90 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
            >
              <div className="arrowDown absolute left-1/2 top-[50%] translate-y-[-50%] w-[2px] h-[30px] translate-x-[-50%] transition-all duration-300  bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

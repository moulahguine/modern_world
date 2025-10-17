"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Futuristic() {
  const [imageIndex, setImageIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 996) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  });

  const totalSlides = 10;

  const images = Array.from(
    { length: totalSlides },
    (_, idx) => `/images/Buildings/building-${idx + 1}.webp`
  );
  const imagesAndInfo = images.map((url, idx) => ({
    url,
    title: [
      "nebula skyline",
      "cantardi house",
      "meyer cube",
      "triangles stack",
      "nebula plaza",
      "luxoria apartments",
      "elysium skyscape",
      "dimensional dwellings",
      "the apex tower",
      "haven residence",
    ][idx],
    subTitle: [
      "milan, italy",
      "marseille, france",
      "tokyo, japan",
      "doha, qatar",
      "toronto, canada",
      "berlin, germany",
      "sydney, australia",
      "chicago, united states",
      "sylvania, cascadia",
      "madrid, spain",
    ][idx],
  }));

  const total = imagesAndInfo.length;
  const goNext = () => setImageIndex((i) => (i + 1) % total);
  const goPrev = () => setImageIndex((i) => (i - 1 + total) % total);

  const visibleSlides = Array.from(
    { length: slidesToShow },
    (_, i) => imagesAndInfo[(imageIndex + i) % total]
  );

  return (
    <section
      id="buildings"
      className="py-20 bg-[#F2F2F2]"
      aria-labelledby="buildings-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          id="buildings-heading"
          className="display-title text-center lg:text-6xl text-5xl my-2.5"
        >
          Futuristic buildings worldwide
        </motion.h2>
        <motion.p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-700">
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
                className="flex gap-5"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -50) goNext();
                  if (info.offset.x > 50) goPrev();
                }}
              >
                {visibleSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className="basis-full md:basis-1/3 shrink-0 grow-0 "
                  >
                    <div className="relative h-120 md:h-72 lg:h-[530px] w-full  overflow-hidden ">
                      <Image
                        fill
                        src={slide.url}
                        alt={`${slide.title} — ${slide.subTitle}`}
                        className="object-cover"
                      />

                      <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
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
              className="relative left-0 -top-65 -translate-y-1/2  bg-black/70 p-2  hover:bg-black focus-visible:outline-2 focus-visible:outline-white w-12 h-12 rotate-90 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
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

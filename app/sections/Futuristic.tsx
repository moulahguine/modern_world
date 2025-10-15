"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  {
    id: uuidv4(),
    image: images,
    title: "nebula skyline",
    subTitle: "milan, italy",
  },
  {
    id: uuidv4(),
    image: images,
    title: "cantardi house",
    subTitle: "marseille, france",
  },
  {
    id: uuidv4(),
    image: images,
    title: "meyer cube",
    subTitle: "tokyo, japan",
  },
  {
    id: uuidv4(),
    image: images,
    title: "triangles stack",
    subTitle: "doha, qatar",
  },
  {
    id: uuidv4(),
    image: images,
    title: "nebula plaza",
    subTitle: "toronto, canada",
  },
  {
    id: uuidv4(),
    image: images,
    title: "luxoria apartments",
    subTitle: "berlin, germany",
  },
  {
    id: uuidv4(),
    image: images,
    title: "elysium skyscape",
    subTitle: "sydney, austalia",
  },
  {
    id: uuidv4(),
    title: "dimensional dwellings",
    subTitle: "chicago, united states",
  },
  { id: uuidv4(), title: "the apex tower", subTitle: "sylvania, cascadia" },
  { id: uuidv4(), title: "haven residence", subTitle: "madrid, spain" },
];

export default function Futuristic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const items = useMemo(() => {
    const length = Math.min(images.length, imagesAndInfo.length);
    return Array.from({ length }, (_, i) => ({
      id: imagesAndInfo[i].id,
      title: imagesAndInfo[i].title,
      subTitle: imagesAndInfo[i].subTitle,
      image: images[i],
    }));
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const visibleSlides = useMemo(() => {
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
    return view;
  }, [currentIndex, items, visibleCount]);

  return (
    <section id="buildings" className="py-20 bg-[#F2F2F2]">
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

        <div className="mt-10">
          <div className="relative mx-auto max-w-6xl  select-none">
            <div className="overflow-hidden rounded-2xl ">
              <motion.div
                initial={{ x: -20, opacity: 0.9 }}
                animate={{
                  x: `-${(currentIndex * 100) % visibleCount}%`,
                  opacity: 1,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="flex gap-5"
              >
                {visibleSlides.map((slide) => (
                  <div key={slide.id} className="basis-1/3 shrink-0 grow-0 ">
                    <div className="relative h-56 md:h-72 lg:h-[420px] w-full rounded-2xl overflow-hidden ">
                      <Image
                        fill
                        src={slide.image}
                        alt={slide.title ?? "Futuristic building"}
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                        priority={false}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                        <p className="text-white font-medium capitalize">
                          {slide.title}
                        </p>
                        <p className="text-white/80 text-xs capitalize">
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
              className="relative left-0 -top-50 -translate-y-1/2  bg-black/70 p-2  hover:bg-black focus:outline-none w-12 h-12 rotate-90"
            >
              <div className="arrowDown absolute left-1/2 top-[50%] translate-y-[-50%] w-[2px] h-[30px] translate-x-[-50%] transition-all duration-300  bg-white"></div>
            </button>

            <button
              aria-label="Previous"
              onClick={goNext}
              className="relative -right-255.5 -top-50 -translate-y-1/2  bg-black/70 p-2  hover:bg-black focus:outline-none w-12 h-12 -rotate-90"
            >
              <div className="arrowDown absolute left-1/2 top-[50%] translate-y-[-50%] w-[2px] h-[30px] translate-x-[-50%] transition-all duration-300  bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

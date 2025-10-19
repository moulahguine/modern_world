"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const totalSlides = 10;

const buildings = Array.from({ length: totalSlides }, (_, idx) => ({
  url: `/images/Buildings/building-${idx + 1}.webp`,
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

export default function Futuristic() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalImages = buildings.length;
  const imageWidth = useRef(0);

  const extendedBuildings = [
    buildings[totalImages - 1],
    ...buildings,
    ...buildings,
    ...buildings,
    ...buildings,
    ...buildings,
    buildings[0],
  ];

  // Handle responsiveness
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 996) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Measure image width
  useEffect(() => {
    if (containerRef.current) {
      const firstSlide = containerRef.current.querySelector("div");
      if (firstSlide instanceof HTMLElement) {
        imageWidth.current = firstSlide.offsetWidth + 20; // add gap
      }
    }
  }, [visibleCount]);

  // Update translation when currentIndex changes
  useEffect(() => {
    if (!containerRef.current) return;
    const offset = currentIndex * imageWidth.current;
    containerRef.current.style.transition = "transform 0.4s ease";
    containerRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, visibleCount]);

  // Looping logic
  const handleTransitionEnd = () => {
    if (!containerRef.current) return;

    if (currentIndex === 0) {
      containerRef.current.style.transition = "none";
      setCurrentIndex(totalImages);
      containerRef.current.style.transform = `translateX(-${
        totalImages * imageWidth.current
      }px)`;
    } else if (currentIndex === totalImages + 1) {
      containerRef.current.style.transition = "none";
      setCurrentIndex(1);
      containerRef.current.style.transform = `translateX(-${imageWidth.current}px)`;
    }
  };

  // Attach transition listener once
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  });

  const handleNext = () => setCurrentIndex((i) => i + 1);
  const handlePrev = () => setCurrentIndex((i) => i - 1);

  // Swipe support
  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    let startX = 0;
    let deltaX = 0;

    const handleStart = (e: TouchEvent | MouseEvent) => {
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    };

    const handleMove = (e: TouchEvent | MouseEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      deltaX = x - startX;
    };

    const handleEnd = () => {
      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) handleNext();
        else handlePrev();
      }
      deltaX = 0;
    };

    slider.addEventListener("touchstart", handleStart);
    slider.addEventListener("touchmove", handleMove);
    slider.addEventListener("touchend", handleEnd);

    return () => {
      slider.removeEventListener("touchstart", handleStart);
      slider.removeEventListener("touchmove", handleMove);
      slider.removeEventListener("touchend", handleEnd);
    };
  }, [currentIndex, visibleCount]);

  return (
    <section id="buildings" className="py-20 bg-[#F2F2F2] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="display-title text-center lg:text-6xl text-4xl my-2.5">
          Futuristic buildings worldwide
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm text-gray-700 mb-10">
          In every corner of the world, we craft aesthetic buildings, each
          standing as a timeless work of art that captures the essence of modern
          and futuristic aesthetics.
        </p>

        <div className="relative group select-none overflow-hidden rounded-2xl">
          <div ref={containerRef} className="flex gap-5 will-change-transform">
            {extendedBuildings.map((b, i) => (
              <div
                key={i}
                className="shrink-0 grow-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="relative h-96 lg:h-[530px] w-full overflow-hidden rounded-xl">
                  <Image
                    fill
                    src={b.url}
                    alt={`${b.title} — ${b.subTitle}`}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                    <p className="text-white font-bold text-3xl capitalize">
                      {b.title}
                    </p>
                    <p className="text-white/80 text-lg capitalize">
                      {b.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 hover:bg-black w-12 h-12 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="arrowDown absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[30px] bg-white"></div>
          </button>

          <button
            aria-label="Next"
            onClick={handleNext}
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 hover:bg-black w-12 h-12 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="arrowDown absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[30px] bg-white"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Futuristic() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [visibleCount, setVisibleCount] = useState(3);

  const slides = [
    {
      url: "/images/Buildings/building-1.webp",
      title: "nebula skyline",
      sub: "milan, italy",
    },
    {
      url: "/images/Buildings/building-2.webp",
      title: "cantardi house",
      sub: "marseille, france",
    },
    {
      url: "/images/Buildings/building-3.webp",
      title: "meyer cube",
      sub: "tokyo, japan",
    },
    {
      url: "/images/Buildings/building-4.webp",
      title: "triangles stack",
      sub: "doha, qatar",
    },
    {
      url: "/images/Buildings/building-5.webp",
      title: "nebula plaza",
      sub: "toronto, canada",
    },
    {
      url: "/images/Buildings/building-6.webp",
      title: "luxoria apartments",
      sub: "berlin, germany",
    },
    {
      url: "/images/Buildings/building-7.webp",
      title: "elysium skyscape",
      sub: "sydney, australia",
    },
    {
      url: "/images/Buildings/building-8.webp",
      title: "dimensional dwellings",
      sub: "chicago, usa",
    },
    {
      url: "/images/Buildings/building-9.webp",
      title: "the apex tower",
      sub: "sylvania, cascadia",
    },
    {
      url: "/images/Buildings/building-10.webp",
      title: "haven residence",
      sub: "madrid, spain",
    },
  ];

  useEffect(() => {
    slides.forEach((slide) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = slide.url;
      document.head.appendChild(link);
    });
  }, []);

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

  const handleNext = () => embla && embla.scrollNext();
  const handlePrev = () => embla && embla.scrollPrev();

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
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2">
              {slides.map((b, i) => (
                <div
                  key={i}
                  className=" shrink-0 grow-0 "
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative  h-[530px] w-full overflow-hidden rounded-xl">
                    <Image
                      fill
                      src={b.url}
                      alt={`${b.title} — ${b.sub}`}
                      className="object-cover"
                      priority={true}
                      loading="eager"
                    />
                    <div className="shadow-[0_-140px_35px_-87px_rgba(0,0,0,0.5)_inset] w-full absolute bottom-0 bg-gradient-to-t p-4">
                      <p className="text-white font-bold text-3xl capitalize">
                        {b.title}
                      </p>
                      <p className="text-white/80 text-lg capitalize">
                        {b.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Original Arrow Buttons */}
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

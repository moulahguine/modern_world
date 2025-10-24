"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { id: 1, href: "#home", label: "Home" },
  { id: 2, href: "#architectures", label: "Architectures" },
  { id: 3, href: "#buildings", label: "Buildings" },
  { id: 4, href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const sectionIds = useMemo(
    () => links.map((link) => link.href.replace("#", "")),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const obs = new IntersectionObserver(callback, options);

    observerRef.current = obs;
    console.log(observerRef.current);

    const elements: Element[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        obs.observe(el);
        elements.push(el);
      }
    });
    return () => {
      elements.forEach((el) => obs.unobserve(el));
      obs.disconnect();
      observerRef.current = null;
    };
  }, [sectionIds]);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
      animate={prefersReducedMotion ? false : { y: 0, opacity: 1 }}
      transition={
        prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }
      }
      className={`w-full fixed top-6 z-50 bg-transparent`}
    >
      <nav
        className="relative w-auto mx-5 md:w-full max-w-3xl md:mx-auto px-6 py-1 bg-white rounded-4xl circle"
        aria-label="Primary"
      >
        <div className="flex h-10 items-center justify-end md:justify-center child">
          <ul className="hidden gap-6 text-sm md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={
                    activeSection === link.href.replace("#", "")
                      ? "page"
                      : undefined
                  }
                  className={` hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-black rounded-md px-2 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-gray-700 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="cursor-pointer md:hidden  inline-flex items-center justify-center w-10 h-10  hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black relative"
            aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <span className="absolute right-3 md:right-1 top-3 md:top-2 block w-4 md:w-5 h-[2px] bg-black"></span>
            <span className="absolute right-0 md:left-0 top-5 md:top-5 block w-[80%] md:w-full h-[2px] bg-black"></span>
            <span className="absolute right-2 md:left-1 top-7 md:top-8 block w-3 md:w-5 h-[2px] bg-black"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <motion.div
          id="mobile-menu"
          className="fixed h-[100dvh] inset-0 z-[60] bg-white/50 backdrop-blur-sm md:hidden"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setIsMobileOpen(false)}
        >
          <motion.div
            className="w-full h-80 px-6 pt-6 pb-12 bg-white absolute bottom-0 rounded-t-3xl shadow-lg"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cursor-pointer grid place-content-center w-10 h-10 rounded-full hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black absolute right-2 top-2"
              aria-label="Close navigation"
              onClick={() => setIsMobileOpen(false)}
            >
              <span
                aria-hidden
                className="w-5 h-[2px] translate-x-1 block rotate-30 bg-black"
              ></span>
              <span
                aria-hidden
                className="w-6 h-[2px] block -rotate-40 bg-black"
              ></span>
            </button>
            <ul className="mt-8 space-y-6 text-center text-base">
              <h2 className="display-title text-2xl">Navigation</h2>
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    aria-current={
                      activeSection === link.href.replace("#", "")
                        ? "page"
                        : undefined
                    }
                    className="hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-black rounded-md px-2 text-gray-700"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}

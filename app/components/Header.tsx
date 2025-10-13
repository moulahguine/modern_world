"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#architectures", label: "Architectures" },
  { href: "#buildings", label: "Buildings" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="#home" className="font-semibold tracking-tight">
            Modern World
          </Link>
          <ul className="hidden gap-6 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-700 transition-colors hover:text-black"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

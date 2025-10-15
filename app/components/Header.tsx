"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { id: 1, href: "#home", label: "Home" },
  { id: 2, href: "#architectures", label: "Architectures" },
  { id: 3, href: "#buildings", label: "Buildings" },
  { id: 4, href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window === "undefined") return;

    let current = "home";
    links.forEach((link) => {
      const section = document.getElementById(link.href.replace("#", ""));
      if (section) {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;

        if (latest >= top && latest < bottom) {
          current = link.href.replace("#", "");
        }
      }
    });
    setActiveSection(current);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-5 z-50 transition-colors bg-transparent`}
    >
      <nav className="max-w-3xl mx-auto px-4 bg-white rounded-4xl shadow-sm circle relative  ">
        <div className="flex h-14 items-center justify-center">
          <ul className="hidden gap-6 text-sm md:flex  ">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                passHref
                className={` hover:text-gray-700 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-gray-700 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

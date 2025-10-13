"use client";

import { useRouter } from "next/navigation";

export default function ExploreButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("#architectures")}
      className="rounded-full border border-black px-5 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-black hover:text-white"
    >
      Explore
    </button>
  );
}

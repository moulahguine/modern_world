import Image from "next/image";

const testimonials = [
  {
    quote:
      "The agency’s architects have a unique ability to capture the essence of modern living.",
    name: "Greg, Canada",
    role: "Owner who loves smooth architecture",
  },
  {
    quote:
      "An agency that blends aesthetics and functionality in their modern buildings.",
    name: "Sara, Italy",
    role: "Curator who blends aesthetics into urbanicity",
  },
  {
    quote:
      "With you guys, living in the future will be way more aesthetic than I thought.",
    name: "Anthony, Spain",
    role: "Shows aesthetics in our buildings as we",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="display-title text-center lg:text-6xl text-5xl my-2.5">
          Clients glittering testimonials
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-700">
          The voices of satisfaction as clients share their experiences with our
          cutting-edge modern buildings and visionary architectures.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl h-80 border bg-[#F2F2F2] p-6 shadow-sm transition-all duration-300 hover:rotate-3 hover:scale-110"
            >
              <Image
                width={50}
                height={50}
                src={"/images/quote/quote.svg"}
                alt={""}
                aria-hidden
              />
              <p className="mt-2 text-xl font-semibold text-gray-800 ">
                {t.quote}
              </p>
              <footer className="mt-6 text-xs text-gray-500 h-25 flex flex-col justify-end">
                <div className="font-medium text-black">{t.name}</div>
                <div>{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

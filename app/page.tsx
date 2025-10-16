import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Discover from "./sections/Discover";
import Futuristic from "./sections/Futuristic";
import Testimonials from "./sections/Testimonials";
import Image from "next/image";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen bg-white text-black">
        {/* start hero */}
        <section
          id="home"
          className="relative top-0 flex min-h-[100vh] items-center justify-center overflow-hidden bg-gray-50"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/images/hero/hero.svg"
              alt=""
              fill
              priority
              className="object-cover object-bottom"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 -top-7 mx-auto max-w-3xl px-4 text-center">
            <Hero />
          </div>
        </section>
        {/* end hero */}

        <Discover />

        <Futuristic />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}

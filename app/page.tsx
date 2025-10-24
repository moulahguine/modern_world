import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Discover from "./sections/Discover";
import Futuristic from "./sections/Futuristic";
import Testimonials from "./sections/Testimonials";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        className="min-h-screen bg-white text-black overflow-hidden"
      >
        <Hero />

        <Discover />

        <Futuristic />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}

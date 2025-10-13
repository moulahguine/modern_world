import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Discover from "./sections/Discover";
import Futuristic from "./sections/Futuristic";
import Testimonials from "./sections/Testimonials";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <div className="h-14" />
      <Hero />
      <Discover />
      <Futuristic />
      <Testimonials />
      <Footer />
    </main>
  );
}

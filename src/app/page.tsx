import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import SpecialOffer from "@/components/SpecialOffer";
import Portfolio from "@/components/Portfolio";
import CallBanner from "@/components/CallBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallBtn from "@/components/FloatingCallBtn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SpecialOffer />
      <Services />
      <Portfolio />
      <WorkProcess />
      <CallBanner />
      <About />
      <Contact />
      <Footer />
      <FloatingCallBtn />
    </main>
  );
}

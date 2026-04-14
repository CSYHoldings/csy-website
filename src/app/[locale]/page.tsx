import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Evidence } from "@/components/Evidence";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Approach />
        <Evidence />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

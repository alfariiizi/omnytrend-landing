import Testimonials from "@/components/sections/testimonial/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import Features from "@/components/sections/feature/default";
import FAQsSection from "@/components/sections/faq/faqs-4";
import Navbar from "@/components/sections/navbar/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full overflow-hidden">
      <div className="fade-top absolute h-[800px] w-full overflow-hidden">
        {/* Background Grid & Texture - Refined: Larger, Fainter, and Masked */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_2px),linear-gradient(to_bottom,#ffffff05_2px,transparent_2px)] [mask-image:linear-gradient(to_bottom,black_20%,transparent_90%)] bg-[size:50px_50px]"></div>
      </div>

      {/* Top Glow */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-[800px] bg-[radial-gradient(circle_800px_at_50%_-100px,#1d4ed830,transparent)]"></div>

      <Hero />
      <Stats />
      <Features />
      <Items />
      <Pricing />
      <Testimonials />
      <FAQsSection />
      <CTA />
      <Footer showModeToggle={false} />
    </main>
  );
}

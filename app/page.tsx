import Testimonials from "@/components/sections/testimonial/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import Features from "@/components/sections/feature/default";
import FAQsSection from "@/components/sections/faq/faqs-4";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full overflow-hidden">
      <Hero />
      {/* <Logos /> */}
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

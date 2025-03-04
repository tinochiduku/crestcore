import About from "@/components/sections/about";
import Affairs from "@/components/sections/affairs";
import Blog from "@/components/sections/blog";
import Choosing from "@/components/sections/choosing";
import Choosing2 from "@/components/sections/choosing2";
import Contact from "@/components/sections/contact";
import Cta from "@/components/sections/cta";
import Help from "@/components/sections/help";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Affairs />
      <Choosing />
      <Choosing2 />
      <Cta />
      <Help />
      <Blog />
    </main>
  );
}
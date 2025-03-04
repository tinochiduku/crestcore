import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main className="max min-h-screen">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
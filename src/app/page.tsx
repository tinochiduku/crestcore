import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="max min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
import Hero from "@/PageComponents/Home/Hero";
import About from "@/PageComponents/Home/About";
import Services from "@/PageComponents/Home/Services";
import Why from "@/PageComponents/Home/Why";
import HomeEnd from "@/PageComponents/Home/HomeEnd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <Hero />
      <About />
      <Services />
      <Why />
      <HomeEnd />
    </div>
  );
}

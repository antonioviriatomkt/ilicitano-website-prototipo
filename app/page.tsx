import { About } from "@/components/sections/About";
import { Facts } from "@/components/sections/Facts";
import { Featured } from "@/components/sections/Featured";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Facts />
      <Featured />
      <Portfolio />
      <Services />
      <About />
    </>
  );
}

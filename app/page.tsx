import HeroSection from "@/components/hero-section";
import InfoSection from "@/components/info-section";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <InfoSection />
    </div>
  );
}

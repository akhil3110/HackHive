import HeroSection from "@/components/hero-section";
import InfoSection from "@/components/info-section";
import ParticipationBanner from "@/components/participation-banner";
import SearchBar from "@/components/search-bar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <InfoSection />
      <ParticipationBanner />
      <SearchBar />
    </div>
  );
}

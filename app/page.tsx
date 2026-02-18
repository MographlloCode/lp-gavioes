import { DarkSea } from "@/components/features/DarkSea";
import { Events } from "@/components/features/Events/Events";
import { Hero } from "@/components/features/Hero";
import { News } from "@/components/features/News/News";
import { Partners } from "@/components/features/Partners/Partners";
import { Products } from "@/components/features/Products/Products";
import { TopNews } from "@/components/features/TopNews/TopNews";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-8 pb-16">
      <Hero />
      <Events />
      <TopNews/>
      <DarkSea />
      <Products/>
      <News />
      <Partners />
    </div>
  );
}

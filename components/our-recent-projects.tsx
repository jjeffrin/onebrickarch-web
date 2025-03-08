import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatedShinyText } from "./AnimatedShinyText";
import { Card, Carousel } from "./apple-cards-carousel";
import { cn } from "@/lib/utils";
import Hero1 from "../public/img/projects/1-Hero.webp"
import Hero2 from "../public/img/projects/2-Hero.webp"
import Hero3 from "../public/img/projects/3-Hero.webp"
import Hero4 from "../public/img/projects/4-Hero.webp"
import Hero5 from "../public/img/projects/5-Hero.webp"
import Hero6 from "../public/img/projects/6-Hero.webp"
import { ApnLights, CanteenShop, JewelleryShop, KarupattiAlwaKadai, TopiVappaErode, TopiVappaNagercoil } from "./all-recent-projects";

const data = [
  {
    category: "📍Nagercoil, Tamil Nadu",
    title: "Topi Vappa Biriyani",
    src: Hero5,
    content: <TopiVappaNagercoil />,
  },
  {
    category: "📍Erode, Tamil Nadu",
    title: "Topi Vappa Biriyani",
    src: Hero6,
    content: <TopiVappaErode />,
  },
  {
    category: "📍Nagercoil, Tamil Nadu",
    title: "Karupatti Alwa Kadai",
    src: Hero1,
    content: <KarupattiAlwaKadai />,
  },
  {
    category: "📍Nagercoil, Tamil Nadu",
    title: "Jewellery Shop",
    src: Hero2,
    content: <JewelleryShop />,
  },
  {
    category: "📍Nagercoil, Tamil Nadu",
    title: "Canteen Shop",
    src: Hero3,
    content: <CanteenShop />,
  },

  {
    category: "📍Nagercoil, Tamil Nadu",
    title: "APN Lights",
    src: Hero4,
    content: <ApnLights />,
  },
];

const cards = data.map((card, index) => (
  <Card key={index} card={card} index={index} />
));

export function OurRecentProjects() {
  return (
    <>
      <h2 className="text-2xl font-bold ml-4 mt-8 md:mt-16">
        <span className="text-brand underline decoration-4 underline-offset-4">Our Recent</span> Projects
      </h2>

      <Carousel items={cards} />


      <div className="flex flex-col items-center justify-center mt-4" onClick={() => window.open("https://drive.google.com/drive/folders/14H0iN8ETh09vT-W95F6ynSXMzTvGXE90", "_blank")}>
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-sm">✨ See more projects</span>
            <FaExternalLinkAlt className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
    </>
  )
}
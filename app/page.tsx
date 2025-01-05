import { AnimatedShinyText } from "@/components/AnimatedShinyText";
import { FaArrowDown } from 'react-icons/fa'
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[100vh]">
      <img src="img/Houses-amico.svg" className="h-[15rem]" />
      <h1 className="font-bold text-3xl text-center mb-1">One Brick Architects</h1>
      <p className="text-center text-sm mb-6">Peak performance architecting, it's as good as it gets.</p>
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-sm">✨ See our work</span>
          <FaArrowDown className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </main>
  );
}

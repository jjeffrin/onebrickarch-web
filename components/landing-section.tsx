import { FaArrowDown } from "react-icons/fa";
import { AnimatedShinyText } from "./AnimatedShinyText";
import { NumberTicker } from "./number-ticker";
import { cn } from "@/lib/utils";

export function LandingSection() {
    return (
        <main className="flex flex-col items-center justify-center h-[90vh]">

            {/* Image */}
            <img src="img/Houses-amico.svg" className="h-[15rem]" />

            {/* Heading */}
            <h1 className="font-bold text-3xl text-center mb-1 md:text-6xl"><span className="text-red-600">ONE BRICK</span> Architects</h1>

            {/* Sub Content */}
            <p className="text-center text-sm mb-4">Peak performance architecting, it's as good as it gets.</p>

            {/* Project count  */}
            <NumberTicker value={100} descr="+ projects," className="text-xl font-semibold mb-2" />

            {/* Client count  */}
            <NumberTicker value={70} descr="+ clients and counting 🚀" className="text-xl font-semibold mb-6" />

            {/* See More Button */}
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
    )
}
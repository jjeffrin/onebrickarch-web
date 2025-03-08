import { motion } from "framer-motion";
import { AuroraBackground } from "./aurora-background";
import { NumberTicker } from "./number-ticker";
import { SparklesText } from "./sparkles-text";
import Image from "next/image"
import logoImg from "../public/img/Houses-amico.svg"

export function LandingSection() {

    // const words = ["better", "cute", "beautiful", "modern"];

    return (
        <AuroraBackground className="border-slate-200 border-[1px] border-b-0 rounded-lg">
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}>

                {/* NAVBAR */}
                {/* <header className="fixed top-0 left-0 right-0 container mx-auto rounded-xl flex flex-row-reverse items-center gap-8 h-[10vh] bg-white bg-opacity-0 backdrop-blur-md shadow-md px-6 z-50">
                    <a className="text-red-700 transition hover:text-red-700/75" href="#">
                        <SparklesText text="Investor" />
                    </a>
                    <a className="font-semibold cursor-pointer text-red-700 transition hover:text-red-700/75" href="#">Speak to us?</a>
                </header> */}
                {/* NAVBAR */}

                <main className="flex flex-col items-center justify-center h-[100vh]">

                    {/* Image */}
                    <Image src={logoImg} alt="One Brick Studio Logo" className="h-[15rem]" />

                    {/* Heading */}
                    <h1 className="font-bold text-3xl text-center mb-1 md:text-6xl"><span className="text-red-600">ONE BRICK</span> Architects</h1>

                    {/* Sub Content */}
                    <p className="text-center text-sm mb-4 md:text-xl">Peak performance architecting, it&apos;s as good as it gets.</p>

                    {/* Project count  */}
                    <NumberTicker value={100} descr="+ projects," className="text-xl font-semibold mb-2" />

                    {/* Client count  */}
                    <NumberTicker value={70} descr="+ clients and counting 🚀" className="text-xl font-semibold mb-6" />

                    {/* <div className="text-xl mx-auto font-normal text-center text-neutral-600 dark:text-neutral-400">
                        Build
                        <FlipWords words={words} /> <br />
                        websites with Aceternity UI
                    </div> */}
                </main>

            </motion.div>
        </AuroraBackground>
    )
}
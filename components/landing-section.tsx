import { motion } from "framer-motion";
import { AuroraBackground } from "./aurora-background";
import { NumberTicker } from "./number-ticker";
import Image from "next/image"
import logo from "../public/img/logo.png"

export function LandingSection() {
    return (
        <AuroraBackground className="border-slate-200 border-[1px] border-b-0 rounded-lg">
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}>

                <main className="flex flex-col items-center justify-center h-[100vh]">

                    {/* Image */}
                    <Image src={logo} alt="One Brick Studio Logo" sizes="200vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }} />

                    {/* Heading */}
                    {/* <h1 className="font-bold text-3xl text-center mb-1 md:text-6xl"><span className="text-brand">ONE BRICK</span> Architects</h1> */}

                    {/* Sub Content */}
                    <p className="text-center px-8 font-semibold text-sm mb-4 md:text-2xl">Peak performance architecting, it&apos;s as good as it gets.</p>

                    {/* Sub Content */}
                    <p className="text-center px-8 text-sm mb-4 md:text-xl">At <span className="text-brand font-semibold">One Brick Studio</span>, we transform ideas into extraordinary spaces. Whether it&apos;s innovative <span className="text-brand font-semibold">interiors, stunning architecture, or immersive 3D visualizations</span>, we craft designs that inspire and elevate everyday living.</p>

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
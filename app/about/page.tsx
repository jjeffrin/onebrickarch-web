import Link from "next/link";

export default function About() {
    return (
        <section className="text-justify relative isolate overflow-hidden bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-brand">Learn more about us 😀</h2>
            <p className="mx-auto mt-2 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl mb-4">
                At <span className="text-brand">OneBrick</span>, we believe that every home deserves thoughtful design—one that balances <span className="text-brand underline">beauty, functionality, and affordability</span>🪄
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-balance text-center font-semibold tracking-tight text-gray-950 text-xl mb-4">With over <span className="text-brand">four years of experience</span>, we specialize in crafting <span className="text-brand">smart, budget-friendly, and resale-oriented architectural solutions</span> that transform spaces without breaking the bank.</p>

            {/* Why choose us? */}
            <h2 className="text-center text-base/7 font-semibold text-brand mt-8">Why choose us? 🤔</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
                <div className="p-6">
                    <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl mb-2">Budget-Friendly Designs💰</h2>
                    <p className="text-balance font-semibold tracking-tight text-gray-950 text-xl">
                        We help you build smart, ensuring you get the most out of your investment. Our cost-effective strategies maximize quality while keeping expenses in check. Whether it’s material selection or space planning, we prioritize affordability without compromising on design.
                    </p>
                </div>
                <div className="p-6">
                    <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl mb-2">Resale-Oriented Planning🏠</h2>
                    <p className="text-balance font-semibold tracking-tight text-gray-950 text-xl">
                        Our designs enhance property value, making your home future-proof. We consider market trends and buyer preferences to ensure your property stands out. Every element is crafted to maintain long-term appeal and functionality, increasing your return on investment.
                    </p>
                </div>
                <div className="p-6">
                    <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl mb-2">Space Optimization🚧</h2>
                    <p className="text-balance font-semibold tracking-tight text-gray-950 text-xl">
                        Every inch of your home is carefully planned for maximum functionality. We create smart layouts that make small spaces feel larger and more efficient. By eliminating wasted space and enhancing usability, we ensure that your home remains both practical and aesthetically pleasing.
                    </p>
                </div>
                <div className="p-6">
                    <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl mb-2">Personalized Approach🧑‍🏭</h2>
                    <p className="text-balance font-semibold tracking-tight text-gray-950 text-xl">
                        We listen, understand, and create designs that match your lifestyle and vision. Your preferences drive our process, resulting in spaces that feel uniquely yours. From custom finishes to functional layouts, we ensure that every detail reflects your personality and needs.
                    </p>
                </div>
            </div>
            <p className="mx-auto mt-2 max-w-3xl text-balance text-center font-semibold tracking-tight text-gray-950 text-xl mb-4">Whether you&apos;re building a <span className="text-brand">new home</span>, planning a <span className="text-brand">renovation</span>, or looking for <span className="text-brand">cost-effective construction solutions, OneBrick</span> is here to guide you.</p>

            <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl mt-8 mb-4 text-center">📞Contact us through,</h2>
            <p className="mx-auto mt-2 max-w-3xl text-balance text-center font-semibold tracking-tight text-gray-950 text-xl mb-2">
                Email ID: <Link href="mailto:studio.onebrick@gmail.com">studio.onebrick@gmail.com</Link>
            </p>
            <p className="mx-auto max-w-3xl text-balance text-center font-semibold tracking-tight text-gray-950 text-xl mb-4">
                Mobile: <Link href="tel:7550090061">+91 7550090061</Link>
            </p>
        </section>
    )
}
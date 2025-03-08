import Image from "next/image"

export default function OurTestimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">

            <h2 className="text-center text-base/7 font-semibold text-indigo-600">Celebrating your kind words 👏</h2>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl mb-4">
                See what our clients have to say about us 😌
            </p>

            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            {/* feedback 1 */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            alt=""
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="mx-auto size-16 rounded-full"
                            height={100} width={100}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Owner, Hotel Prabhu</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

            {/* feedback 2 */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            alt=""
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="mx-auto size-16 rounded-full"
                            height={10} width={10}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Owner, Hotel Prabhu</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

            {/* feedback 3 */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            alt=""
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="mx-auto size-16 rounded-full"
                            height={10} width={10}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Owner, Hotel Prabhu</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

import Image from "next/image"
import DentistAvatar from "../public/img/dentist.png"
import GenericAvatar from "../public/img/team/generic.webp"

export default function OurTestimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">

            <h2 className="text-center text-base/7 font-semibold text-brand">Celebrating your kind words 👏</h2>
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
                            “First of all, thank you for making our dream come true. From the day one you people were so smart and brisk in work. It&apos;s a good quality of your team. Team work always wins you are proving it. We want to work with you in future too.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            alt=""
                            src={DentistAvatar}
                            className="mx-auto size-16 rounded-full"
                            height={100} width={100}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base text-center">
                            <div className="font-semibold text-gray-900">Dr. Juliet Philos, MDS</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Dental Surgeon, Diagnostician</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

            {/* feedback 2 */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                        &quot;One Brick Studio transformed our vision into reality! From concept to execution, they designed a space that is not only stylish and inviting but also highly functional for our operations. The team optimized every inch of our restaurant, ensuring a seamless flow for both customers and staff. Their expertise in balancing aesthetics with practicality made a huge difference in our business. Guests constantly complement our ambiance, and we&apos;ve seen a noticeable increase in footfall since opening. If you&apos;re looking for architects who truly understand the needs of a restaurant, One Brick Studio is the best choice!&quot;
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            alt=""
                            src={GenericAvatar}
                            className="mx-auto size-16 rounded-full"
                            height={100} width={100}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Topi Vappa Biryani</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Restaurant</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

            {/* feedback 3 */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                        &quot;One Brick Studio truly understood our vision for a luxurious yet functional jewellery store. They designed a space that perfectly blends elegance, security, and customer comfort. The attention to detail in lighting, display arrangements, and space optimization has significantly enhanced our store’s appeal. Our customers love the inviting ambiance, and the design has helped boost our sales! We highly recommend One Brick Studio to anyone looking to create a standout retail space.&quot;
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            alt=""
                            src={GenericAvatar}
                            className="mx-auto size-16 rounded-full"
                            height={100} width={100}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">LA Joyeria Jewellery</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Jewellery Shop</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

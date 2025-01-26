export function Footer() {
    return (
        <footer className="bg-slate-100 rounded-lg">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Transforming concepts into iconic structures. Your story, our design. Designing spaces that reflect your vision. Excellence in every detail - that&apos;s the &apos;One Brick&apos; touch 😊
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Investor </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Locate Us </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Instagram </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Facebook </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Website created with 💖 by <a className="text-gray-700 transition hover:text-gray-700/75" href="https://jjeffr.in" target="_blank">Jeffrin Jerome</a>.
                </p>
                <p className="text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
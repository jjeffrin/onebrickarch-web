import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/logo.png";
// import InvestorBrochure from "../public/OneBrickStudio-InvestorBrochure.pdf";

export function Navbar() {
    return (
        <header className="container mx-auto rounded-xl px-2 md:px-12 h-[8vh] z-50 top-0 left-1/2 absolute transform -translate-x-1/2 flex flex-row items-center justify-center sm:justify-between">
            <Link className="hidden sm:block" href="/">
                <Image src={logo} alt="Logo" width={200} height={80} />
            </Link>
            <nav className=" flex flex-row-reverse items-end gap-4 text-xs font-bold justify-center md:justify-normal sm:text-sm">
                <Link href={'./OneBrickStudio-InvestorBrochure.pdf'} download={"OneBrickStudio-InvestorBrochure.pdf"} target="_blank">Investor</Link>
                <Link href="/about">About Us</Link>
                <Link href="/purpose">Our Purpose</Link>
                <Link href="tel:7550090061">Talk to us</Link>
                <Link href="/" className="block sm:hidden">Home</Link>
            </nav>
        </header>

        // <header className="container mx-auto rounded-xl px-2 md:px-12 h-[5vh] flex flex-row-reverse items-end text-xs gap-4 z-50 top-0 left-1/2 absolute transform -translate-x-1/2 font-bold justify-center md:justify-normal sm:text-sm">
        //     <Link href="/">Investor</Link>
        //     <Link href="/about">About Us</Link>
        //     <Link href="/purpose">Our Purpose</Link>
        //     <Link href="tel:7550090061">Talk to us</Link>
        //     <Link href="/">Home</Link>
        // </header>
    )
}

// export function Navbar() {
//     return (
//         <header className="h-[10vh] rounded-xl flex flex-row-reverse items-center gap-8 px-4">
//             <a className="text-red-700 transition hover:text-red-700/75" href="#">
//                 <SparklesText text="Investor" />
//             </a>
//             <a className="font-semibold text-red-700 transition hover:text-red-700/75" href="#">Speak to us?</a>
//         </header>
//     )
// }



// OLD IMPLEMENTATION WITH BLUR EFFECT
// export function Navbar() {
//     return (
//         <header className="sticky top-4 z-50">
//             {/*  drop-shadow-xl */}
//             <div className="mx-4 p-4 flex justify-between items-center text-sm rounded-xl backdrop-blur-xl border-dashed border-2 border-slate-300">
//                 <p className="">Call us now!</p>
//                 <p className="bg-slate-200 font-bold p-2 rounded-lg">Investor</p>
//             </div>
//         </header>
//     )
// }
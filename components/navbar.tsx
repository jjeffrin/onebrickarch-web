import { SparklesText } from "./sparkles-text";

export function Navbar() {
    return (
        <header className="h-[10vh] rounded-xl flex flex-row-reverse items-center gap-8 px-4">
            <a className="text-red-700 transition hover:text-red-700/75" href="#">
                <SparklesText text="Investor" />
            </a>
            <a className="font-semibold text-red-700 transition hover:text-red-700/75" href="#">Speak to us?</a>
        </header>
    )
}



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
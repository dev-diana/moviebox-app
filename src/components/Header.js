import { FaPlayCircle } from "react-icons/fa"
import NavBar from "./NavBar.js";
import imdbRating from "../assets/imdbLogo.png";
import rtRating from "../assets/rtLogo.png";

export default function Header() {
    return (
        <section className="bg-headerImg bg-cover bg-no-repeat bg-center bg-fixed text-white">
            <div className="px-4 md:px-6 lg:px-20 pb-20">
                <NavBar />

                <div className="w-full md:max-w-sm my-20">
                    <h1 className="font-semibold text-4xl md:text-6xl">John Wick 3: Parabellum</h1>

                    <div className="flex items-center gap-x-5 my-4">
                        <div className="flex gap-x-1">
                            <img src={imdbRating} alt="IMDb Rating" className="w-9 h-4 object-contain" />
                            <span className="text-xs font-normal">86.0/100</span>
                        </div>
                        <div  className="flex gap-x-0.5">
                            <img src={rtRating} alt="RottenTomatoes Rating" className="w-9 h-4 object-contain"/>
                            <span className="text-xs font-normal">97%</span>
                        </div>
                    </div>

                    <p className="text-base leading-5">John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

                    <button className="flex items-start gap-x-2 px-5 py-3 bg-rose-700 rounded-md my-4 font-medium text-sm">
                        <FaPlayCircle className="w-5 h-5" />
                        <span>WATCH TRAILER</span>
                    </button>
                </div>

            </div>

        </section>
    )
}
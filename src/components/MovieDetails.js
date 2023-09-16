import moviePlaylist from "../assets/movieplaylist.png" 
import { FaPlay } from "react-icons/fa"
import { AiOutlineUnorderedList, AiFillStar } from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
import showTimes from "../assets/showTimes.png" 

export default function MovieDetails({movie, movieBackdrop, movieTitle, movieDuration, yearOfRelease, genre, voteAverage, overview}) {
  return (
    <section className="font-main w-2/3 md:w-3/4 my-10 lg:mr-14 mr-8">
      <div className="relative w-full rounded-[20px]">
        <img src={`https://image.tmdb.org/t/p/w200${movieBackdrop}`} alt="backdrop of movie" className="w-full h-[450px] object-cover rounded-[20px]"/>
        <div className="absolute flex flex-col justify-center items-center gap-y-2 text-2xl top-[30%] lg:left-[40%] left-[25%] text-center text-[#E8E8E8]">
          <span className="px-5 py-5 bg-slate-200/30 rounded-full w-fit"><FaPlay className="text-4xl "/></span>
          <p>Watch Trailer</p>
        </div>
      </div>

      <div className="flex lg:justify-between lg:flex-nowrap flex-wrap  items-center my-7 whitespace-nowrap gap-y-3">
        <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
          <p className="text-[#404040] text-2xl flex gap-x-3 flex-wrap">
            <span data-testid="movie-title">{movieTitle}</span>•
            <span data-testid="movie-release-date">{yearOfRelease}</span>•
            <span>PG-13</span>•
            <span data-testid="movie-runtime">{movieDuration} minutes</span></p>
          <p className="flex gap-x-6 flex-wrap text-[#B91C1C] text-[15px] font-medium">{genre}</p>
        </div>

        <div className="flex items-center gap-x-2">
          <AiFillStar className="text-amber-400/50 text-3xl"/>
          <p><span className="text-[#E8E8E8]">{voteAverage}</span> | 350k</p>
        </div>
      </div>

      <div className="flex justify-center lg:flex-row flex-col items-center gap-x-6 xl:text-xl lg:text-lg text-base font-normal text-[#333] gap-y-10">
        
        <div className="flex flex-col gap-y-9 lg:w-2/3 w-full">
          <p data-testid="moview-overview">{overview}</p>
          <p>Director: <span className="text-[#BE123C]">Joseph Kosinsk</span></p>
          <p>Writers: <span className="text-[#BE123C]"> Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
          <p>Stars: <span className="text-[#BE123C]">Tom Cruise, Jennifer Connelly, Miles Telle</span></p>

          <div className="font-medium flex w-full items-center border border-[#666]/50 rounded-[12px] whitespace-nowrap flex-wrap lg:flex-nowrap">
            <p className="text-white bg-[#BE123C] rounded-[10px] px-5 py-3 border border-[#BE123C] lg:w-fit w-full">Top rated movie #65</p>
            <p className="pl-6 pr-12 py-3">Awards 9 nominations</p>
            <RiArrowDropDownLine className="text-4xl font-thin justify-self-end lg:block hidden"/>
          </div>
        </div>

        <div className="self-start lg:w-1/3 w-full flex flex-col gap-y-3">
          
          <p className="flex py-1.5 gap-x-2 justify-center text-white items-center bg-[#BE123C] rounded-[10px]">
            <img src={showTimes} alt="showTimes" className="w-6 h-6 object-contain" /><span>See Showtimes</span>
          </p>
          
          <p className="flex py-1.5 gap-x-3 justify-center items-center bg-[#BE123C]/20 border  border-[#BE123C] rounded-[10px]">
            <AiOutlineUnorderedList />
            <span>More watch options</span>
          </p>
          <div className="mt-9 relative w-full ">
            <img src={moviePlaylist} alt="movie playlist" />
            <p className="flex items-center justify-center bg-black/20 absolute bottom-0 text-white">
              <AiOutlineUnorderedList/>
              <span className=" text-xs py-2 text-center w-full">The Best Movies and Shows in September</span>
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}
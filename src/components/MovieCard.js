import { useState } from "react";
import { Link } from "react-router-dom";
import imdbRating from "../assets/imdbLogo.png";
import rtRating from "../assets/rtLogo.png";
import {AiFillHeart} from "react-icons/ai";


export default function MovieCard({ id, movieTitle, moviePoster, country, movieGenre, releaseDate, }) {
    

      const [isClicked, setIsClicked] = useState(false);
      const handleClick = () => {
        setIsClicked(!isClicked);
      }
     
    return (
      <div className="flex flex-col gap-y-3 font-bold w-full bg-neutral-50 px-2 py-4" data-testid="movie-card">
        <div className="relative">
        <Link to={`/movies/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w200${moviePoster}`} alt="Movie Poster" className="w-[350px] h-[370px] object-cover " data-testid="movie-poster" />
        </Link> 
          <p
            onClick={handleClick}
            className="absolute sm:top-2 top-3 sm:right-2 right-[10px] p-2 bg-neutral-300 rounded-full z-[99]">
        <AiFillHeart className={`${isClicked ? 'text-[#BE123C]': "text-white"}`}/>
          </p>
        </div>
        <p className="text-neutral-400 text-xs">
          <span>USA, </span>
          <span data-testid="movie-release-date">{releaseDate}</span>
        </p>
        <Link to={`/movies/${id}`}>
        <p className="text-lg" data-testid="movie-title">{movieTitle}</p>
        </Link>
        {/* IMDB and tomato rating  */}
          <div className="flex items-center gap-x-10 font-normal justify-between w-full">
            <div className="flex gap-x-2">
              <img src={imdbRating} alt="imdb" className="w-9 h-4 object-contain" />
              <span className="text-xs">86.0/100</span>
            </div>
            <div  className="flex gap-x-2">
              <img src={rtRating} alt="rotten tomatoes rating" className="w-9 h-4 object-contain"/>
              <span className="text-xs">97%</span>
            </div>
          </div>
  
        {/* Genre  */}
        <p className="text-neutral-400">{movieGenre}</p>
      </div>
    )
  }
  

import { useEffect, useRef, useState } from "react";
import { searchMovies } from "../services/api.js";
import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import Menu from "../assets/Menu.png";

export default function NavBar() {
    const [searchModal, setSearchModal] = useState(false)
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")
  
    const searchContainerRef = useRef(null);
  
    function handleInputChange(e) {
      setQuery(e.target.value)
    }
    async function handleSearchQuery(e) {
      e.preventDefault()
      try {
        const results = await searchMovies(query);
        setSearchModal(true)
        setSearch(results);
        console.log(results)
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    const handleResultClick = () => {
      setSearchModal(false);
    };
  
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSearchModal(false);
      }
    };
  
     useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
     }, []);
    
  
    return (
        <nav className="flex justify-between py-4">
            
            <Link to={`/`} className="flex items-center gap-2 md:gap-4">  
              <img src={Logo} alt="Logo"/>
              <h1 className="hidden md:block text-2xl font-semibold">MovieBox</h1>
            </Link>

            <label className="h-12 w-56 md:w-96 lg:w-[450px] flex items-center gap-4 lg:gap-6 text-sm md:text-base relative" htmlFor="search">
                <input 
                    type="text"
                    name="search"
                    value={query}
                    onChange={handleInputChange}          
                    placeholder="What do you want to watch?"
                    className="font-medium w-full bg-transparent border-2 border-neutral-50 outline-none rounded-lg p-2"
                />
                <button
                    type="submit"
                    onClick={handleSearchQuery}
                    className="absolute right-2">
                    <FaSearch />
                </button>
            </label>

            {searchModal && <ul className="absolute top-14 md:right-1 md:left-1 border border-neutral-700 w-auto md:w-screen bg-neutral-100 text-neutral-900 p-4 z-[99]" ref={searchContainerRef}>
                                {search.map(result => (
                                    <li className="py-4 border-b border-800/40"
                                        key={result.id}
                                        onClick={() =>
                                        handleResultClick(result.id)}>
                                            <Link to={`/movies/${result.id}`}>
                                                <p className="font-bold">{result.title}</p>
                                                <p className="italic mt-2">{result.release_date}</p> 
                                            </Link>
                                    </li>
                                ))}
                            </ul>}

            <div className="flex items-center md:gap-5 gap-2">
                <h1 className="hidden md:block font-semibold text-base">Sign in</h1>
                <img src={Menu} alt="Menu"/>
            </div>

        </nav>
    )    
  }
  
<<<<<<< HEAD
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugestion, setShowSugestion] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store )=> store.search)
=======
import React from "react";
import { useState } from "react";
const Header = () => {
  const [showInput, setShowInput] = useState(false);
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01

  const handleShowInputCLick = () => {
    setShowInput(!showInput);
  };

<<<<<<< HEAD
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  const searchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setShowSugestion(searchCache[searchQuery])
      }else{
        searchSuggestion()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="p-5 shadow-lg z-50">
      <div className="hidden md:grid grid-flow-col items-center">
        <div className="flex grid-col-1 items-center">
          <img
            onClick={() => handleMenuClick()}
            className="h-8 cursor-pointer"
=======
  return (
    <div className="p-5  shadow-lg">
      <div className="hidden md:grid grid-flow-col items-center">
        <div className="flex grid-col-1 items-center">
          <img
            className="h-8"
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
            alt="menu-icon"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          />
          <img
<<<<<<< HEAD
            className="h-12 ml-2 cursor-pointer"
=======
            className="h-12 ml-2"
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </div>
<<<<<<< HEAD
        <div className="grid-col-10 relative">
          <div>
            <input
              className="w-3/4 border border-black px-5  p-2 rounded-l-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={()=> setShowSugestion(true)}
              onBlur={()=> setShowSugestion(false)}
            />
            <button className="px-4 py-2 border border-black rounded-r-full">
              🔍
            </button>
          </div>
          {showSugestion && searchQuery &&
           <div className="absolute bg-white w-[25.5rem] py-2 px-2 rounded-xl mt-2 border border-gray-100">
            <ul>
              {suggestions.map(s=> <li key={s} className="px-3 py-2 hover:bg-gray-100">{s}</li>)}
            </ul>
          </div>}
=======
        <div className="grid-col-10">
          <input
            className="w-3/4 border border-black  p-2 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button className="px-4 py-2 border border-black rounded-r-full">
            🔍
          </button>
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
        </div>
        <div className="grid-cols-1 flex justify-end">
          <img
            className="h-8"
            alt="user-icon"
            src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
          />
        </div>
      </div>

      <div className="flex justify-between items-center md:hidden">
<<<<<<< HEAD
        {!showInput && (
          <>
            <div className="flex items-center">
              <img
                className="h-8"
                alt="menu-icon"
                src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
              />
              <img
                className="h-10 ml-2"
                alt="youtube-logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              />
            </div>
            <div className="flex items-center">
              <button onClick={handleShowInputCLick} className="p-2">
                🔍
              </button>
              <img
                className="h-8 ml-1"
                alt="user-icon"
                src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
              />
            </div>
          </>
        )}
      </div>
      <div>
        {showInput && (
          <>
            <div className="md:hidden">
              <input
                className="w-3/4 border border-black p-2 rounded-l-full"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleShowInputCLick}
                className="px-4 py-2 border border-black rounded-r-full"
              >
                🔍
              </button>
            </div>
          </>
        )}
=======
        { !showInput && <>
         <div className="flex items-center">
          <img
            className="h-8"
            alt="menu-icon"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          />
          <img
            className="h-10 ml-2"
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={handleShowInputCLick}
            className="p-2"
          >
            🔍
          </button>
          <img
            className="h-8 ml-1"
            alt="user-icon"
            src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
          />
        </div>
        </>
        }
      </div>
      <div>
        {showInput && <>
          <div className="md:hidden">
          <input
            className="w-3/4 border border-black p-2 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button onClick={handleShowInputCLick} className="px-4 py-2 border border-black rounded-r-full">
            🔍
          </button>
          </div>
        </>}
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
      </div>
    </div>
  );
};

export default Header;

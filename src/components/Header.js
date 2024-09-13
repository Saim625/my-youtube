import React from "react";
import { useState } from "react";
const Header = () => {
  const [showInput, setShowInput] = useState(false);

  const handleShowInputCLick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="p-5  shadow-lg">
      <div className="hidden md:grid grid-flow-col items-center">
        <div className="flex grid-col-1 items-center">
          <img
            className="h-8"
            alt="menu-icon"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          />
          <img
            className="h-12 ml-2"
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </div>
        <div className="grid-col-10">
          <input
            className="w-3/4 border border-black  p-2 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button className="px-4 py-2 border border-black rounded-r-full">
            🔍
          </button>
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
      </div>
    </div>
  );
};

export default Header;

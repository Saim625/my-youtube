<<<<<<< HEAD
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, toggleMenu } from "../utils/appSlice";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if (!isMenuOpen) return null;

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={() => {
          dispatch(closeMenu());
        }}
      ></div>
     <div
        className={`fixed left-0 top-0 w-64 h-full bg-white overflow-y-auto z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       <div className="flex items-center px-8 pt-3">
          <img
            onClick={() => handleMenuClick()}
            className="h-8 cursor-pointer"
            alt="menu-icon"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          />
          <img
            className="h-12 ml-4 cursor-pointer"
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </div>
        <div className="pl-4 pt-6 w-48 font-bold text-sm">
          <ul>
            <Link to="/">
              <li className="flex items-center">
                <img
                  className="h-14 w-14"
                  alt="home-icon"
                  src="https://pixsector.com/cache/59f358af/avfe23a6b11d1ff4752fd.png"
                />
                Home
              </li>
            </Link>
            <li className="flex items-center">
              <img
                className="h-9 w-14"
                alt="shorts-icon"
                src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg"
              />
              Shorts
            </li>
            <li className="flex items-center mt-3 gap-4">
              <img
                className="h-7  ml-3 w-7 object-cover"
                alt="subscription-icon"
                src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png"
              />
              Subscriptions
            </li>
          </ul>

          <div className="border-b border-black my-5 "></div>

          <h1 className="pl-4 text-xl">You {">"}</h1>
          <ul className="ml-4">
            <li className="flex items-center mt-2 gap-4">
              <img
                className="h-8 w-7"
                alt="channel-icon"
                src="https://cdn4.iconfinder.com/data/icons/television/100/tv_screen4-1024.png"
              />
              Your Channel
            </li>
            <li className="flex items-center mt-2 gap-5">
              <img
                className="h-5 w-5 ml-1"
                alt="history-icon"
                src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/history-line-icon.png"
              />
              History
            </li>
            <li className="flex items-center mt-2 gap-4">
              <img
                className="h-5 w-7"
                alt="playlist-icon"
                src="https://t3.ftcdn.net/jpg/03/82/33/38/360_F_382333895_crkozLYbY7q0DJ9iBS203aUbKwfRupSN.jpg"
              />
              Playlists
            </li>
            <li className="flex items-center mt-2 gap-4">
              <img
                className="h-7 w-7"
                alt="your-icon"
                src="https://static.thenounproject.com/png/1813969-200.png"
              />
              Your Videos
            </li>
            <li className="flex items-center mt-2 gap-3">
              <img
                className="h-8 w-8"
                alt="liked-icon"
                src="https://static.thenounproject.com/png/4530409-200.png"
              />
              Liked Videos
            </li>
            <li className="flex items-center mt-2 gap-4">
              <img
                className="h-7 w-7"
                alt="watch-icon"
                src="https://w7.pngwing.com/pngs/864/328/png-transparent-later-watch-ic-google-material-design-3-icon.png"
              />
              Watch Later
            </li>
          </ul>

          <div className="border-b border-black my-5 "></div>

          <h1 className="pl-4 text-xl">Subscriptions</h1>
          <ul className="ml-6">
            <li className="flex items-center mt-2">Development</li>
            <li className="flex items-center mt-2">Carrier</li>
            <li className="flex items-center mt-2">CEO</li>
            <li className="flex items-center mt-2">Growth</li>
            <li className="flex items-center mt-2">Skill</li>
          </ul>

          <div className="border-b border-black my-5 "></div>

          <h1 className="pl-4 text-xl">Explore</h1>
          <ul className="ml-6">
            <li className="flex items-center mt-2">Trending</li>
            <li className="flex items-center mt-2">Music</li>
            <li className="flex items-center mt-2">Sports</li>
            <li className="flex items-center mt-2">News</li>
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default SideBar;
=======
import React from 'react'

const SideBar = () => {
  return (
    <div>SideBar</div>
  )
}

export default SideBar
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const MiniSideIcons = () => {
  const showMiniIcons = useSelector((store) => store.app.showMiniIcons);

  if(!showMiniIcons) return null;
  return (
    <div className="w-[50rem] h-full flex flex-col items-center pt-8">
      <div>
        <img
          className="h-16 w-16 cursor-pointer"
          alt="home-icon"
          src="https://pixsector.com/cache/59f358af/avfe23a6b11d1ff4752fd.png"
        />
      </div>
      <div>
        <img
          className="h-9 w-14 cursor-pointer"
          alt="shorts-icon"
          src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg"
        />
      </div>
      <div>
        <img
          className="h-8 w-8 mt-5 object-cover cursor-pointer"
          alt="subscription-icon"
          src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png"
        />
      </div>
      <div>
        <img
          className="h-8 w-8 mt-5 cursor-pointer"
          alt="your-icon"
          src="https://static.thenounproject.com/png/1813969-200.png"
        />
      </div>
    </div>
  );
};

export default MiniSideIcons;

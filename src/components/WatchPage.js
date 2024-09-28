import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMiniIcons } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import {
  YOUTUBE_VIDEOID_API,
  YOUTUBE_CHANEL_API,
  GOOGLE_API_KEY,
} from "../utils/constants";
import ChannelInfo from "./ChannelInfo";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");

  const dispatch = useDispatch();

  const fetchData = async () => {
    const videoResponse = await fetch(
      YOUTUBE_VIDEOID_API + "&id=" + query + "&key=" + GOOGLE_API_KEY
    );
    const videoData = await videoResponse.json();
    setVideo(videoData.items[0]);

    const channelId = videoData.items[0].snippet.channelId;
    const channelResponse = await fetch(
      YOUTUBE_CHANEL_API + "&id=" + channelId + "&key=" + GOOGLE_API_KEY
    );
    const channelData = await channelResponse.json();
    setChannel(channelData.items[0]);
  };

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(toggleMiniIcons(false))
    fetchData();

    return ()=>{
      dispatch(toggleMiniIcons(true))
    }
  }, [query]);

  return (
    <div className="w-full">
      <div className="px-5 m-5 flex">
        <div>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + query}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      {video && channel && (
        <ChannelInfo videoInfo={video} channelInfo={channel} />
      )}
      <CommentContainer videoId={query} />
    </div>
  );
};

export default WatchPage;

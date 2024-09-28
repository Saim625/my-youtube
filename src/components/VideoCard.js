import React from "react";
import { Link } from "react-router-dom";
import {formatSubscriberCount} from '../utils/constants'

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
   
    <div className="w-[17rem] p-2 m-2">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold line-clamp-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatSubscriberCount(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

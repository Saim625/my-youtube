export const GOOGLE_API_KEY = "AIzaSyBw8a9JSMAVxt2C5kFquWMs-eSoNBiEuwo";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;

export const YOUTUBE_CHANEL_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics";

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_VIDEOID_API ="https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=";

export const YOUTUBE_COMMENT_API ="https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=";

export const LIVE_CHAT_COUNT = 12;

export const formatSubscriberCount = (number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(2) + 'B';
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(2) + 'K';
    } else {
      return number;
    }
  };
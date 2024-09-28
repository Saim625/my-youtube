import React from 'react'
import {formatSubscriberCount} from '../utils/constants'

const ChannelInfo = ({videoInfo, channelInfo}) => {
    const {snippet} = videoInfo;
    const {title} = snippet;
    const {snippet: channelSnippet, statistics} = channelInfo;
    const {thumbnails, title:channelName} = channelSnippet;
    const {subscriberCount} = statistics

  return (
    <div className='px-5 m-5 w-[800px]'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <div className='flex items-center mt-2'>
          <img className='w-10 h-10 rounded-full' alt='channel-pic' src={thumbnails.medium.url}/>
          <div className='pl-2'>
            <h3 className='font-bold text-sm'>{channelName}</h3>
            <p className='text-sm'>{formatSubscriberCount(subscriberCount)} subscribers</p>
          </div>
          <div className='bg-black text-white p-2 px-4 ml-10 rounded-full cursor-pointer'>
            Subscribe
          </div>
        </div>
    </div>
  )
}

export default ChannelInfo
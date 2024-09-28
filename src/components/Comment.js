import React from 'react'

const Comment = ({comment}) => {

    const { authorDisplayName, authorProfileImageUrl, textOriginal, likeCount, publishedAt} = comment;
  return (
    <div className='flex p-2'>
        <img className='w-10 h-10 rounded-full mr-4' src={authorProfileImageUrl} alt='author-pic'/>
        <div>
            <p className="font-bold">{authorDisplayName}</p>
            <p>{textOriginal}</p>
            <div className="flex space-x-2 text-sm">
                <span>{likeCount} likes</span>
                <span>{new Date(publishedAt).toLocaleDateString() }</span>
            </div>
        </div>
    </div>
  )
}

export default Comment
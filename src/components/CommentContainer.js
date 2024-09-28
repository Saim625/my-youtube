import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY, YOUTUBE_COMMENT_API } from '../utils/constants'
import Comment from './Comment';

const CommentContainer = ({videoId}) => {
const [comments, setComments] = useState([]);

  const fetchComments = async ()=>{
    const response = await fetch(YOUTUBE_COMMENT_API+ videoId + '&key=' + GOOGLE_API_KEY);
    const data = await response.json();
    setComments(data.items)
  }
  useEffect(()=>{
    fetchComments()
  }, [videoId])

  return (
    <div className='m-5 px-5 w-[800px]'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        {comments.map((comment)=>(
          <Comment key={comment.id} comment={comment.snippet.topLevelComment.snippet}/>
        ))}
    </div>
  )
}



export default CommentContainer
import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex py-1'>
        <img
            className="h-6 py-1"
            alt="user-icon"
            src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
          />
          <span className='font-bold px-2'>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatMessage
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch();
  const liveChat = useSelector((store)=> store.chat.messages)
    useEffect(()=>{
        const i =  setInterval(()=>{
          dispatch(addMessage({
            name: generateRandomName(),
            message: generateRandomMessages(25) + "🚀"
          }))
         },2000 )

        return ()=>{
            clearInterval(i);
        }
    }, [])
  return (
    <>
    <div className="p-2 ml-2 h-[400px] w-full bg-slate-100 rounded-lg border border-black overflow-y-scroll flex flex-col-reverse">

     {liveChat.map((c, index)=> <ChatMessage key={index} name={c.name} message={c.message} />) }
    </div>
    <form className="p-1 ml-2 w-full border border-black rounded-lg"
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
          name:'Saim Saeed',
          message: liveMessage
        }))
        setLiveMessage("")
      }}
    >
      <input className="w-72 mx-1 px-2  border border-black rounded-lg" placeholder="type message" type="text" value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value)
      }}/>
      <button className="mx-2 px-2 rounded-lg bg-green-100">Send</button>
    </form>
    </>
  );
};

export default LiveChat;

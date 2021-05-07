import { Socket } from 'phoenix';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'

const PlaceChatPage = props => {

  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const { place } = useParams();
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"))
    setUser(userObj)
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    const socketObj = new Socket("ws://localhost:4000/socket", {});
    socketObj.connect()
    setSocket(socketObj)
    return function disconnect() {
      console.log("disconnect")
      socketObj.disconnect()
    }
  }, [])

  useEffect(() => {
    if(!socket) return;

    const connectChannel = socket.channel(`place:${place}`)

    connectChannel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })
      
    setChannel(connectChannel);

    return function leaveChannel() {
      console.log("leaveChannel")
      connectChannel.leave()
    };
    
  }, [place, socket])

  useEffect(() => {
    if(!channel) return
    const eventId = channel.on(`place:${place}:new_message`, (payload) => {
      console.log(payload)
      setMessages([...messages, payload])
      messagesContainerRef.current.scrollBy(0,30)
      // setTimeout(() => messagesContainerRef.current.scrollBy(0,30), 500)
    });
    return function offEvent() {
      console.log("offEvent")
      channel.off(`place:${place}:new_message`, eventId)
    }
  }, [channel, place, messages])

  const send = (e) => {
    e.preventDefault()
    if(message === "") return
    const payload = {
      message: message,
      from: user.username,
      time: new Date().toUTCString()
    }
    channel.push("message:add", payload)
    setMessage("")
  }

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      send(e)
    }
  }

  return (
    <main className="chat-window">
      <h1 className="chat-place-name">@{place}</h1>

      <section className="messages" ref={messagesContainerRef}>
        {messages.map(item => (
          <p className="message" id={`${item.from}-${item.time}`}>
            <span className="sender">{`<${item.from}>`} </span>{item.message}
          </p>
        ))}
      </section>

      <form className="chat-form">
        <label>
          message:
          <input 
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={onKeyPress}
            ref={inputRef}
          />
        </label>
        <button onClick={send}>send</button>
      </form>
    </main>
  )
}

export default PlaceChatPage

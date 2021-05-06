import { Socket } from 'phoenix';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const PlaceChatPage = props => {

  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState(null);
  const { place } = useParams();

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    setUser(userObj);
  }, [])

  useEffect(() => {

    console.log("try to join");
    const socket = new Socket("ws://localhost:4000/socket", {});
    // console.log(socket);
    socket.connect();
    const connectChannel = socket.channel(`place:${place}`);
    // console.log(channel);

    connectChannel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })

    connectChannel.on(`place:${place}:new_message`, payload => {
      console.log(payload);
    });
      
    setChannel(connectChannel);

    return function cleanup() {
      console.log("CLEAN UP");
      connectChannel.leave()
      socket.disconnect()
    };
    
  }, [place]);

  const send = (e) => {
    e.preventDefault();
    channel.push("message:add", {message: message, from: user.username});
    setMessage("");
  }

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      send(e);
    }
  }

  return (
    <main>
      <h1>@{place}</h1>

      <form>
        <label>
          Message
          <input 
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={onKeyPress}
          />
        </label>
        <button onClick={send}>Send</button>
      </form>
    </main>
  )
}

export default PlaceChatPage

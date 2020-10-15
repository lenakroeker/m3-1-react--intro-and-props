import React from 'react';
import ChatMessage from '../chatMessage';
import generateKey from '../keygenerator';
import './ChatStream.css';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  return <section className='chat-stream'>{
    props.messages.map((message) => {
      let messageType;
      if (message.user === props.currentUser) {
        messageType = 'sent';
      }
      else {
        messageType = 'recieved';
      }
      return <ChatMessage key={generateKey(message.id)} user={message.user} body={message.body} messageType={messageType} />;
    })
  } </section>
}


export default ChatStream;

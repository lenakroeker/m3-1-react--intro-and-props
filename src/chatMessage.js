import React from 'react';

import './chatMessage.css';

const SentMessage = (props) => {
    return (<div className="chat-stream">
        <div className="message-sent" >
            <p className="sent" id="body">{props.body}</p>
            <img id="stip" src="/assets/tip-sent.svg" alt="msg tip" />
        </div>
    </div>)
}

const RecievedMessage = (props) => {
    return (<div className="chat-stream" id="recieved">
        <div className="message">
            <h3 id="user">{props.user.username}</h3>
            <img id="avatar" src={props.user.avatar} alt="user avatar" />
            <p id="body">{props.body}</p>
            <img id="rtip" src="/assets/tip-received.svg" alt="msg tip" />
        </div>
    </div>)
}

const ChatMessage = (props) => {
    if (props.messageType === 'sent') {
        return <SentMessage body={props.body} user={props.user} />;
    } else {
        return <RecievedMessage body={props.body} user={props.user} />
    }
};

export default ChatMessage
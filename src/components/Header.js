import React from 'react';
import generateKey from '../keygenerator'
import './Header.css';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      {props.users.filter((user) => {
        console.log(user);
        return (user.username !== props.currentUser.username)
      }
      ).map((user) => {
        return (
          <div className="headbadge" key={generateKey(user.username)}>
            <img src={user.avatar} alt="user avatar" />
            <p>{user.username}</p>
          </div>)
      })}
    </header>);
};

export default Header;

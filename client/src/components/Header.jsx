import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h1>Fresh Cucumbers</h1>
      {
        props.currentUser
        ?
        <>
          <p>Hi, {props.currentUser.username}!</p>
          <button id="signout" onClick={props.handleLogout}>Sign Out</button>
        </>
        :
        <>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </>
      }
    </header>
  )
}

export default Header

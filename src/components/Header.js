import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <i className="fa-solid fa-comments" style={{color: "#fefefe", fontSize:"24px"}}></i>
      <Link to={"/"}>
        {" "}
        <h2>Connectify</h2>
      </Link>
    </header>
  );
}

export default Header
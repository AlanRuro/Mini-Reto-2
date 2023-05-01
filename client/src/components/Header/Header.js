import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="title">
      <h1><a href="https://github.com/AlanRuro/Mini-Reto-2.git">{props.title}</a></h1>
    </div>
  );
}

export default Header;
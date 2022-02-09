import React from 'react';
import Avatar from "./avatar/Avatar";
import Search from "./search/Search";
import Media from "./media/Media";
import "./header.css";

function Header() {
  return (
      <div className="header">
          <Avatar/>
          <Search/>
          <Media/>
      </div>
  );
}

export default Header;

import React from 'react';
import Avatar from "./avatar/Avatar";
import Search from "./search/Search";
import Media from "./media/Media";
import { useSelector } from 'react-redux';
import "./header.css";

function Header() {
  const { theme } = useSelector(state=>state.user);
  return (
      <div className={`core-header-${theme}`}>
          <Avatar/>
          <Search/>
          <Media/>
      </div>
  );
}

export default Header;

import React from "react";
import { useDispatch } from "react-redux";
import { useMedia } from "use-media";
import pager from "../../redux/actions/pager";
import Burger from "./burger/Burger";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const isBig = useMedia({ minWidth: "500px" });
  if (!isBig)
    return (
      <div className="burg">
        <Burger />
      </div>
    );
  return (
    <div className="header">
      <h3 onClick={() => dispatch(pager("home"))}>Home</h3>
      <h3 onClick={() => dispatch(pager("locations"))}>Locations</h3>
      <h3 onClick={() => dispatch(pager("services"))}>Services</h3>
      <h3 onClick={() => dispatch(pager("about"))}>About</h3>
      <h3 onClick={() => dispatch(pager("signup"))}>Sign Up</h3>
      <h3 onClick={() => dispatch(pager("signin"))}>Sign In</h3>
    </div>
  );
}

export default Header;

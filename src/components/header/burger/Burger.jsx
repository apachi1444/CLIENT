import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import pager from "../../../redux/actions/pager";
import "./burger.css";

function Burger() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.pager);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const selected = (page) => (current === page ? "on-it" : "");
  if (!open)
    return (
      <div onClick={toggle} className="menu">
        <MenuIcon />
      </div>
    );
  return (
    <div className="burger">
      <div onClick={toggle} className="close">
        <CloseIcon />
      </div>
      <div className="links">
        <h3 onClick={() => dispatch(pager("home"))} className={selected("home")}>Accueil</h3>
        <h3 onClick={() => dispatch(pager("locations"))} className={selected("locations")}>Locations</h3>
        <h3 onClick={() => dispatch(pager("posts"))} className={selected("posts")}>Annonces</h3>
        <h3 onClick={() => dispatch(pager("about"))} className={selected("about")}>A propos</h3>
        <h3 onClick={() => dispatch(pager("signup"))} className={selected("signup")}>S'Inscrire</h3>
        <h3 onClick={() => dispatch(pager("signin"))} className={selected("signin")}>Se Connecter</h3>
        
      </div>
    </div>
  );
}

export default Burger;

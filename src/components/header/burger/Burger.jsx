import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import pager from "../../../redux/actions/pager";
import { motion } from "framer-motion";
import "./burger.css";

function Burger() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.pager);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const selected = (page) => (current === page ? "on-it" : "");
  const handlePage=(page)=>{
    return ()=>{
      dispatch(pager(page));
      toggle();
    }
  }
  if (!open)
    return (
      <div onClick={toggle} className="menu">
        <MenuIcon />
      </div>
    );
  return (
    <motion.div className="burger"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring"}}
    >
      <div onClick={toggle} className="close">
        <CloseIcon />
      </div>
      <div className="links">
        <h4 onClick={handlePage('home')} className={selected("home")}>Home</h4>
        <h4 onClick={handlePage("locations")} className={selected("locations")}>Locations</h4>
        <h4 onClick={handlePage("services")} className={selected("services")}>Services</h4>
        <h4 onClick={handlePage("about")} className={selected("about")}>About</h4>
        <h4 onClick={handlePage("signin")} className={selected("signin")}>Sign In</h4>
        <h4 onClick={handlePage("signup")} className={selected("signup")}>Sign Up</h4>
        
      </div>
    </motion.div>
  );
}

export default Burger;

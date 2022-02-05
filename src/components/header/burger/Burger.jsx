import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import pager from "../../../redux/actions/pager";
import "./burger.css";

function Burger() {
    const dispatch=useDispatch();
    const current=useSelector(state=>state.pager);
    const [open, setOpen]=useState(false);
    const toggle=()=>setOpen(!open);
    const selected=(page, title)=>current===page ? `~ ${title} ~`: title;
    if(!open) return <div onClick={toggle} className="menu"><MenuIcon/></div>;
    return (
        <div className="burger">
            <div  onClick={toggle} className="close"><CloseIcon/></div>
            <div className="links">
                <h3 onClick={()=>dispatch(pager("home"))}>{selected("home", "Aceuil")}</h3>
                <h3 onClick={()=>dispatch(pager("locations"))}>{selected("locations", "Locations")}</h3>
                <h3 onClick={()=>dispatch(pager("posts"))}>{selected("posts", "Annonces")}</h3>
                <h3 onClick={()=>dispatch(pager("about"))}>{selected("about", "A Propos")}</h3>
                <h3 onClick={()=>dispatch(pager("signup"))}>{selected("signup", "S'inscrire")}</h3>
                <h3 onClick={()=>dispatch(pager("signin"))}>{selected("signin", "Se Connecter")}</h3>
            </div>
        </div>
    )
}

export default Burger

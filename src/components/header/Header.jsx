import React from 'react'
import { useDispatch } from "react-redux";
import { useMedia } from "use-media";
import pager from '../../redux/actions/pager';
import Burger from './burger/Burger';
import "./header.css";

function Header() {
    const dispatch=useDispatch();
    const isBig=useMedia({ minWidth: "500px" });
    if(!isBig) return <div className="burg"><Burger/></div>;
    return (
        <div className='header'>
            <h4 onClick={()=>dispatch(pager("home"))}>Accueil</h4>
            <h4 onClick={()=>dispatch(pager("locations"))}>Locations</h4>
            <h4 onClick={()=>dispatch(pager("posts"))}>Annonces</h4>
            <h4 onClick={()=>dispatch(pager("about"))}>A Propos</h4>
            <h4 onClick={()=>dispatch(pager("signup"))}>S'inscrire</h4>
            <h4 onClick={()=>dispatch(pager("signin"))}>Se Connecter</h4>
    </div>
    )
}

export default Header;

import React from 'react';
import Carte from './carte/Carte';
import { useDispatch } from "react-redux";
import pager from "../../../../../redux/actions/pager";
import "./welcome.css";


function Welcome() {
    const dispatch=useDispatch();
    return (
        <div className="welcome">
            <Carte img={`https://media.architecturaldigest.com/photos/581a0d2bac7a304a654601fd/master/pass/Kennedy-First-Lady-Bedroom-FiJFKWHP-KN-C21506.jpg`} 
                imageLabel="Trouver Un Colocataire De Votre Choix" buttonLabel={"Proposer"} cb={()=>dispatch(pager("signin"))}/>
            <Carte img={"https://img.nh-hotels.net/nh_collection_eurobuilding-1183-rooms.jpg?crop=7250:3661;0,267&resize=555:280&output-quality=70&resize=555:*&composite-to=center,center|555:280&background-color=white"} 
                imageLabel="Trouver Votre Chambre Plus Facilement" cb={()=>dispatch(pager("signin"))} buttonLabel={"Chercher"}/>
        </div>
    )
}

export default Welcome

import React from 'react';
import Carte from './carte/Carte';
import "./welcome.css";


function Welcome() {
    return (
        <div className="welcome">
            <Carte img={"https://api.daad.de/api/image/sm1st/media/daad_de/daad-k%C3%B6ln-19-07-15-811.jpg"} imageLabel="Trouver Un Colocataire De Votre Choix" buttonLabel={"Proposer"}/>
            <Carte img={"https://cdn.internationalstudent.com/images/Cort-Furniture/stock-furniture-image.jpg"} imageLabel="Trouver Votre Chambre Plus Facilement" buttonLabel={"Chercher"}/>
        </div>
    )
}

export default Welcome

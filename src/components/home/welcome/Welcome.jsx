import React from 'react';
import Carte from './carte/Carte';
import "./welcome.css";


function Welcome() {
    return (
        <div className="welcome">
            <Carte img={"https://media.architecturaldigest.com/photos/581a0d2bac7a304a654601fd/master/pass/Kennedy-First-Lady-Bedroom-FiJFKWHP-KN-C21506.jpg"} imageLabel="Trouver Un Colocataire De Votre Choix" buttonLabel={"Proposer"}/>
            <Carte img={"https://media.architecturaldigest.com/photos/581a0d2bac7a304a654601fd/master/pass/Kennedy-First-Lady-Bedroom-FiJFKWHP-KN-C21506.jpg"} imageLabel="Trouver Votre Chambre Plus Facilement" buttonLabel={"Chercher"}/>
        </div>
    )
}

export default Welcome

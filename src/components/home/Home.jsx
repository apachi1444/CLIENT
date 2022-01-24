import React from 'react';
import "./home.css";
import Reviews from './reviews/Reviews';
import Updates from './updates/Updates';
import Welcome from './welcome/Welcome';

function Home() {
    return (
        <div className="home">
            <p className="intro">Trouver L'Appartement Ou La Colocation De Vos Reves, Maintenant!</p>
            <Welcome/>
            <Updates/>
            <Reviews/>
        </div>
    )
}

export default Home;

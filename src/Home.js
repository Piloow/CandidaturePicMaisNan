import './styles/Content.css';
import picsous from "./assets/picsous.png";
import React from "react";

function Home() {
    return (
        <div className='main-screen'>
            <div className='main-title'>
                Bienvenue dans Picsous!
            </div>
            <div className='screen-content'>
                Picsous est un outil interne au Pic'Asso visant à permettre la gestion de la trésorerie.
                Pour les membres de l'équipe du Pic'Asso, il permet de remplir les données financières pour chaque perm réalisée en astreinte.
                Pour l'équipe de trésorerie, il permet de visualiser de façon efficace ces données. <br/><br/>

                Pour toute question, contactez l'équipe Info du Pic'Asso à l'adresse picasso-info@assos.utc.fr.
                <img src={picsous} alt='PICSOUUUUUS' style={{
                    width: '40vh', paddingTop : '5vh'
                }}/>
            </div>
        </div>
    );
}

export default Home;
import { NavLink } from 'react-router-dom';
import React from 'react';
import Vue from './Vue.jsx';
import Argent from './Argent.jsx'

export default function Chambre() {

    return (

        <div className="Chambre">
            <h2>Voici votre Chambre</h2>

            <h3>Vtuber : Nom du Vtuber</h3>
            
            <div className="Vues">

                <Vue/>

            </div>
            <div className="Agrents">

                <Argent/>

            </div>

            <NavLink className="Chambre 1" to={`Chambre-1`}>
                    <button type="button">
                        {" "}
                        Chambre 1{" "}
                    </button></NavLink>

        </div>
    )
}
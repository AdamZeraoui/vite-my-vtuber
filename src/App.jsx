
import './App.css'
import { NavLink, Outlet } from 'react-router-dom';
import MyVtuber from "./assets/MyVtuber.png"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPeopleRoof, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const title = '"My Vtuber"'


export default function App() {

    return (
        <>
            <div className ="Image">

                <img src={MyVtuber} height="540" width="960"/>

            </div>
            <div className="App">
                <h1>{title}</h1>
                <NavLink className="Acceuil" to={`/`}>
                    <button type="button">
                        
                        {" "} <FontAwesomeIcon icon={faHouse} /> {" "}
                
                    </button>
                </NavLink>
                
                <NavLink className="Chambre" to={`chambre`}>
                    <button type="button">
                        {" "}
                        <FontAwesomeIcon icon={faPeopleRoof} />{" "}
                    </button></NavLink>
                
                <NavLink className="Agence" to={`agence`}>
                    <button type="button">
                        {" "}
                        <FontAwesomeIcon icon={faStar} />{" "}
                    </button></NavLink>

                <NavLink className="Profil" to={`profil`}>
                    <button type="button">
                        {" "}
                        <FontAwesomeIcon icon={faUser} />{" "}
                    </button></NavLink>
            </div>

            <div>
                <Outlet/>
            </div>
        </>
    )
}

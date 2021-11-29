import React from 'react';
import './navbar.css';
import logo from '../images/hustle.png';
import {Link} from 'react-router-dom';

const Navbar = () =>{

    return(
        <div className="navbar-container">
            <div className="left-side">
                <img src = {logo} alt=""></img>
            </div>
            <div className="navbar-options">
                <Link to="/home">
                <button className="navbar-btn">Inicio</button>
                </Link>
                <a className="navbar-btn" href="home#about-us">Acerca de nosotros</a>
                <Link to="/login">
                <button className="navbar-btn">Iniciar Sesión</button>
                </Link> 
            </div>
        </div>
    )
}

export default Navbar;
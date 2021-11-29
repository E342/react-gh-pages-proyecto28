import React from 'react';
import '../App.css';
import Navbar from './navbar/Navbar';
import Carrusel from './inicio/carrusel';
import AboutUs from './aboutUs/aboutUs';
import Footer from './footer/footer';

function Inicio() {
    return(
        <div className="App">
            <Navbar/>
            <Carrusel/>
            <AboutUs />   
            <Footer />
        </div>
    )
}

export default Inicio;
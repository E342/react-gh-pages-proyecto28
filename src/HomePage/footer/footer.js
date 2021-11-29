import './footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { TiMap } from "react-icons/ti";

const Footer = () =>{
    return(
        <footer>
            <div className="footer-container">
                <div className="row">
                    <div className="column">
                        <h4>Información</h4>
                        <ul className="list">
                            <li><TiPhone/>  +503 2256-9685</li>
                            <li><TiMap/>    La Libertad, El Salvador</li>
                            <li><TiLocation/>   Blvr. Los Proceres</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Soporte</h4>
                        <ul className="list">
                            <li>Ayuda</li>
                            <li>Condiciones</li>
                            <li>Privacidad</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Redes Sociales</h4>
                        <ul className="list-social">
                            <li> <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="red" size="30px" /></a> </li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="red"  size="30px" /></a></li>
                        </ul>
                    </div>  
                </div>  
            </div>     
        </footer>
    )
}

export default Footer;
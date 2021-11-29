import logo from '../../../images/hustle.png';
// import { IoLogOut } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import './mainUser.css';
import AlbumView from '../albumView/albumView';
import { useUserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const NavbarUser = ()=>{
    const auth = useUserContext();
    const navigate = useNavigate();

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.logout();
        navigate("/login");
    }
    return(
        <div>
            <nav className="navbar-container-main">
                <div className="left-side">
                    <img src = {logo} alt=""></img>
                </div>
                <div className="navbar-options">
                    <div className="search-container">
                        <button className="logout"><IoSearch/></button>
                        <input type="text" placeholder="Introduzca el nombre del álbum"></input>
                    </div>
                    <button className="navbar-btn" onClick={onClickHandler}>salir de usuario</button>
                </div>
            </nav>
            <AlbumView/>
        </div>
            
    )
}
export default NavbarUser;
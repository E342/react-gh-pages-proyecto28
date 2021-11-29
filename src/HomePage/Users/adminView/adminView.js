import './adminView.css';
 import { IoLogOut } from "react-icons/io5";
import logo from '../../images/hustle.png';
import AlbumViewAdmin from './albumView/albumViewAdmin';
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const AdminView =()=>{
    const auth = useUserContext();
    const navigate = useNavigate();

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.logout();
        navigate("/login");
    }
    return(
        <div>
            <nav className="navbar-container-admin">
                <div className="left-side">
                    <img src = {logo} alt=""></img>
                </div>
                <div className="navbar-options">
                    <button className="navbar-btn" onClick={onClickHandler}>salir de administrador</button>
                </div>
            </nav>
            <AlbumViewAdmin/>
        </div>
    )


}
export default AdminView;
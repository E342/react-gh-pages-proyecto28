import './iniciarSesion.css';
import { useState, useEffect } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import loginCollage from '../images/collage-login.png';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext"

const InicioDeSesion = () => {
    // Recibimos la función login y el token guardadas en UserContext
    const navigate = useNavigate();
    const auth = useUserContext();

    const { login, token } = useUserContext();

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);

    // Se va guardando cada caracter que ingresamos al input
    const onChangeHandler = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const logged = await login(usernameInput, passwordInput);
        setError(!logged);

        setUsernameInput("");
        setPasswordInput("");
    }

    useEffect(()=>{
        console.log(token);
        if(token){
            navigate("/redirect");
        }
    }, [token, navigate]);

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.cancel();
        navigate("/home");
    }

    return(
        <section className="container">
            <div className="login-container">
                <div className="left-side-login">
                    <img src = {loginCollage} alt=""></img>
                </div>
                <form onSubmit= { onSubmitHandler }>
                    <h1>Inicio de Sesión</h1>
                    { error && !token && <h4 className="login-error"> Ocurrió un error</h4>}
                    <div className="user-container">
                        <span className="login"><IoPersonCircleSharp/></span>
                        <input type="text" placeholder="Introduzca su nombre de usuario"
                        onChange = { e => onChangeHandler(e, setUsernameInput)}></input>
                    </div>
                    <div className="password-container">
                        <span className="login"><IoLockClosed/></span>
                        <input type="password" placeholder="Introduzca su contraseña"
                        onChange = { e => onChangeHandler(e, setPasswordInput)}></input>
                    </div>
                    <div className="btn-container-admin">
                        <button className="login-btn" onClick={onClickHandler}>Cancelar</button>
                        <button className="login-btn">Iniciar Sesión{" "}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default InicioDeSesion;
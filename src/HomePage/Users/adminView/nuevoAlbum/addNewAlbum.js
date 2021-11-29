import './addNewAlbum.css';
import React, { useEffect, useState } from 'react';
import { FaCompactDisc } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { useUserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import services from '../../../services/user.services';

const AddNewAlbum =()=>{
    const auth = useUserContext();
    const navigate = useNavigate();
    const {token}= auth;

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.cancel();
        navigate("/admin");
    }

    const [datos, setDatos] = useState({
        title:'',
        description:'',
        image:'',
    });
    
    const handleInputChange = (event) => {
        setDatos({
          ...datos,
          [event.target.name]: event.target.value,
        });
    };
    
    const envioDatos = async(e) => {
        e.preventDefault();
        console.log({token, datos});
        const response = await services.addPost(token, datos);
        console.log(response);
        e.target.reset();
    };

    return(
        <section className="container">
            <div className="new-album-container">
                <form onSubmit={envioDatos}>
                    <h1>Añadir nuevo álbum</h1>
                    <div className="album-container">
                        <span className="image"><FaCompactDisc/></span>
                        <input type="text" placeholder="Introduzca el nombre del álbum"
                        name="title" onChange={handleInputChange} oninvalid="alert('Debes de completar el formulario');" required
                        pattern=".{8,32}" title="Debe de contener entre 8 y 32 carácteres"
                         />
                    </div>
                    <div className="album-container">
                        <span className="image"><FaMusic/></span>
                        <input type="text" placeholder="Introduzca las canciones del album"
                        name="description" onChange={handleInputChange}
                        oninvalid="alert('Debes de completar el formulario');" required
                        pattern=".{8,}" title="Debe de contener al menos 8 carácteres"
                         />
                    </div>
                    <div className="album-container">
                        <span className="image"><FaRegImage/></span>
                        <input type="url" placeholder="Introduzca el link de la imagen de portada"
                        name="image" onChange={handleInputChange}
                        oninvalid="alert('Debes de completar el formulario');" required
                         />
                    </div>
                    <div className="btn-container-album">
                        <button className="add-btn" onClick={onClickHandler} type="submit">Cancelar</button>
                        <button className="add-btn" type="submit">Añadir nuevo album</button>
                    </div>
                </form> 
            </div>
        </section>
    )

}
export default AddNewAlbum;
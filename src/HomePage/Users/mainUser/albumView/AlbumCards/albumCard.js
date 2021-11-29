import x from "./albumCards.css";
import { BiHeart } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
 import { Link } from "react-router-dom";
// import Albunes from "../../../adminView/DataAlbun/Albunes.json";
 import { IoTrashOutline } from "react-icons/io5";
 import { FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import services from '../../../../services/user.services';
import { useUserContext } from "../../../../contexts/UserContext";

const AlbumCard = () => {
  const [todos, setTodos] = useState([]);
  const [dato, setDato] = useState({
    description:''
  });
  const auth = useUserContext();
  const {token}= auth;
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const {data} = await services.getAll(token);
    setTodos(data);
  };
  const likeCard = (key)=>{
  
    const seleccionadoLike=todos.filter((item)=>item._id==key);
//seleccionadoLike.classList.add("megusta")
  }
  const handleInputChange = (event) => {
    setDato({
      ...dato,
      [event.target.name]: event.target.value,
    });
  };  
  const comments = async(key) =>{
    const res = await services.addComment(token,dato,key);
    console.log(res);
  }
  return (
    <div className="card-container">
      {todos.map((item) => (
            <div className="container-nodo" key={item._id}>
            <div className="image-album">
              <img src={item.image} alt=""></img>
            </div>
              <div className="info-album">
                  <p><strong> Nombre de álbum:</strong>{item.title}</p>
                  <p><strong> Canciones:</strong>{item.description}</p>
                  <div className="btn-container">
                      <button className="btn-megusta" onClick={()=>likeCard(item._id)}><BiHeart/></button>
                      <button className="btn-favoritos"><BiStar/></button>
                      <button className="btn-comments" onClick={()=>comments(item._id)}><BiCommentDetail/></button>
                  </div>
                <input placeholder="Añadir comentario" name="description" onChange={handleInputChange}
                pattern=".{8,}" title="Debe de contener al menos 8 carácteres"></input>
              </div>
          </div>
        ))
      }
    </div>
  );
};
export default AlbumCard;

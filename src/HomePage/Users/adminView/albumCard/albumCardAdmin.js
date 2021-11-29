import './albumCardAdmin.css';
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import {Link} from 'react-router-dom';
import React, { useEffect, useState } from "react";
//  import Albunes from "../DataAlbun/Albunes.json";
import services from '../../../services/user.services';
import { useUserContext } from "../../../contexts/UserContext";

const CardAdmin = () => {
  const [todos,setTodos]= useState([]);
  const auth = useUserContext();
  const {token}= auth;
    useEffect(()=>{
         obtenerDatos();
    },[])

  const obtenerDatos  = async (x) =>{
    const {data} = await services.getAll(token);
    console.log(data);
    setTodos(data);
  }
  const deleteCard = async(key)=>{
    console.log("Eliminando carta");
    const elementoEliminado = todos.filter((item) => item._id !== key);
    setTodos(elementoEliminado); 
    const r = await services.delete(token,todos,key);
    console.log(r);
  }
    return (
      <div className="card-container">
      {
          todos.map((item)=>(
            <div className="container-nodo" key={item._id}>
         
            <img src={item.image} alt=""></img>
      
            <div className="info-album">
            <p>
              <strong> Titulo:</strong> {item.title}
            </p>
            <p>
              <strong> Descripcion:</strong> {item.description}
            </p>
            <div className="btn-container-admin">
              <button className="btn-delete"  onClick={()=>deleteCard(item._id)}>  
                <IoTrashOutline />
                Eliminar
              </button>
              <Link to={`/edit/${item._id}`}><button className="btn-edit">
                  <FiEdit/>
                  Editar
                  </button>
              </Link>
            </div>
          </div>
          </div>
          ))
      }
      </div>
    );
}
export default CardAdmin;

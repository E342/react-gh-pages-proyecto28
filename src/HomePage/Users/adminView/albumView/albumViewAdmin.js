import CardAdmin from "../albumCard/albumCardAdmin";
import { IoSearch } from "react-icons/io5";
import './albumViewAdmin.css';import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import {Link} from 'react-router-dom';
import services from "../../../services/user.services";
import { useUserContext } from "../../../contexts/UserContext";
import React, { useEffect, useState } from "react";

const AlbumViewAdmin = ()=>{
    const [todos,setTodos]= useState([]);
    const [input,setInput]=useState();
    const auth = useUserContext();
    const {token}= auth;
        useEffect(()=>{
            getAllData();
        },[])

    const getAllData  = async () =>{
        const {data} = await services.getAll(token);
        console.log(data);
        setTodos(data);
    }
    const handleInputChange = (e)=>{
        setInput(e.target.value);
        console.log(input);
        
    }
    const search = async()=>{
        const info = todos.filter(item => item.title == input);
        const key = info.map(item => item._id);
        const id = key.toString();
        const res = await services.getById(token,id);
        console.log(res);
    }
    return(
        <div className="admin-container">
            <div className="search-container-admin">
                    <button className="search" onClick={search}><IoSearch/></button>
                    <input type="text" onChange={handleInputChange} placeholder="Introduzca el nombre del álbum"></input>
                <div>
                    <Link to="/add"><button className="new-album">Añadir nuevo álbum</button></Link>
                </div>
            </div>
            <h1>Álbumes</h1>
                <div className="cards-container">
                    <CardAdmin/>
                </div>
            </div>
    )
}
export default AlbumViewAdmin;
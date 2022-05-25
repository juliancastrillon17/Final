import React, {useEffect, useState} from "react";
import '../index.css'

function Hook(){

    const [posteos,setPosteos] = React.useState([]);

    React.useEffect(()=>{
        obtenerDatos(); {/*Estamos llamando solamente una vez la función*/}
    },[]);

    const obtenerDatos = async()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json(); {/*Obtenemos los objetos y los transformamos en archivos JSON*/}
        setPosteos(posts); {/*Empujamos el estado*/}
        console.log(posts);
    }

    return (
        <div>
            <ul>
                {
                    posteos.map(item => (
                        <li key={item.id}><span className="ids"><br/>id: </span> {item.id} <span className="titles"><br/> Titles:</span> {item.title} <span className="bodys"> <br/>Body:</span> {item.body}</li>
                    ))
                }
                <br/>
            </ul>
        </div>
    )
}   

export default Hook;
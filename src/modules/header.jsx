import React from "react";
import '../header.css';
import Imagen from '../recurses/react_logo.png';
import Logo from '../recurses/icon.png';

function Head(){

    return(
        <header className="encabezado">
            <div className="Principal">
                <div className="Logo">
                    <a href="../../public/index.html"><img className="Logo-image" src={Imagen}></img></a>
                </div>

                <div className="Buscador">
                    <div className="imagen">
                        <img className="icon" src={Logo}></img>
                    </div>
                    <div className="Barra">
                        <input type="text" className="barraBusqueda" placeholder="Escribe aquí"></input>
                    </div>
                </div>

                <div className="mesage">
                    <h1>
                        Modulos -- Api pública -- React
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Head;
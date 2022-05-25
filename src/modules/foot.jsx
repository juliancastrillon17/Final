import React from "react";
import '../index.css'; 

function Foot(){

    return(
        <div className="Footer">
            <center>
                <div className="link-api">
                    
                        <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">Ir al gestor de Apis</a>
                </div>
            </center>

            <div className="Informacion-dev">
                <center>
                    <p>Desarrollado con React, utilizando apis públicas y hooks de estado y de cambios y actualizaciones
                    <br/> 
                    Desarrollado por Julián Castrillón Sánchez - curso de Desarrollo web - Institución UniversitariaPascual Bravo 
                    <br/> 
                    Contactos: 3014826493 <br/>
                    julian.castrillon234@pascualbravo.edu.co <br/>
                    &copy; Todos los derechos reservados
                    </p>
                </center>
            </div>
        </div>
    )

}

export default Foot;

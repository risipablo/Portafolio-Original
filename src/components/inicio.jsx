
import { useState } from "react";
import "./inicio.css"
import perfil from "../assets/images/Perfil.jpg"
import cv from "../assets/Download/cv.pdf"

const Inicio = () => {

    const [activeIcon, setActiveIcon] = useState(null);

    const apretar = (iconID) => {
        setActiveIcon(iconID)
    }

    const soltar = () => {
        setActiveIcon(null);
    }

    return(
        <section className="inicio">
            <div className="contenedor">

            </div>
            <div className="contenido-foto">
                <img src={perfil} alt="foto"/>
            </div>
            <div className="info">
                <h2> Pablo Risi</h2>
                <h3> Front End Developer </h3>
                <h3> Javascript | React JS | C# </h3>

                <div className="span"> 
                <span> </span>
                </div>

                <div className="iconos"> 

                <a href="www.linkedin.com/in/pablo-risi-b457b1163"  onMouseEnter={() => apretar("linkedin")} onMouseLeave={soltar}>
                    <i className="fa-brands fa-linkedin"></i>
                    {activeIcon === "linkedin" && (
                        <div className="popup">
                        <p>Perfil de Linkedin</p>
                        </div>
                    )}
                </a>

                <a href="https://github.com/risipablo"  onMouseEnter={() => apretar("github")} onMouseLeave={soltar} >
                    <i className="fa-brands fa-github"></i>
                    {activeIcon === "github" && (
                        <div className="popup">
                        <p>Perfil de Github</p>
                        </div>
                    )}
                </a>

                <a  onMouseEnter={() => apretar("cv")} onMouseLeave={soltar} href={cv} >  
                <i className="fa-regular fa-file" ></i>
                {activeIcon === "cv" && (
                    <div className="popup">
                    <p>Descargar cv</p>
                    </div>
                    )}
                </a>
                </div>
            </div>
        </section>
    )
}

export default Inicio;
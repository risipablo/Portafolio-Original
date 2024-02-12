
import { Proyecto } from "./proyecto"
import "./proyectos.css"
import image1 from "../assets/images/1.png"
import image2 from "../assets/images/game.jpg"
import image3 from "../assets/images/lista.jpg"


export const Proyectos = () => {
    return(
            <section className = "section">
                <h2> Proyectos</h2>
                <div className="proyectos">
                    
                    <Proyecto
                        titulo="Casa Vita"
                        descripcion="Web de consultorios de salud"
                        lenguaje="Creado con HTML, SCSS y JavaScript"
                        src={image1}
                        git={
                            <a href="https://github.com/risipablo/casavita.git">
                                <i className="fab fa-github"></i> 
                            </a>
                        }
                        link={
                            <a href="https://casa-vita.netlify.app/">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                        }
                    />
                        <Proyecto
                        titulo="Petshop Listado"
                        descripcion="Listado de productos y gastos de negocio real"
                        lenguaje="Creado con Html, scss y Javascript"
                        src={image3}
                        git={
                            <a href="https://github.com/risipablo/casavita.git">
                                <i className="fab fa-github"></i> 
                            </a>
                        }
                        link={
                            <a href="https://casa-vita.netlify.app/">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                        }
                    />
                        <Proyecto
                        titulo="Game Quiz"
                        descripcion="Juego de opción multiple"
                        lenguaje="Creado con Html, css y Javascript"
                        src={image2}
                        git={
                            <a href="https://github.com/risipablo/casavita.git">
                                <i className="fab fa-github"></i> 
                            </a>
                        }
                        link={
                            <a href="https://casa-vita.netlify.app/">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                        }
                    />
                    
                </div>
            </section>
    )
}

import { Proyecto } from "./proyecto"
import "./proyectos.css"
import image1 from "../assets/images/css.png"
import image2 from "../assets/images//Git_icon.svg.png"
import image3 from "../assets/images/javascript.png"
import image4 from "../assets/images/c.svg"

export const Proyectos = () => {
    return(
            <section className = "section">
                <h2> Proyectos</h2>
                <div className="proyectos">
                    
                    <Proyecto
                        titulo="2"
                        src={image1}
                        descripcion="123456"
                    />
                        <Proyecto
                        titulo="2"
                        src={image2}
                        descripcion="123456"
                    />
                        <Proyecto
                        titulo="2"
                        src={image3}
                        descripcion="123456"
                    />
                        <Proyecto
                        titulo="2"
                        src={image4}
                        descripcion="123456"
                    />
                </div>
            </section>
    )
}
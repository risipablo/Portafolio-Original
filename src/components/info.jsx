
import "./info.css";
import Skills from "./skills";


export const Info = () => {

    return(
        <section className="aboutme">
            <div className="section">
            <h2> Sobre Mí</h2>
                <div className="parrafo"> 
                <p>
                    ¡Hola! Mi nombre es Pablo Risi, Front-End Developer. 💻 
                </p>
                <br />
                <p>
                    En la actualidad, me desempeño como desarrollador web de manera FREELANCE, creando experiencias únicas y funcionales para mis clientes. Aunque mi enfoque principal es el Front End, tengo aspiraciones de ampliar mis habilidades y adentrarme en el desarrollo del Back End.
                </p>
                <br />
                <p> Continuamente busco expandir mis conocimientos de programación y mantenerme al tanto de las últimas novedades del mundo TECH.</p>
                </div>
            </div>

            <div className="span2"> 
                <span> </span>
            </div>

            <div className="section">
                <h2> Experiencia</h2>
                <div className="articulos">
                    <article>
                        <h3> Agencia freelance</h3>
                        <h4> 2022 - actualidad</h4>
                        <div className="rol">
                            <li> Paginas y aplicaciones para empredimientos reales </li>
                            <li> Clases privadas </li>
                            <li> Proyectos de practicas</li>
                        </div>
                    </article>
                
                </div>
            </div>

            <div className="span2"> 
                <span> </span>
            </div>
            
            <Skills/>
        </section>
    )
}
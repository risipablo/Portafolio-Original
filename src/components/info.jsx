
import "./info.css";
import Skills from "./skills";


export const Info = () => {

    return(
        <section className="aboutme">
            <div className="section">
            <h1> Sobre Mí</h1>
                <div className="parrafo"> 
                <p>
                    ¡Hola! Mi nombre es Pablo Risi, Front End Developer. 💻 
                </p>
                <br />
                <p>
                    En la actualidad, me desempeño como desarrollador web de manera FREELANCE, creando experiencias únicas y funcionales para mis clientes. Aunque mi enfoque principal es el Front End, tengo aspiraciones de ampliar mis habilidades y adentrarme en el desarrollo del Back End.
                </p>
                <br />
                <p>
                    Continuamente busco expandir mis conocimientos de programación y mantenerme al tanto de las últimas novedades del mundo TECH. Estoy comprometido con el aprendizaje constante y la mejora continua, ya que creo que la tecnología evoluciona rápidamente, y estar al día es esencial para ofrecer soluciones innovadoras.
                </p>
                </div>
            </div>
            <div className="span2"> 
                <span> </span>
                </div>
            <Skills/>
        </section>
    )
}
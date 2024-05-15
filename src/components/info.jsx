
import { useEffect } from "react";
import "./info.css";
import Skills from "./skills";
import { Experencia } from "./timeline";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SimpleSlider from "./slider";
import { NavLink } from "react-router-dom";


export const Info = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section className="aboutme">
            <div className="section">
            <h2 data-aos="fade-right"> Sobre Mí</h2>
                <div className="parrafo" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700"> 
                <p>
                    ¡Hola! Mi nombre es Pablo Risi, Front-End Developer. 💻 
                </p>
                <br />
                <p>
                    En la actualidad, me desempeño como desarrollador web de manera FREELANCE. Mi enfoque principal es el Front End, tengo aspiraciones de ampliar mis habilidades y adentrarme en el desarrollo del Back End.
                </p>
                <br />
                <p> Continuamente busco expandir mis conocimientos de programación y mantenerme al tanto de las últimas novedades del mundo TECH.</p>
                </div>
            </div>

            <div className="span2" data-aos="fade-right" data-aos-offset="0"> 
                <span> </span>
            </div>

            <div className="section">
                <h2 data-aos="fade-right" > Experiencia</h2>
                <Experencia/>
            </div>

            <div className="span2" data-aos="fade-up" data-aos-offset="0"> 
                <span> </span>
            </div>

            <div className="section">
                
                <h2 data-aos="fade-right" > Proyectos </h2>
                <SimpleSlider />
                <NavLink  to="/proyectos">
                    <button className="slide-btn" style={{
                            
                            borderRadius: '4px', 
                            margin:"2.2rem auto 1rem",
                            padding: '10px 30px',
                            fontSize: '1.2rem', 
                            fontWeight:"600",
                            cursor: 'pointer', 
                            outline: 'none', 
                            textDecoration: 'none', 
                            textAlign: 'center', 
                        }}>
                            Ver más
                        </button>
                </NavLink>
            </div>

            <div className="span2" data-aos="fade-down" data-aos-offset="0"> 
                <span> </span>
            </div>
            
            <Skills />
        </section>
    )
}
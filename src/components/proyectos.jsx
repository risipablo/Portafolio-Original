    import { Proyecto } from "./proyecto";
    import "./proyectos.css";
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { useEffect } from "react";


    export const Proyectos = () => {
        useEffect(() => {
            AOS.init();
        }, []);

    return (
        <section className="proyect">
        <div className="section">
            <h2 data-aos="fade-right"> Proyectos</h2>

            <div className="proyectos"  data-aos="fade-up">
            
            <Proyecto
                titulo="Petshop Listado"
                descripcion="Listado de productos y gastos de Petshop"
                lenguaje="HTML - SCSS - JavaScript"
                // src={image3}
                git={
                <a href="https://github.com/risipablo/ListaLocal.git">
                    <i className="fab fa-github"></i>
                </a>
                }
                link={
                <a href="https://risipablo.github.io/ListaLocal/">
                    <i className="fa-solid fa-globe"></i>
                </a>
                }
            />

            <Proyecto
                titulo="Game Quiz"
                descripcion="Juego de opción múltiple"
                lenguaje="HTML - CSS - JavaScript"
                // src={image2}
                git={
                <a href="https://github.com/risipablo/Game-Quiz.git">
                    <i className="fab fa-github"></i>
                </a>
                }
                link={
                <a href="https://juego-de-multiple-opcion.vercel.app/">
                    <i className="fa-solid fa-globe"></i>
                </a>
                }
            />

            <Proyecto
                titulo="Sorte de aniversario"
                descripcion=" Sorteo para negocio comercial "
                lenguaje="React - Chakra Ui"
                // src={image1}
                git={
                <a href="https://github.com/risipablo/Sorteo.git">
                    <i className="fab fa-github"></i>
                </a>
                }
                link={
                <a href="https://sorteo-orcin.vercel.app/">
                    <i className="fa-solid fa-globe"></i>
                </a>
                }
            />

            
            <Proyecto
                titulo="Casa Vita"
                descripcion="Web de Centro de Salud "
                lenguaje="HTML - SCSS - JavaScript"
                // src={image1}
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
        </div>
        </section>
    );
    };

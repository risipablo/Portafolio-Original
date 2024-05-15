    import { useState } from "react";
    import { motion } from "framer-motion";
    import "./inicio.css";
    import perfil from "../assets/images/Perfil.jpg";
    import cv from "../assets/Download/cv.pdf";


    const Inicio = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    

    const apretar = (iconID) => {
        setActiveIcon(iconID);
    };

    const soltar = () => {
        setActiveIcon(null);
    };


    return (
        <motion.section
        className="inicio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        >
        <motion.div
            className="contenedor"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        ></motion.div>
        <motion.div
            className="contenido-foto"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className="contenedor-imagen">
            <motion.img
                src={perfil}
                alt="foto"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            </div>
        </motion.div>
        <motion.div
            className="info"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <motion.h2
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            >
            Pablo Risi
            </motion.h2>
            <motion.h3
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            >
            Desarrollador Frontend
            </motion.h3>
            <motion.h3
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            >
            Javascript | React JS
            </motion.h3>

            <div className="span">
            <span> </span>
            </div>

            <motion.div
            className="iconos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5}}
            >
            <motion.a
                href="https://linkedin.com/in/pablo-risi-b457b1163"
                onMouseEnter={() => apretar("linkedin")}
                onMouseLeave={soltar}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
            >
                <i className="fa-brands fa-linkedin"></i>
                {activeIcon === "linkedin" && (
                <div className="popup">
                    <p>Perfil de Linkedin</p>
                </div>
                )}
            </motion.a>

            <motion.a
                href="https://github.com/risipablo"
                onMouseEnter={() => apretar("github")}
                onMouseLeave={soltar}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.5}}
            >
                <i className="fa-brands fa-github"></i>
                {activeIcon === "github" && (
                <div className="popup">
                    <p>Perfil de Github</p>
                </div>
                )}
            </motion.a>

            <motion.a
                onMouseEnter={() => apretar("cv")}
                onMouseLeave={soltar}
                href={cv}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 4 }}
            >
                <i className="fa-regular fa-file"></i>
                {activeIcon === "cv" && (
                <div className="popup">
                    <p>Descargar cv</p>
                </div>
                )}
            </motion.a>
            </motion.div>
        </motion.div>
        </motion.section>
    );
    };

    export default Inicio;

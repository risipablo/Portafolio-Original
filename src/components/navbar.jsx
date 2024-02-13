
import{ useState,useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import "./navbar.css"



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const cambiarModo = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const modoLocalStorageKey = "modoOscuro";
        const modoGuardado = localStorage.getItem(modoLocalStorageKey);

        if (modoGuardado === 'oscuro') {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const modoLocalStorageKey = "modoOscuro";
        const modoActual = isDarkMode ? 'oscuro' : 'claro';
        document.body.classList.toggle('dark', isDarkMode);
        localStorage.setItem(modoLocalStorageKey, modoActual);
    }, [isDarkMode]);


    return (
        <nav>
        <div className="container">
            <div className="navbar">
        
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <NavLink className="active" to="/" >Inicio</NavLink>
                <NavLink className="active" to="/sobremi">Sobre Mí</NavLink>
                <NavLink className="active" to="/proyectos">Proyectos</NavLink>
                <NavLink className="active" to="/contacto">Contacto</NavLink>
            </div>
        
            <div className="menu-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="oscuro" id="oscuro" onClick={cambiarModo}>

                <span></span>
                <span></span>
            </div>
            </div>
        </div>
    </nav>
    );
    };

export default Navbar;

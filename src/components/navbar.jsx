
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
                <NavLink to="/" ><a className="active">Inicio</a></NavLink>
                <NavLink  to="/sobremi"><a className="active">Sobre Mí</a></NavLink>
                <NavLink  to="/proyectos"><a className="active">Proyectos</a></NavLink>
                <NavLink to="/contacto"><a className="active">Contacto</a></NavLink>
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

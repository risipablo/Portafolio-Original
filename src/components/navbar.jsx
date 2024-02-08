
import{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <a className='logo'>logo</a>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" >Inicio</Link>
                <Link to="/sobremi">Sobre Mí</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <div className="oscuro" id="oscuro" onClick={cambiarModo}>
                <span></span>
                <span></span>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>
        </nav>
    );
    };

export default Navbar;


export const Proyecto = ({titulo,src,alt,descripcion,lenguaje,link,git}) => {
    return(
        <>
            <div className="productos">
            <h3>{titulo}</h3>
            <p> {descripcion}</p>
            <p>{lenguaje}</p>
            <img className="image" src={src} alt={alt}/>
            <div className="link">
            <button className="boton"> {git}</button>
            <button className="boton">{link}</button>    
            </div>
        </div>
        </>
    )
}
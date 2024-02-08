
export const Proyecto = ({titulo,src,alt,descripcion}) => {
    return(
        <>
            <div className="productos">
            <h3>{titulo}</h3>
            <img className="image" src={src} alt={alt}/>
            <div className="descripcion">
                <p>{descripcion}</p>
            </div>
        </div>
        </>
    )
}


const Skill = ({skill, src , title, alt }) => {

    return(
        <div>
            <li>
                <strong className="nombre"> {skill} </strong>
                <img className="sticker" src={src} title={title} alt={alt} />
            </li>
            <br/>
        </div>
    )
}

export default Skill;
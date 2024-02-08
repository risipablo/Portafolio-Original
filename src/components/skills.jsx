
import Skill from "./skill";
import image1 from "../assets/images/javascript.png";
import image2 from "../assets/images/html.png";
import image3 from "../assets/images/css.png";
import image4 from "../assets/images/c.svg";
import image5 from "../assets/images/excel.png";
import image6 from "../assets/images/React-icon.svg.png";
import image7 from "../assets/images/Git_icon.svg.png";
import image8 from "../assets/images/Vitejs-logo.svg.png";
import image9 from "../assets/images/Bootstrap_logo.svg.png";
import image10 from "../assets/images/photo.png";
import image11 from "../assets/images/2560px-Sass_Logo_Color.svg.png";

const Skills = () => {

    return(
        <section className="habilidades">
            <h2> Skills </h2>
            <div className="grilla">

                <Skill 
                    skill="HTML"
                    src={image2}
                    title="HTML"
                    alt="HTML-logo"
                />
                
                <Skill 
                    skill="CSS"
                    src={image3}
                    title="CSS"
                    alt="CSS-logo"
                />

                <Skill 
                    skill="Javascript"
                    src={image1}
                    title="Javascript"
                    alt="JS-logo"
                />

                <Skill 
                    skill="C#"
                    src={image4}
                    title="C#"
                    alt="C#-logo"
                />

                <Skill 
                    skill="EXCEL"
                    src={image5}
                    title="EXCEL"
                    alt="EXCEL-logo"
                />

                
                <Skill 
                    skill="REACT"
                    src={image6}
                    title="REACT"
                    alt="REACT-logo"
                />

                <Skill 
                    skill="GIT"
                    src={image7}
                    title="GIT"
                    alt="GIT-logo"
                />

                <Skill 
                    skill="VITE"
                    src={image8}
                    title="VITE"
                    alt="VITE-logo"
                />

                <Skill 
                    skill="BOOTSTRAP"
                    src={image9}
                    title="BOOTSTRAP"
                    alt="BOOTSTRAP-logo"
                />

                <Skill 
                    skill="PHOTOSHOP"
                    src={image10}
                    title="PHOTOSHOP"
                    alt="PHOTOSHOP-logo"
                />

                <Skill 
                    skill="SASS"
                    src={image11}
                    title="SASS"
                    alt="SASS-logo"
                />

            </div>
        </section>
    )
}

export default Skills;
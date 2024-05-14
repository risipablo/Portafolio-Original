

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'

export function Experencia(){

    const exps = [
        {
            place:"Freelance",
            location:"Remoto ",
            description:{
                p1:"Paginas y aplicaciones para empredimientos reales",
                p2:"Clases privadas",
                p3:" Proyectos de practicas"
            },
            years: "2023- Actualidad"
        },

    ]

    return(
        <div className='articulos'> 
            <VerticalTimeline >
                {exps.map((item,index)=> (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#fff', color: '#333' }}
                    >
                        <h3  className="vertical-timeline-element-title" >{item.place}</h3> 
                        <h4  className="vertical-timeline-element-subtitle" >{item.location}</h4> 
                        <p> {item.years}</p>
                        <ul className='rol'>
                            <li>{item.description.p1}</li>
                            <li>{item.description.p2}</li>
                            <li>{item.description.p3}</li>
                        </ul>
                        
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </div>
    )
}





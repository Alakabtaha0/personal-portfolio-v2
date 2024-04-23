import React from 'react'
import '../styles/card.css'

type CardProps = {
    date?: string,
    image?: string,
    title: string,
    description: string,
    skills?: string[]
}

const Card:React.FC<CardProps> = ({image, date, title, description, skills}) => {
    return (
        <div className='experience-box'>
            {date ? <div className='experience-date-layout'>
                <p>{date}</p>
            </div> : <div className='experience-image-layout'>
                    <img src={image} alt={`${title}`} />
                </div>}
            <div className='experience-info-format'>
                <p>{title}</p>
                <p>{description}</p>
                <ul className='job-skills'>
                    {/* <li>
                        <div className='skills-bubble'>React</div>
                    </li>
                    <li>
                        <div className='skills-bubble'>Python</div>
                    </li>
                    <li>
                        <div className='skills-bubble'>Django</div>
                    </li> */}
                    {skills && skills.map((skill, index) => (
                        <li key={index}>
                            <div className='skills-bubble'>{skill}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card

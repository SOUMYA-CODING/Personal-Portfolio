import React from 'react'

const SkillCard = (props) => {
    return (
        <div
            className="skill-card" key={props.id}>
            <div className="skill-card-body">
                {props.icon}
                <h3>{props.title}</h3>
                <p>{props.language}</p>
            </div>
        </div>
    )
}

export default SkillCard
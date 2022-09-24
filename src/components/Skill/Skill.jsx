import React from 'react'
import './Skill.scss'

import SkillCard from '../../cards/SkillCard'
import SkillData from '../../data/SkillsData'

const Skill = () => {
    const data = SkillData.map((list) => {
        return <SkillCard
            key={list.id}
            id={list.id}
            icon={list.icon}
            title={list.title}
            language={list.language}
        />
    })
    return (
        <>
            <section id="skill-page">
                <div className="skill-page-wrapper container">
                    <h3
                        className="header-title">
                        My Skills
                    </h3>
                    <section
                        className='my-5'>
                        {data}
                    </section>
                </div>
            </section>
        </>
    )
}

export default Skill
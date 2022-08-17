import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import ProjectData from '../data/ProjectData'

const Project = () => {
    const data = ProjectData.map(list => {
        return <ProjectCard
            title={list.title}
            description={list.description}
            link={list.link}
            image={list.image}
            is_shift={list.is_shift}
            number={list.number}
            sl_number={list.sl_number}
        />
    })

    return (
        <section id="project-page">
            <div className="project-page-wrapper container">
                <h3 className="header-title">
                    Latest Work
                </h3>

                <section className="my-5">
                    {data}
                </section>
            </div>
        </section>
    )
}

export default Project
import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import ProjectData from '../data/ProjectData'
import { motion } from 'framer-motion'

const Project = () => {
    const data = ProjectData.map(list => {
        return <ProjectCard
            id={list.id}
            title={list.title}
            description={list.description}
            image={list.image}
            is_shift={list.is_shift}
            number={list.number}
            sl_number={list.sl_number}
            link={list.link}
        />
    })

    return (
        <section id="project-page">
            <div className="project-page-wrapper container">
                <motion.h3
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 1, type: 'tween', ease: "easeInOut" }}

                    className="header-title">
                    Latest Work
                </motion.h3>

                <section className="my-5">
                    {data}
                </section>
            </div>
        </section>
    )
}

export default Project
import React from 'react'
import SkillCard from '../cards/SkillCard'
import SkillData from '../data/SkillData'
import { motion } from 'framer-motion'

const Skill = () => {
    const data = SkillData.map(list => {
        return <SkillCard
            id={list.id}
            icon={list.icon}
            title={list.title}
            language={list.language}
        />
    })
    return (
        <section id="skill-page">
            <div className="skill-page-wrapper container">
                <motion.h3
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8, type: 'tween', ease: "easeIn" }}
                    viewport={{ once: false }}

                    className="header-title">
                    My Skills
                </motion.h3>

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.5 }}
                    viewport={{ once: false }}

                    className='my-5'>
                    {data}
                </motion.section>
            </div>
        </section>
    )
}

export default Skill
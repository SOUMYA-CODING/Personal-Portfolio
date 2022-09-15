import React from 'react'
import './Skill.scss'

import SkillCard from '../../cards/SkillCard'
import SkillData from '../../data/SkillsData'

import { motion } from 'framer-motion'

const Skill = () => {
    const data = SkillData.map((list) => {
        return <SkillCard
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
                    <motion.h3
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1, duration: 1, type: 'tween', ease: "easeInOut" }}
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
        </>
    )
}

export default Skill
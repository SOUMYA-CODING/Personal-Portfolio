import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8, type: 'tween', ease: "easeInOut" }}

            className="skill-card">
            <div className="skill-card-body">
                {props.icon}
                <h3>{props.title}</h3>
                <p>{props.language}</p>
            </div>
        </motion.div>
    )
}

export default SkillCard
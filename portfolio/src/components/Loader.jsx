import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.3, type: 'tween', ease: "easeInOut" }}


            className="loader"
        >

        </motion.div>
    )
}

export default Loader
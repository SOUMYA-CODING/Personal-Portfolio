import React from 'react'

import "./style/style.scss"
import "./style/responsive-style.scss"

//import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'
import Socialicons from './components/Socialicons'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Project_1 from './projects/Project_1'

import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Socialicons />
            <Header />
            <Routes>
                <Route exact path="/" element={<>
                    <ScrollToTop />
                    <Home />
                    <About />
                    <Skill />
                    <Project />
                    <Contact />
                </>} />
                <Route exact path='/project-1' element={<Project_1 />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
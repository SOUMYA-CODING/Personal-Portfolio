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

import NewApp from './projects/NewApp'

import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<>
                <ScrollToTop />
                <Socialicons />
                <Header />
                <Home />
                <About />
                <Skill />
                <Project />
                <Contact />
                <Footer />
            </>} />
            {/* <Route exact path='/'>
                
            </Route> */}
            <Route exact path='/personalproject' element={<NewApp />} />
        </Routes>
    )
}
/*
const App = () => {
    return (
        <main>
            <ScrollToTop />
            <Socialicons />
            <Header />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}*/

export default App;
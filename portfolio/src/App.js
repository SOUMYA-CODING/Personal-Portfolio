import React from 'react'

import "./style/style.scss"
import "./style/responsive-style.scss"

import Socialicons from './components/Socialicons'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <main>
            <Socialicons />
            <Header />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
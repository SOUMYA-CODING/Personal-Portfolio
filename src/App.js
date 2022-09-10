import React from 'react';
import { Header_1, Header_2, Home, About, Skill, Project, Contact, Socialicons, ScrollToTop, Footer } from './components';
import { Project_1, Project_2 } from './detailedProject';
import AutoScroll from './AutoScroll'
import { Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Socialicons />

      <Routes>
        <Route exact path="/" element={<>
          <Header_1 />
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
        </>} />
        <Route exact path='/p1' element={<>
          <Header_2 />
          <Project_1 />
          <AutoScroll />
        </>} />
        <Route exact path='/p2' element={<>
          <Header_2 />
          <Project_2 />
          <AutoScroll />
        </>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

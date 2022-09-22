import React from 'react';
import { Header_1, Header_2, Home, About, Skill, Project, Contact, Socialicons, ScrollToTop, Footer, Error } from './components';
import { Project_1, Project_2, Project_3, Project_4 } from './detailedProject';
import AutoScroll from './AutoScroll'
import { Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<>
          <ScrollToTop />
          <Socialicons />
          <Header_1 />
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </>} />
        <Route exact path='/p1' element={<>
          <ScrollToTop />
          <Socialicons />
          <Header_2 />
          <Project_1 />
          <AutoScroll />
          <Footer />
        </>} />
        <Route exact path='/p2' element={<>
          <ScrollToTop />
          <Socialicons />
          <Header_2 />
          <Project_2 />
          <AutoScroll />
          <Footer />
        </>} />
        <Route exact path='/p3' element={<>
          <ScrollToTop />
          <Socialicons />
          <Header_2 />
          <Project_3 />
          <AutoScroll />
          <Footer />
        </>} />
        <Route exact path='/p4' element={<>
          <ScrollToTop />
          <Socialicons />
          <Header_2 />
          <Project_4 />
          <AutoScroll />
          <Footer />
        </>} />
        <Route exact path='/error_404' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

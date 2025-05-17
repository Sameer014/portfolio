import React from 'react';
import Header from "./components/Header";
import Hero from './screens/Hero';
import Skills from './screens/Skill';
import Projects from './screens/Project';
import Education from './screens/Education';
import Contact from './screens/Contact';
import Footer from './components/Footer/Footer';
import ScrollTop from './screens/ScrollTop';


const App = () => {
  return (
   <div>
     <Header />
     <Hero />
     <Skills />
     <Projects />
     <Education />
     <Contact />
     <ScrollTop />
     <Footer />
    
   </div>
  );
}

export default App;
import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import ContactMe from '../../components/ContactMe';
import Footer from '../../components/Footer';

const Home = () => {

 const [isOpen, setIsOpen] = useState(false);
 
 const toggle = () => {
  setIsOpen(!isOpen);
 }
  
 return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <AboutMe />
    <Skills />
    <Projects />
    <ContactMe />
    <Footer />
   </>
 );
  
}

export default Home;

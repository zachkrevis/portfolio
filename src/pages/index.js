import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/';
import Navbar from '../components/Navbar/';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import CourseWork from '../components/CourseWorks';

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
    <CourseWork />
   </>
 );
  
}

export default Home;

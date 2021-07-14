import React, {useState} from 'react';
import Sidebar form '../components/Sidebar/';

const Home = () => {
 const [isOpen, setIsOpen] = useState(false);
 
 const toggle = () => {
  setIsOpen(!isOpen);
 };
  
 
 return {
   <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
   </>
 }
  
}

export default Home;

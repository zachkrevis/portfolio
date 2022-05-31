import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './skills_style.scss';
import {FaJava, FaPython, FaCode, FaJsSquare, FaReact, FaSass, FaNodeJs, FaDatabase, FaLaptopCode, FaLightbulb} from 'react-icons/fa';
import {MdWeb} from 'react-icons/md';
import {IoHardwareChip} from 'react-icons/io5'
import {TiFlowMerge} from 'react-icons/ti'
import {TbVectorTriangle} from 'react-icons/tb'
import {BsJoystick} from 'react-icons/bs'

AOS.init(
    {once: true}
);

const Skills = () => {

    return (
        <div className='Skills'>

            <svg width="1em" height="1em">
                <linearGradient id="main" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#fc466b" offset="0%" />
                    <stop stopColor="#3f5efb" offset="100%" />
                </linearGradient>
            </svg>
            <div className='Block'>
                <div className='SkillUnderline'>
                    <h1 className='CourseH1'>Skills</h1>
                </div>
                <ul className="skillList">
                    <li><FaJava style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>Java</span></li>
                    <li><FaPython style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>Python</span></li>
                    <li><FaCode style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>C++</span></li>
                    <li><FaCode style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>C</span></li>
                    <li><FaCode style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>C#</span></li>
                    <li><FaJsSquare style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>JavaScript</span></li>
                    <li><FaReact style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>React</span></li>
                    <li><FaSass style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>Sass</span></li>
                    <li><FaNodeJs style= {{ fill: "url(#main)" }} className='SkillIcon'/> <span>NodeJS</span></li>
                </ul>
            </div>
            <div className='Block'>
                <div className='SkillUnderline'>
                    <h1 className='CourseH1'>Relavent Coursework</h1>
                </div>
                <ul className="skillList">
                    <li><TiFlowMerge style= {{ fill: "url(#main)" }} className='SkillIcon'/> Data Structures and Algorithms</li>
                    <li><FaLaptopCode style= {{ fill: "url(#main)" }} className='SkillIcon'/> Intermediate Programming</li>
                    <li><IoHardwareChip style= {{ fill: "url(#main)" }} className='SkillIcon'/> Computer Organization and Design</li>
                    <li><FaDatabase style= {{ fill: "url(#main)" }} className='SkillIcon'/> Database Management Systems</li>
                    <li><MdWeb style= {{ fill: "url(#main)" }} className='SkillIcon'/> Web Development and Design</li>
                    <li><TbVectorTriangle style= {{ stroke: "url(#main)" }} className='SkillIcon'/> OOP with Web-Based Application</li>
                    <li><FaLightbulb style= {{ fill: "url(#main)" }} className='SkillIcon'/> Digital Design: Theory and Practice</li>
                    <li><BsJoystick style= {{ fill: "url(#main)" }} className='SkillIcon'/> Intro to Building Computer Games</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills

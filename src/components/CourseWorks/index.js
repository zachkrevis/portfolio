import React from 'react'
import { CourseContainer, CourseH1, CourseP, CourseColumnContent, CourseContent, CourseColumn, CourseArt } from './CourseElements'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Photo from '../../Photos/Notepad.png'

AOS.init();

const CourseWork = () => {
    return (
        <CourseContainer id="CourseWork">
            <CourseContent>
                <CourseColumn data-aos="fade-up" data-aos-duration="800" data-aos-easing="cubic-bezier(1, 0, 0, 1)" data-aos-once="true">
                    <CourseColumnContent>
                        <CourseArt src={Photo} alt="" draggable="false"/>
                    </CourseColumnContent>
                    <CourseColumnContent>
                        <CourseH1>Relevant Coursework</CourseH1>
                    </CourseColumnContent>
                    <CourseColumnContent>
                        <CourseP>
                        Data Structures and Algorithms <br/>
                        Intermediate Programming <br/>
                        Computer Organization and Design <br/>
                        Database Management Systems <br/>
                        Digital Design: Theory and Practice <br/>
                        Object Oriented Programming with Web-Based Applications <br/>
                        Introduction to Systems Programming  <br />
                        </CourseP>
                    </CourseColumnContent>
                </CourseColumn>
                <CourseColumn  data-aos="fade-up" data-aos-duration="800" data-aos-easing="cubic-bezier(1, 0, 0, 1)" data-aos-delay="250" data-aos-once="true">
                    <CourseP>
                    o Data Structures and Algorithms <br/>
                    o Intermediate Programming <br/>
                    o Computer Organization and Design <br/>
                    o Database Management Systems <br/>
                    o Digital Design: Theory and Practice <br/>
                    o Object Oriented Programming with Web-Based Applications <br/>
                    o Introduction to Systems Programming  <br />
                    </CourseP>
                </CourseColumn>
                <CourseColumn  data-aos="fade-up" data-aos-duration="800" data-aos-easing="cubic-bezier(1, 0, 0, 1)" data-aos-delay="500" data-aos-once="true"> 
                
                </CourseColumn>
            </CourseContent>
        </CourseContainer>
    )
}

export default CourseWork

import React from 'react'
import './about_style.scss';

const AboutMe = () => {
    return (
        <div className='AboutContainer'>
            <div className='underline'>
                <h1 className='AboutH1'>About Me</h1>
            </div>
            <ul className='AboutContent'>
                <div className='AboutSection'>
                    <div className='AboutArt'/>
                </div>
                <div className='AboutSection'>
                    <div className='AboutText'>
                        <p className='AboutP'>
                        Computer Science student looking to gain work experience in an internship. I specialize in object-oriented programming with many of the most widely-used programming languages, such as Java, Python, C++, and C.
                        </p>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default AboutMe

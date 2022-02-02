import React from 'react'
import { AboutContainer, AboutH1, AboutP, AboutSection, AboutText, AboutContent, AboutArt } from './AboutElements'
import Photo from '../../Photos/Responsive.png'

const AboutMe = () => {
    return (
        <AboutContainer id="AboutMe">
            <AboutContent>
                <AboutSection>
                    <AboutArt src={Photo} alt="" draggable="false"/>
                </AboutSection>
                <AboutSection>
                    <AboutText>
                        <AboutH1>About Me</AboutH1>
                        <AboutP>
                        Computer Science student looking to gain work experience in an internship. I specialize in object-oriented programming with many of the most widely-used programming languages, such as Java, Python, C++, and C.
                        </AboutP>
                    </AboutText>
                </AboutSection>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutMe

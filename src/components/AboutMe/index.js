import React from 'react'
import './about_style.scss';

const AboutMe = () => {
    return (
        <div className='AboutContainer'>
            <ul className='AboutContent'>
                <div className='AboutSection'>
                    <div className='AboutArt'/>
                </div>
                <div className='AboutSection'>
                    <div className='AboutText'>

                        <div className='underline'>
                            <h1 className='AboutH1'>About Me</h1>
                        </div>
                        <p className='AboutP'>
                            Hi! My name is Zach Krevis and I am a Senior at Penn State University. I grew up in a very small
                            town in Pennsylvania where I remember having to share a computer with my sister when we were little kids.
                            Every time I got my turn on the computer, I was always trying to find new and interesting things to do with it.
                            <br />
                            <br />
                            As I learned more and more, I started to make things. I started with just the basic programs that I learned in class,
                            but soon it grew into more complex projects, like my <a className="AboutLink" href="https://xs-and-os.netlify.com" target="_blank" rel="noreferrer">Tic Tac Toe Game</a>.
                            
                        </p>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default AboutMe

import React from 'react';
import './projects_style.scss';
import TTT from '../../Photos/TicTacToe Project.png';



const Projects = () => {
    return (
        <>
            <div className="ProjectsContainer">
                <div className="ProjectsUnderline">
                    <h1 className="ProjectsTitle">Projects</h1>
                </div>
                <div className="ProjectsOverlay">
                    <div className="ProjectContent">
                        <h2>Tic-Tac-Toe Game</h2>
                        <p>I made a full-stack project that allows two random people to face off in a game of tic-tac-toe.
                            I made the back-end using socket.io which allows the server to send a receive signals to and from the client.
                            I used these signals to set useStates on the front-end and allow players to see a fully functioning tic-tac-toe game.
                        </p>

                        <span>
                            <a href="https://xs-and-os.netlify.com" target="_blank" rel="noreferrer">Website</a>
                            <a href="https://github.com/zachkrevis/TicTacToe/tree/main/client" target="_blank" rel="noreferrer">Github</a>
                        </span>
                    </div>
                    <img className="ProjectImage" src={TTT} alt='' />
                </div>
            </div>
        </>
    )
};

export default Projects;

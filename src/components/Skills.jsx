import html from '../skills-images/html.png';
import css from '../skills-images/css.png';
import php from '../skills-images/php.png';
import js from '../skills-images/js.png';
import react from '../skills-images/react.png';
import node from '../skills-images/node-js.png';
import express from '../skills-images/express.png';
import mongodb from '../skills-images/mongodb.png';
import firebase from '../skills-images/firebase.png';
import mysql from '../skills-images/mysql.png';
import socket_io from '../skills-images/socket.png';
import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

const text = {
    spanish: {
        title: 'Habilidades',
        text: 'Estas son las tecnologías que utilizo y que más me gustan.'
    },
    english: {
        title: 'Skills',
        text: 'These are the technologies that I use and I like the most.'
    }
}

export const Skills = () => {

    const { language } = useContext(UiContext);

    useEffect(() => {
        Aos.init({ duration: 1500 })
    });

    return (
        <section className="skills" id="skills">
            <div className="skills-cards" data-aos="fade-down">
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ html } />
                    </div>
                    <h3 className="skills-title">HTML</h3>
                </div>
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ css } />
                    </div>
                    <h3 className="skills-title">CSS</h3>
                </div>
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ php } />
                    </div>
                    <h3 className="skills-title">PHP</h3>
                </div>
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ js } />
                    </div>
                    <h3 className="skills-title">JS</h3>
                </div>

                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ react } />
                    </div>
                    <h3 className="skills-title">React</h3>
                </div>
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ node } />
                    </div>
                    <h3 className="skills-title">Node</h3>
                </div>

                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ socket_io } />
                    </div>
                    <h3 className="skills-title">Socket IO</h3>
                </div>

                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ express } />
                    </div>
                    <h3 className="skills-title">Express</h3>
                </div>

                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ mongodb } />
                    </div>
                    <h3 className="skills-title">Mongo DB</h3>
                </div>

                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ firebase } />
                    </div>
                    <h3 className="skills-title">Firebase</h3>
                </div>
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ mysql } />
                    </div>
                    <h3 className="skills-title">MySQL</h3>
                </div>
                <div className="skills-card">
                    <div className="skills-container_img">
                        <img className="skills-img" src={ react } />
                    </div>
                    <h3 className="skills-title">R. Native</h3>
                </div>
            </div>
            <div className="skills-paragraph" data-aos="fade-down">
                <h1 className="experience-title"><span>―</span> {text[language].title}</h1>
                <p className="skills-text">
                    { text[language].text }
                    <br/><br/>    
                </p>
            </div>
        </section>
    )
}
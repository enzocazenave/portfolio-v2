import {useContext, useEffect, useState} from 'react';
import { UiContext } from '../context/UiContext.jsx';
import { getGithubProfile } from '../helpers/getGithubProfile.js';
import { Loader } from './Loader.jsx';

import Aos from 'aos';
import 'aos/dist/aos.css';

const github_url = 'https://github.com/enzocazenave/';

const text = {
    spanish: {
        title: 'Experiencia',
        username: 'Nombre de usuario',
        repositories: 'Repositorios',
        followers: 'Seguidores',
        following: 'Seguidos',
        go_web: 'Ir a web',
        go_repo: 'Ir a repositorio',
        go_frontend: 'Ir a repositorio de frontend',
        go_backend: 'Ir a repositorio de backend',
    },
    english: {
        title: 'Experience',
        username: 'Username',
        repositories: 'Repositories',
        followers: 'Followers',
        following: 'Following',
        go_web: 'Go to web',
        go_repo: 'Go to repository',
        go_frontend: 'Go to frontend repository',
        go_backend: 'Go to backend repository'
    }
}

export const Experience = () => {

    const { language } = useContext(UiContext);
    const [github, setGithub] = useState({})

    useEffect(() => {
        getGithubProfile().then(response => setGithub(response));
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <section className="experience" id="experience">
            <div data-aos="fade-up" className="experience-paragraph" id="experience-identifier">
                <h1 className="experience-title"><span>―</span> { text[language].title }</h1>
                {
                    (language == 'spanish')
                    ?
                        <p className="experience-text">
                            Como mencioné anteriormente, estoy buscando activamente mi primer trabajo con mucho entusiasmo para poder seguir mejorando como desarrollador.
                            Tengo experiencia como freelancer y en proyectos propios. Siempre busco la forma de lograr los objetivos que se me
                            proponen.
                            <br/>
                            <br/>
                            A continuación dejo algunos <span>proyectos</span> desarrollados por mi 😉
                        </p>
                    :
                        <p className="experience-text">
                            As I mentioned earlier, I am actively looking for my first job with a lot of enthusiasm so that I can keep improving as a developer.
                            I have experience as a freelancer and in my own projects. I always look for the way to achieve the goals that are given to me.
                            <br/>
                            <br/>
                            Here are some <span>projects</span> developed by me 😉
                        </p>
                }
            </div>
            <div data-aos="fade-up" className="experience-cards" id="experience-identifier">
                <div className="experience-card">
                    <div className="experience-card-title_">
                        <h1 className="experience-card-title"><span>―</span> Git Hub</h1>
                        <a href={ github_url } target="blank" className="experience-card-button"><i className="fab fa-github"></i></a>
                    </div>
                    <div className="experience-card_github">
                        {
                            (github.username)
                            ? <>
                                <img className="experience-card-img" src={ github.avatar_url } />
                                <div className="experience-card-section">
                                    <span className="experience-card-section_title">{ text[language].username }</span>
                                    <p className="experience-card-section_text">{ github.username }</p>
                                </div>
                                <div className="experience-card-section">
                                    <span className="experience-card-section_title">{ text[language].repositories }</span>
                                    <p className="experience-card-section_text">{ github.repositories }</p>
                                </div>
                                <div className="experience-card-section">
                                    <span className="experience-card-section_title">{ text[language].followers }</span>
                                    <p className="experience-card-section_text">{ github.followers }</p>
                                </div>
                                <div className="experience-card-section">
                                    <span className="experience-card-section_title">{ text[language].following }</span>
                                    <p className="experience-card-section_text">{ github.following }</p>
                                </div>
                            </>
                            : <Loader />
                        }
                    </div>
                </div>
                <div className="experience-card-proyect">
                    <div>
                        <h1 className="experience-proyect-title">todo-panel</h1>
                        <p className="experience-proyect-description">TODO LIST | Application to save things that i have to do.</p>
                    </div>
                    <div>
                        <a className="experience-proyect-anchor" href="https://todoapp-enzo.netlify.app/" target="_blank"><i className="fas fa-link"></i>{ text[language].go_web }</a>
                        <a className="experience-proyect-anchor" href="https://github.com/enzocazenave/todo-panel" target="_blank"><i className="fas fa-link"></i>{ text[language].go_repo }</a>
                    </div>
                </div>
                <div className="experience-card-proyect">
                    <div>
                        <h1 className="experience-proyect-title">twitter</h1>
                        <p className="experience-proyect-description">Clone of Twitter.</p>
                    </div>
                    <div>
                        <a className="experience-proyect-anchor" href="https://github.com/enzocazenave/twitter" target="_blank"><i className="fas fa-link"></i>{ text[language].go_frontend}</a>
                        <a className="experience-proyect-anchor" href="https://github.com/enzocazenave/twitter-api" target="_blank"><i className="fas fa-link"></i>{ text[language].go_backend }</a>
                    </div>
                </div>
                <div className="experience-card-proyect">
                    <div>
                        <h1 className="experience-proyect-title">instagram-frontend</h1>
                        <p className="experience-proyect-description">Clone of instagram.</p>
                    </div>
                    <div>
                        <a className="experience-proyect-anchor" href="https://instagram-enzo.netlify.app/" target="_blank"><i className="fas fa-link"></i>{ text[language].go_web }</a>
                        <a className="experience-proyect-anchor" href="https://github.com/enzocazenave/instagram" target="_blank"><i className="fas fa-link"></i>{ text[language].go_repo }</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';
import '../helpers/menu';
import Aos from 'aos';
import 'aos/dist/aos.css';

const text = {
    spanish: {
        home: 'Inicio',
        about: 'Sobre Mi',
        experience: 'Experiencia',
        skills: 'Habilidades',
        degrees: 'Estudios',
        contact: 'Contáctame'
    },
    english: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        degrees: 'Degrees',
        contact: 'Contact Me'
    }
}

export const Navbar = () => {

    const { openModal, language, setEnglish, setSpanish } = useContext(UiContext);

    useEffect(() => {
        Aos.init({ duration: 1500 });
        
        const language = localStorage.getItem('language');
        
        if (language == 'english') {
            setEnglish();
        } else if (language == 'spanish') {
            setSpanish();
        }
    }, []);

    return (
        <nav className="navbar" data-aos="fade-down">
            <div className="navbar-brand">
                <img className="navbar-logo" src="https://cdn.discordapp.com/attachments/835115175904280636/1031644157489463338/bbbbb.png"/>
                {
                    (language == 'spanish')
                    ? <img className="navbar-language" onClick={ setEnglish } src="https://negricases.com/es/wp-content/uploads/2019/12/idioma-ingles.png" />
                    : <img className="navbar-language" onClick={ setSpanish } src="https://www.sitographics.com/enciclog/banderas/europa/image_2012/Espana.gif" />
                }
            </div>

            <div className="navbar-items">
                <a className="navbar-item SELECTED-navbar-item" id="home-item" href="#home">{ text[language].home }</a>
                <a className="navbar-item" id="about-item" href="#about">{ text[language].about }</a>
                <a className="navbar-item" id="experience-item" href="#experience">{ text[language].experience }</a>
                <a className="navbar-item" id="skills-item" href="#skills">{ text[language].skills }</a>
                <a className="navbar-item" id="degrees-item" href="#degrees">{ text[language].degrees }</a>
            </div>

            <button onClick={ openModal } className="navbar-button">{ text[language].contact }</button>
        </nav>
    )
}

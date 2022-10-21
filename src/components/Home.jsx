import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";
import Aos from 'aos';
import 'aos/dist/aos.css';

const github_url = 'https://github.com/enzocazenave/';
const linkedin_url = 'https://www.linkedin.com/in/enzo-cazenave/';
const instagram_url = 'https://www.instagram.com/chikicazenave_/'

const text = {
    spanish: {
        title: 'SOY UN PROGRAMADOR APASIONADO',
    },
    english: {
        title: 'I AM A PASSIONATE PROGRAMMER'
    }
}

export const Home = () => {

    const { language } = useContext(UiContext);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <section className="home fadeIn" id="home">
            <div data-aos="fade-down" className="home-text" id="home-identifier">
                <h1 className="home-title">ENZO CAZENAVE</h1>
                <p className="home-description">{ text[language].title }</p>   
            </div>

            <div data-aos="fade-up" className="home-social" id="home-identifier">
                <a className="home-anchor" href={ github_url } target="blank"><i className="fab fa-github"></i></a>
                <a className="home-anchor" href={ linkedin_url } target="blank"><i className="fab fa-linkedin"></i></a>
                <a className="home-anchor" href={ instagram_url } target="blank"><i className="fab fa-instagram"></i></a>
            </div>
        </section>
    )
}

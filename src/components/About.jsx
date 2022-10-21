import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";
import Aos from 'aos';
import 'aos/dist/aos.css';

const background_url = 'https://cdn.discordapp.com/attachments/1008885821027405958/1030318891571884082/Captura.PNG';

const text = {
    spanish: {
        title: 'Sobre Mi',
        name: 'Nombre',
        location: 'Ubicación',
        telephone: 'Teléfono',
        mail: 'Correo electrónico',
        download: 'Descargar CV'
    },
    english: {
        title: 'About Me',
        name: 'Name',
        location: 'Location',
        telephone: 'Phone',
        mail: 'E-Mail',
        download: 'Download CV'
    }
}

export const About = () => {

    const { language } = useContext(UiContext);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []); 

    return (
        <section className="about" id="about">
            <div data-aos="fade-down" className="about-frame" id="about-identifier">
                <img className="about-image" src={ background_url } />
            </div>

            <div data-aos="fade-down" className="about-me" id="about-identifier">
                <h1 className="about-title"><span>―</span> { text[language].title }</h1>
                
                {
                    (language == 'spanish')
                    ?
                        <p className="about-description">
                            Mi nombre es Enzo Cazenave.<br/> Soy desarrollador <span style={{ color: 'var(--orange)' }}>Full Stack</span> nacido en Quilmes, <span style={{ color: 'var(--orange)' }}>Argentina</span>, y me describo como pasional en la programación porqué
                            realmente me gusta y me divierte lo que hago. Por eso, es que estoy buscando activamente mi primer experiencia laboral profesional. <br/>Me encanta aprender
                            y estar capacitándome constantemente.
                            <br/><br/>
                            Comencé en la programación a mediados de <span style={{ color: 'var(--orange)' }}>2019</span>, gracias a mi ambición de desarrollar un servidor de un juego denominado FiveM.
                            La única cosa positiva que puedo destacar de la pandemia (COVID-19), es que la misma fomentó mucho mi aprendizaje en el área.
                        </p>
                    : 
                        <p className="about-description">
                            My name is Enzo Cazenave.<br/> I'm a <span style={{ color: 'var(--orange)' }}>Full Stack</span> developer born in Quilmes, <span style={{ color: 'var(--orange)' }}>Argentina</span>, and I describe myself as passionate about programming
                            because I really like and enjoy what I do. That is why I am currently looking for my first professional work experience. <br/>I love to learn
                            and be constantly training.
                            <br/><br/>
                            I started programming in the middle of <span style={{ color: 'var(--orange)' }}>2019</span>, thanks to my ambition to develop a game server called FiveM.
                            The only positive thing I can highlight about the pandemic (COVID-19), is that it greatly encouraged my learning in the area.
                        </p>
                }
                
                <div className="about-information">
                    <div className="about-info">
                        <span className="about-info_title">{ text[language].name }</span>
                        <p className="about-info_text">Enzo Cazenave</p>
                    </div>
                    <div className="about-info">
                        <span className="about-info_title">{ text[language].location }</span>
                        <p className="about-info_text">Quilmes, Argentina.</p>
                    </div>
                    <div className="about-info">
                        <span className="about-info_title">{ text[language].telephone }</span>
                        <p className="about-info_text">+54 9 11 4528 0608</p>
                    </div>
                    <div className="about-info">
                        <span className="about-info_title">{ text[language].mail }</span>
                        <p className="about-info_text">encaze@hotmail.com</p>
                    </div>
                </div>

                <a href="https://cdn.discordapp.com/attachments/1008885821027405958/1031083809841623050/enzo-cazenave.pdf" target="__blank" className="about-button">
                    <i className="fas fa-download"></i>
                    { text[language].download }
                </a>
            </div>
        </section>
    )
}

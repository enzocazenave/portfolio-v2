import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";
import { Footer } from "./Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

const uade = 'https://www.uade.edu.ar/media/1jwdrtbj/uade_una_gran_universidad.png';
const udemy = 'https://s.udemycdn.com/meta/default-meta-image-v2.png';

const text = {
    spanish: {
        title: 'Estudios y cursos',
        degree: 'Ingeniería en informática',
        react: 'React: De cero a experto',
        socket: 'React: Aplicaciones en tiempo real con Socket-io',
        native: 'React Native: Aplicaciones nativas para IOS y Android'
    },
    english: {
        title: 'Studies and courses',
        degree: 'Computer Engineering',
        react: 'React: From zero to expert',
        socket: 'React: Real time applications with Socket-io',
        native: 'React Native: Native apps for IOS and Android'
    }
}

export const Degrees = () => {

    const { language } = useContext(UiContext);

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className="degrees" id="degrees">
            <div>
                <h1 data-aos="fade-up" className="experience-title"><span>―</span> {text[language].title}</h1>
                <div data-aos="fade-up" className="degrees-degree">
                    <img className="degrees-image" src={ uade } />
                    <h2 className="degrees-title">{ text[language].degree }</h2>
                    {
                        (language == 'spanish') 
                        ?
                            <p className="degrees-explain">
                                Cursando segundo cuatrimestre del primer año de Ingeniería en informática en
                                la <span>UADE</span> (Universidad Argentina de la Empresa)
                            </p>
                        : 
                            <p className="degrees-explain">
                                
                                Studying the second semester of the first year of Computer Engineering
                                at <span>UADE</span> (Universidad Argentina de la Empresa)
                            </p>
                    }
                </div>
                <div data-aos="fade-up" className="degrees-degree">
                    <img className="degrees-image" src={ udemy } />
                    <h2 className="degrees-title">{ text[language].react }</h2>
                    {
                        (language == 'spanish') 
                        ?
                            <p className="degrees-explain">
                                Finalicé un curso de <span>React</span> en la plataforma online de aprendizaje <span>Udemy</span>
                            </p>
                        : 
                            <p className="degrees-explain">
                                
                                I finished the <span>React</span> course on the online learning platform <span>Udemy</span>.
                            </p>
                    }
                </div>
                <div data-aos="fade-up" className="degrees-degree">
                    <img className="degrees-image" src={ udemy } />
                    <h2 className="degrees-title">{ text[language].socket }</h2>
                    {
                        (language == 'spanish') 
                        ?
                            <p className="degrees-explain">
                                Finalicé un curso de <span>Socket-IO</span> en la plataforma online de aprendizaje <span>Udemy</span>
                            </p>
                        : 
                            <p className="degrees-explain">
                                
                                I finished the <span>Socket-IO</span> course on the online learning platform <span>Udemy</span>.
                            </p>
                    }
                </div>
                <div data-aos="fade-up" className="degrees-degree">
                    <img className="degrees-image" src={ udemy } />
                    <h2 className="degrees-title">{ text[language].native }</h2>
                    {
                        (language == 'spanish') 
                        ?
                            <p className="degrees-explain">
                                Estoy realizando un curso de <span>React Native</span> en la plataforma online de aprendizaje <span>Udemy</span>
                            </p>
                        : 
                            <p className="degrees-explain">
                                
                                I'm doing a <span>React Native</span> course on the online learning platform <span>Udemy</span>.
                            </p>
                    }
                </div>
            </div>
            <Footer />
        </section>
    )
}

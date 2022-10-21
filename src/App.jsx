import { Navbar, Home, About, Experience, Loader, Skills, Degrees, ContactModal } from './components';
import {useContext, useEffect, useState} from 'react';
import { UiContext } from './context/UiContext';


export const App = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const interval = setInterval(() => {
            if (document.readyState === "complete") {
                setLoading(false);
                clearInterval(interval);
            }
        }, 150);
    }, []);

    return (
        <>
            {
                (loading)
                ? <Loader position={ 'absolute' } />
                : <>
                    {
                        <>
                            <Navbar />
                            <Home />
                            <About />
                            <Experience />
                            <Skills />
                            <Degrees />
                            <ContactModal/>
                        </>
                    }
                </>
            }
        </>
    )
}

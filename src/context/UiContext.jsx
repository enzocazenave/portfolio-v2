import { createContext, useState } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState('spanish');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const setSpanish = () => {
        setLanguage('spanish');
        localStorage.setItem('language', 'spanish');
    };

    const setEnglish = () => {
        setLanguage('english');
        localStorage.setItem('language', 'english');
    };;

    return (
        <UiContext.Provider
            value={{
                isModalOpen,
                closeModal,
                openModal,
                setEnglish,
                setSpanish,
                language,
            }}
        >
            { children }
        </UiContext.Provider>
    )
}
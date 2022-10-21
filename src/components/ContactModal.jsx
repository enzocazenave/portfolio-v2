import { useContext } from 'react';
import Modal from 'react-modal';
import { UiContext } from '../context/UiContext';

const modalStyle = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
}

Modal.setAppElement('#root');

const text = {
    spanish: {
        title: '¿Quieres contactarme?',
        close: 'Cerrar',
    },
    english: {
        title: 'Do you want to contact me?',
        close: 'Close'
    }
}

export const ContactModal = () => {

    const { isModalOpen, closeModal, language } = useContext(UiContext);

    return (
        <Modal
            isOpen={ isModalOpen }
            onRequestClose={ closeModal }
            shouldCloseOnOverlayClick={ true }
            style={ modalStyle }
            className="modal"
            overlayClassName="modal-background"
            closeTimeoutMS={ 200 }
        >
            <h1 className="contact-title">{ text[language].title }</h1>
            
            <a className="contact" href="https://www.linkedin.com/in/enzo-cazenave/" target="__blank">
                <i className="fab fa-linkedin" id="linkedin"></i>
                <p>enzocazenave</p>
            </a>

            <a className="contact" href="mailto:encaze@hotmail.com" target="__blank">
                <i className="fa fa-envelope" id="mail"></i>
                <p>encaze@hotmail.com</p>
            </a>

            <a className="contact">
                <i className="fab fa-whatsapp" id="telephone"></i>
                <p>+54 9 11 4528 0608</p>
            </a>

            <button className="contact-button" type="text" onClick={ closeModal }>{text[language].close}</button>
        </Modal>
    )
}
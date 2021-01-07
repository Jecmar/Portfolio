import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'

export default function CardP({ icon, title, description, text, link }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            textAlign: 'center',
            borderRadius: '10px'
        }
    };

    return (
        <Fragment>
            <div className='card'>
                <img className='img-fluid' src={icon} alt="" />
                <div className='card-body'>
                    <h5 className='card-title title-color'>{title}</h5>
                    <h6 className='card-title'>{text}</h6>
                    <a rel='noreferer' target='_blank' href={link}>{link}</a><br />
                    <button className="btn btn-primary" onClick={setModalIsOpenToTrue}>Ver más</button>
                </div>
            </div>

            <Modal className='card' isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                <p className='buton' onClick={setModalIsOpenToFalse}>x</p>
                <div>
                    <div className='card-body modales'>
                        <h5 className='card-title title-color'>{title}</h5>
                        <p className='card-text'>{description}</p>
                    </div>
                </div>
            </Modal>

        </Fragment>
    )
}
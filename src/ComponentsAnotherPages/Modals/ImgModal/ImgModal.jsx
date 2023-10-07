import React from 'react'
import { Modal } from 'react-bootstrap'
import style from './imgModal.module.scss';

export const ImgModal = ({ show, onHide, children }) => {

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={style.modalContent}
        >
            <div className={style.imgModal}>
                {children}
            </div>
        </Modal>
    )
}

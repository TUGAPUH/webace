import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteMsg } from '../../../Store/MainSlice/MainSlice';

export const DeleteMessageModal = ({ show, onHide, messageRefDelete }) => {

    const dispatch = useDispatch();

    const messageDelete = () => {
        dispatch(deleteMsg(messageRefDelete));
        onHide();
    }

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete message</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you're ready to delete this message?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    No
                </Button>
                <Button variant="success" onClick={messageDelete}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

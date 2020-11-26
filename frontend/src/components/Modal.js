import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../context/modalContext";
import './Modal.css';

const Modal = () => {
    let { modalContent, isModal } = useContext(ModalContext);
    if (isModal) {
        return createPortal(
            <div className="modal">
                { modalContent }
            </div>,
            document.querySelector("#modal-root")
        );
    } else return null;
};

export default Modal;

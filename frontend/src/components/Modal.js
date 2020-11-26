import React, {useContext, useRef} from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../context/modalContext";
import './Modal.css';

const Modal = () => {
    let { modalContent, handleModal, isModal } = useContext(ModalContext);
    const wrapperRef = useRef(null);

    const handleClickOutside = e => {
        if (wrapperRef.current && (wrapperRef.current === e.target)) {
            handleModal('');
        }
    };

    if (isModal) {
        return createPortal(
            <div className="modal" ref={wrapperRef} onClick={handleClickOutside}>
                { modalContent }
            </div>,
            document.querySelector("#modal-root")
        );
    } else return null;
};

export default Modal;

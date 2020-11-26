import React, { createContext } from "react";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";


let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
    let { isModal, handleModal, modalContent } = useModal();
    return (
        <Provider value={{ isModal, handleModal, modalContent }}>
            <Modal />
            {children}
        </Provider>
    );
};

export { ModalContext, ModalProvider };

// custom React Hook for Modal window

import React, { useState } from "react";

export default () => {
    // switch to open modal window
    let [isModal, setIsModal] = useState(false);
    // content of modal window (html/jsx string)
    let [modalContent, setModalContent] = useState('');

    let handleModal = (content = false) => {
        setIsModal(!isModal);
        if (content) {
            setModalContent(content);
        }
    };
    return { isModal, handleModal, modalContent };
};

import React, { useRef } from 'react';
import PlusIcon from "../icons/PlusIcon";

const PhotoLoader = (props) => {
    const { imgRef, onFileLoad } = props;
    const fileRef = useRef(null);
    const handleFileUpload = (event) => {
        event.preventDefault();
        const files = fileRef.current.files;
        if (!files.length) {
            return alert("Please choose a file to upload first.");
        }
        const file = event.target.files[0];
        if (imgRef.current) {
            imgRef.current.src = URL.createObjectURL(file);
            const filename = file.name;

            // Note that cropper converts files to png

            onFileLoad({
                thumbnail: filename.substr(0, filename.lastIndexOf(".")) + "_thb.png", // cropper outputs image as png
                standard: filename.substr(0, filename.lastIndexOf(".")) + ".png",
            });
        }
    }
    // when called, triggers fileInput click function
    const triggerInputFile = () => {
        if (fileRef.current && fileRef.current.click) {
            fileRef.current.click()
        }
    }
    return (
        <>
            <input ref={fileRef} hidden type="file" accept="image/*" onChange={handleFileUpload} />
            <button className="btn btn-icon-circle btn-secondary" type="button" onClick={triggerInputFile}>
                <PlusIcon
                    width={'1.2rem'}
                    height={'1.2rem'}
                    className={'create-category'}
                />
            </button>
        </>
    );
}

export default PhotoLoader;

import React, {useRef, useState} from 'react';
import PlusIcon from "../icons/PlusIcon";
import Cropper from "cropperjs";

import AWS_WRAPPER from '../services/AWS_WRAPPER';
const { AWS, S3 } = AWS_WRAPPER;

const ALBUM_NAME = process.env.REACT_APP_ALBUM_NAME;
const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;

const toS3Bucket = async (file) => {
    const fileName = file.name;
    const albumPhotosKey = encodeURIComponent(ALBUM_NAME) + "/";

    const photoKey = albumPhotosKey + fileName;

    // Use S3 ManagedUpload class as it supports multipart uploads
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: BUCKET_NAME,
            Key: photoKey,
            Body: file,
            ACL: "public-read"
        }
    });
    return upload.promise();
};

export const deleteImage = (photoKey) => {
    S3.deleteObject({ Key: photoKey }, function (err, data) {
        if (err) {
            return alert("There was an error deleting your photo: ", err.message);
        }
        alert("Successfully deleted photo.");
    });
};

export const saveImage = (imgRef, filenames) => {
    const { thumbnail, standard } = filenames;
    if (imgRef.current) {
        const cropper = new Cropper(imgRef.current, {
            zoomable: false,
            scalable: true,
            autoCropArea: 1,
            aspectRatio: 1,
            movable: false,
            autoCrop: true,
            ready: () => {
                // save thumbnail
                cropper.getCroppedCanvas({
                    width: 240,
                    height: 240,
                    imageSmoothingEnabled: false,
                    imageSmoothingQuality: 'high',
                }).toBlob((blob) => {

                    const file = new File([blob], thumbnail);
                    toS3Bucket(file);

                }/*, 'image/png' */);
                // save large image
                cropper.getCroppedCanvas({
                    width: 520,
                    height: 520,
                    imageSmoothingEnabled: false,
                    imageSmoothingQuality: 'high',
                }).toBlob((blob) => {
                    const file = new File([blob], standard);
                    toS3Bucket(file);

                }/*, 'image/png' */);
            }
        })
    }
}


export const PhotoLoader = (props) => {
    const fileRef = useRef(null);
    const handleFileUpload = (event) => {
        event.preventDefault();
        const files = fileRef.current.files;
        if (!files.length) {
            return alert("Please choose a file to upload first.");
        }
        const { imgRef, onFileLoad } = props;
        const file = event.target.files[0];
        if (imgRef.current) {
            imgRef.current.src = URL.createObjectURL(file);
            const filename = file.name;

            onFileLoad({
                thumbnail: filename.substr(0, filename.lastIndexOf(".")) + "_thb.png",
                standard: filename.substr(0, filename.lastIndexOf(".")) + ".png"
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

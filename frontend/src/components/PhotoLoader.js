import React, {useRef, useState} from 'react';
import './PhotoLoader.css';
import PlusIcon from "../icons/PlusIcon";

import AWS_WRAPPER from '../services/AWS_WRAPPER';
import ConfigAWS from "../ConfigAWS";
const { AWS } = AWS_WRAPPER;
const {
    BUCKET_NAME,
    ALBUM_NAME,
} = ConfigAWS;

function PhotoLoader(props) {
    const fileRef = useRef(null);

    const handleFileUpload = (e) => {
        e.preventDefault();
        const files = fileRef.current.files;
        if (!files.length) {
            return alert("Please choose a file to upload first.");
        }
        const file = files[0];
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

        const promise = upload.promise();

        promise.then(
            function(data) {
                alert("Successfully uploaded photo.");
            },
            function(err) {
                return alert("There was an error uploading your photo: ", err);
            }
        );
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
            <button className="photo-loader-btn" type="button" onClick={triggerInputFile}>
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


import React, {useRef, useState} from 'react';
import './PhotoLoader.css';
import PlusIcon from "../icons/PlusIcon";

import AWS_WRAPPER from '../services/AWS_WRAPPER';
const { AWS, S3 } = AWS_WRAPPER;

const ALBUM_NAME = process.env.REACT_APP_ALBUM_NAME;
const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;

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

        const deletePhoto = (photoKey) => {
            S3.deleteObject({ Key: photoKey }, function(err, data) {
                if (err) {
                    return alert("There was an error deleting your photo: ", err.message);
                }
                alert("Successfully deleted photo.");
            });
        }

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


import AWS_WRAPPER from './AWS_WRAPPER';
import cropperWrap from "./cropperWrap";


const { AWS } = AWS_WRAPPER;

const ALBUM_NAME = process.env.REACT_APP_ALBUM_NAME;
const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;

const toS3Bucket = async (file) => {
    const fileName = file.name;
    const albumPhotosKey = encodeURIComponent(ALBUM_NAME) + "/";

    const photoKey = albumPhotosKey + fileName;

    // Use S3 ManagedUpload class as it supports multipart uploads
    // ContentType must be included for proper image upload. Use 'image/png' which is the
    // output of cropper image resizer.
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: BUCKET_NAME,
            Key: photoKey,
            Body: file,
            ACL: "public-read",
            ContentType: 'image/png' // cropper outputs image as png
        }
    });
    return upload.promise();
};

const saveImage = async (imgRef, filenames) => {
    // resizes and saves the image

    const { thumbnail, standard } = filenames;

    const { thbBlob, standardBlob } = await cropperWrap(imgRef);

    console.log('thbBlob', thbBlob)

    const thbFile = new File([thbBlob], thumbnail);
    const thbResponse = await toS3Bucket(thbFile);

    const standardFile = new File([standardBlob], standard);
    const standardResponse = await toS3Bucket(standardFile);

    return { thbResponse, standardResponse }
}

export default saveImage;

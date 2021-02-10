import Cropper from "cropperjs";

// converts cropper to promise

const cropperWrapper = async (imgRef) => {

    console.log('imgcur', imgRef.current)
    return new Promise ((resolve, reject) => {
        try {
            const cropper = new Cropper(imgRef.current, {
                zoomable: false,
                scalable: true,
                autoCropArea: 1,
                aspectRatio: 1,
                movable: false,
                autoCrop: true,
                ready: () => {
                    cropper.getCroppedCanvas({
                        width: 240,
                        height: 240,
                        imageSmoothingEnabled: false,
                        imageSmoothingQuality: 'high',
                    }).toBlob(
                        (thbBlob) => {
                            cropper.getCroppedCanvas({
                                width: 520,
                                height: 520,
                                imageSmoothingEnabled: false,
                                imageSmoothingQuality: 'high',
                            }).toBlob( (standardBlob) => {
                                resolve({ thbBlob, standardBlob});
                            });
                        });
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

export default cropperWrapper;

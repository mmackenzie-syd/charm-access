import React from "react";
import Axios from "axios";

function Upload() {

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        try {
            const resp = await Axios.post(
                'https://dicqzfdcrf.execute-api.ap-southeast-2.amazonaws.com/dev',
                bodyFormData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-da' + 'ta',
                        Authorization: '',
                }
            });

            console.log('res', resp)
        } catch(error) {
        }
    }
    return (
            <div>
                <label  htmlFor="imageFile">Image File</label>
                <input
                    type="file"
                    id="imageFile"
                    label="Choose Image"
                    onChange={uploadFileHandler}
                />
            </div>
    );
}

export default Upload;

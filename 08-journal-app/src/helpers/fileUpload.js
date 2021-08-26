export const fileUpload = async (file) => {
    //upload file to cloudinary and return url
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'react-journal');
    const res = await fetch(
        'https://api.cloudinary.com/v1_1/djv0cypxw/upload',
        {
            method: 'POST',
            body: formData,
        }
    );
    const fileData = await res.json();
    return fileData.url;
};

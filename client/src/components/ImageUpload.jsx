import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

export default function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleUpload = async () => {
        try {
            if (selectedFile) {
                const formData = new FormData();
                formData.append('image', selectedFile);

                const response = await axios.post('http://localhost:5000/upload', formData);

                alert('Upload successful:', response.data);
            } else {
                console.log('No file selected');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    return (
        <div className='  rounded-lg flex border-2 border-gray-400 p-2 md:p-10 xl:mx-40 flex-col gap-1'>
            <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                <p className='  text-white underline'>Drag & drop an image here, or click to select one</p>
            </div>

            {selectedFile && (
                <div>
                    <p className='mb-4'>Selected file: {selectedFile.name}</p>
                    <img src={previewUrl} alt="Preview" className=' w-full' />
                    <button className=' border rounded-lg px-3 py-2 mt-4' onClick={handleUpload}>Upload</button>
                </div>
            )}
        </div>
    );
};



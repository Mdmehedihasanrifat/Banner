import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      onImageUpload(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    onImageUpload(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div style={dropzoneContainerStyles} className='mt-6'>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {image ? (
          <div>
            <button onClick={removeImage} style={closeButtonStyles}>
              Close
            </button>
            <img src={image} alt="Uploaded" style={imageStyles} />
          </div>
        ) : (
          <p className='text-black'>Drag & drop an image here, or click to select one</p>
        )}
      </div>
    </div>
  );
};

const dropzoneContainerStyles = {
  textAlign: 'center',
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '10px',
  textAlign: 'center',
  cursor: 'pointer',
};

const imageStyles = {
  maxWidth: '100%',
  maxHeight: '200px',
  marginTop: '10px',
};

const closeButtonStyles = {
  backgroundColor: '#fff',
  color: '#333',
  border: '1px solid #333',
  padding: '5px 10px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default ImageUploader;

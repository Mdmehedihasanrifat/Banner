import React, { useState } from 'react';
import ImageUploader from '../src/components/imageUploader/imageUploader';
import Image from '../src/components/Image/Image';
import Header from './components/Header';
import img from '../src/assets/happy_new_year_banner_full_frame-6344e8ff.png';
import img1 from '../src/assets/Black_and_Orange.png';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);


  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };


  return (
    <div style={appStyles} className='image'>
      <Header></Header>

      <div className='flex container mx-auto'>
      <div className='flex-1 ml-20'>
        <Image id="bannerDownload" image={uploadedImage} bgImg={img} top="42%" width="192px" height="192px"/>
      </div>
      <div className='flex-1'>
        <Image id="bannerDownload1" image={uploadedImage} bgImg={img1} borderRadius="50%" top="15%" width="300px" height="300px"/>
      </div>
     </div>
      <ImageUploader onImageUpload={handleImageUpload} />
    </div>
   
  );
}

const appStyles = {
  textAlign: 'center',
  margin: '40px',
};

export default App;

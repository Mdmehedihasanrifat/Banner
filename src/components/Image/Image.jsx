import React from 'react';
import html2canvas from 'html2canvas';
import '../Image/Image.css'

function Image({ image, bgImg, borderRadius, top, width, id,height}) {
  const handleDownload = async () => {
    const downloadElement = document.getElementById(`${id}`);

    if (downloadElement) {
      // Capture the canvas of the entire bannerDownload element
      const canvas = await html2canvas(downloadElement);

      // Create a download link for the canvas
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'downloaded_image.png';
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Remove the download link from the body
      document.body.removeChild(link);
    }
  };

  const cardStyles = {
    border: '1px solid #cccccc',
    borderRadius: '4px',
    padding: '20px',
    marginTop: '20px',
    height: '560px',
    width: '560px',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyles = {
    position: 'absolute',
    top: `${top}`,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${width}`,
    height:`${height}`,
    borderRadius: `${borderRadius}`,
  };

  return (
    <div className='text-white'>
      <div id={id} style={cardStyles}>
        {image && <img src={image} alt="Card" style={imageStyles} />}
        
      </div>
      <button
          className='btn bg-blue-500 py-2 px-2 mt-4 text-white rounded-lg'
          type='button'
          onClick={handleDownload}
        >
          Download
        </button>
    </div>
  );
}

export default Image;
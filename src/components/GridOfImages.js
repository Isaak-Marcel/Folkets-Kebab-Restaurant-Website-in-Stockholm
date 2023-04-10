import React from 'react';

function GridOfImages({ images }) {
  const showImages = images.map((image) => {
    return <img key={image.alt} src={image.url} alt={image.alt} width={100}  />;
  });

  return (
    <div className="image-grid">
      {showImages}
    </div>
  );
}

export default GridOfImages;

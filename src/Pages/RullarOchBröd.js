import React from 'react';
import Dish from '../components/Dish';

function RullarOchBröd() {
  const breadImages = require.context('../Assets/images/Bröd', true);
  const bread = breadImages.keys().map((imagePath) => ({
    id: imagePath,
    title: imagePath.split('/').pop().split('.')[0].split(/ |-|\d+x\d+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    image: breadImages(imagePath),
  }));
  

  const breadComponents = bread.map((item) => (
    <Dish key={item.id} title={item.title} image={item.image} />
  ));

  return <div className="dish-list">{breadComponents}</div>;
}

export default RullarOchBröd;

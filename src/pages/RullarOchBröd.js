import React from 'react';
import Dish from '../components/Dish';
import { Helmet } from 'react-helmet-async';

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

  return <div className="dish-list">
      <Helmet>
        <title>Rullar och Bröd</title>
        <meta name="description" content="Vi erbjuder inte bara kebab och andra orientaliska rätter, utan också rulla med bröd, såsom pita och libabröd, med fyllningar som kyckling, lamm eller vegetariska rätter."/>
        <link rel="canonical" href="/rullar-och-bröd"/>
      </Helmet>
    {breadComponents}</div>;
}

export default RullarOchBröd;

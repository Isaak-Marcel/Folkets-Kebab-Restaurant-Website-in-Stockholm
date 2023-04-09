import React from 'react'
import Dish from '../components/Dish';
import image1 from '../Assets/images/Tallrikkar/arabi 30x20.jpg'
import falafel from '../Assets/images/Tallrikkar/falafel 30x20.jpg'
import kebab from '../Assets/images/Tallrikkar/Kebab 30x20.jpg'
import kyckling from '../Assets/images/Tallrikkar/Kyckling 30x20.jpg'
import kycklingfile from'../Assets/images/Tallrikkar/kycklingfile 30x20.jpg'
import lammfile from '../Assets/images/Tallrikkar/lammfile 30x20.jpg'
import lammsteak from '../Assets/images/Tallrikkar/Lammstek 30x20.jpg'
import lax from '../Assets/images/Tallrikkar/Lax 30x20.jpg'
import mixGrill from '../Assets/images/Tallrikkar/Mix grill 30x20.jpg'
import mixKebab from '../Assets/images/Tallrikkar/mix kebab o Kyckling 30x20.jpg'
import mixShishKebakOchLamfile from '../Assets/images/Tallrikkar/Mix shish kebab och lammfile 30x20.jpg'
import mixShiskebabochshish from '../Assets/images/Tallrikkar/Mix Shish Kebab och Shish Kyckling 30x20.jpg'
import mixVeg from '../Assets/images/Tallrikkar/Mix Veg 30x20.jpg'
import quzi from '../Assets/images/Tallrikkar/Quzi 30x20.jpg'
import shish from '../Assets/images/Tallrikkar/Shish 30x20.jpg'
import special from '../Assets/images/Tallrikkar/special 30x20.jpg'
const dishes = [
  {
    id: 1,
    title: 'Arabi',
    image: image1,
  },
  {
    id: 2,
    title: 'Falafel',
    image: falafel,
  },
  {
    id: 3,
    title: 'Kebab',
    image: kebab,
  },
  {
    id: 4,
    title: 'Mix kebab & Kyckling',
    image: kyckling,
  },
  {
    id: 5,
    title: 'Kycklingfile',
    image: kycklingfile,
  },
  {
    id: 6,
    title: 'Lammfile',
    image: lammfile,
  },
  {
    id: 7,
    title: 'Lammsteak',
    image: lammsteak,
  },
  {
    id: 8,
    title: 'Lax',
    image: lax,
  },
  {
    id: 9,
    title: 'Mix Grill',
    image: mixGrill,
  },
  {
    id: 10,
    title: 'Mix Kebab',
    image: mixKebab,
  },
  {
    id: 11,
    title: 'Mix Shish Kebak och Lamfile',
    image: mixShishKebakOchLamfile,
  },
  {
    id: 12,
    title: 'Mix Shish Kebab och Shish Kyckling',
    image: mixShiskebabochshish,
  },
  {
    id: 13,
    title: 'Mix Veg',
    image: mixVeg,
  },
  {
    id: 14,
    title: 'Quzi 30x20',
    image: quzi,
  },
  {
    id: 15,
    title: 'Shish',
    image: shish,
  },
  {
    id: 16,
    title: 'Special',
    image: special,
  },
];

function Tallrikar() {

  const dishesComponents = dishes.map((dish) => (
    <Dish key={dish.id} title={dish.title} image={dish.image} />
  ));

  return (
   <div className="dish-list">{dishesComponents}</div>
  )
}

export default Tallrikar
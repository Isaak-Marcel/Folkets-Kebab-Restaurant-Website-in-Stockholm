import React from 'react';

export default function Dish(props) {
  return (
    <div className="dish">
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} height={2362/2} width={3453/2} />
    </div>
  );
}





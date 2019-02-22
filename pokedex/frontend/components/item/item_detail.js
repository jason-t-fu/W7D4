import React from 'react';

const ItemDetail = ({ item }) => (
  <>
    <h4>Name: {item.name}</h4>
    <h4>Price: {item.price}</h4>
    <h4>Happiness: {item.happiness}</h4> 
  </>
)

export default ItemDetail;
import React from 'react';

const GroceryItem = (props) => (
  <div>
  	<div class="singleItem">item: {props.data.description}, quantity: {props.data.quantity}</div>
  </div>
)

export default GroceryItem;
// {id: 1, quantity: 5, description: "frozen pizza"},
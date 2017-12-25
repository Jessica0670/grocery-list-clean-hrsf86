import React from 'react';

const GroceryItem = (props) => (
  <div>
  	<div className="single-item">item: {props.data.description} --------- quantity: {props.data.quantity}</div>
  </div>
)

export default GroceryItem;

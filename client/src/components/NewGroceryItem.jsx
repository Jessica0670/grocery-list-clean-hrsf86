import React from 'react';

const NewGroceryItem = (props) => (
  <div>
  	<div className="new-single-item">item: {props.data.description} --------- quantity: {props.data.quantity}</div>
  </div>
)

export default NewGroceryItem;
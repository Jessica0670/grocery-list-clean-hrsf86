import React from 'react';
import GroceryItem from './GroceryItem.jsx'
// require ./dependecy.js
const GroceryList = (props) => (
	  	<div className="groceries">
	  	{
	  		props.data.groceryList.map(item => {
	  			return <GroceryItem key={item.id} data={item}/>
	  		})
	  	}
	   </div>
)

export default GroceryList;
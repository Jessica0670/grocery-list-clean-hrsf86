import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx'
// require ./dependecy.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [Data.groceryList]
    }
 //set initial state to data
 //handle change to add e.val to state.list
  }

  handleChange(e) {
  	console.log(e.val(), this.state.value)
    let groceryInput = e.val();
    let newGrocItem = {
    	id: this.state.list[0].length + 5,
    	// id: this.state.list[0].length + 1,
    	quantity: this.state.list[0].quantity,
    	description: groceryInput
    };
    this.setState({
    	// list: dataArray.concat(newGrocItem)
    	list: this.state.list[0].push(newGrocItem)
    });
    // console.log('val test', e.val(), 'values',this.state.list[0].length)
    // console.log(this.state.list[0].push(newGrocItem), 'list')

  }

  // click={this.submit.bind(this)} 
  
//   submit(e) {

// console.log(e, 'test')
//     event.preventDefault();
//   }

  render () {
    return (
    	<div>
        	<AddGrocery  
        		value={this.state.value} 
        		onChange={this.handleChange.bind(this)}
        	/>
    		<GroceryList data={Data}/>
    	</div>
    )
  }
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);
//  onChange={this.handleChange.bind(this)}
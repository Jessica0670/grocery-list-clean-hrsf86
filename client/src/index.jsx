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
  	console.log(Data.groceryList, 'data')
  	    console.log('val test', e.val(), 'values')
    let groceryInput = e.val();
    let newGrocItem = {
    	id: this.state.list[0].length + 1,
    	quantity: 1,
    	description: groceryInput
    };
    let dataArray = this.state.list[0];
    // console.log(newGrocItem.message, 'test input ')
    this.setState({
    	list: dataArray.concat(newGrocItem)
    });
    e.val = '';
    console.log(this.state.list[0].concat(newGrocItem), 'list')

  }
  // click={this.submit.bind(this)} 
  
//   submit(e) {

// console.log(e, 'test')
//     event.preventDefault();
//   }

  render () {
    return (
    	<div>
        <AddGrocery  value={this.state.value} onChange={this.handleChange.bind(this)}/>
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
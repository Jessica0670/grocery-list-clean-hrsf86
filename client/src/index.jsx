import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [Data.groceryList]
    }
  }

  handleChange(e) {
  	// console.log(e.val(),  'test',this.state.list[0][0].quantity)
    let groceryInput = e.val();
    let id = 5;
    let length = this.state.list[0].length;

    let newGrocItem = {
    	id: id++,
    	// id: this.state.list[0].length + 1,
      quantity: 4,
    	// quantity: this.state.list[0][length - 1].quantity,
    	description: groceryInput
    };
    let dataArray = this.state.list[0];
    this.setState({
    	// list: dataArray.concat(newGrocItem)
    	list: this.state.list[0].push(newGrocItem)
    });
    this.setState({list: ''})
    console.log(this.state.list[0][0].quantity)
  }


  render () {
    return (
    	<div>
        	<AddGrocery  
        		value={this.state.list} 
        		click={this.handleChange.bind(this)}
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

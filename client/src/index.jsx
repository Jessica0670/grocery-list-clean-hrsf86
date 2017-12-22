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
      list: []
    }
  }
  
  submit(e) {
    console.log(e, 'working!!!!')
    //onclick add new grocery item
    //setState to add item to list array?
  }

  render () {
    return (
    	<div>
        <AddGrocery  listener={this.submit}/>
    		<GroceryList data={Data}/>
    	</div>
    )
  }
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

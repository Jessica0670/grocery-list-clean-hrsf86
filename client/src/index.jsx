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
  
  render () {
    return (
    	<div>
        <AddGrocery />
    		<GroceryList data={Data}/>
    	</div>
    )
  }
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);
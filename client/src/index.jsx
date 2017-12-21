import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../database/data.js'
import GroceryList from './components/GroceryList.jsx'
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
    		<GroceryList data={Data}/>
    	</div>
    )
  }
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);
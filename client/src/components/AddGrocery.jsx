import React from 'react';
class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
    	<div>
    		<input id="inputGrocery" type="text" placeholder="What do you need to buy?"/>
    		<input id="inputQty" type="text" placeholder="How many?"/>
    		<input onClick={this.props.listener} id="submit" type="submit"/>
    	</div>
    )
  }
}

export default AddGrocery;


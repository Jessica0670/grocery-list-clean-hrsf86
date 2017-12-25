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

    		<input 
          className="grocery" 
          name="grocery" 
          value={this.state.list} 
          id="inputGrocery" 
          type="text" 
          placeholder="What do you need to buy?"
        />
    		<input 
          className="qty" 
          value={this.state.list} 
          name="qty" 
          id="inputQty" 
          type="text" 
          placeholder="How many?"
        />
    		<input onClick={() => this.props.click($('.grocery, .qty'))} value="Submit" id="submit" type="submit"/>

    	</div>
    )
  }
}

export default AddGrocery;

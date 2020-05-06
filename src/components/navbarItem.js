import React from 'react';
import '../styles/navbarItem.css'

class NavbarItem extends React.Component {
	constructor(props){
		super(props);

		this.updateState = this.updateState.bind(this);
	}

	updateState(newState){
		this.props.updateState(newState);
	}
  render() {
    return( 
    	<div id = "navbarItemContainer">
    		<div id = "textHolder" onClick={() => this.updateState(this.props.stateChangesTo)}>
    			<p id = "mainText">{this.props.name}</p>
    		</div>
    	</div>
    );
  }
}

export default NavbarItem;
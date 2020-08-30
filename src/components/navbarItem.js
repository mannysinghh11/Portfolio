import React from 'react';
import '../styles/navbarItem.css'

class NavbarItem extends React.Component {
	constructor(props){
		super(props);

		this.updateState = this.updateState.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderActiveNav = this.renderActiveNav.bind(this);
	}

	updateState(newState){
		this.props.updateState(newState);
	}

  renderNav(){
    return( 
      <div id = "navbarItemContainer">
        <div id = "textHolder" onClick={() => this.updateState(this.props.stateChangesTo)}>
          <p id = "mainText">{this.props.name}</p>
        </div>
      </div>
    );
  }

  renderActiveNav(){
    return( 
      <div id = "navbarItemContainer">
        <div id = "textHolder" onClick={() => this.updateState(this.props.stateChangesTo)}>
          <p className = "active">{this.props.name}</p>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.name == this.props.active){
      return this.renderActiveNav()
    }else{
      return this.renderNav();
    }
  }
}

export default NavbarItem;
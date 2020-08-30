import React from 'react';
import '../styles/navbar.css'
import NavbarItem from '../components/navbarItem.js'

class Navbar extends React.Component {

  render() {
    return( 
    	<div id = "navBarContainer">
    		<NavbarItem name = "Home" stateChangesTo = "home" icon="home" active = {this.props.active} updateState={this.props.updateState}/>
    		<NavbarItem name = "Experience" stateChangesTo = "experience" active = {this.props.active} updateState={this.props.updateState}/>
    		<NavbarItem name = "Projects" stateChangesTo = "projects" active = {this.props.active} updateState={this.props.updateState}/>
    		<NavbarItem name = "Hobbies" stateChangesTo = "hobbies" active = {this.props.active} updateState={this.props.updateState}/>
    	</div>
    );
  }
}

export default Navbar;
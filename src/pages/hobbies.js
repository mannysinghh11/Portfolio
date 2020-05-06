import React from 'react';

import '../styles/hobbies.css'
import Navbar from '../components/navbar.js'

import HobbiesCard from '../components/hobbiesCard.js'

class Hobbies extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return( 
    	<div id = "hobbiesContainer">
    		<div id = "navbarContainer">
    			<Navbar updateState = {this.props.updateState}/>
    		</div>

            <HobbiesCard />

    	</div>
    );
  }
}

export default Hobbies;
import React from 'react';
import Typing from 'react-typing-animation';

import '../styles/home.css'
import Navbar from '../components/navbar.js'
import SocialBar from '../components/socialBar.js'
import profilePicture from '../images/profilePicture.JPG'

class Home extends React.Component {
	constructor(props){
		super(props);

		this.typingComplete = this.typingComplete.bind(this);

		this.state = {
			textToType: "Software Engineer."
		}
	}

	typingComplete(previousState){
		var newState = "";

		if(previousState == "Software Engineer."){
			newState = "Photographer.";
		}else if(previousState == "Photographer."){
			newState = "Producer.";
		}else if(previousState == "Producer."){
			newState = "Gamer.";
		}else if(previousState == "Gamer."){
			newState = "Software Engineer.";
		}

		this.setState({
			textToType: newState
		});
	}

  render() {
    return( 
    	<div id = "homeContainer">
    		<div id = "navbarContainer">
    			<Navbar updateState = {this.props.updateState}/>
    		</div>

    		<div id = "homeMainContent">
    			<img src= {profilePicture} id="profilePicture"/>
    			<p id = "profilePictureName">Manpreet Singh</p>
    			<Typing speed={200} onFinishedTyping={() => this.typingComplete(this.state.textToType)} loop={true}>
    				<p id = "profileDescription">{this.state.textToType}</p>
    				<Typing.Backspace count = {20} delay={1500}/>
    			</Typing>

    		<SocialBar />
    		</div>
    	</div>
    );
  }
}

export default Home;
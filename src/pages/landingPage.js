import React from 'react';
import '../styles/landingPage.css'

import Home from '../pages/home.js'
import Experience from '../pages/experience.js'
import Projects from '../pages/projects.js'
import Hobbies from '../pages/hobbies.js'

class LandingPage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			currentPage: "home"
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState(newState){
		//console.log(newState);
		
		this.setState({
			currentPage: newState
		});
	}

	render() {
		if(this.state.currentPage == "home"){
			return(<Home updateState={this.updateState}/>);	
		}else if(this.state.currentPage == "experience"){
			return(<Experience updateState={this.updateState}/>);
		}else if(this.state.currentPage == "projects"){
			return(<Projects updateState={this.updateState} />);
		}else if(this.state.currentPage == "hobbies"){
			return(<Hobbies updateState={this.updateState} />);
		}
		
	}
}

export default LandingPage;
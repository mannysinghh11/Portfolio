import React from 'react';

import '../styles/experience.css'
import Navbar from '../components/navbar.js'
import ExperienceCard from '../components/experienceCard.js'

import experienceData from '../json/experience.json'

class Experience extends React.Component {
	constructor(props){
		super(props);

        this.renderExperienceCards = this.renderExperienceCards.bind(this);
	}

    renderExperienceCards(){
        //console.log(experienceData);

        return(
            experienceData.map((data, i) => {
                return(
                    <ExperienceCard key = {i} companyTitle={data.companyTitle} workTitle={data.workTitle} timeFrame={data.timeFrame} 
                    description={data.description} imageSource={data.imageSource}/>
                );
            })
        );
    }

  render() {
    return( 
    	<div id = "experienceContainer">
    		<div id = "navbarContainer">
    			<Navbar updateState = {this.props.updateState} active = "Experience"/>
    		</div>

    		<div id ="mainContent">
    			<div id = "educationContainer">
                    {this.renderExperienceCards()}
    			</div>

    			<div id = "workContainer">
    			</div>
    		</div>
    	</div>
    );
  }
}

export default Experience;
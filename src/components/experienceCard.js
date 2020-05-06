import React from 'react';
import '../styles/experienceCard.css'

import List from '../components/list.js'

class ExperienceCard extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
    return( 
    	<div id = "experienceCardContainer">
    		<div id = "companyTitle">
	    		<img src= {this.props.imageSource} id="companyPicture"/>
	    		<p id = "companyTitleText">{this.props.companyTitle}</p>
	    	</div>
            <p id = "workTitle">{this.props.workTitle}</p>
            <p id = "timeFrame">{this.props.timeFrame}</p>
            <List description = {this.props.description}/>
    	</div>
    );
  }
}

export default ExperienceCard;
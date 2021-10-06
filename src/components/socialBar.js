import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import '../styles/socialBar.css'

class SocialBar extends React.Component {
	constructor(props){
		super(props);

    this.iconClicked = this.iconClicked.bind(this);
	}

  iconClicked(icon){
    if(icon == "linkedin"){
      window.open('https://www.linkedin.com/in/manpreet-singh96/', '_blank');
    }else if(icon == "github"){
      window.open('https://github.com/mannysinghh11', '_blank');
    }else if(icon == "pdf"){
      window.open('https://github.com/mannysinghh11/Portfolio/raw/master/src/additionalFiles/ManpreetSingh_Resume.pdf', '_blank');
    }
  }

  render() {
    return( 
    	<div id = "socialBarContainer">
    		<FontAwesomeIcon id = "socialIcon" icon = {faLinkedin} size = '2x' onClick={() => this.iconClicked('linkedin')}/>
    		<FontAwesomeIcon id = "socialIcon"  icon = {faGithub} size = '2x' onClick={() => this.iconClicked('github')}/>
        <FontAwesomeIcon id = "socialIcon"  icon = {faFilePdf} size = '2x' onClick={() => this.iconClicked('pdf')}/>
    	</div>
    );
  }
}

export default SocialBar;

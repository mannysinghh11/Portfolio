import React from 'react';
import '../styles/projectCard.css'

import ReactTooltip from 'react-tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class ProjectCard extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        window.open(this.props.github, '_blank');
    }

  render() {
    return(
        <div data-tip data-for="githubToolTip" className = "container" onClick={this.handleClick}>
            <ReactTooltip id = "githubToolTip" effect = "solid">Click to view code on Github</ReactTooltip>
            <p className = "projectTitle">{this.props.name}</p>
            <p className = "projectDescription">{this.props.description}</p>
        </div>
    );
  }
}

export default ProjectCard;
import React from 'react';
import '../styles/hobbiesCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faMusic, faCamera } from '@fortawesome/free-solid-svg-icons'

class HobbiesCard extends React.Component {
	constructor(props){
		super(props);

        this.state = {
            hobbieInfo: "Click on each icon for additional information",
            description: ""
        }

        this.updateDescription = this.updateDescription.bind(this);
	}

    updateDescription(item){
        var description = "";

        if(item == "games"){
            description = "Video games have been in my life since I was a child. They have always lifted my spirits and helped my creative juices flow. When I was younger, it all started with need for speed and Jak 2. I enjoyed the thrill of solving puzzles, defeating the monsters, and the satisfaction of seeing 'mission complete' pop up on my screen. Now, I love playing competitive video games such as League of Legends, Fornite, PlayerUnknowns' Battlegrounds, and Realm Royale. I also enjoy single player games such as the Far Cry series and Dark Souls.";
        }else if(item == "music"){
            description = "Music is something I listen to for a large chunk of my days. It helps me focus and perform my tasks efficiently. Since I listen to a wide genre of music, this got me very interested in the production side of things. I did some research and downloaded my first DAW (Digital Audio Workspace), which essentially just allows you to play instruments and add drums all from your computer. Creating music is a great way for me to relieve stress and deload after a long day."
        }else if(item == "photography"){
            description = "Photography is one of my newest hobbies, and I am glad to have found it. I enjoy being creative, and photography is a great method of letting that creativity flow. It is fun looking at life through a new lens. After getting into photography, I continue to notice new angles to appreciate the beauty around me. Although I am fairly new, I enjoy messing around with different angles, aperatures, and shutter speeds. I would love to start taking some more low light shots and slow shutter speed shots, as the end product of both look amazing in my opinion."
        }

        this.setState({
            description: description
        });
    }

  render() {
    return( 
        <div>
            <p id = "hobbiesInfo">{this.state.hobbieInfo}</p>
        	<div id = "hobbiesCardContainer">
                <div id = "hobbiesIconContainer" onClick={() => this.updateDescription("games")}>
        		  <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faGamepad} size = '10x'/>
                  <p>Video games</p>
                  <p>{this.state.gameDescription}</p>
                </div>

                <div id = "hobbiesIconContainer" onClick={() => this.updateDescription("music")}>
                  <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faMusic} size = '10x' />
                  <p>Music Production</p>
                </div>

                <div id = "hobbiesIconContainer" onClick={() => this.updateDescription("photography")}>
                  <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faCamera} size = '10x' />
                  <p>Photography</p>
                </div>
        	</div>

            <div id = "hobbiesCardContainer">
                <p id ="extendedDescription">{this.state.description}</p>
            </div>
        </div>
    );
  }
}

export default HobbiesCard;
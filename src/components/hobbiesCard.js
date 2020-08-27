import React from 'react';
import '../styles/hobbiesCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faMusic, faCamera, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import HobbyExample from '../components/hobbyExample.js'

class HobbiesCard extends React.Component {
	constructor(props){
		super(props);

        this.state = {
            hobbyClicked: "Video Games",
            isHobbyClicked: false,
            hobbieInfo: "My life outside of programming",
            description: "",
            examplesDescription: ""
        }

        this.updateDescription = this.updateDescription.bind(this);
        this.handleRenderLogic = this.handleRenderLogic.bind(this);
        this.renderAllHobbies = this.renderAllHobbies.bind(this);
        this.renderExtendedDescription = this.renderExtendedDescription.bind(this);
	}

    updateDescription(item){
        var description = "";
        var examplesDescription = "";
        var isHobbyClicked = true;

        if(item == "Video Games"){
            description = "Video games have been in my life since I was a child. They have always lifted my spirits and helped my creative juices flow. When I was younger, it all started with need for speed and Jak 2. I enjoyed the thrill of solving puzzles, defeating the monsters, and the satisfaction of seeing 'mission complete' pop up on my screen. Now, I love playing competitive video games such as League of Legends, Fornite, PlayerUnknowns' Battlegrounds, and Apex Legends. I also enjoy single player games such as the Far Cry series and Dark Souls.";
            examplesDescription = ""
        }else if(item == "Music Production"){
            description = "Music is something I listen to for a large chunk of my days. It helps me focus and perform my tasks efficiently. Since I listen to a wide genre of music, this got me very interested in the production side of things. I did some research and downloaded my first DAW (Digital Audio Workspace), which essentially just allows you to play instruments and add drums all from your computer. Creating music is a great way for me to relieve stress and deload after a long day."
            examplesDescription = "Below are a few examples of the beats I have created."
        }else if(item == "Photography"){
            description = "Photography is one of my newest hobbies, and I am glad to have found it. I enjoy being creative, and photography is a great method of letting that creativity flow. It is fun looking at life through a new lens. After getting into photography, I continue to notice new angles to appreciate the beauty around me. Although I am fairly new, I enjoy messing around with different angles, aperatures, and shutter speeds. I would love to start taking some more low light shots and slow shutter speed shots, as the end product of both look amazing in my opinion."
            examplesDescription = "Below are a few examples of the photos I have taken."
        }

        if(item == "reset"){
            isHobbyClicked = false;
        }

        this.setState({
            hobbyClicked: item,
            isHobbyClicked: isHobbyClicked,
            description: description,
            examplesDescription: examplesDescription
        });
    }

    handleRenderLogic(){
        if(this.state.isHobbyClicked == false){
            return this.renderAllHobbies();
        }else{
            return this.renderExtendedDescription();
        }
    }

    renderAllHobbies(){
        return( 
            <div>
                <p id = "hobbiesInfo">{this.state.hobbieInfo}</p>
                <div id = "hobbiesCardContainer">
                    <div id = "hobbiesIconContainer" onClick={() => this.updateDescription("Video Games")}>
                      <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faGamepad} size = '4x'/>
                      <p>Video games</p>
                      <p>{this.state.gameDescription}</p>
                    </div>

                    <div id = "hobbiesIconContainer" onClick={() => this.updateDescription("Music Production")}>
                      <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faMusic} size = '4x' />
                      <p>Music Production</p>
                    </div>

                    <div id = "hobbiesIconContainer" onClick={() => this.updateDescription("Photography")}>
                      <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faCamera} size = '4x' />
                      <p>Photography</p>
                    </div>
                </div>

                <div id = "hobbiesCardContainer">
                    <p id ="extendedDescription">{this.state.description}</p>
                </div>
            </div>
        );
    }

    renderExtendedDescription(){
        return(
            <div>
                <div id = "hobbiesCardContainer">
                    <p id = "hobbieTitle">{this.state.hobbyClicked}</p>
                </div>

                <div id = "hobbiesCardContainer">
                    <p id ="extendedDescription">{this.state.description}</p>
                </div>

                <div id = "hobbiesExamples">
                    <p id = "hobbieTitle">{this.state.examplesDescription}</p>
                    <div id = "scrollableExamples">
                        <HobbyExample hobby={this.state.hobbyClicked}/>
                    </div>
                </div>

                <div id = "hobbiesCardContainer">
                    <div id = "hobbiesNav" onClick={() => this.updateDescription("reset")}>
                        <FontAwesomeIcon id = "hobbiesCardIcon" icon = {faArrowCircleLeft} size = 'lg' />
                        <p>Back to all hobbies</p>
                    </div>
                </div>
            </div>
        );
    }

  render() {
    return(
        this.handleRenderLogic()
    );
  }
}

export default HobbiesCard;
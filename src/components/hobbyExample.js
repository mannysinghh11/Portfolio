import React from 'react';
import ReactAudioPlayer from 'react-audio-player'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

import image1 from '../images/photo_1.jpg'
import image2 from '../images/photo_2.jpg'

import beat1 from '../audio/6_100bpm.wav'
import beat2 from '../audio/7_100bpm.wav'
import beat3 from '../audio/1_95bpm.wav'

class HobbyExample extends React.Component {
	constructor(props){
		super(props);

    this.handleRenderLogic = this.handleRenderLogic.bind(this);
    this.renderMusicExamples = this.renderMusicExamples.bind(this);
    this.renderPhotoExamples = this.renderPhotoExamples.bind(this);
	}

  handleRenderLogic(){
    if(this.props.hobby == "Music Production"){
      return this.renderMusicExamples();
    }else if(this.props.hobby == "Photography"){
      return this.renderPhotoExamples();
    }else{
      return null
    }
  }

  renderMusicExamples(){
    return(
      <div id = "beatsContainer">
        <ReactAudioPlayer
          src={beat1}
          controls
        />

        <p></p>

        <ReactAudioPlayer
          src={beat2}
          controls
        />

        <p></p>

        <ReactAudioPlayer
          src={beat3}
          controls
        />
      </div>
    );
  }

  renderPhotoExamples(){
    const images = [
      {
        original: "https://github.com/mannysinghh11/Portfolio/blob/master/src/images/photo_1.jpg?raw=true",
        thumbnail: "https://github.com/mannysinghh11/Portfolio/blob/master/src/images/photo_1.jpg?raw=true",
      },
      {
        original: "https://github.com/mannysinghh11/Portfolio/blob/master/src/images/photo_2.jpg?raw=true",
        thumbnail: "https://github.com/mannysinghh11/Portfolio/blob/master/src/images/photo_2.jpg?raw=true",
      }
    ];

    return(
      <div>
        <ImageGallery items={images} />
      </div>
    );
  }

  render() {
    return( 
    	this.handleRenderLogic()
    );
  }
}

export default HobbyExample;
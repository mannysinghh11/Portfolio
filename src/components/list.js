import React from 'react';
import '../styles/list.css'

class List extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    const descriptions = this.props.description;
    const listDescription = descriptions.map((description, i) =>
        <li id = "descriptionText" key = {i}>{description}</li>
    );

    return( 
    	<div id = "listContainer">
            <ul>{listDescription}</ul>
    	</div>
    );
  }
}

export default List;
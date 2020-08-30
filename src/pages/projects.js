import React from 'react';

import '../styles/projects.css'
import Navbar from '../components/navbar.js'
import ProjectCard from '../components/projectCard.js'

class Projects extends React.Component {
	constructor(props){
		super(props);

        this.state = {
            numberOfRepos: 0,
            repoInformation: []
        }

        this.renderTable = this.renderTable.bind(this);
	}

    componentDidMount(){
        fetch("https://api.github.com/users/mannysinghh11/repos")
            .then(res => res.json())
            .then(
                (result) =>{
                    console.log(result);

                    this.setState({
                        numberOfRepos: result.length
                    });

                    result.map((data, i) => {
                        var repo = {name: data.name, description: data.description, githubLink: data.html_url, liveLink: data.homepage};
                        var info = this.state.repoInformation.concat(repo);

                        this.setState({
                            repoInformation: info
                        });
                    })
                },
                (error) =>{
                    console.log(error);
                }
            )
    }

    renderTable(){
        return(
            this.state.repoInformation.map((data, i) => {
                return(
                    <ProjectCard key = {i} name = {data.name} description = {data.description} github = {data.githubLink} link = {data.liveLink}/>
                );
            })
        );
    }

  render() {
    return( 
    	<div id = "experienceContainer">
    		<div id = "navbarContainer">
    			<Navbar updateState = {this.props.updateState} active = "Projects"/>
    		</div>

            <div id = "projectsContainer">
                {this.renderTable()}
            </div>
    	</div>
    );
  }
}

export default Projects;
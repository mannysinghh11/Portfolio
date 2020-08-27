import React from 'react';

import '../styles/projects.css'
import Navbar from '../components/navbar.js'

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
                    //console.log(result);

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
                    <tr key = {i}>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                        <td><a href= {data.githubLink} target="_blank" id="githubLink">{data.githubLink}</a></td>
                    </tr>
                );
            })
        );
    }

  render() {
    return( 
    	<div id = "experienceContainer">
    		<div id = "navbarContainer">
    			<Navbar updateState = {this.props.updateState}/>
    		</div>

            <div id = "projectsContainer">
                <div id = "totalProjects">
                    <p id = "totalProjectsText">Repo Counter: {this.state.numberOfRepos}</p>
                </div>

                <div id = "tableContainer">
                    <table id="mainTable">
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Github link</th>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
    	</div>
    );
  }
}

export default Projects;
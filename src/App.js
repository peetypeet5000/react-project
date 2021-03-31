import React from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import projectData from './projects.json'

class Projects extends React.Component {

	createCards


	render() {
		return (
			<div class="post">
				<h2>Project {{number}}: {{projectTitle}}</h2>

				<div class="post-content">
					<img class="post-image" src="{{projectImage}}" alt="{{projectImageAlt}}">
					<p class="post-text">
						{{projectDescription}}
						{{#if extraContent}}
							<br><br>Play the game <a href={{extraContent}}>here.</a>
						{{/if}}
						<br><br>
						See the GitHub repo for this project <a href="{{projectGithub}}">here.</a>
					</p>
				</div>
			</div>
		);
	}
}



class Links extends React.Component {
	render() {
		return (
			<div id="links" class="post">
       			<div class="post-content">
            		<h2>Links:</h2>

					<div class="post-element">
						<div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="peter-lamontagne-5000"><a class="LI-simple-link" href='https://www.linkedin.com/in/peter-lamontagne-5000?trk=profile-badge'>LinkedIn</a></div>
					</div>
					<div class="post-element">
						
						<div class="github-card" data-user="peetypeet5000" data-theme="medium" data-width="300a"></div>
						<script src="https://lab.lepture.com/github-cards/widget.js"></script>
					</div>
				</div>
			</div>
		);
	}
}

class Resume extends React.Component {
	render() {
		return (
			<div id="resume" class="post">
				<div class="post-content-resume">
						<div class="resume-element">
								<h1>Peter LaMontagne</h1>
								<p>8995 Sw Sunstead Lane, Portland OR 97225 | peter@peterlamontagne.com | (503) - 853 - 4419 | peterlamontagne.com</p>
						</div>


						<div class="resume-element">
								<h2>Skills</h2>
								<ul>
										<li>Experience in C++, C, HTML/CSS, JavaScript/Node.js, and Python</li>
										<li>Well-versed in Version Management, Windows & Unix Systems, and Software Engineering Principles</li>
										<li>Excellent Written and Verbal Communication</li>
								</ul>
						</div>

						<div class="resume-element">
								<h2>Education</h2>
								<p><b>Oregon State University</b><br></br>2019-Present (est. 2023)<br></br>GPA: 3.99<br></br>Computer Science - Computer Systems Option
								<br></br>Relevant Courses: Data Structures, Web Development, Software Engineering, Algorithms
								<br></br>Relevant Projects: Node.js & Websocket Tic Tac Toe, Personal Website. GitHub: Peetypeet5000</p>
								<p><b>Beaverton High School</b><br></br>2015-2019, GPA: 4.0, 7 AP classes, AP Scholar with Distinction</p>
						</div>

						<div class="resume-element">
								<h2>Experience</h2>
								<div  class="no-margin">
										<h5>3/20 – Present</h5>
										<h4 class="no-margin">Helpdesk Student Consultant | CoSINe Helpdesk - Oregon State University</h4>
								</div>
								<ul>
										<li>Help lead frontline IT support for various colleges in the University.</li>
										<li>Communicate with users and coworkers in a professional, accurate, and timely manner</li>
										<li>Interact with backend system, configure devices, investigate issues, and write documentation</li>
										<li>Became first student certified Apple technician to repair user’s Mac devices</li>
								</ul>

								<div class="no-margin">
										<h5>6/19 – 9/19</h5>
										<h4 class="no-margin">Summer Camp Lead & Sportsplex Attendant | Mittleman Jewish Community Center</h4>
								</div>
								<ul>
										<li>Supervised and lead activities for primarily 8-10 year olds</li>
										<li>Worked in teams of 2-3 to instruct large (30+) groups of children, with individual attention when necessary</li>
										<li>As Sportsplex Attendant, was responsible for checking in players, helping guests with concerns, ensuring the safety of participants, and closing the facility</li>
								</ul>
								
								<div class="no-margin">
										<h5>10/17 – 6/18</h5>
										<h4 class="no-margin">Discovery Club Leader | Garden Home Rec Center - Tualatin Hills Parks & Recreation</h4>
								</div>
								<ul>
										<li>Lead groups of 10+ Elementary school children alone, or more when cooperating with co-workers</li>
										<li>Ensured safety and happiness of children, and dealt with concerns from parents</li>
								</ul>
						</div>
					<br></br><br></br><br></br>
				</div>
			</div>
		);
	}
}


class Navigation extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(val, e) {
		this.props.handler(val);
	}


	render() {
		return (
			<div className="App">
				<header>
					<div id="nav">
						<img src="logo.png" className="logo" alt="Logo" />
						<ul>
							<li><button onClick={(e) => this.handleClick(1, e)}>Resume</button></li>
							<li><button onClick={(e) => this.handleClick(2, e)}>Links</button></li>
							<li><button onClick={(e) => this.handleClick(3, e)}>Projects</button></li>
						</ul>
					</div>
				</header>
			</div>
		);
	}
}


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {active: 1}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(type) {
		console.log(type)
		this.setState({active: type})
	}

	render() {
		return (
			<div>
				<Navigation handler={this.handleClick} />
				{this.state.active == 1 ? <Resume /> : null}
				{this.state.active == 2 ? <Links /> : null}
				{this.state.active == 3 ? <Projects /> : null}
			</div>
		);
	}
}

export default App;

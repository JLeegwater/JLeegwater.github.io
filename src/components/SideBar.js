import React from "react";
import { Link } from "react-router-dom";
import "../styling/SideBar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SideBar() {
	return (
		<div className="sideBar_container">
			<div className="sideBar_logo">
				<Link to="/landingpage" className="logo_link">
					<h1 className="letters">JL</h1>
				</Link>
				<h5>Jesse Leegwater</h5>
			</div>
			<div className="sideBar_nav">
				<Link className="link" to="/about">
					<p>About</p>
				</Link>
				<Link className="link" to="/skills">
					<p>Skills</p>
				</Link>
				<Link className="link" to="/projects">
					<p>Projects</p>
				</Link>
				<Link className="link" to="/contact">
					<p>Contact</p>
				</Link>
			</div>

			<div className="hamburger">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			<div className="sideBar_media">
				<a href="https://github.com/JLeegwater">
					<p>
						<GitHubIcon />
					</p>
				</a>
				<a href="https://www.linkedin.com/in/jesse-leegwater/">
					<p>
						<LinkedInIcon />
					</p>
				</a>
			</div>
		</div>
	);
}

export default SideBar;

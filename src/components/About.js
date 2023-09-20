import React from "react";
import { Link } from "react-router-dom";
import "../styling/About.css";

function About() {
	return (
		<div className="about_container">
			<div className="about_title">
				<h1>About Me</h1>
			</div>
			<div className="about_img_div">
				<img
					src={`${process.env.PUBLIC_URL}/images/portrait.jpg`}
					alt="Jesse Leegwater"
				/>
			</div>
			<div className="about">
				<p>
					Hello! I'm Jesse Leegwater, a passionate full-stack developer with a
					love for tackling complex computer engineering problems.
				</p>
				<p>
					I discovered my love for technology at a young age, when I saw what
					awesome mods people could make for my favorite video games. Since
					then, I've dedicated myself to learning and growing in this dynamic
					field.
				</p>
				<p>
					I thrive on challenges and actively seek out new opportunities that
					allow me to contribute value while continuously learning and growing.
					The software engineering and web development industry captivate me
					with its diversity and the profound impact it has on society.
				</p>
				<p>
					Overall, I am driven by my enthusiasm for creating meaningful software
					solutions and the desire to make a lasting impact through my work in
					the field of web development.
				</p>
			</div>
			<Link to="/contact" className="about_link">
				<h5>I would love to get to know you more</h5>
			</Link>
		</div>
	);
}

export default About;

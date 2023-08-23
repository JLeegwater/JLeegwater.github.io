import React from "react";
import "../styling/Skills.css";
import {
	SiJavascript,
	SiTypescript,
	SiNodedotjs,
	SiPreact,
	SiCss3,
	SiHtml5,
	SiRedux,
	SiPostgresql,
	SiExpress,
	SiBootstrap,
	SiFigma,
} from "react-icons/si";

function Skills() {
	return (
		<div className="skills_container">
			<div className="skills_description">
				<div className="skills_title">
					<h1>My Skills</h1>
				</div>
				<div className="skills_paragraph">
					<div className="skills_inside_par">
						<p>
							My skill set is wide-ranging and greatly valued within today's
							tech industry. I possess proficiency in frontend technologies such
							as ReactJS, Javascript, and TypeScript, and backend technologies
							like NodeJS, MySQL, and KnexJS. These skills empower me to build
							robust and high-performing web applications, taking care of both
							the frontend and backend components.
						</p>
					</div>
				</div>
			</div>
			<div className="skills">
				<div className="single_skill">
					<SiJavascript className="skill-icon" />
					<h4>Javascript</h4>
				</div>
				<div className="single_skill">
					<SiTypescript className="skill-icon" />
					<h4>TypeScript</h4>
				</div>
				<div className="single_skill">
					<SiNodedotjs className="skill-icon" />
					<h4>NodeJs</h4>
				</div>
				<div className="single_skill">
					<SiPreact className="skill-icon" />
					<h4>ReactJs</h4>
				</div>
				<div className="single_skill">
					<SiCss3 className="skill-icon" />
					<h4>CSS</h4>
				</div>
				<div className="single_skill">
					<SiHtml5 className="skill-icon" />
					<h4>HTML</h4>
				</div>
				<div className="single_skill">
					<SiRedux className="skill-icon" />
					<h4>Redux</h4>
				</div>
				<div className="single_skill">
					<SiPostgresql className="skill-icon" />
					<h4>postgresql</h4>
				</div>
				<div className="single_skill">
					<SiExpress className="skill-icon" />
					<h4>express</h4>
				</div>
				<div className="single_skill">
					<SiBootstrap className="skill-icon" />
					<h4>Bootstrap</h4>
				</div>
				<div className="single_skill">
					<SiFigma className="skill-icon" />
					<h4>Figma</h4>
				</div>
			</div>
		</div>
	);
}

export default Skills;

import React from "react";
//import { Link } from "react-router-dom";
import "../styling/LandingPage.css";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Work from "./components/Work";
// import Contact from "./components/Contact";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import LoadingClip from "./widgets/LoadingClip";

function LandingPage() {
	// const [loading, setLoading] = useState(false);
	// useEffect(() => {
	// 	setLoading(true);
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 1000);
	// 	window.scrollTo(0, 0);
	// }, []);

	// const [backgroundColor, setBackgroundColor] = useState("#FF0000"); // Initial color: red

	// const handleColorChange = (event) => {
	// 	setBackgroundColor(event.target.value);
	// };

	// if (loading) return <LoadingClip />;

	// else
	return (
		<div className="landing_container">
			<section>
				<h2>Welcome</h2>
				<p>
					I am a skilled full stack developer with a passion for technology and
					a strong ability to solve complex problems. With experience in a wide
					range of programming languages and frameworks, I am eager to apply my
					skills and knowledge to build innovative solutions.
				</p>
			</section>

			<section>
				<h2>Technical Skills</h2>
				<ul>
					<li>Node.js, PostgreSQL, Python, Java, C++, Assembly</li>
					<li>Jest, Axios, React.js, Redux, HTML, CSS, JavaScript</li>
					<li>Context API, react-testing-library, Cypress.io, Ant Design</li>
				</ul>
			</section>

			<section>
				<h2>Featured Project: Water My Plants V2</h2>
				{/* <img
					src="water_my_plants_v2.jpg"
					alt="Water My Plants V2 application screenshot"
				/> */}
				<a href="https://github.com/ft-water-my-plants-5/back-end">
					GitHub Repository
				</a>
				<p>
					As a Backend Engineer, I designed and implemented the
					Node/Express/PostgreSQL back-end and database for the Water My Plants
					V2 application. I also produced an in-depth readme for frontend
					developers to easily reference each endpoint and understand how to
					interact with the API.
				</p>
			</section>

			{/* <div className="image-container">
				<div
					className="background"
					style={{ backgroundColor: backgroundColor }}
				></div>
				<img
					src={require("./output.png")}
					alt="Black and White"
					className="overlay-image"
				/>
			</div>
			<input
				type="color"
				value={backgroundColor}
				onChange={handleColorChange}
			/> */}

			<footer>
				<p>&copy; 2023 Jesse Leegwater. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default LandingPage;

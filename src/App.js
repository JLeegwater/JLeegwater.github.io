import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import NavBarPopUp from "./widgets/NavBarPopUp";
import LandingPage from "./LandingPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
	return (
		<div className="App">
			<SideBar />
			<NavBarPopUp />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />

				<Route path="/contact" element={<Contact />} />
				<Route path="/landingpage" element={<LandingPage />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<LandingPage />} />
			</Routes>
		</div>
	);
}

export default App;

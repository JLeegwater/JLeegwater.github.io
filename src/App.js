import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import NavBarPopUp from "./widgets/NavBarPopUp";
import LandingPage from "./LandingPage";
function App() {
	return (
		<div className="App">
			<SideBar />
			<NavBarPopUp />
			<Routes>
				{/* <Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contact" element={<Contact />} /> */}
				<Route path="/landingpage" element={<LandingPage />} />
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</div>
	);
}

export default App;

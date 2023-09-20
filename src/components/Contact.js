import React, { useState, useRef, useEffect } from "react";
import "../styling/Contact.css";
import emailjs from "@emailjs/browser";
import CheckIcon from "@mui/icons-material/Check";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact(props) {
	const formRef = useRef();
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [sentEmail, setSentEmail] = useState("");

	const handleChange = (e) => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!userInfo.email || !userInfo.message) {
			setSentEmail("Fail");
		} else {
			emailjs
				.sendForm(
					"service_lsw2gq6",
					"template_nswk7pa",
					formRef.current,
					"DP2Ljjg-Q8mQEUyhi"
				)
				.then(
					(result) => {
						setSentEmail("Sent");
					},
					(error) => {
						console.log("fail");
					}
				);
		}
	};

	return (
		<div className="contactForm_container">
			<div className="contactForm_title">
				<h1>Contact Me</h1>
			</div>
			<div className="form_container">
				<form className="form" ref={formRef} onSubmit={sendEmail}>
					<h2>Get In Touch</h2>
					<input
						type="text"
						placeholder={sentEmail ? "Name required" : "Name"}
						name="name"
						value={userInfo.name}
						onChange={handleChange}
						className={sentEmail ? "error" : ""}
						style={{
							borderColor:
								sentEmail === "Fail" ? "red" : sentEmail === "Sent" && "green",
						}}
					/>
					<input
						type="email"
						placeholder={sentEmail ? "Email required" : "Email"}
						name="email"
						value={userInfo.email}
						onChange={handleChange}
						className={sentEmail ? "error" : ""}
						style={{
							borderColor:
								sentEmail === "Fail" ? "red" : sentEmail === "Sent" && "green",
						}}
					/>
					<textarea
						placeholder={sentEmail ? "Message required" : "Message"}
						name="message"
						rows="8"
						value={userInfo.message}
						onChange={handleChange}
						className={sentEmail ? "error" : ""}
						style={{
							borderColor:
								sentEmail === "Fail" ? "red" : sentEmail === "Sent" && "green",
						}}
					></textarea>
					{sentEmail === "Sent" ? (
						<div className="sent_email">
							<p>
								Success <CheckIcon sx={{ backgroundColor: "transparent" }} />
							</p>
						</div>
					) : (
						<button type="submit" className="submit_button">
							<p>Submit</p>
						</button>
					)}
					<div className="contact_media">
						<h2>Contact Info</h2>
						<div className="contact_info_div">
							<div className="contact_media_div">
								<p className="contact_icons">
									<LocationOnIcon sx={{ backgroundColor: "transparent" }} />
								</p>
								<p>Concord, California</p>
							</div>
							<div className="contact_media_div">
								<p className="contact_icons">
									<LocalPhoneIcon sx={{ backgroundColor: "transparent" }} />
								</p>
								<p>(925)-270-5512</p>
							</div>
							<div className="contact_media_div">
								<p className="contact_icons">
									<MailIcon sx={{ backgroundColor: "transparent" }} />
								</p>
								<p>JesseLeegwater@gmail.com</p>
							</div>
						</div>
					</div>
				</form>
			</div>
			<script
				type="text/javascript"
				src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
			></script>
			<script type="text/javascript">
				(function(){emailjs.init("DP2Ljjg-Q8mQEUyhi")})();
			</script>
		</div>
	);
}

export default Contact;

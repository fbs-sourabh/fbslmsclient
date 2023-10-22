import React, { useEffect } from "react";
import "../assets/styles/authentication/loginpage.css";
import logo from "../assets/images/identity/logofbs.svg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
	const navigate = useNavigate();

	const handleLoginWithGoogle = () => {
		window.open("https://fbs-lms-api.onrender.com/api/v1/auth/google", "_self");
	};

	const u = useSelector((state) => state.userState.user);

	useEffect(() => {
		if (u) {
			navigate("/");
		}
	}, []);

	return (
		<div className="loginPage">
			<div className="loginPage__options">
				<div className="loginPage__loginContainer">
					<img
						src={logo}
						className="loginPage__logo"
						alt="logo"
						width={"100px"}
					/>
					<p className="loginPage__textContainer">
						<button
							className="loginPage__loginWithGoogle"
							onClick={handleLoginWithGoogle}
						>
							Sign in with Google
						</button>
					</p>
				</div>
			</div>
			<div className="loginPage__latest">{""}</div>
		</div>
	);
}

export default Login;

// import { useSelector } from "react-redux";
// const u = useSelector((state) => state.userState.user);

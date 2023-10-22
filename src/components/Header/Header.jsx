import React from "react";
import Navbar from "./HeaderComponents/Navbar";
import "../../assets/styles/header/header.css";
import userIcon from "../../assets/images/identity/icons/user.png";
import logo from "../../assets/images/identity/logofbs.svg";
import { Link } from "react-router-dom";
import { useUiStore } from "../../app/store/useUiStore";
import { handleSideBarToggle } from "../../features/uiSlice";
import { useDispatch } from "react-redux";

function Header() {
	const dispatch = useDispatch();

	return (
		<header className="header">
			<div className="header__imageContainer">
				<img
					src={logo}
					alt="toggle menu visibility"
					className="header__menuImage"
					onClick={() => dispatch(handleSideBarToggle())}
				/>
			</div>

			<Navbar />

			<div className="header__imageContainer">
				<Link to="/user" className="header__imageContainer">
					<img
						src={userIcon}
						alt="toggle menu visibility"
						className="header__menuImage"
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;

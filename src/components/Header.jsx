import React from "react";

export default function Header({ titleText }) {
	return (
		<div className="title-bar">
			<img
				src="/src/assets/hamburger.svg"
				id="title-bar__menu-icon"
				alt="Menu"
				className="title-bar__hamburger"
			/>
			<span className="title-bar__text">{titleText}</span>
		</div>
	)
}
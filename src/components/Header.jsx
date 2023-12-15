import React from "react";

export default function Header({ titleText }) {
	return (
		<div style={{
			gridArea: "1 / 1 / 2 / 2",
			display: "flex",
			height: "2rem",
			background: "var(--col-title)",
			color: "var(--col-text)"
		}}>
			<img
				src="/src/assets/hamburger.svg"
				id="title-bar__menu-icon"
				alt="Menu"
				style={{
					padding: "0.5rem",
					marginLeft: "0.5rem"
				}}
			/>
			<span style={{
				lineHeight: "2rem",
				paddingLeft: "0.5rem",
				fontSize: "1.5rem"
			}}>{titleText}</span>
		</div>
	)
}
import React from "react"

export default function Button(props) {
    
	const arrow = (
		<div className="arrow-wrapper">
			<div className={`arrow ${props.type === "backward" && "reverse"} `}></div>
		</div>
	)

	return (
		<div className="button-container">
			<button onClick={props.clickHandler}>
				{props.type === "backward" && arrow}
				{props.type === "forward" ? "Next" : "Back"}
				{props.type === "forward" && arrow}
			</button>
		</div>
	)
}

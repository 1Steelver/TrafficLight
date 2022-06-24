import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [isGreen, setIsGreen] = useState(false);
	const [isYellow, setIsYellow] = useState(false);
	const [isRed, setIsRed] = useState(false);
	const encenderVerde = () => {
		setIsVerde(true);
		setIsAmarillo(false);
		setIsRojo(false);
	};

	const encenderAmarillo = () => {
		setIsVerde(false);
		setIsAmarillo(true);
		setIsRojo(false);
	};
	const encenderRojo = () => {
		setIsVerde(false);
		setIsAmarillo(false);
		setIsRojo(true);
	};
	const rectangulo = {
		width: "180px",
		height: "380px",
		border: "4px solid blak",
		background: "#000000",
	};
	return (
		<div>
			<div
				className="d-flex flex-column mt-5 text-center mx-auto"
				style={rectangulo}>
				<div className="col">
					<button
						onClick={() => encenderVerde()}
						className={`${
							isVerde === true ? "bg-success" : ""
						} rounded-circle p-5 `}></button>
				</div>
				<div className="col">
					<button
						onClick={() => encenderAmarillo()}
						className={`${
							isAmarillo === true ? "bg-warning" : ""
						} rounded-circle p-5`}></button>
				</div>
				<div className="col">
					<button
						onClick={() => encenderRojo()}
						className={`${
							isRojo === true ? "bg-danger" : ""
						} rounded-circle p-5`}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;

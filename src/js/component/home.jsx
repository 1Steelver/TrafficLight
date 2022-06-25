import React, { useState } from "react"; //pa poder usar el useState...sino cueck!

//include images into your bundle

//create your first component...pa' combiar el Estate
const Home = () => {
	const [isGreen, setIsGreen] = useState(false); //el verde cambia
	const [isYellow, setIsYellow] = useState(false); //cambia el amarelo
	const [isRed, setIsRed] = useState(false); //y cambia el rojito

	const greenOn = () => {
		//pa' cabiare e verde
		setIsGreen(true); //com le dice que es true cambia y taran!!!PRENDE
		setIsYellow(false); //Y COMO ACA ES FALSE SE QUEDA QUIETITO
		setIsRed(false); //LO MISMO...
	};

	const yellowOn = () => {
		setIsGreen(false);
		setIsYellow(true);
		setIsRed(false);
	};
	const redOn = () => {
		setIsGreen(false);
		setIsYellow(false);
		setIsRed(true);
	};
	const cajita = {
		//LOS ESTILOS PA' LA CAJITA..
		width: "180px", //ancho
		height: "380px", //alto
		border: "30px solid black", //borde
		background: "#000000", //color de fondo

		
	};

	const acme ={
		//LOS ESTILOS PA' LA CAJITA..
	width: "18px", //ancho
	height: "38px", //alto
	border: "3px solid white", //borde
	background: "grey", //color de fondo

	};
	return (
		//LO QUE TE MUESTA

		<div>
			<div
				className="d-flex flex-column mt-5 text-center mx-auto"
				style={cajita}>
				<div>
					<p style={acme}>ACME</p>
				</div>
				<div className="col">
					<button
						onClick={() => greenOn()}
						className={`${
							isGreen === true ? "bg-success" : ""
						} rounded-circle p-5 `}></button>
				</div>
				<div className="col">
					<button
						onClick={() => yellowOn()}
						className={`${
							isYellow === true ? "bg-warning" : ""
						} rounded-circle p-5`}></button>
				</div>
				<div className="col">
					<button
						onClick={() => redOn()}
						className={`${
							isRed === true ? "bg-danger" : ""
						} rounded-circle p-5`}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;

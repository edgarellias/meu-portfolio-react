import "./MyPresentation.css";
import programming from "../assets/programming.gif";

const MyPresentation = () => {
	return (
		<div className="presentationContainer">
			<div className="leftTexts">
				<p class="typing-animation">
					Olá, sou o<span>Edgar Elias</span>
					sou desenvolvedor front-end
				</p>
				{/* <a href="https://www.linkedin.com/in/edgar-elias-997571205/" target="_blank">
					CONTATE-ME
				</a> */}
			</div>
			<div className="rightImg">
				<img src={programming} alt="Homem Programando" />
			</div>
		</div>
	);
};

export default MyPresentation;

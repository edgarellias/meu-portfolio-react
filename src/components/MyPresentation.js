import "./MyPresentation.css";
import programming from "../assets/programming.gif";

const MyPresentation = () => {
	return (
		<div className="presentationContainer">
			<div className="leftTexts">
				<p className="typing-animation">Olá, sou o </p>
				<p className="typing-animation">Edgar Elias</p>
				<p className="typing-animation">desenvolvedor Front-end</p>
				<div className="contactContainer">
				<a href="https://www.linkedin.com/in/edgar-elias-997571205/" rel="noreferrer" target="_blank">
					LinkedIn
				</a>
				<a href="https://drive.google.com/file/d/1yL241bC5v1f2CDAasnF5D93bVm-xXP7e/view?usp=sharing" rel="noreferrer" target="_blank">
					Currículo
				</a>
				</div>
			</div>
			
			<div className="rightImg">
				<img src={programming} alt="Homem Programando" />
			</div>
		</div>
	);
};

export default MyPresentation;

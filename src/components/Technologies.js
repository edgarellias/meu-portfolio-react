import "./Technologies.css";
import TechnologiesData from "./data/TechnologiesData";
const Technologies = () => {
	return (
		<div className="mainContainer">
			<h3>Tecnologias que trabalho: </h3>
			<div className="cardsContainer">
				{TechnologiesData.map((tech) => (
					<div className="cardTech"  key={tech.id}>
						{tech.icon}
						{tech.name}
						
					</div>
				))}
			</div>
		</div>
	);
};

export default Technologies;

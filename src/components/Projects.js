import "./Projects.css"
import ProjectsData from "./data/ProjectsData";

const Projects = () => {
	return (
		<div className="fullContainer">
			<h1>Estes são meus projetos</h1>
			<div className="cardProjectContainer">
				{ProjectsData.map((iten) => (
					<div className="cardProject" key={iten.id}>
						<h3>{iten.name}</h3>
						<img src={iten.photo} alt="Foto do Projeto"></img>
                        <p>{iten.text}</p>
						<a href={iten.url} target="_blank">Acessar</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;

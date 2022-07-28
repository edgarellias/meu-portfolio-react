import "./NavBar.css";
import { FaReact } from "react-icons/fa";
import MyPresentation from "./MyPresentation";

const NavBar = () => {
	return (
		<div className="navContainer">
			<div className="navText">
            <FaReact /><span>Portfolio</span>
			</div>
			<div className="navItens">
				<ul >
					<li>
						<a href={MyPresentation} >Início</a>
					</li>
					<li>
						<a href="" >Tecnologias</a>
					</li>
					<li>
						<a href="" >Projetos</a>
					</li>
					<li>
						<a href="" >Contatos</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;

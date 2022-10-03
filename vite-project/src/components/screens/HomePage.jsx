import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { dbLinks } from "../database/dbLinks";
import { dbNavbar } from "../database/dbNavbar";
import { Title } from "../layout/Title";

export const HomePage = () => {
	return (
		<Container>
			<Presentation>
				<p>Olá, eu sou o</p>
				<p>Edgar Elias</p>
				<p>Desenvolvedor Front-End</p>
			</Presentation>

			<Buttons>
				{dbLinks.slice(0, 2).map((item) => (
					<li key={item.id}>
						<a href={item.to} rel={item.rel} target={item.target} style={{ color: `${item.className}` }}>
							<div>{item.svg}</div>
							{item.title}
						</a>
					</li>
				))}
			</Buttons>
			<ButtonTech>
					<h1>Tecnologias que trabalho</h1>
				{dbNavbar.slice(1, 2).map((item) => (
					<li key={item.id}>
						<NavLink to={item.to} rel={item.rel}>
							{item.title}
						</NavLink>
					</li>
				))}
			</ButtonTech>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
`;

const Presentation = styled.article`
	padding: 50px 0;
	display: flex;
	flex-direction: column;

	p {
		font-size: 1.6rem;
		font-weight: 700;
		line-height: 3rem;
		:nth-child(2) {
			color: #32abf1;
			font-size: 2.5rem;
			font-weight: 800;
		}
	}
`;

const Buttons = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	
	> li {
		> a {
			border: 1px solid #32abf1;
			border-radius: 5px;
			text-decoration: none;
			display: flex;
			align-items: center;
			gap: 5px;
			padding: 10px 20px;
			border-radius: 8px;
			:hover {
				border: 2px solid #32abf1;
				-webkit-box-shadow: 0px 5px 42px 3px rgba(59, 138, 235, 0.91);
				-moz-box-shadow: 0px 5px 42px 3px rgba(59, 138, 235, 0.91);
				box-shadow: 0px 5px 42px 3px rgba(59, 138, 235, 0.91);
				transition: 0.8s;
			}
		}
	}
`;

const ButtonTech = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;

	> h1 {
		padding-top: 20px;
	}
	> li {
		> a {
			border: 1px solid #32abf1;
			border-radius: 5px;
			text-decoration: none;
			display: flex;
			align-items: center;
			gap: 5px;
			padding: 10px 20px;
			border-radius: 8px;
			color: #fff;
			:hover {
				border: 2px solid #32abf1;
				-webkit-box-shadow: 0px 5px 42px 3px rgba(59, 138, 235, 0.91);
				-moz-box-shadow: 0px 5px 42px 3px rgba(59, 138, 235, 0.91);
				box-shadow: 0px 5px 42px 3px rgba(59, 138, 235, 0.91);
				transition: 0.8s;
			}
		}
	}
`;

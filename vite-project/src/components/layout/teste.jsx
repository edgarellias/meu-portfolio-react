import styled from "styled-components";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import perfil from "../../img/perfil.jpg";
import { NavLink } from "react-router-dom";
import { dbNavBar } from "../dataBase/dbNavBar";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((previousState) => !previousState);

	const navbarItems = dbNavBar.map((item) => {
		return (
			<Item key={item.id}>
				<NavLink activeclassname="active" to={item.to} onClick={handleClick}>
					{item.title}
				</NavLink>
			</Item>
		);
	});

	return (
		<NavbarContainer>
			<Profile>
				<img src={perfil} alt="foto de perfil" />
				<NavLink to="sobre">Rodrigo Liberti</NavLink>
			</Profile>
			<div onClick={handleClick}>{isOpen ? <MdClose /> : <GiHamburgerMenu />}</div>
			<Shadow isOpen={isOpen} onClick={handleClick}></Shadow>
			<List isOpen={isOpen}>{navbarItems}</List>
		</NavbarContainer>
	);
};

const NavbarContainer = styled.header`
	background: -webkit-gradient(linear, left top, right bottom, from(#1e1d1d), to(#000));
	width: 100%;
	height: 80px;
	top: 0;
	left: 0;
	padding-left: 30px;
	padding-right: 10px;
	z-index: 30;
	position: fixed;
	align-items: center;
	display: flex;
	color: white;
	justify-content: space-between;

	svg {
		cursor: pointer;
		font-size: 1.8rem;
		margin-right: 10px;
		margin-top: 4px;
	}
	@media screen and (min-width: 768px) {
		gap: 20px;
		padding: 0 100px;

		svg {
			display: none;
		}
	}
`;

const Profile = styled.article`
	display: flex;
	align-items: center;
	gap: 20px;

	img {
		width: 60px;
		height: 60px;
		object-fit: cover;
		border-radius: 50px;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		color: #fff;
	}

	@media screen and (min-width: 768px) {
		gap: 30px;
	}
`;

const Item = styled.li`
	.active {
		color: orange;
		text-decoration: underline;
	}

	a {
		display: inline-block;
		margin-block: 2px;
		text-decoration: none;
		font-weight: 600;
		color: #fff;
		position: relative;
		transition: all 0.5s;

		::after {
			content: "";
			width: 100%;
			height: 1px;
			background-color: orange;
			border-radius: 4px;
			position: absolute;
			left: 0;
			bottom: 0;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.25s ease;
		}

		:hover {
			color: orange;
		}

		:hover::after {
			transform: scaleX(1);
		}
	}
`;

const Shadow = styled.div`
	width: 100%;
	background-color: white;
	height: 100vh;
	top: 80px;
	position: absolute;
	background-color: white;
	opacity: 0.2;
	transition: all 0.5s ease;
	z-index: 10;
	left: ${(p) => (p.isOpen ? 0 : "-100%")};

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const List = styled.ul`
	display: flex;
	list-style: none;
	gap: 30px;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 80%;
		gap: 40px;
		height: 100vh;
		top: 80px;
		position: absolute;
		background-color: rgb(28, 28, 28);
		opacity: 1;
		transition: all 0.6s ease;
		padding: 3em 0;
		z-index: 20;
		left: ${(p) => (p.isOpen ? 0 : "-100%")};
	}
`;

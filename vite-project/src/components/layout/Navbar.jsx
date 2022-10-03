import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { SiReact } from "react-icons/si";

import { dbNavbar } from "../database/dbNavbar";
import { dbName } from "../database/dbName";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((isOpen) => !isOpen);

	return (
		<NavbarHeader>
			<Profile>
				{dbName.map((item) => (
					<li key={item.id}>
						<NavLink to={item.to}>{item.tag}</NavLink>
					</li>
				))}
			</Profile>
			<div onClick={handleClick}>{isOpen ? <MdClose /> : <GiHamburgerMenu />}</div>
			<Shadow isOpen={isOpen} onClick={handleClick}></Shadow>
			<List isOpen={isOpen}>
				{dbNavbar.map((item) => {
					return (
						<ListIten key={item.id}>
							<NavLink onClick={handleClick} activeclassname="active" to={item.to}>
								{item.title}
							</NavLink>
						</ListIten>
					);
				})}
			</List>
		</NavbarHeader>
	);
};

const NavbarHeader = styled.header`
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #2a2a2a;

	width: 100%;
	height: 80px;
	left: 0;
	top: 0;
	position: fixed;

	> div {
		> svg {
			font-size: 2rem;
			margin-right: 10px;
		}
	}
	@media screen and (min-width: 768px) {
		padding: 0 40px;

		> div {
			> svg {
				display: none;
			}
		}
	}
`;

const Profile = styled.ul`
	list-style: none;
	font-size: 1.8rem;
	color: #32abf1;
	font-weight: 700;

	> li {
		display: flex;
		gap: 10px;
		align-items: center;
		> a {
			text-decoration: none;
			color: #32abf1;
			font-weight: 800;
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
		f
	}
`;

const List = styled.ul`
	display: flex;
	list-style: none;
	gap: 30px;
	align-items: center;
	font-size: 1.5rem;
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

const ListIten = styled.li`
	.active {
		color: #32abf1;
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
			background-color: #32abf1;
			border-radius: 4px;
			position: absolute;
			left: 0;
			bottom: 0;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.25s ease;
		}

		:hover {
			color: #32abf1;
		}

		:hover::after {
			transform: scaleX(1);
		}
	}
`;

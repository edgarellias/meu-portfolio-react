import styled from "styled-components";

import { dbLinks } from "../database/dbLinks";
export const HomePage = () => {
	return (
		<Container>
			<Presentation>
				<p>Olá, eu sou o</p>
				<p>Edgar Elias</p>
				<p>Desenvolvedor Front-End</p>
			</Presentation>

			<ul>
				{dbLinks.map((item) => {
					return (
						<li key={item.id}>
							<a href={item.to} rel={item.rel} target={item.target} style={{ color: `${item.className}` }}>
								<div>{item.svg}</div>
								{item.title.toUpperCase()}
							</a>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
	> ul {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;

		> li {
			> a {
				text-decoration: none;
				display: flex;
				align-items: center;
				gap: 5px;
				padding: 10px 20px;
				border: 0 solid #32abf1;
				position: relative;
				border-radius: 8px;
				::before,
				::after {
					content: "";
					position: absolute;
					width: 10px;
					height: 10px;
					border: inherit;
					border-radius: 4px;
					transition: all 1s;
				}
				::before {
					top: 0px;
					left: 0px;
					border-width: 1px 0 0 1px;
				}
				::after {
					bottom: 0px;
					right: 0px;
					border-width: 0 1px 1px 0;
				}
				:hover::before,
				:hover::after {
					width: calc(100%);
					height: calc(100%);
				}
			}

			> div {
				padding-left: 20px;
				> svg {
					width: 20px;
					height: 20px;
					position: absolute;
					top: 2px;
					left: 10px;
				}
			}

			:nth-child(3),
			:nth-child(4),
			:nth-child(5) {
				display: none;
			}
		}
	}
`;

const Presentation = styled.div`
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

import ContactsData from "./data/ContactsData";

const Contacts = () => {
	return (
	<div className="contactsContainer">
		<h1>Estes são meus contatos</h1>
		<div className="contactsItens">
			{ContactsData.map((iten) => (
				<ul>
					<li key={iten.id}>
                        {iten.icon}
                        <a href={iten.url} target={iten.target} rel={iten.rel}>{iten.name}</a>
					</li>
				</ul>
			))}
		</div>
	</div>
)};


export default Contacts;

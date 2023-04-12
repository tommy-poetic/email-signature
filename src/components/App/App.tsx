import React from "react";
import Header from "@components/Header";
import Form from "@components/Form";
import Output from "@components/Output";
import styles from "./App.module.scss";

export type User = Record<(
	| "name"
	| "title"
	| "communityName"
	| "address"
	| "phoneNumber"
	| "url"
), string>;

function App() {
	const [user, setUser] = React.useState<User>({
		name: "John Doe",
		title: "Manager",
		communityName: "Caldwell Heights",
		address: "302 E. Martin Luther King Dr.\nCaldwell, TX 77836",
		phoneNumber: "9794754369",
		url: "https://caldwell-heights.webflow.io/",
	});

	return (
		<section className={styles.app}>
			<Header/>
			<section className={styles.container}>
				<Form user={user} setUser={setUser}/>
				<Output user={user}/>
			</section>
		</section>
	);
}

export default App;

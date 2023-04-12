import React from "react";
import clsx from "clsx";
import viteLogo from "@assets/vite.svg";
import reactLogo from "@assets/react.svg";
import Header from "@components/Header";
import styles from "./App.module.scss";

function App() {
	const [count, setCount] = React.useState(0);

	return (
		<>
			<Header/>
			<div className={styles.app}>
				<div>
					<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className={styles.logo} alt="Vite logo"/>
					</a>
					<a href="https://reactjs.org" target="_blank" rel="noreferrer">
						<img src={reactLogo} className={clsx(styles.logo, styles.react)} alt="React logo"/>
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className={styles.card}>
					<button
						type="button" onClick={() => {
							setCount((count) => count + 1);
						}}
					>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className={styles.readTheDocs}>
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</>
	);
}

export default App;

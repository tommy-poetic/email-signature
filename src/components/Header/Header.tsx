import React from "react";
import PoeticLogo from "@assets/poetic-logo.png";
import styles from "./Header.module.scss";

type HeaderProps = Record<string, unknown>;

function Header() {
	return (
		<section className={styles.header}>
			<img className={styles.logo} src={PoeticLogo} alt="Poetic logo"/>
			<p className={styles.title}>E-Mail Signature Generator</p>
		</section>
	);
}

export default Header;

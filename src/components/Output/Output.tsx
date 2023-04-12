import React from "react";
import type {User} from "@components/App";
import styles from "./Output.module.scss";

type OutputProps = {
	user: User;
};

function Output({user}: OutputProps) {
	return (
		<div className={styles.output}>
			<table border={0} cellSpacing={0} cellPadding={0}>
				<tbody>
					<tr><td className={styles.name}>{user.name}</td></tr>
					<tr><td className={styles.title}>{user.title}</td></tr>
					<br/>
					<tr>
						<td>
							<span className={styles.communityName}>{user.communityName}</span>
							<span> - <a href={`mailto:${user.url}`}>{user.url}</a></span>
						</td>
					</tr>
					<br/>
					<tr className={styles.communityInfo}>
						<td className={styles.address}>{user.address}</td>
						<td className={styles.phoneNumber}><a href={`tel:${user.phoneNumber}`}>{user.phoneNumber}</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Output;

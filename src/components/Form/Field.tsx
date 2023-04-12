import React from "react";
import {capitalCase} from "change-case";
import type {User} from "@components/App";
import styles from "./Form.module.scss";

type FieldProps = {
	name: keyof Omit<User, "socials">;
	type?: JSX.IntrinsicElements["input"]["type"] | "textarea";
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
};

function Input({name, type, user, setUser}: FieldProps) {
	return (
		<>
			<label htmlFor={`${name}-field`}>{`${capitalCase(name)}: `}</label>
			{type === "textarea" ? (
				<textarea
					id={`${name}-field`}
					rows={3}
					value={user[name]} onChange={event => {
						const nextUser = {...user};
						nextUser[name] = event.target.value;
						setUser(nextUser);
					}}
				/>
			) : (
				<input
					id={`${name}-field`}
					type={type}
					value={user[name]} onChange={event => {
						const nextUser = {...user};
						nextUser[name] = event.target.value;
						setUser(nextUser);
					}}
				/>
			)}
		</>
	);
}

function Field({name, type = "text", user, setUser}: FieldProps) {
	return (
		<div className={styles.field}>
			<Input name={name} type={type} user={user} setUser={setUser}/>
		</div>
	);
}

export default Field;

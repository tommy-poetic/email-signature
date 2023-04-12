import React from "react";
import type {User} from "@components/App";
import Field from "./Field.tsx";
import styles from "./Form.module.scss";

type FormProps = {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
};

function Form({user, setUser}: FormProps) {
	return (
		<section className={styles.form}>
			<u>Enter Information:</u>
			<form>
				<Field name="name" user={user} setUser={setUser}/>
				<Field name="title" user={user} setUser={setUser}/>
				<Field name="communityName" user={user} setUser={setUser}/>
				<Field name="address" type="textarea" user={user} setUser={setUser}/>
				<Field name="phoneNumber" type="tel" user={user} setUser={setUser}/>
				<Field name="url" type="url" user={user} setUser={setUser}/>
			</form>
		</section>
	);
}

export default Form;

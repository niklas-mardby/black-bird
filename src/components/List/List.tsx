// Container, Group, Section

import "./List.scss";
import Card from "../Card/Card";
import { useState } from "react";
import { data } from "../../data";

const List = () => {
	const [persons, setPersons] = useState(data);

	const handleDelete = (id: string) => {
		setPersons((prev) =>
			prev.filter((person) => {
				if (person.id !== id) return person;
			})
		);
	};

	const handleReset = () => {
		setPersons(data);
	};

	return (
		<div className="List">
			<h2>List</h2>
			<button onClick={handleReset}>Reset</button>
			<div className="ListWrapper">
				{persons.map((p) => (
					<Card
						key={p.id}
						id={p.id}
						name={p.name}
						hobbies={p.hobbies}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</div>
	);
};

export default List;

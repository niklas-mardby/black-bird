// Container, Group, Section

import { v4 as uuid } from "uuid";
import "./List.scss";
import Card from "../Card/Card";
import { useState } from "react";

type Person = {
	id: string;
	name: string;
	hobbies: string[];
};

const data: Person[] = [
	{
		id: uuid(),
		name: "Stina",
		hobbies: ["brädspel", "sportklättring"],
	},
	{
		id: uuid(),
		name: "Bosse",
		hobbies: ["cosplay", "gymma"],
	},
	{
		id: uuid(),
		name: "Viktor",
		hobbies: ["magi", "forskning", "mekatronik"],
	},
	{
		id: uuid(),
		name: "Amina",
		hobbies: [
			"piratäventyr",
			"husrenovering",
			"navigering",
			"rädda världen",
			"barnuppfostran",
		],
	},
	{
		id: uuid(),
		name: "Vis Telimus",
		hobbies: [
			"störta republiken",
			"simning",
			"intrig",
			"spionering",
			"träna",
		],
	},
];

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
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
};

export default List;

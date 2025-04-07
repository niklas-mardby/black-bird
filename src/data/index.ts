import { v4 as uuid } from "uuid";
import { Person } from "../types";

export const data: Person[] = [
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

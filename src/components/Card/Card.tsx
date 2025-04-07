import { useState } from "react";
import "./Card.scss";

type CardProps = {
	id: string;
	name: string;
	hobbies: string[];
	handleDelete: (id: string) => void;
};

const Card = ({ id, name, hobbies, handleDelete }: CardProps) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className="Card">
			<h3>{name}</h3>
			{open && (
				<ul>
					{hobbies.map((hobby, index) => (
						<li key={index + hobby}>{hobby}</li>
					))}
				</ul>
			)}
			<button onClick={handleClick}>{open ? "Stäng" : "Öppna"}</button>
			<button onClick={() => handleDelete(id)}>Ta bort</button>
		</div>
	);
};

export default Card;

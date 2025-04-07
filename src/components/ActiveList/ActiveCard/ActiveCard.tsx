import "./ActiveCard.scss";

type ActiveCardProps = {
	id: string;
	name: string;
	hobbies: string[];
	open: boolean;
	handleOpen: (id: string) => void;
};

const ActiveCard = ({
	id,
	name,
	hobbies,
	open,
	handleOpen,
}: ActiveCardProps) => {
	const handleClick = () => {
		handleOpen(id);
	};

	return (
		<div className="ActiveCard">
			Name: {name}
			{open && hobbies.map((hobby) => hobby)}
			<button onClick={handleClick}>Öppna</button>
		</div>
	);
};

export default ActiveCard;

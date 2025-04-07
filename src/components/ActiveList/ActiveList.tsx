import { useState } from "react";
import { data } from "../../data";
import ActiveCard from "./ActiveCard/ActiveCard";
import "./ActiveList.scss";

const ActiveList = () => {
	const [open, setOpen] = useState("");

	return (
		<div className="ActiveList">
			<h2>ActiveList</h2>
			{data.map((p) => (
				<ActiveCard
					key={p.id}
					{...p}
					open={open === p.id}
					handleOpen={setOpen}
				/>
			))}
		</div>
	);
};

export default ActiveList;

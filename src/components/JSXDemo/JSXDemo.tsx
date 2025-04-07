import "./JSXDemo.scss";

const JSXDemo = () => {
	const arr = ["apa", "häst", "katt", "hund"];

	const empty = null;
	const notEmpty = "something";

	return (
		<div className="JSXDemo">
			<h2>JSXDemo</h2>
			<p>Expression (värde): {12}</p>
			<p>Expression forts: {arr.length === 0 ? "tom" : arr.length}</p>
			<p>Expr forts: {empty && "hit?"}</p>
			<p>Expr forts: {notEmpty && "hit?"}</p>
			<p>Expression forts: {arr.map((a) => a)}</p>
		</div>
	);
};

export default JSXDemo;

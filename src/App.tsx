import "./App.scss";
import ActiveList from "./components/ActiveList/ActiveList";
import JSXDemo from "./components/JSXDemo/JSXDemo";
import List from "./components/List/List";

function App() {
	return (
		<>
			<h1>black-bird</h1>
			<p>Ett repo för repetition av React</p>
			<ActiveList />
			<List />
			<JSXDemo />
		</>
	);
}

export default App;

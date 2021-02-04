import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: "",
			clicked: false,
			text: "ON",
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state) => {
			let newBtnText = state.clicked ? "ON" : "OFF";
			return {
				...state,
				clicked: !state.clicked,
				text: newBtnText,
			};
		});
	}

	// get call when react render the first time to the page
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<header className="App-header">
					<input
						type="search"
						placeholder="Search a monster"
						onChange={(e) => this.setState({ searchField: e.target.value })}
					></input>
					<CardList monsters={filteredMonsters} />
					<button onClick={() => this.handleClick()}>{this.state.text}</button>
				</header>
			</div>
		);
	}
}

export default App;

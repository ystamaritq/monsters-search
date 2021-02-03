import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
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
		return (
			<div className="App">
				<header className="App-header">
					<CardList monsters={this.state.monsters} />
					<button onClick={() => this.handleClick()}>{this.state.text}</button>
				</header>
			</div>
		);
	}
}

export default App;

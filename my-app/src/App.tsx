import React from "react";
import "./App.css";
import CounterManagement from "./components/CounterManagement";

interface AppState {
	change: boolean;
}
class App extends React.Component<{}, AppState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			change: true,
		};
	}
	clickButton = () => {
		this.setState({ change: !this.state.change });
	};

	render() {
		return (
			<>
				<h1>My React App!</h1>
				{this.state.change && <CounterManagement ownerName='CanonMinds' />}
				<button onClick={this.clickButton}>Change</button>
			</>
		);
	}
}

export default App;

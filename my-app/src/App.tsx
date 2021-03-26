import React from "react";
import "./App.css";
import CounterManagement from "./components/CounterManagement";

interface AppState {
	change: boolean;
}
class App extends React.Component {
	render() {
		return (
			<>
				<h1>My React App!</h1>
				<CounterManagement ownerName='CanonMinds' />
			</>
		);
	}
}

export default App;

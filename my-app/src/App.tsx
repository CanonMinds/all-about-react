import React from "react";
import "./App.css";
import CounterManagement from "./components/CounterManagement";

function App() {
	return (
		<>
			<h1>My React App!</h1>
			<CounterManagement ownerName='CanonMinds' />
		</>
	);
}

export default App;

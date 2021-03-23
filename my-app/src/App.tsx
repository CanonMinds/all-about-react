import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
	return (
		<>
			<h1>My React Udemy Tutorial!</h1>
			<Button type='primary'>Primary</Button>
			<Button>Default</Button>
		</>
	);
}

export default App;

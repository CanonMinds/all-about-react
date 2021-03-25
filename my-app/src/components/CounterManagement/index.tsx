import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";
import axios from "axios";

class CounterManagement extends React.Component<
	CounterManagementProps,
	CounterManagementState
> {
	constructor(props: CounterManagementProps) {
		super(props);

		this.state = {
			counter: 0,
			users: [],
		};
		console.log("constructor");
	}

	handleAddClick = () => {
		this.setState(
			function (prevState) {
				return {
					counter: prevState.counter + 1,
				};
			},
			function () {
				console.log("Callback function.");
			}
		);
	};

	handleSubtractClick = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	// Used in rare cases only.
	static getDerivedStateFromProps(
		props: CounterManagementProps,
		state: CounterManagementState
	) {
		console.log("getDerivedStateFromProps");
		return null;
	}

	clickWindow = () => {
		console.log("clickWindow Event Occur.");
		this.setState({ counter: this.state.counter + 1 });
	};

	componentDidMount() {
		console.log("Component did mount");
		axios.get("https://reqres.in/api/users?page=2").then((response) => {
			const data = response.data;
			const users = data.data.map((userData: any) => userData.first_name);
			this.setState({ users });
		});

		window.addEventListener("click", this.clickWindow);
	}

	componentWillUnmount() {
		window.removeEventListener("click", this.clickWindow);
	}

	render() {
		console.log("render");
		const { ownerName } = this.props;
		const { counter, users } = this.state;
		return (
			<div>
				<h1> Counter Management </h1>
				<h2> Owner Name: {ownerName} </h2>
				<h3> Counter: {counter} </h3>
				<button onClick={this.handleAddClick}>Add</button>
				<button onClick={this.handleSubtractClick}>Subtract</button>
				<div>
					<ul>
						{users.map((user) => (
							<li>{user}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default CounterManagement;

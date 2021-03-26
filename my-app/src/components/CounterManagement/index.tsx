import React from "react";
import {
	CounterManagementProps,
	CounterManagementState,
	UserDataAPI,
} from "./interface";
import axios from "axios";

class CounterManagement extends React.Component<
	CounterManagementProps,
	CounterManagementState
> {
	constructor(props: CounterManagementProps) {
		super(props);

		this.state = {
			user: 1,
			userData: {
				id: 1,
				email: "",
				first_name: "",
				last_name: "",
				avatar: "",
			},
		};

		console.log("constructor");
	}

	handleAddClick = () => {
		this.setState({
			user: this.state.user + 1,
		});
	};

	handleMinusClick = () => {
		this.setState({
			user: this.state.user - 1,
		});
	};

	static getDerivedStateFromProps(
		props: CounterManagementProps,
		state: CounterManagementState
	) {
		console.log("getDerivedStateFromProps");

		return null;
	}

	shouldComponentUpdate(
		nextProps: CounterManagementProps,
		nextState: CounterManagementState
	) {
		console.log("shouldComponentUpdate");

		return true;
	}

	getSnapshotBeforeUpdate(
		prevProps: CounterManagementProps,
		prevState: CounterManagementState
	) {
		console.log("getSnapshotBeforeUpdate");

		return { scrollPosition: "152px" };
	}

	fetchUserData = () => {
		axios
			.get(`https://reqres.in/api/users/${this.state.user}`)
			.then((response) => {
				const userDataAPI = response.data as UserDataAPI;

				this.setState({
					userData: userDataAPI.data,
				});
			});
	};

	componentDidUpdate(
		prevProps: CounterManagementProps,
		prevState: CounterManagementState,
		snapshot: any
	) {
		console.log("componentDidUpdate");
		console.log("snapshot:", snapshot);

		if (prevState.user !== this.state.user) {
			this.fetchUserData();
		}
	}

	componentDidMount() {
		this.fetchUserData();
	}

	render() {
		const { ownerName } = this.props;
		const { user, userData } = this.state;
		const { first_name } = userData;

		console.log("render");

		return (
			<div>
				<h1> Counter Management </h1>
				<h2> Owner Name: {ownerName} </h2>
				<h3> UserId: {user} </h3>
				<h3>{first_name}</h3>
				<button onClick={this.handleAddClick}>Add</button>
				<button onClick={this.handleMinusClick}>Minus</button>
			</div>
		);
	}
}

export default CounterManagement;

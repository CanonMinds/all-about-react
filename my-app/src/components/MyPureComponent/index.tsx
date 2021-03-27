import React from 'react';
import MyReactMemo from '../MyReactMemo';
import { MyPureComponentProps, MyPureComponentState } from './interface';

class MyPureComponent extends React.PureComponent<MyPureComponentProps, MyPureComponentState> {
    constructor(props: MyPureComponentProps) {
        super(props);

        this.state = {
            name: 'Rysh',
            address: {
                city: 'MyCity',
                state: 'MyState',
            }
        }
    }

    handleSetState = () => {
        this.setState({
            name: 'May'
        });

        // Object example
        // const newAddress = {
        //     city: 'MyCity',
        //     state: 'MyState',
        // };

        // this.setState({
        //     address: newAddress
        // })
    }

    render() {
        console.log('render');
        const { name, address } = this.state;

        return (
            <>
                <h1> Pure Component </h1>
                <h2> Name: {name} </h2>
                <h3> City: {address.city} </h3>
                <h3> State: {address.state} </h3>
                {/* <MyReactMemo name={name} address={address} /> */}
                <button onClick={this.handleSetState}>Set State</button>
            </>
        )
    }
}

export default MyPureComponent;
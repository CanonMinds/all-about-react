import React, { ErrorInfo } from 'react';
import ErrorComponent from '../ErrorComponent';
import SecondComponent from '../SecondComponent';
import { FirstComponentProps, FirstComponentState } from './interface';

// TODO: Add Error Handling to App Component
class FirstComponent extends React.Component<FirstComponentProps, FirstComponentState> {
    constructor(props: FirstComponentProps) {
        super(props);

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error: Error) {
        console.log('getDerivedStateFromError:', error);

        return {
            hasError: true,
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('componentDidCatch:', error);
        console.log('componentDidCatch:', info);
    }

    render() {
        return (
            <React.Fragment>
                <h1>First Component</h1>
                {this.state.hasError ? <ErrorComponent /> : <SecondComponent />}
            </React.Fragment>
        )
    }
}

export default FirstComponent;
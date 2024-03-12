import React, { Component } from 'react';

import './styles.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            name: ''
        };
    }

    handleChange = evt => {
        this.setState({
            name: evt.target.value
        });
    }
    handleClick = evt => {
        this.setState({
            displayName: this.state.name
        });
    }
    render () {
        return(
            <>
                <h1>Welcome to the App</h1>
                <p>Hi there, {this.state.displayName || "we have not been introduced"}</p>
                <input value={this.state.name} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Update name</button>
            </> 
        );
    }
}

export default App;
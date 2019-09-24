import React from "react";
import Users from "./Users.json";
import Table from "./Table";
// import Profile from "./Profile";
import InputSearch from "./InputSearch";


import "./styles.css";

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: Users.results,
            searchText: ""
        }
    }

    queryText = (input) => {
        this.setState({
            searchText: input
        })
    }

    render() {
        console.log('state is ', this.state.searchText)
        return (
            <div className="App">
                <h1>User Management</h1>
                <InputSearch searchText={this.state.searchText} query={this.queryText} />
                <Table users={this.state.userData} queryText={this.state.searchText} />
            </div>
        );
    }
}


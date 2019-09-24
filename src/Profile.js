import React from "react";
import Users from "./Users.json";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
    render() {
        console.log(this.props.match.params.id)
        console.log(Users.results)
        const result = Users.results.filter(user => {
            return (
                user.login.uuid === this.props.match.params.id
            )
        })
        return (
            <div>
                <div className="profile-wrapper">
                    <img src={result[0].picture.large} alt={result[0].name.first} />
                    <h1>Profile page for {result[0].name.first}</h1>
                    <Link to="/"><span>Back</span></Link>
                </div>
            </div>
        );
    }
}
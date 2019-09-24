import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class TableShell extends React.Component {
    render() {
        if (this.props.length === 0) {
            return (
                <table>
                    <thead>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>DOB</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="empty">
                            <td colSpan="3">{this.props.list}</td>
                        </tr>
                    </tbody>
                </table>
            );
        }
        else {
            return (
                <table>
                    <thead>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>DOB</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list}
                    </tbody>
                </table>
            );
        }
    }
}
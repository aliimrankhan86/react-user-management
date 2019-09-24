import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableShell from "./TableShell";

export default class Table extends React.Component {
    render() {
        const list = this.props.users.map((user, index) => {
            let date = new Date(user.dob.date);
            date = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
            return (
                <tr key={user.login.uuid}>
                    <td><Link to={`/user/${user.login.uuid}`}>{user.name.first}</Link></td>
                    <td>{user.name.last}</td>
                    <td>{date}</td>
                </tr>
            );
        });

        const filter = this.props.users.filter(user => {
            return (
                user.name.first.includes(this.props.queryText)
            );
        }).map(user => {
            let date = new Date(user.dob.date);
            date = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
            return (
                <tr key={user.name.first}>
                    <td><Link to={`/user/${user.login.uuid}`}>{user.name.first}</Link></td>
                    <td>{user.name.last}</td>
                    <td>{date}</td>
                </tr>
            );
        })

        const noOfLength = filter.length

        if (this.props.queryText === "") {
            return (
                <div>
                    {/* <table>
                        <thead>
                            <tr>
                                <td>First name</td>
                                <td>Last name</td>
                                <td>DOB</td>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table> */}
                    <TableShell list={list} />
                </div>
            );
        }

        else if (noOfLength === 0) {
            return (
                <div>
                    {/* <table>
                        <thead>
                            <tr>
                                <td>First name</td>
                                <td>Last name</td>
                                <td>DOB</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="empty">
                                <td colSpan="3">No Matching Result found</td>
                            </tr>
                        </tbody>
                    </table> */}
                    <TableShell length={0} list={'No Matching Result Found'} />
                </div>
            )
        }

        else {
            return (
                <div>
                    {/* <table>
                        <thead>
                            <tr>
                                <td>First name</td>
                                <td>Last name</td>
                                <td>DOB</td>
                            </tr>
                        </thead>
                        <tbody>
                            {filter}
                        </tbody>
                    </table> */}
                    <TableShell list={filter} />
                </div>
            );
        }
    }
}
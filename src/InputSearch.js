import React from "react";

export default class Table extends React.Component {
    search = (e) => {
        this.props.query(e.target.value)
    }

    render() {
        return (
            <div className="inputsearch">
                <input type="text" placeholder="search firstname" onChange={this.search} />
            </div>
        );
    }
}

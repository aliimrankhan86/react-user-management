import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import Profile from "./Profile";


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/user/:id" component={Profile} />
          <Route path="/" exact component={Wrapper} />
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

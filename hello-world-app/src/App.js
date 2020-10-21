import React from "react";
import "halfmoon/css/halfmoon-variables.min.css";
import * as halfmoon from "halfmoon";
import Nav from "./components/Nav";
import { LoadingComponent } from "./components/LoadingComponent";
import { Card } from "./components/Card";

const titles = ["Docs", "FAQ", "Sign-In", "Register"];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    halfmoon.onDOMContentLoaded();

    await fetch("/products")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="page-wrapper with-navbar">
        <Nav titlesToRender={titles} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row">
              {data ? data.map((x) => <Card item={x} />) : <LoadingComponent />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

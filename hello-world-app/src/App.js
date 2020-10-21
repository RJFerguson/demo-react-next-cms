import React from "react";
import { connect } from "react-redux";
import "halfmoon/css/halfmoon-variables.min.css";
import * as halfmoon from "halfmoon";
import Nav from "./components/Nav";
import { LoadingComponent } from "./components/LoadingComponent";
import { Card } from "./components/Card";
import { fetchProductData, getData } from "./state/simpleState";

const titles = ["Docs", "FAQ", "Sign-In", "Register"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    halfmoon.onDOMContentLoaded();
    this.props.UpdateData();
    this.props.GetData();

    // await fetch("/products")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    const { productData } = this.props;
    return (
      <div className="page-wrapper with-navbar">
        {console.log(this.state, this.props)}
        <Nav titlesToRender={titles} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row">{this.props.counterData}</div>
            <div className="row">
              {productData ? (
                productData.map((x) => <Card item={x} />)
              ) : (
                <LoadingComponent />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  counterData: store.data,
  productData: store.fetchedData,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateData: () => dispatch(fetchProductData()),
  GetData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

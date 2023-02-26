import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  state = {
    countries: null,
  };

  getData = () => {
    axios
      .get("http://localhost:8080")
      .then((res) =>
        this.setState(
          {
            countries: res.data,
          },
          // console.log(res.data)
        )
      )

      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state.countries)
    return <div>App</div>;
  }
}

import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default class App extends Component {
  state = {
    countries: [],
  };

  getData = () => {
    axios
      .get("http://localhost:8080")
      .then((res) =>
        this.setState(
          {
            countries: res.data,
          }
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
    console.log(this.state.countries);
    return (
      <div className="bg-slate-100">
        <Header />
        <Main country={this.state.countries} />
        {/* <div>{(this.state.countries).map((country, index) => {
          return (<h2 key={index}>{country.name}</h2>)
        })}</div> */}
      </div>
    );
  }
}

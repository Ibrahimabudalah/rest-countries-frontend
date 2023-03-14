import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Country from "./Components/Country/Country";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <BrowserRouter>
        <div className="bg-lightBackground h-screen dark:bg-darkBackground dark:text-white">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Main countries={this.state.countries} />}
            />
            {/* <Route
              path={"/country"}
              element={<Country country={this.state.countries} />}
            /> */}
            {/* <Main countries={this.state.countries} />
            <Country country={this.state.countries} /> */}

            {this.state.countries.map((indvCountry, index) => {
              return (
                <Route
                  path={`/${indvCountry.name}`}
                  element={<Country country={indvCountry} />}
                  key={index}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

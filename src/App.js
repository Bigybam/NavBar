import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Products from "./components/products";
import { Route, Routes } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Routes>
					<Route path="/products" component={Products} />
				</Routes>
			</div>
		);
	}
}

export default App;

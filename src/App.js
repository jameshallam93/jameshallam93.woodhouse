import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"
import { NavBar } from "./components/navbar/NavBar"
import { Footer } from "./components/footer/Footer"
import { Contact } from "./components/contact/Contact"
import { Gallery } from "./components/gallery/Gallery"

import {
	BrowserRouter as Router,
	Switch,
	Route
}
	from "react-router-dom"


import "./App.css"

const App = () => {
	return (
		<div className="App">
			<Header />
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

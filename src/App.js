import { Header } from "./components/header/Header"
import { Gallery } from "./components/gallery/Gallery"
import { ExpandingInfo } from "./components/expandingInfo/ExpandingInfo"
import { NavBar } from "./components/navbar/NavBar"
import { AboutMe } from "./components/aboutme/AboutMe"
import { Footer } from "./components/footer/Footer"
import "./App.css"

const App = () => {
	return (
		<div className="App">
			<Header />
			<NavBar />

			<Gallery />



			<AboutMe />
			<Footer />
		</div>
	);
}

export default App;

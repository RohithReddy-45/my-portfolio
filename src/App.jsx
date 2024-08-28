import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<div className="min-w-[320px] bg-white text-primary">
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
			<Analytics />
		</div>
	);
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { About } from './views/about';
import { Home } from './views/home';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;

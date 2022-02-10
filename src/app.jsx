import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
	return (
		<div className="App">
			<Routes>
				{routes.map((item, key)=> <Route key={key} path={item.path} element={item.element} />)}
			</Routes>
		</div>
	);
}

export default App;

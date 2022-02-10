import { About } from './views/about';
import { Home } from './views/home';
import { Login } from './views/login';

export const routes = [
	{
		element: <Login />,
		path: '/login',
	},
	{
		element: <Home />,
		path: '/',
	},
	{
		element: <About />,
		path: '/about',
	}
];

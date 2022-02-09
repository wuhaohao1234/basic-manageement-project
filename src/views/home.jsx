import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useState,useEffect } from 'react';
import { getDujitang } from '../services/api';

export function Home() {
	const [message, setMessage] = useState('');

	useEffect(async () => {
		try {
			const result = await getDujitang();
			setMessage(result.data.comment);		
		} catch (error) {
			console.error(error);		
		}

	}, []);
	return (
		<>
			<main>
				<h2>{message}</h2>
			</main>
			<nav>
				<Link to="/about">About</Link>
				<Button type="primary">Button</Button>
			</nav>
		</>
	);
}

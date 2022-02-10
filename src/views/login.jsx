import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

export function Login() {
	const navigagte = useNavigate();
	const hanleClick = () => {
		localStorage.setItem('token', 'abcdefg');
		navigagte('/');	
	};
	return (
		<div>
			<h2>登陆</h2>
			<Button onClick={hanleClick} type="primary" >设置token</Button>
		</div>
	);
}

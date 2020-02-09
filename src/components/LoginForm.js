import React, { useState } from 'react';

const LoginForm = (props) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		fetch(`http://localhost:3000/api/v1/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem("token", data.jwt)
			props.handleLogin(data.user)
		})
		setEmail("")
		setPassword("")
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Email:</label>
				<input type="text" value={email} onChange={handleEmailChange} placeholder="email" />

				<label>Password:</label>
				<input type="password" value={password} onChange={handlePasswordChange} placeholder="password" />

				<input type="submit">Submit</input>
			</form>
		</div>
	)
}

export default LoginForm;
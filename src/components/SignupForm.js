import React, { useState } from 'react';

const SignupForm = (props) => {
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")

	return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label>Email:</label>
				<input type="text" onChange={this.handleChange} value={email} name="email" />

				<label>Password:</label>
				<input type="password" onChange={this.handleChange} value={password} name="password" />
			</form>
		</div>
	)

}

export default SignupForm;
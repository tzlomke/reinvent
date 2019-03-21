import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			username: "",
			password: "",
			confirmPassword: "",
			errors: {}
		};
	}

	onChange = event => {
			this.setState({ [event.target.id]: event.target.value });
	};

	onSubmit = event => {

		event.preventDefault();
		
		const newUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			username: this.state.username,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			fullname: `${this.state.firstName} ${this.state.lastName}`
		};
		
	console.log(newUser);
	};

	render() {

		const { errors } = this.state;
		
		return (
			<div className="container">
				<div className="row">
					<div className="col s8 offset-s2">
					
						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">keyboard_backspace</i> Back to
							home
						</Link>
						
						<div className="col s12" style={{ paddingLeft: "11.250px" }}>
							<h4>
							<b>Register</b> below
							</h4>
							<p className="grey-text text-darken-1">
							Already have an account? <Link to="/login">Log in</Link>
							</p>
						</div>

						<form noValidate onSubmit={this.onSubmit}>

							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.firstName}
									error={errors.name}
									id="firstName"
									type="text"
								/>
								<label htmlFor="firstName">First Name</label>
							</div>

							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.lastName}
									error={errors.name}
									id="lastName"
									type="text"
								/>
								<label htmlFor="lastName">Last Name</label>
							</div>

							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.username}
									error={errors.name}
									id="username"
									type="text"
								/>
								<label htmlFor="userame">Userame</label>
							</div>

							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
								/>
								<label htmlFor="password">Password</label>
							</div>

							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.password2}
									error={errors.password2}
									id="confirmPassword"
									type="password"
								/>
								<label htmlFor="confirmPassword">Confirm Password</label>
							</div>
							
							<div className="col s12" style={{ paddingLeft: "11.250px" }}>
								<button
									style={{
									width: "150px",
									borderRadius: "3px",
									letterSpacing: "1.5px",
									marginTop: "1rem"
									}}
									type="submit"
									className="btn btn-large waves-effect waves-light hoverable blue accent-3"
								>
									Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
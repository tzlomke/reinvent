import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classNames from "classnames";
import "./style.css";

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
	};

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to news-feed, can change
		if (this.props.auth.isAuthenticated) {
		 	this.props.history.push("/news-feed");
		}
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		};
	};

	onChange = event => {
		this.setState({ [event.target.id]: event.target.value });
	};

	labelMove = (event, call) => {
		const { value } = event.target;
		const { id } = event.target;
		const labels = document.getElementsByTagName('label');
		const element = () => {
			for (let i = 0; i < labels.length; i++) {
				if(labels[i].htmlFor === id) {
					return labels[i];
				};
			};
		};
		if(call === 'focus') {
			element().className = 'active';
		} else if(call === 'blur') {
			if(value === '') {
				element().className = '';
			};
		};
	};

	onFocus = event => {
		this.labelMove(event, 'focus');
	};

	onBlur = event => {
		this.labelMove(event, 'blur');
	};

	onSubmit = event => {

		event.preventDefault();
		
		const newUser = {
			firstName: this.state.firstName.trim(),
			lastName: this.state.lastName.trim(),
			username: this.state.username.trim(),
			password: this.state.password.trim(),
			confirmPassword: this.state.confirmPassword.trim(),
			fullName: this.state.firstName.trim() + " " + this.state.lastName.trim()
		};
		
		this.props.registerUser(newUser, this.props.history);
	};

	render() {

		const { errors } = this.state;
		
		return (
			<div className="container">
				<div className="row">
					<div className="col s8 offset-s2">
					
						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">keyboard_backspace</i> 
							Back to	home
						</Link>
						
						<div className="col s12" style={{ paddingLeft: "11.250px" }}>
							<h4>
								<span style={{fontSize: "45px"}}>Register</span> below
							</h4>
							<p className="grey-text text-darken-1">
								Already have an account? <Link to="/login">Log in</Link>
							</p>
						</div>

						<form noValidate onSubmit={this.onSubmit}>

							<div className="input-field col s12">
								<input
									onBlur={this.onBlur}
									onFocus={this.onFocus}
									onChange={this.onChange}
									value={this.state.firstName}
									errors={errors.firstName}
									id="firstName"
									type="text"
									className={classNames("", {
										invalid: errors.firstName
									})}
								/>
								<label htmlFor="firstName">First Name</label>
								<span className="red-text">{errors.firstName}</span>
							</div>

							<div className="input-field col s12">
								<input
									onBlur={this.onBlur}
									onFocus={this.onFocus}
									onChange={this.onChange}
									value={this.state.lastName}
									errors={errors.lastName}
									id="lastName"
									type="text"
									className={classNames("", {
										invalid: errors.lastName
									})}
								/>
								<label htmlFor="lastName">Last Name</label>
								<span className="red-text">{errors.lastName}</span>
							</div>

							<div className="input-field col s12">
								<input
									onBlur={this.onBlur}
									onFocus={this.onFocus}
									onChange={this.onChange}
									value={this.state.username}
									errors={errors.username}
									id="username"
									type="text"
									className={classNames("", {
										invalid: errors.username
									})}
								/>
								<label htmlFor="username">Userame</label>
								<span className="red-text">{errors.username}</span>
							</div>

							<div className="input-field col s12">
								<input
									onBlur={this.onBlur}
									onFocus={this.onFocus}
									onChange={this.onChange}
									value={this.state.password}
									errors={errors.password}
									id="password"
									type="password"
									className={classNames("", {
										invalid: errors.password
									})}
								/>
								<label htmlFor="password">Password</label>
								<span className="red-text">{errors.password}</span>
							</div>

							<div className="input-field col s12">
								<input
									onBlur={this.onBlur}
									onFocus={this.onFocus}
									onChange={this.onChange}
									value={this.state.confirmPassword}
									errors={errors.confirmPassword}
									id="confirmPassword"
									type="password"
									className={classNames("", {
										invalid: errors.confirmPassword
									})}
								/>
								<label htmlFor="confirmPassword">Confirm Password</label>
								<span className="red-text">{errors.confirmPassword}</span>
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
									className="btn auth-button"
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

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
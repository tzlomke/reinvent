import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classNames from "classnames";
import "./style.css"

class Login extends Component {

	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
			errors: {}
		};
	};

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to news-feed
		if (this.props.auth.isAuthenticated) {
		  	this.props.history.push("/news-feed");
		}
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
		  	this.props.history.push("/news-feed"); // push user to news feed when they login
		}
		
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = event => {
		this.setState({ [event.target.id]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		const userData = {
			username: this.state.username,
			password: this.state.password
		};
		this.props.loginUser(userData);
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

	render() {
		const { errors } = this.state;
		
		return (
			<div className="container">
				<div style={{ marginTop: "4rem" }} className="row">
					<div className="col s8 offset-s2">

						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">keyboard_backspace</i> Back to
							home
						</Link>

						<div className="col s12" style={{ paddingLeft: "11.250px" }}>
							<h4>
								<span style={{fontSize: "45px"}}>Log in</span>  below
							</h4>
							<p className="grey-text text-darken-1">
								Don't have an account? <Link to="/register">Register</Link>
							</p>
						</div>

						<form noValidate onSubmit={this.onSubmit}>

							<div className="input-field col s12">
								<input
									onFocus={this.onFocus}
									onBlur={this.onBlur}
									onChange={this.onChange}
									value={this.state.username}
									errors={errors.username}
									id="username"
									type="text"
									className={classNames("", {
										invalid: errors.username || errors.usernameNotFound
									})}
								/>
								<label htmlFor="username">Username</label>
								<span className="red-text">
									{errors.username}
									{errors.usernameNotFound}
								</span>
							</div>

							<div className="input-field col s12">
								<input
									onFocus={this.onFocus}
									onBlur={this.onBlur}
									onChange={this.onChange}
									value={this.state.password}
									errors={errors.password}
									id="password"
									type="password"
									className={classNames("", {
										invalid: errors.password || errors.passwordIncorrect
									})}
								/>
								<label htmlFor="password">Password</label>
								<span className="red-text">
									{errors.password}
									{errors.passwordIncorrect}
								</span>
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
									Log in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: '', password: ''};
  }

  formInputHandler = (e) => this.setState({[e.target.name]: e.target.value})
  
  submitHandler = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.formInputHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.formInputHandler} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

import React from 'react'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/login', options)
      .then(res => res.json())
      .then( payload => {
        localStorage.setItem('token', payload.token)
        localStorage.setItem('username', payload.username)
        this.props.updateUser(payload.useranme)
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' name='username' placeholder='username' />
          <input onChange={this.handleChange} type='text' name='password' placeholder='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

//gives us access to history prop on the login form
const LoginWithRouter = withRouter(LoginForm)
export default LoginWithRouter

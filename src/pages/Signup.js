import React from 'react'
import { withRouter } from 'react-router-dom';
import { Form, TextArea, Button, Grid } from 'semantic-ui-react'

class Signup extends React.Component {

  state = {
    username: '',
    password_digest: '',
    first_name: '',
    last_name: '',
    bio: '',
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
    fetch('http://localhost:3000/users', options)
      .then(res => res.json())
      .then(({ username }) => this.updateUser(username))
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered={true} >
          <Grid.Column width={10} >
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' name="first_name" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input name="last_name" placeholder='Last Name' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input name="username" placeholder='Username' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' name="password_digest" placeholder='Password' onChange={this.handleChange} />
            </Form.Field>

            <Form.Field control={TextArea}
              name="bio"
              label='Bio'
              placeholder='Talk about yourself here...'
              onChange={this.handleChange} />
              <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>


    )
  }
}

//gives us access to history prop on the signup form
const SignupWithRouter = withRouter(Signup)
export default SignupWithRouter

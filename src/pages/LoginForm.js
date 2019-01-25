import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Form, Button, Segment } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    fetch("http://localhost:3000/login", options)
      .then(res => res.json())
      .then(payload => {
        localStorage.setItem("token", payload.token);
        localStorage.setItem("id", payload.id);
        this.props.updateUser(payload.id);
        this.props.history.push("/");
      });
  };

  linkToSignup = () => {
    this.props.history.push("/signup")
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row style={{ marginTop: "50px" }} centered={true}>
            <Grid.Column width={10} computer={12} widescreen={8}>
              <Segment color="blue">
                <h1>Login:</h1>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>User Name</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="username"
                      placeholder="username"
                    />
                    <label>Password</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="password"
                      placeholder="password"
                    />
                  </Form.Field>
                  <Button primary type="submit">Login</Button>
                  <Button color="green" onClick={this.linkToSignup}>Create an account</Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

//gives us access to history prop on the login form
const LoginWithRouter = withRouter(LoginForm);
export default LoginWithRouter;

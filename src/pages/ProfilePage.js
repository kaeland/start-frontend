import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class ProfilePage extends Component {
  state = {
    userData: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/users/1').
    then(res => res.json()).
    then(json => this.setState({ userData: json }))
  }

  render() {
    return (
      <div>
        <h1>ProfilePage</h1>

        {this.state.userData === {} ?
        <p>Loading...</p> :
          (
        <Card>
          <Card.Content>
            <Card.Header>
              {this.props.user.first_name} {this.props.user.last_name}
            </Card.Header>
            <Card.Meta>{this.props.user.username}</Card.Meta>
            <Card.Description>
              {this.props.user.bio}
            </Card.Description>
          </Card.Content>
        </Card>
      )
        }
      </div>
    );
  }
}

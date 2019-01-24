import React, { Component } from "react";
import { Card } from 'semantic-ui-react'

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>ProfilePage</h1>
        <Card>
          <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>
              Matthew is a pianist living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

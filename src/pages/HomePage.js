import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Container>
        <h1>Welcome to St.Art</h1>
        <img src="https://images.unsplash.com/photo-1518558997970-4ddc236affcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="start background image"/>
        </Container>
      </div>
    )
  }
}
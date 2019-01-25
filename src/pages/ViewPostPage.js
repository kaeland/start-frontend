import React, { Component } from "react";
import { Image, Container } from "semantic-ui-react";

export default class ViewPostPage extends Component {
  render() {
    return (
      <div>
        <h1>ViewPostPage</h1>
        {this.props.location.photo === undefined ? null : (
          <div>
            <Container>
              <Image src={this.props.location.photo.image} size="large" />
            </Container>
            <Container>
              <h1>Title: {this.props.location.photo.title}</h1>
              <h3>Location: {this.props.location.photo.location}</h3>
              <h3>Caption: {this.props.location.photo.caption}</h3>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ProfilePage extends Component {
  state = {
    userData: {}
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/1`)
      .then(res => res.json())
      .then(json => this.setState({ userData: json }));
  }

  render() {
    return (
      <div>
        <h1>ProfilePage</h1>

        {this.state.userData === {} ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Card>
              <Card.Content>
                <Card.Header>
                  {this.state.userData.first_name}{" "}
                  {this.state.userData.last_name}
                </Card.Header>
                <Card.Meta>{this.state.userData.username}</Card.Meta>
                <Card.Description>{this.state.userData.bio}</Card.Description>
              </Card.Content>
            </Card>
            {console.log(this.state.userData.photos)}
            {/*<Card.Group>
              {this.state.userData.photos.map(photo => {
                return (
                  <Link
                    key={photo.id}
                    to={{
                      pathname: `/browse/${photo.id}`,
                      photo: photo
                    }}
                  >
                    <Card>
                      <Image src={photo.image} />
                      <Card.Content>
                        <Card.Header>Title: {photo.title}</Card.Header>
                        <Card.Meta>
                          <span className="date">
                            Location: {photo.location}
                          </span>
                        </Card.Meta>
                        <Card.Description>{photo.caption}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Icon name="comment" />
                        Comments
                      </Card.Content>
                    </Card>
                  </Link>
                );
              })}
            </Card.Group>
            */}
          </div>
        )}
      </div>
    );
  }
}

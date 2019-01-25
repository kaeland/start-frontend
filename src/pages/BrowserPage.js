import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

// style={{ display: 'flex', flexWrap: 'wrap', margin: '5px' }}

export default class BrowserPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row style={{ marginTop: "50px" }} centered={true}>
            <Grid.Column width={14} computer={14} widescreen={10}>
              <h1 style={{ paddingBottom: "50px" }}>
                Check out the local pics...
              </h1>
              <Card.Group>
                {this.props.photos.map(photo => {
                  return (
                    <Link
                      key={photo.id}
                      to={{
                        pathname: `/browse/${photo.id}`,
                        photo: photo
                      }}
                    >
                      <Card
                        style={{
                          margin: "5px",
                          height: "500px",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                      >
                        <Image src={photo.image} />
                        <Card.Content>
                          <Card.Header>Title: {photo.title}</Card.Header>
                          <Card.Meta>
                            <span className="date">
                              Location: {photo.location}
                            </span>
                          </Card.Meta>
                          <Card.Description
                            style={{ textOverflow: "ellipsis" }}
                          >
                            {photo.caption}
                          </Card.Description>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

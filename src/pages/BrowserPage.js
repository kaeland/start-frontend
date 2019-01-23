import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class BrowserPage extends Component {

  render() {
    return (
      <div>
        <h1>Check out the local pics</h1>
        {this.props.photos.map(photo => {
          return (
            <Card>
              <Image src={photo.image} />
              <Card.Content>
                <Card.Header>Title: {photo.title}</Card.Header>
                <Card.Meta>
                  <span className="date">Location: {photo.location}</span>
                </Card.Meta>
                <Card.Description>
                  {photo.caption}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="comment" />
                  Comments
                </a>
              </Card.Content>
            </Card>


          )
        })}
      </div>
    )
  }
}

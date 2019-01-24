import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// style={{ display: 'flex', flexWrap: 'wrap', margin: '5px' }}

export default class BrowserPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ paddingBottom: '50px'}}>Check out the local pics</h1>
        <Card.Group>
        {this.props.photos.map(photo => {
          return (
            <Link key={photo.id} to={{
                pathname: `/browse/${photo.id}`,
                photo: photo
              }}>
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
                    <Icon name="comment" />
                    Comments
                </Card.Content>
              </Card>

            </Link>
          )
        })}
        </Card.Group>
      </div>
    )
  }
}

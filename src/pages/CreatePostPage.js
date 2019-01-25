import React, { Component } from "react";
import { Button, TextArea, Form, Grid, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const postBg = {
  backgroundColor: "#c4dafc"
};

class CreatePostPage extends Component {
  state = {
    title: "",
    location: "",
    caption: "",
    image: "",
    picture: '',
    user_id: 1
  };

  onChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  fileHandler = (e) => {
    this.setState({ picture:  e.target.files[0] })
  }

  onSubmitHandler = e => {

    e.preventDefault();
    let title = this.state.title;
    let location = this.state.location;
    let caption = this.state.caption;
    let image = this.state.image
    let user = this.state.user

    const formData = new FormData()
    formData.append('title', this.state.title)
    formData.append('location', this.state.location)
    formData.append('captions', this.state.captions)
    formData.append('image', this.state.image)
    formData.append('picture', this.state.picture)
    formData.append('user_id', this.state.user)

    let options = {
      method: "POST",
      body: formData
    };

    fetch("http://localhost:3000/photos", options)
      .then(res => res.json())
      .then((photo) => this.props.photoUpdate(photo))

      this.props.history.push('/browse', this.state)

  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row style={{ marginTop: "50px" }} centered={true}>
            <Grid.Column width={10} computer={12} widescreen={8}>
              <Segment color="blue">
                <h1>Create a photo post below...</h1>
                <Form onSubmit={this.onSubmitHandler} className="4 wide column">
                  <Form.Field>
                    <label>Title</label>
                    <input
                      placeholder="Title"
                      name="title"
                      onChange={this.onChangeHandler}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Location</label>
                    <input
                      name="location"
                      placeholder="Location"
                      onChange={this.onChangeHandler}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Image URL</label>
                    <input
                      name="image"
                      placeholder="Image URL"
                      onChange={this.onChangeHandler}
                    />
                  </Form.Field>
                  <Form.Field
                    control={TextArea}
                    name="caption"
                    label="Caption"
                    placeholder="Tell us about your photo..."
                    onChange={this.onChangeHandler}
                  />
                <input type='file' onChange={this.fileHandler}/>
                  <Button primary type="submit">Submit</Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
const createPostPageWithRouter = withRouter(CreatePostPage);

export default createPostPageWithRouter;

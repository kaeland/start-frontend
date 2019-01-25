import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import Navbar from './components/Navbar'
import BrowserPage from './pages/BrowserPage'
import CreatePostPage from './pages/CreatePostPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ViewPostPage from './pages/ViewPostPage'
import LoginForm from './pages/LoginForm'
import Signup from './pages/Signup'


class App extends Component {
  state = {
    photos: [],
    users: [],
    user: localStorage.getItem("id")
  }

  updateUser = (id) => {
    this.setState({ user: id })
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/photos')
      .then(response => response.json())
      .then(photos => this.setState({ photos: photos }))

    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => this.setState({ users: users }))
  }


//TODO make withRouter
//have it push to history after creating an object to change the url OR change to object you get back
  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/browse" component={() => <BrowserPage photos={this.state.photos} />}
            />
          <Route exact path="/browse/:id" component={ViewPostPage} />
          <Route exact path="/browse/:id/create" component={CreatePostPage} />
          <Route exact path="/user/:id/profile" render={(props) => {
            return ( this.state.user
                ? <ProfilePage renderProps={props} user={this.state.user} />
                : <LoginForm updateUser={this.updateUser} />
              )
            }} />
          <Route exact path="/login" component={() => <LoginForm updateUser={this.updateUser} />}
            />
          <Route exact path="/signup" component={() => <Signup updateUser={this.updateUser} />} />
        </div>
      </Router>
    );
  }
}

export default App;

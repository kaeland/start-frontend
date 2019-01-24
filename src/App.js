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
    user: localStorage.getItem("username")
  }

  updateUser = (user) => {
    this.setState({ user:user })
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
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/browse" component={() => <BrowserPage photos={this.state.photos} />}
            />
          <Route exact path="/browse/:id" component={ViewPostPage} />
          <Route exact path="/browse/:id/create" component={CreatePostPage} />
          <Route exact path="/user/:id/profile" render={(props) => <ProfilePage userId={props.match.params.id} user={this.state.users.length ? this.state.users[0] : null } />}
            />
          <Route exact path="/login" component={() => <LoginForm user={this.state.user} updateUser={this.updateUser} />}
            />
          <Route exact path="/signup" component={() => <Signup updateUser={this.updateUser} />} />
        </div>
      </Router>
    );
  }
}

export default App;

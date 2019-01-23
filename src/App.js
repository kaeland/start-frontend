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

class App extends Component {
  state = {
    photos: []
  }

  componentDidMount = () => {
    fetch('')
  }  

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/browse" component={BrowserPage} />
          <Route exact path="/browse/:id" component={ViewPostPage} />
          <Route exact path="/browse/:id/create" component={CreatePostPage} />
          <Route exact path="/user/:id/profile" component={ProfilePage} />
        </div>
      </Router>
    );
  }
}

export default App;

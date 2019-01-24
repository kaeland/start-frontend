import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/browse">
          <Menu.Item
            name="browse photos"
            active={activeItem === "browsePhotos"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/browse/:id/create">
          <Menu.Item
            name="postPhoto"
            active={activeItem === "postPhoto"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/user/:id/profile">
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

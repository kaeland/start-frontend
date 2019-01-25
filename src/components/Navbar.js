import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class NavWithOutRouter extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log();
  };

  render() {
    const { activeItem } = this.state;
    // console.log(this.props.match.path);
    console.log(this.props.user);
    // const path = this.props.match.path;
    // const position = path === "/" ? "absolute" : "static";
    return (
      <Menu
        style={{
          marginBottom: "0px"
        }}
      >
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
        {this.props.user && (
          <Menu.Menu>
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
          </Menu.Menu>
        )}

        <Menu.Menu position="right">
          <Link to="/signup">
            <Menu.Item
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/login">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

const Navbar = withRouter(NavWithOutRouter);

export default Navbar;

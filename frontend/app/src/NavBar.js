import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withRouter } from "react-router";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import House from "./assets/casa.svg";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <List component="nav">
          <ListItem component="div">
            <ul className="menu-bar">
              <li>
                <Link to="/">
                  <img src={House} className="imglogo" />
                </Link>
              </li>
              <li>
                <Link to="/papel">Papel</Link>
              </li>
              <li>
                <Link to="/carbono">Carbono</Link>
              </li>
              <li>
                <Link to="/agua">Água</Link>
              </li>
            </ul>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default NavBar;

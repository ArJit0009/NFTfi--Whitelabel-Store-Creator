import React from "react";
import BaseComponent from "../baseComponent";
import SideMenu from "./sideMenu";

class SideMenu extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <SideMenu />;
  }
}

export default SideMenu;

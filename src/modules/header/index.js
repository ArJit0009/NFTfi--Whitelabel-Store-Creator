import React from "react";
import BaseComponent from "../baseComponent";
import HeaderComponent from "./headerComponent";

class Header extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <HeaderComponent />;
  }
}

export default Header;

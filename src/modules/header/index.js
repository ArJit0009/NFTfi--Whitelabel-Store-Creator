import React from "react";
import BaseComponent from "../baseComponent";
import Header from "./header";

class Header extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Header />;
  }
}

export default Header;

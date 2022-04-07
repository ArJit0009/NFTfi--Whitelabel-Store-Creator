import React, { useState } from "react";
import Header from "../header";
import Advancescreen from "../screen/advancescreen";
import BlogComponent from "../screen/blog";
import Generalscreen from "../screen/generalscreen";
import SideMenu from "../sideMenu/sideMenu";

function MainComponent() {
  return (
    // <div className="global-container flex justify-center">
    <div className="max-width-1640px">
      <Header />
      <div className="flex">
        <SideMenu />
        {/* <Generalscreen />
        <Advancescreen /> */}
        <BlogComponent />
      </div>
    </div>
  );
}

export default MainComponent;

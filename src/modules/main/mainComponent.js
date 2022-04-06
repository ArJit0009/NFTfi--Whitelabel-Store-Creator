import React, { useState } from "react";
import Header from "../header";
import Advancescreen from "../screen/advancescreen";
import Generalscreen from "../screen/generalscreen";
import SideMenu from "../sideMenu/sideMenu";

function MainComponent() {
  return (
    // <div className="global-container flex justify-center">
    <div className="max-width-1640px">
      <Header />
      <div className="flex">
        <SideMenu />
        <Advancescreen />
      </div>
    </div>
  );
}

export default MainComponent;

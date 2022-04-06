import React, { useState } from "react";
import Header from "../header/header";
import SideMenu from "../sideMenu/sideMenu";

function MainComponent() {
  return (
    // <div className="global-container flex justify-center">
    <div className="max-width-1640px">
      <Header />
      <SideMenu />
    </div>
    // </div>
  );
}

export default MainComponent;

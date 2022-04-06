import React, { useState } from "react";

function SideMenu() {
  return (
    <div className="bg-black-100 w-65 px-2 pt-24">
      <div className="bg-black-50 text-sky-100 text-ft5 rounded-3xl py-5 px-5">
        <h1 className="">
          <i className="fa-solid fa-store px-2"></i>
          My store
        </h1>
      </div>

      <div className=" text-sky-100 text-ft5  py-5 px-5">
        <h1 className="">
          <i className="fa-solid fa-sliders px-2"></i>
          General Settings
        </h1>
      </div>
    </div>
  );
}

export default SideMenu;

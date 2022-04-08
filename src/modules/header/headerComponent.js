import React, { useState } from "react";

function HeaderComponent() {
  return (
    <div className="flex shadow-xl justify-between h-16 text-white-100 w-full">
      <div>
        <p className="text-ft9 text-blue-100 font-whiskeygirls pt-4.5 pl-11.5 w-19.25 h-7">
          NFTfi
        </p>
      </div>
      <div className="space-x-8 pt-4.5 pr-11.5 ">
        <i className="fa-solid fa-user-tie  text-darkGrey-100 text-ft9"></i>
        <i className="fa-solid fa-wallet text-darkGrey-100 text-ft9"></i>
        <i className="fa-solid fa-bell text-darkGrey-100 text-ft9"></i>
      </div>
    </div>
  );
}

export default HeaderComponent;

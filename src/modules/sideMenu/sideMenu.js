import React, { useState } from "react";

function SideMenu() {
  return (
    <div className="bg-black-100 w-65 px-2 pt-24 min-h-full hidden lg:block">
      <div className="bg-black-50 text-sky-100 text-ft5 rounded-3xl py-5 px-5">
        <h1 className=" font-semibold">
          <i className="fa-solid fa-store px-2"></i>
          My store
        </h1>
      </div>

      <div className=" text-sky-100 text-ft3  pt-5 px-5">
        <h1 className="font-semibold">
          <i className="fa-solid fa-sliders px-2"></i>
          General Settings
        </h1>
      </div>

      <div className=" text-grey-25 text-ft3  pt-5 px-5">
        <h1 className="">
          <i className="fa-solid fa-gear px-2"></i>
          Advance Settings
        </h1>
      </div>

      <div className=" text-grey-25 text-ft3  pt-5 px-5">
        <h1 className="">
          <i className="fa-solid fa-shirt px-2"></i>
          Appearance
        </h1>
      </div>

      <div className=" text-grey-25 text-ft3  pt-5 px-5">
        <h1 className="">
          <i className="fa-brands fa-blogger px-3"></i>
          Blog
        </h1>
      </div>

      <div className=" text-grey-25 text-ft3  pt-5 px-5">
        <h1 className="">
          <i className="fa-solid fa-file-invoice px-3"></i>
          Billing
        </h1>
      </div>

      <div className=" text-grey-25 text-ft5  pt-7 px-5">
        <h1 className="">
          <i className="fa-solid fa-cubes px-3"></i>
          My Items
        </h1>
      </div>

      <div className=" text-grey-25 text-ft5  pt-9 px-5">
        <h1 className="">
          <i className="fa-solid fa-user-tie px-3"></i>
          My Account
        </h1>
      </div>

      <div className=" text-grey-25 text-ft5  pt-9 px-5">
        <h1 className="">
          <i className="fa-solid fa-table-columns px-3"></i>
          Dashboard
        </h1>
      </div>

      <div className=" text-grey-25 text-ft5  pt-9 px-5">
        <h1 className="">
          <i className="fa-solid fa-toolbox px-3"></i>
          Manage Content
        </h1>
      </div>
    </div>
  );
}

export default SideMenu;

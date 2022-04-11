import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BlogComponent from "../screen/blog";
import Generalscreen from "../screen/generalscreen";

function SideMenu() {
  return (
    <>
      <div className="bg-black-100 w-65 px-2 pt-24  min-h-full hidden lg:flex lg:flex-col ">
        <div className="bg-black-50 text-sky-100 text-ft5 rounded-3xl py-5 px-5">
          <h1 className=" font-semibold">
            <i className="fa-solid fa-store px-2"></i>
            My store
          </h1>
        </div>

        <div className="  text-grey-25 text-ft3  pt-5 px-5">
          <h1 className="font-semibold hover:text-sky-100">
            <NavLink
              exact={true}
              activeClassName="is-active"
              to="/generalsetting"
            >
              {" "}
              <i className="fa-solid fa-sliders px-2 "></i>
              General Settings
            </NavLink>
          </h1>
        </div>

        <div className=" text-grey-25 text-ft3  pt-5 px-5 ">
          <h1 className="hover:text-sky-100">
            <NavLink activeClassName="is-active" to="/advancesetting">
              <i className="fa-solid fa-gear px-2"></i> Advance Settings
            </NavLink>
          </h1>
        </div>

        <div className=" text-grey-25 text-ft3  pt-5 px-5 ">
          <h1 className="hover:text-sky-100">
            <i className="fa-solid fa-shirt px-2"></i>
            Appearance
          </h1>
        </div>

        <div className=" text-grey-25 text-ft3  pt-5 px-5 ">
          <h1 className="hover:text-sky-100">
            <NavLink activeClassName="is-active" to="/blog">
              <i className="fa-brands fa-blogger px-3"></i> Blog
            </NavLink>
          </h1>
        </div>

        <div className=" text-grey-25 text-ft3  pt-5 px-5 ">
          <h1 className="hover:text-sky-100">
            <i className="fa-solid fa-file-invoice px-3"></i>
            Billing
          </h1>
        </div>

        <div className=" text-grey-25 text-ft5  pt-7 px-5 ">
          <h1 className="hover:text-sky-100">
            <i className="fa-solid fa-cubes px-3"></i>
            My Items
          </h1>
        </div>

        <div className=" text-grey-25 text-ft5  pt-9 px-5 ">
          <h1 className="hover:text-sky-100">
            <i className="fa-solid fa-user-tie px-3"></i>
            My Account
          </h1>
        </div>

        <div className=" text-grey-25 text-ft5  pt-9 px-5 ">
          <h1 className="hover:text-sky-100">
            <i className="fa-solid fa-table-columns px-3"></i>
            Dashboard
          </h1>
        </div>

        <div className=" text-grey-25 text-ft5  pt-9 px-5 mb-44">
          <h1 className="hover:text-sky-100">
            <i className="fa-solid fa-toolbox px-3"></i>
            Manage Content
          </h1>
        </div>
      </div>
    </>
  );
}

export default SideMenu;

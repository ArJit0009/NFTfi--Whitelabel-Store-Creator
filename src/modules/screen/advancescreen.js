import React from "react";

function Advancescreen() {
  return (
    <div className=" mx-10 lg:mx-auto mt-20 w-full lg:w-137.75 bg-white-100">
      <div className="flex flex-col ">
        <h1 className="font-PoppinsBold text-ft8 text-grey-75">
          Advance Settings
        </h1>
        <p className="font-PoppinsSemiBold text-ft6 text-grey-75 mt-4">
          Supported networks
        </p>
        <p className="font-PoppinsMedium text-ft4 text-grey-75 mt-8">
          Select Blockchains
        </p>
        <p className="font-PoppinsMedium text-ft2 text-grey-50 mt-2">
          You can select your preferred blockchains on which your Marketplace
          will work on
        </p>
        {/* TODO toggle */}
        <div className="flex flex-wrap mt-9">
          <div className="flex p-2 border-2 rounded-lg border-yellowwhite-75 text-ft4 w-56 ">
            <i className="fa-brands fa-ethereum p-1"></i>
            <p className="font-PoppinsRegular text-grey-50">Ethereum</p>
          </div>

          <div className="flex p-2 border-2 rounded-lg border-yellowwhite-75 text-ft4 w-56 mt-6 lg:mt-0 ml-0 lg:ml-16">
            <i className="fa-brands fa-bitcoin p-1"></i>
            <p className="font-PoppinsRegular text-grey-50 ">Binance</p>
          </div>

          <div className="flex p-2 border-2 rounded-lg border-yellowwhite-75 text-ft4 w-56 mt-6">
            <i className="fa-solid fa-draw-polygon p-1"></i>
            <p className="font-PoppinsRegular text-grey-50 ">Polygon</p>
          </div>
        </div>

        <h2 className="text-grey-75 font-PoppinsSemiBold text-ft6 mt-8">
          Site URL
        </h2>
        <h3
          className="text-grey-75 font-PoppinsMedium text-ft4 mt-5
        "
        >
          Primary Url
        </h3>
        <input
          type="text"
          className="text-grey-50 text-ft2 font-PoppinsMedium mt-2 w-full p-3 border-2 rounded-lg border-yellowwhite-75"
          placeholder="http//:Abc.nftifi.com"
        ></input>
        <p className="font-PoppinsMedium text-ft1 mt-5">
          For adding Custom URL{" "}
          <a href="" className="text-blue-100">
            Upgrade
          </a>{" "}
          you plan
        </p>

        <h2 className="text-grey-75 text-ft6 font-PoppinsSemiBold mt-8 ">
          Can upload NFT
        </h2>
        <select className="border-yellowwhite-75 border-2 mt-2 p-1 font-PoppinsMedium text-ft2 text-grey-50">
          <option value="Everyone">Everyone</option>
          <option value="Only me">Only me</option>
          <option value="Selected">Selected</option>
        </select>

        <h2 className="text-grey-75 text-ft6 font-PoppinsSemiBold mt-8 ">
          Categories
        </h2>
        <div className="mt-5 flex  justify-between flex-col space-y-4 lg:space-y-0 lg:flex-row ">
          <div className="flex flex-col">
            <div className="flex">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Art
              </p>
            </div>
            <div className="flex mt-8">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Music
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Trading Card
              </p>
            </div>
            <div className="flex mt-8">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Sports
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Utility
              </p>
            </div>
            <div className="flex mt-8">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Photography
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex ">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium ">
                Collectibles
              </p>
            </div>
            <div className="flex mt-8">
              <input
                className="w-8 h-8 bg-sky-100  text-sky-100 "
                type="checkbox"
              ></input>
              <p className="text-ft2 text-grey-75 p-1 font-PoppinsMedium">
                Trading Cards
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-grey-75 text-ft6 font-PoppinsSemiBold mt-8 ">
          Custom Store page
        </h2>

        <h3
          className="text-grey-75 font-PoppinsMedium text-ft4 mt-3
        "
        >
          Privacy Policy
        </h3>

        <a href="" className="font-PoppinsRegular text-ft4 text-blue-100 my-4">
          Edit
        </a>

        <h3
          className="text-grey-75 font-PoppinsMedium text-ft4 mt-3
        "
        >
          Terms and Conditions
        </h3>

        <a href="" className="font-PoppinsRegular text-ft4 text-blue-100 my-4">
          Edit
        </a>

        <button
          type="button"
          className="text-ft4 font-PoppinsSemiBold text-white-100 px-16 py-2 bg-blue-100 rounded-lg lg:ml-80 mr-9 mb-11"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Advancescreen;

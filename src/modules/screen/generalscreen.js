import React from "react";

function Generalscreen() {
  return (
    <div className=" mx-10 lg:mx-auto mt-20 w-full lg:w-137.75 bg-white-100 text-grey-75">
      <div className="flex flex-col ">
        <h1 className="font-PoppinsBold text-ft8 text-grey-75">
          General Settings
        </h1>
        <p className="font-PoppinsSemiBold text-ft6 text-grey-75 mt-4">
          Name and Logo
        </p>
        <p className="font-PoppinsMedium text-ft4 text-grey-75 mt-3">
          Upload logo
        </p>
        {/* TODO Drag and Drop */}
        <div className="border-dotted w-56 h-56 mt-5 border-yellowwhite-75 border-2 rounded-xl  flex justify-center flex-col">
          <i className="fa-solid fa-cloud-arrow-up  text-darkGrey-50 text-ft10  mx-auto"></i>

          <h1 className="font-PoppinsRegular text-ft2  mx-auto mt-4">
            Drag and Drop or{" "}
            <a href="" className="text-blue-100 font-PoppinsSemiBold">
              Browse
            </a>
          </h1>
        </div>

        <p className="font-PoppinsRegular text-ft1 text-grey-50 mt-3">
          Upload logo in .svg or .png format of size 136X40px
        </p>
        <h3 className="text-grey-75 font-PoppinsMedium text-ft4 mt-8 ">
          Name of store
        </h3>
        <input
          type="text"
          className="text-grey-50 text-ft2 font-PoppinsMedium mt-3 w-full p-3 border-2 rounded-lg border-yellowwhite-75"
          placeholder="Write name of the store"
        ></input>
        <h3 className="text-grey-75 font-PoppinsMedium text-ft4 mt-8">
          Store Fees
        </h3>
        <div className="mt-3 w-full border-2 rounded-lg border-yellowwhite-75 flex justify-between">
          <input
            type="text"
            className="text-grey-50 text-ft2 font-PoppinsMedium  p-3 w-full"
            placeholder="Enter store fee"
          ></input>
          <i className="fa-solid fa-percent px-4 py-3 w-14 text-ft5 text-blue-100 bg-white-50"></i>
        </div>
        <p className="font-PoppinsRegular text-ft1 mt-3 ">
          Revenue percentage to be shared with this store
        </p>

        <h2 className="text-grey-75 text-ft4 font-PoppinsMedium mt-8 ">
          Store Wallet
        </h2>
        <input
          type="text"
          className="text-blue-100 text-ft2 font-PoppinsMedium mt-3 w-full p-3 border-2 rounded-lg border-yellowwhite-75"
          placeholder="0x74F3ae13bE4bB88c87764211d621d32DCC7f533E"
        ></input>
        <p className="font-PoppinsRegular text-ft1 mt-3 ">
          Store Fees will be connected from this wallet
        </p>
        <p className="font-PoppinsSemiBold text-ft6 text-grey-75 mt-8">
          Social media Connection
        </p>
        {/* TODO togglegit  */}
        <div className="flex flex-col text-ft2 font-PoppinsMedium mt-3 space-y-3">
          <div className=" flex justify-between">
            <h1>Instagram</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Twitter</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Reddit</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Telegram</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Facebook</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Linkedin</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Discord</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
          <div className=" flex justify-between">
            <h1>Youtube</h1>
            <i className="fa-solid fa-toggle-off"></i>
          </div>
        </div>

        <button
          type="button"
          className="text-ft4 font-PoppinsSemiBold text-white-100 px-16 py-2 bg-blue-100 rounded-lg lg:ml-80 mt-12 mb-11 
          hover:shadow-xl hover:bg-black-100 "
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Generalscreen;

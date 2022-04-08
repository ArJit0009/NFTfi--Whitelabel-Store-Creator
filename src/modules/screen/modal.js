import React, { useState } from "react";

function Modal() {
  const [isShown3, setIsShown3] = useState(true);
  return (
    <>
      {isShown3 ? (
        <div className="absolute z-10  bg-white-100 ml-44 w-137.75 h-65 p-11 text-grey-75 shadow-5xl rounded-xl border-yellowwhite-75 border-2">
          <div className="flex justify-between">
            <h1 className="font-PoppinsSemiBold text-ft5">Edit Blog</h1>
            <i
              className="fa-solid fa-xmark  text-ft5 cursor-pointer"
              onClick={() => setIsShown3(false)}
            ></i>
          </div>
          <h2 className=" font-PoppinsMedium text-ft4 mt-5">Category name</h2>
          <input
            className="font-PoppinsRegular text-ft2 p-2 mt-3 border-2  text-yellowwhite-75 w-full"
            placeholder="Technology"
          ></input>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-ft4 font-PoppinsSemiBold text-white-100 px-9 py-2 bg-blue-100 rounded-lg  mt-11 mb-1 "
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;

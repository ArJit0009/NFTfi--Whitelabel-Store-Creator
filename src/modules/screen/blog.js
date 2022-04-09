import React, { useState } from "react";
import Modal from "./modal";

function BlogComponent() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  return (
    // TODO tr round and padding
    <div className=" mx-10 lg:mx-auto mt-20   bg-white-100 text-grey-75">
      <div className="flex flex-row  justify-between">
        <h1 className="font-PoppinsBold text-ft8 py-2">Blog</h1>
        <button className="font-PoppinsSemiBold text-ft4 py-2 px-5 bg-blue-100 text-white-100 rounded-lg ">
          Add Blog
        </button>
      </div>
      <div className="mt-6 tabs">
        {isShown3 ? <Modal /> : null}
        <button
          className="font-PoppinsSemiBold text-ft6 py-2 text-blue-100 px-4 "
          onClick={() => setIsShown(true)}
        >
          Posts
        </button>
        <button
          className="font-PoppinsRegular text-ft6 py-2  px-4 hover:text-blue-100 "
          onClick={() => setIsShown2(true)}
        >
          Categories
        </button>
        <hr className="text-grey-25"></hr>
      </div>
      {isShown ? (
        <table className="table-auto mt-14 w-full ">
          <thead className=" text-ft4 font-PoppinsMedium text-grey-75 ">
            <tr className="">
              <th className="">Blog name</th>
              <th className="px-44">Date</th>
              <th className="">Status</th>
              <th className="pl-11"></th>
              <th></th>
            </tr>
          </thead>
          <tbody className=" text-ft2 font-PoppinsMedium mt-3 ">
            <tr className=" bg-light-100 h-12 rounded-full">
              <td className="text-grey-50 ">What are NFT's</td>
              <td className="text-grey-50 pl-44">21/01/22</td>
              <td className="text-grey-50 ">Posted</td>
              <td
                className=" text-blue-100 pl-40 cursor-pointer"
                onClick={() => setIsShown3(true)}
              >
                Edit
              </td>
              <td className=" text-red-100 pl-16">Delete</td>
            </tr>
            <tr className=" bg-light-100 h-12 rounded-xl">
              <td className="text-grey-50">What are NFT's</td>
              <td className="text-grey-50 pl-44">21/01/22</td>
              <td className="text-grey-50">Posted</td>
              <td className=" text-blue-100 pl-40">Edit</td>
              <td className=" text-red-100 pl-16">Delete</td>
            </tr>
            <tr className=" bg-light-100 h-12 rounded-xl">
              <td className="text-grey-50">What are NFT's</td>
              <td className="text-grey-50 pl-44">21/01/22</td>
              <td className="text-grey-50">Posted</td>
              <td className=" text-blue-100 pl-40">Edit</td>
              <td className=" text-red-100 pl-16">Delete</td>
            </tr>
          </tbody>
        </table>
      ) : null}

      {isShown2 ? (
        <table className="table-auto mt-14 w-full ">
          <thead className=" text-ft4 font-PoppinsMedium text-grey-75 ">
            <tr className="">
              <th className="">Name</th>
              <th className="px-44">Date</th>
              <th className="pl-11"></th>
              <th></th>
            </tr>
          </thead>
          <tbody className=" text-ft2 font-PoppinsMedium ">
            <tr className=" bg-light-100 h-12 rounded-lg  ">
              <td className="text-grey-50 ">Technology</td>
              <td className="text-grey-50 pl-44">21/01/22</td>

              <td className=" text-blue-100 pl-40 ">Edit</td>
              <td className=" text-red-100 pl-16">Delete</td>
            </tr>
            <tr className=" bg-light-100 h-12 rounded-xl">
              <td className="text-grey-50">Crypto</td>
              <td className="text-grey-50 pl-44">21/01/22</td>

              <td className=" text-blue-100 pl-40">Edit</td>
              <td className=" text-red-100 pl-16">Delete</td>
            </tr>
            <tr className=" bg-light-100 h-12 rounded-xl">
              <td className="text-grey-50">Accessibility</td>
              <td className="text-grey-50 pl-44">21/01/22</td>

              <td className=" text-blue-100 pl-40">Edit</td>
              <td className=" text-red-100 pl-16">Delete</td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default BlogComponent;

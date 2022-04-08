import React from "react";

function BlogComponent() {
  return (
     <div className=" mx-10 lg:mx-auto mt-20 w-full lg:w-216.5  bg-white-100 text-grey-75">
      <div className="flex flex-row  justify-between">
        <h1 className="font-PoppinsBold text-ft8">Blog</h1>
        <button className="font-PoppinsSemiBold text-ft4 py-2 px-5 bg-blue-100 text-white-100 rounded-lg ">
          Add Blog
        </button>
      </div>
    </div>
  );
}

export default BlogComponent;

import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const admin = () => {
  return (
    <div className=" w-full bg-gray-900 h-screen flex justify-center items-center ">
      <div className=" w-[300px] h-[150px] rounded border-2  backdrop-blur-3xl  border-amber-400">
        <form
          action="/api/auth"
          method="post"
          className="flex pt-6 justify-center items-center flex-col"
        >
          <input
            name="username"
            type="text"
            className="bg-gray-700 h-[45px] m- rounded text-gray-200 p-1 "
          />
          <input
            name="password"
            type="password"
            className="bg-gray-700 h-[45px] m-2 rounded text-gray-200 p-1 "
          />

          <button
            type="submit"
            className="text-gray-200 py-6 hover:text-gray-500"
          >
            <BsArrowRightCircleFill size={40} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default admin;

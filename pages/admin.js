import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import dbConnect from "../config/dbConnect";
import getUser from "../config/getUser";

const admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", {
        username,
        password,
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full loginbg h-screen flex justify-center items-center ">
      <div className=" w-[300px] h-[150px] rounded border-2  backdrop-blur-3xl  border-white">
        <form
          onSubmit={signinHandler}
          className="flex pt-6 justify-center items-center flex-col"
        >
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            className="bg-gray-200 h-[45px] m- rounded text-gray-900 p-1 "
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="bg-gray-200 h-[45px] m-2 rounded text-gray-900 p-1 "
          />

          <button
            type="submit"
            className="text-white py-6 hover:scale-110 ease-in-out duration-200"
          >
            <BsArrowRightCircleFill size={40} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default admin;

export async function getServerSideProps({ req, res }) {
  await dbConnect();

  const user = await getUser(req, res);
  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
}

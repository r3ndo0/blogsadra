import React from "react";
import { useRouter } from "next/router";
import dbConnect from "../config/dbConnect";
import getUser from "../config/getUser";
import { removeCookies } from "cookies-next";

function dashboard() {
  const router = useRouter();
  const signoutHandler = () => {
    removeCookies("token");
    router.push("/admin");
  };
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center h-[85vh] backdrop-blur-3xl  m-12 rounded-lg">
      <button
        onClick={signoutHandler}
        className="fixed bg-white text-gray-900 p-2 rounded-lg  text-xl top-[30px] left-[30px]"
      >
        Log Out
      </button>
      <form className="flex flex-col ">
        <label className="text-xl font-bold">Title</label>
        <input
          className="text-gray-900 rounded h-8 "
          type="text"
          name="title"
        />
        <label className="text-xl mt-8 font-bold">Text</label>
        <textarea
          name="text"
          className="text-gray-900 w-[400px] min-h-[300px] rounded"
        ></textarea>
        <input className="mt-4" type="file" name="img" accept="image/*" />
        <input
          value="add article"
          name="submit"
          type="submit"
          className="border rounded-lg border-white px-10 py-2 my-2 hover:bg-gray-800 "
        />
      </form>
    </div>
  );
}

export default dashboard;

export async function getServerSideProps({ req, res }) {
  await dbConnect();
  const user = await getUser(req, res);
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
      props: {},
    };
  }
  return {
    props: {
      user,
    },
  };
}

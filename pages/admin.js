import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import dbConnect from "../config/dbConnect";
import getUser from "../config/getUser";

function admin() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", {
        username,
        password,
      });

      router.push("/admindashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="h-screen w-full flex justify-center items-center bg-gray-900 z-40 relative
     "
    >
      <div className="by-grat-700  w-[400px] h-auto">
        <form
          onSubmit={signinHandler}
          className="flex justify-center items-center flex-col"
        >
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-300 px-2 text-gray-900 h-12 rounded m-2"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-300 px-2 text-gray-900 h-12 rounded m-2"
          />
          <button className="p-3 mt-2 rounded-full bg-gray-300">
            <AiOutlineArrowRight size={25} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default admin;

export async function getServerSideProps({ req, res }) {
  await dbConnect();

  const user = await getUser(req, res);
  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/admindashboard",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
}

import { useRouter } from "next/router";
import { removeCookies } from "cookies-next";
import getUser from "../config/getUser";
import dbConnect from "../config/dbConnect";
import { useState } from "react";

function admindashboard({ user }) {
  const router = useRouter();

  const signoutHandler = () => {
    removeCookies("token");
    router.push("/admin");
  };
  return (
    <div className="h-screen w-full absolute z-40 bg-white">
      <button onClick={signoutHandler} className="py-2 px-6 bg-amber-400">
        خروج از سیستم
      </button>
    </div>
  );
}

export default admindashboard;

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
    props: { user },
  };
}

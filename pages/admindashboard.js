import { useRouter } from "next/router";
import { removeCookies } from "cookies-next";
import getUser from "../config/getUser";
import dbConnect from "../config/dbConnect";
import { useState } from "react";
import axios from "axios";
function admindashboard({ user, sortedByDate }) {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  // console.log(sortedByDate);
  const submitFormData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/posts/create", {
        title,
        img,
        slug,
        content,
        user,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const signoutHandler = () => {
    removeCookies("token");
    router.push("/admin");
  };
  return (
    <div className="h-screen grid grid-cols-2 w-full relative z-40 bg-white">
      <div className="w-full bg-gray-900 flex flex-col justify-center items-center">
        {sortedByDate.map((post, index) => (
          <div key={index}>{post.title}</div>
        ))}
      </div>
      {/* {sidebar ? (
        <div className="text-gray-300 items-start justify-end flex h-screen w-[30%] bg-gray-900">
          <button onClick={() => setSidebar(!sidebar)}>
            <CgClose size={50} />
          </button>
        </div>
      ) : (
        <button className="m-4" onClick={() => setSidebar(!sidebar)}>
          <GiHamburgerMenu size={30} />
        </button>
      )} */}
      {/* <button onClick={signoutHandler} className="py-2 px-6 bg-amber-400">
        get Out
      </button> */}
      <div className="">
        <form
          onSubmit={submitFormData}
          className="flex w-full flex-col justify-evenly items-center h-full "
        >
          <input
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-3/4 p-2 h-16 mb-2 border border-gray-900 rounded"
          ></input>
          <input
            placeholder="img"
            onChange={(e) => setImg(e.target.value)}
            className="w-3/4 p-2 h-16 mb-2 border border-gray-900 rounded"
          ></input>
          <input
            placeholder="Slug"
            onChange={(e) => setSlug(e.target.value)}
            className="w-3/4 p-2 h-16 mb-2 border border-gray-900 rounded"
          ></input>

          <textarea
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            className="w-3/4 p-2 h-[40%] border border-gray-900 rounded"
          ></textarea>
          <button type="Submit" className="bg-gray-900 text-gray-300 px-4 py-2">
            Submit
          </button>
        </form>
      </div>
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
  const fetchPosts = await fetch(`http://localhost:3000/api/posts`);
  const articles = await fetchPosts.json();
  const sortedByDate = articles.reverse();
  return {
    props: { user, sortedByDate },
  };
}

import { useRouter } from "next/router";
import { removeCookies } from "cookies-next";
import getUser from "../config/getUser";
import dbConnect from "../config/dbConnect";
import { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import { BsFillPlusCircleFill } from "react-icons/bs";
function admindashboard({ user, sortedByDate }) {
  const [updateForm, setUpdateForm] = useState(false);
  const [updateFormTitle, setUpdateFormTitle] = useState("");
  const [updateFormImg, setUpdateFormImg] = useState("");
  const [updateFormSlug, setUpdateFormSlug] = useState("");
  const [updateFormContent, setUpdateFormContent] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const clearUpdateForm = () => {
    setUpdateFormTitle("");
    setUpdateFormImg("");
    setUpdateFormSlug("");
    setUpdateFormContent("");
  };
  const createNewArticleHandler = () => {
    clearUpdateForm();
    setUpdateForm(false);
  };
  const editButtonHandler = (post) => {
    setUpdateForm(true);
    setUpdateFormTitle(post.title);
    setUpdateFormImg(post.img);
    setUpdateFormSlug(post.slug);
    setUpdateFormContent(post.content);
  };
  const submitCreateFormData = async (e) => {
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
    <div className="p-12 h-screen grid grid-cols-2 w-full relative z-40 bg-white">
      <div className="w-full pt-2 rounded-lg bg-gray-900 flex flex-col justify-start items-center">
        {sortedByDate.map((post) => (
          <div
            className="py-2 rounded px-4 w-[90%] flex items-center justify-between bg-gray-200 m-2"
            key={post._id}
          >
            <button>{post.title}</button>

            <div className="flex w-12 justify-between">
              <button>
                <RiDeleteBinFill size={20} />
              </button>
              <button onClick={() => editButtonHandler(post)}>
                <FaPen />
              </button>
            </div>
          </div>
        ))}
      </div>
      {updateForm ? (
        <div className="">
          <div className="flex justify-between width-[80%] ml-[80px]">
            <button
              onClick={() => createNewArticleHandler()}
              className="bg-green-600   text-white rounded flex py-2 px-4 gap-2 items-center"
            >
              Create New Article
              <BsFillPlusCircleFill />{" "}
            </button>
            <button
              className="bg-rose-600   text-white rounded flex py-2 px-4 gap-2 items-center"
              onClick={() => clearUpdateForm()}
            >
              Clear Form
            </button>
          </div>
          <form className="flex w-full flex-col justify-evenly items-center h-full ">
            <input
              value={updateFormTitle || ""}
              placeholder="title"
              onChange={(e) => setUpdateFormTitle(e.target.value)}
              className="w-3/4 p-2 h-16 mb-2 border border-gray-900 rounded"
            ></input>
            <input
              value={updateFormImg}
              placeholder="img"
              onChange={(e) => setUpdateFormImg(e.target.value)}
              className="w-3/4 p-2 h-16 mb-2 border border-gray-900 rounded"
            ></input>
            <input
              value={updateFormSlug}
              placeholder="Slug"
              onChange={(e) => setUpdateFormSlug(e.target.value)}
              className="w-3/4 p-2 h-16 mb-2 border border-gray-900 rounded"
            ></input>

            <textarea
              value={updateFormContent}
              placeholder="Content"
              onChange={(e) => setUpdateFormContent(e.target.value)}
              className="w-3/4 p-2 h-[40%] border border-gray-900 rounded"
            ></textarea>
            <button
              type="Submit"
              className="bg-green-800 rounded-lg text-white px-4 py-2"
            >
              Update Article
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <h1 className="text-center text-green-600">Create New Article</h1>
          <form
            onSubmit={submitCreateFormData}
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
            <button
              type="Submit"
              className="bg-green-800 rounded-lg text-white px-4 py-2"
            >
              Create New Article
            </button>
          </form>
        </div>
      )}
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

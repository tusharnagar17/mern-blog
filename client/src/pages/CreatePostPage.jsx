import NavBar from "./../components/NavBar";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../components/Editor";
import { url } from "../utils/service";
import { UserContext } from "../UserContext";

const CreatePostPage = () => {
  const { userInfo } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    const response = await fetch(`${url}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="">
      <NavBar />
      {userInfo?.username ? (
        <>
          <div className="text-xl font-semibold text-center">
            Write your New Post
          </div>
          <form
            className="flex flex-col gap-5 px-6 py-4 max-w-5xl mx-auto"
            onSubmit={createNewPost}
          >
            <input
              type="text"
              placeholder="title"
              className="border-2 border-gray-200 hover:border-none px-2 py-1 rounded-md text-lg
          outline-none hover:ring ring-blue-400
          "
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
              type="text"
              placeholder="Summary"
              className="border-2 border-gray-200 hover:border-none px-2 py-1 rounded-md text-lg
          outline-none hover:ring ring-blue-400"
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
            />
            <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button
              type="submit"
              className="bg-green-300 rounded-full w-[200px] p-2 font-semibold mx-auto"
            >
              Create Post
            </button>
          </form>{" "}
        </>
      ) : (
        <div
          className="flex items-center h-[100vh] justify-center
          text-2xl font-semibold"
        >
          Kindly Login First!
        </div>
      )}
    </div>
  );
};

export default CreatePostPage;

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { url } from "../utils/service";
import { formatISO9075 } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${url}/post/${id}`).then((res) => {
      res.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";
  return (
    <div className="max-w-5xl mx-auto">
      <NavBar />

      <div className=" h-[40vh] overflow-hidden flex justify-center items-center m-2">
        <img
          src={`${url}/${postInfo.cover}`}
          alt="blog-image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="text-center">
        <div className="text-5xl font-semibold my-6">{postInfo.title}</div>
        <div className="text-xl text-gray-500 font-semibold my-4">
          {formatISO9075(new Date(postInfo.createdAt))}
        </div>
        <div className="font-bold text-2xl my-6">
          By {postInfo.author.username}
        </div>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </div>
  );
};

export default PostPage;

import { Navigate, useNavigate } from "react-router-dom";
import { url } from "../utils/service";
import { formatISO9075 } from "date-fns";

const Post = ({ item }) => {
  const { _id, title, summary, author, createdAt, cover, content } = item;
  const ImageUrl =
    "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const navigate = useNavigate();
  console.log("item console", item);
  return (
    <div
      className="flex items-center gap-6 my-10 cursor-pointer "
      onClick={() => navigate(`/post/${_id}`)}
    >
      {/* Image */}
      <div className="flex-1 w-[450px] h-[280px] overflow-hidden flex justify-center items-center m-2">
        <img
          src={`${url}/${cover}`}
          alt="blog-image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Detail */}
      <div className="flex-1 flex flex-col space-y-4">
        <div className="text-xl font-semibold">{title}</div>
        <div className="flex justify-start gap-10 items-center text-md font-bold space-x-4">
          <div className="font-semibold">{author?.username}</div>
          <div>{formatISO9075(new Date(createdAt))}</div>
        </div>
        <div className="text-md">{summary}</div>
      </div>
    </div>
  );
};

export default Post;

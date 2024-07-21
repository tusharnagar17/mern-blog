import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import { url } from "./utils/service";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${url}/post`).then((response) => {
      response.json().then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
    });
  }, []);
  return (
    <section className="max-w-5xl mx-auto">
      <NavBar />
      {posts.length > 0 &&
        posts.map((item, ind) => {
          return <Post key={ind} item={item} />;
        })}

      {posts.length < 1 && (
        <div className="text-4xl font-semibold flex items-center justify-center h-[80vh]">
          No Posts! Create New
        </div>
      )}
    </section>
  );
};

export default App;

import NavBar from "./components/NavBar";
import Post from "./components/Post";

const App = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <NavBar />
      <Post />
      <Post />
      <Post />

      <Post />
      <Post />
    </section>
  );
};

export default App;

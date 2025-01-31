import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { url } from "../utils/service";

const NavBar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`${url}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((info) => {
        console.log("info from server", info);
      });
    });
  }, []);

  function logout() {
    fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div className="max-w-5xl mx-auto  py-4 flex justify-between items-center">
      <div className="text-2xl font-semibold">
        <Link to={`/`}>MyBlog</Link>
      </div>
      <div className="">
        {username ? (
          <div className="flex justify-between gap-6 items-center">
            <div>
              <Link to={`/create-post`}>Create a new Post</Link>
            </div>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between gap-6 items-center">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

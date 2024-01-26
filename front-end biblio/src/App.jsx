// App.js
import { Link, RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSearch,
  faBookReader,
  faGlasses,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import UserContext, { useUserContext } from './context/UserContext';

function App() {
  const { authenticated, user } = useUserContext();
  console.log('Authenticated:', authenticated);
  console.log(user);
  return (
    <>
      <nav className="bg-white p-6 flex items-center justify-between shadow-md">
        <a href="/" className="logo text-4xl font-bold text-green-500 flex items-center">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          bookman
        </a>
        <form className="search-form w-80 h-16 border border-black bg-white flex items-center rounded-md">
          <input
            type="search"
            id="search-box"
            placeholder="Search here..."
            className="text-base p-3 w-full outline-none border-none text-black"
          />
          <button
            type="submit"
            className="fas fa-search text-2xl p-3 cursor-pointer text-black"
          ></button>
        </form>

        <div className="icons flex items-center">
          <a href="/link-to-book-reader" className="text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBookReader} />
          </a>
          <a href="/link-to-glasses" className="text-2xl ml-4 cursor-pointer">
            <FontAwesomeIcon icon={faGlasses} />
          </a>
          {authenticated ? (
            <span className="text-lg ml-4">{user.name}</span>
          ) : (
            <a href="/login" className="text-2xl ml-4 cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </a>
          )}
        </div>
      </nav>

      <div className="header-2 bg-green-500 text-white text-center py-3">
        <div className="navbar flex justify-around">
          <a href="/" className="hover:bg-dark-color py-3 px-6">
            Home
          </a>
          <a href="*" className="hover:bg-dark-color py-3 px-6">
            Library
          </a>
          <a href="#*" className="hover:bg-dark-color py-3 px-6">
            Room Reading
          </a>
          <a href="#*" className="hover:bg-dark-color py-3 px-6">
            About Us
          </a>
        </div>
      </div>
      <UserContext>
        <RouterProvider router={routes} />
      </UserContext>
    </>
  );
}

export default App;

import { RouterProvider, useNavigate } from "react-router-dom";
import { routes } from "./router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSearch,
  faBookReader,
  faGlasses,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import UserContext, { useUserContext } from './context/UserContext';
import PublieurApi from "./service/api/PublieurApi";
import AfficheBook from "./publieur/AfficheBook";

function App() {
  const { logout } = useUserContext();
    const { authenticated,  books  } = useUserContext();
  console.log('Authenticated:', authenticated);

  const handleLogout = () => {
    PublieurApi.logout().then(() => {
      logout();
    });
  };
  console.log(books);

  return (
    <>
      <nav className="bg-white p-6 flex items-center justify-between shadow-md">
        <a href="/" className="logo text-4xl font-bold text-green-500 flex items-center">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          bookman
        </a>
        

        <div className="icons flex items-center">
          
          <a href="/link-to-glasses" className="text-2xl ml-4 cursor-pointer">
            <FontAwesomeIcon icon={faGlasses} />
          </a>
          {authenticated ? (
            <div className="flex items-center">
               <a href="/user" className="text-2xl ml-2 cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a href="/add-book" className="text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBookReader} />
          </a>
              <button
                className="text-2xl ml-2 cursor-pointer"
                onClick={handleLogout}
              >
                 <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
             
            </div>
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
          <a href="/library" className="hover:bg-dark-color py-3 px-6">
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

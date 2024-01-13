import { useNavigate } from "react-router-dom";
import Userlogin from "../publieur/Userlogin";
import { useEffect } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (UserContext.authenticated) {
      navigate('/'); 
    }
  }, []);
  return ( 
  <div>
    <h1>sui hada login</h1> 
  <Userlogin/>
  </div>
  );
}

export default Login;
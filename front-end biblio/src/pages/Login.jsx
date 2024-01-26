import { useNavigate } from "react-router-dom";
import Userlogin from "../publieur/Userlogin";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";

function Login() {
  const context = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (context.authenticated) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Userlogin />
    </div>
  );
}

export default Login;

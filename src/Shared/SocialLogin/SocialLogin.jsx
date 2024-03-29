import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const { googleSignEmailPass } = useContext(AuthContext);
  const handleLogGoogle = () => {
    googleSignEmailPass().then((result) => {
      const loggedUser = result.user;

      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("https://summer-camp-server-livid.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider"><span className="text-black">OR</span></div>
      <div className="w-full text-center my-2">
        <button
          onClick={handleLogGoogle}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

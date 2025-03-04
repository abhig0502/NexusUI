import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  // console.log(user.firstName);
  // if(user)
  // console.log(user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
// console.log(user.user.photoUrl);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          NEXUS{" "}
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">
            Welcome,{" "}
            {user?.user?.firstName ? user?.user.firstName : user?.firstName}{" "}
          </div>
          <div className="dropdown dropdown-end mx-5 flex ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mr-7"
            >
              <div className="w-10 rounded-full ">
                <img alt="Tailwind CSS Navbar component" src={user?.user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link to="/" className="justify-between">
                  Home
                  <span className="badge"></span>
                </Link>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge"></span>
                </Link>
              </li>
              <li>
                <Link to ="/connections">Connections</Link>
              </li>
              <li>
                <Link to ="/requests">Requests</Link>
              </li>
             
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { useContext } from "react";
import { FaBookmark, FaList } from "react-icons/fa";
import { MdAddTask, MdIncompleteCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SubNav = () => {
  const { user } = useContext(AuthContext);

  const subMenus = (
    <>
      <li>
        <NavLink to="/dashboard/todoList">
          <FaList></FaList>
          TodoList
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/ongoing">
          <FaBookmark></FaBookmark>
          Ongoing
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/completed">
          <MdIncompleteCircle />
          Completed
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar rounded border">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {subMenus}
            </ul>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user && (
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              )}
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {subMenus}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard/createTask">
            <button className="btn btn-primary">
              <MdAddTask className="text-2xl"></MdAddTask>
              Create
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNav;

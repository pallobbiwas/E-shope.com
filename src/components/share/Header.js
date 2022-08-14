import React from "react";
import { Link } from "react-router-dom";
import "../../styel/header.css";

const Header = ({ children }) => {
  return (
    <div className="">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col fixed top-0 w-full">
          <div className="w-full navbar box-size">
            <div className="flex-1 px-2 mx-2 text-white text-4xl font-bold">
              Online shope
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block ">
              <div>
                <ul className="menu menu-horizontal text-yellow-500 font-bold">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/home">Products</Link>
                  </li>
                  <li>
                    <Link to="/home">Shope</Link>
                  </li>
                  <li>
                    <Link to="/home">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/home">Review</Link>
                  </li>
                  <li>
                    <Link to="/home">Abut us</Link>
                  </li>
                  <li className="form-control ml-10 mr-4">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-96"
                    />
                  </li>
                  <li className="bg-blue-600 rounded-md text-white font-bold mr-2">
                    <Link to="/home">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 box-size text-white font-bold">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home">Products</Link>
            </li>
            <li>
              <Link to="/home">Shope</Link>
            </li>
            <li>
              <Link to="/home">Blogs</Link>
            </li>
            <li>
              <Link to="/home">Review</Link>
            </li>
            <li>
              <Link to="/home">Abut us</Link>
            </li>
            <li className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </li>
            <li className="bg-blue-600 rounded-md text-white font-bold mt-2">
              <Link to="/home">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

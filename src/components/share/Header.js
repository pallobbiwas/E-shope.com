import React from "react";
import { Link } from "react-router-dom";
import "../../styel/header.css";

const Header = ({ children }) => {
  return (
    <div className="">
      <div class="drawer ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col fixed top-0 w-full">
          <div class="w-full navbar box-size">
            <div class="flex-1 px-2 mx-2 text-white text-4xl font-bold">
              Online shope
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div class="flex-none hidden lg:block ">
              <div>
                <ul class="menu menu-horizontal text-yellow-500 font-bold">
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
                  <li class="form-control ml-10 mr-4">
                    <input
                      type="text"
                      placeholder="Search"
                      class="input input-bordered w-96"
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
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 box-size text-white font-bold">
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
            <li class="form-control">
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered"
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

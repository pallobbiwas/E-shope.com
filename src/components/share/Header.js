import React from "react";
import { Link } from "react-router-dom";
import "../../styel/header.css";

const Header = ({ children }) => {
  const order = 2;
  return (
    <div className="">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col w-full">
          <div className="w-full flex py-4 md:block box-size border-bottom fixed  top-0 z-50">
            <div className="flex-1 px-2 mx-2 text-white mb-4 md:px-32">
              <p className="text-left md:text-center">
                <span className="text-4xl font-bold text-yellow-500">
                  Online.
                </span>{" "}
                <span className="text-2xl">shope</span>
              </p>
              <hr className="hr hidden md:block"></hr>
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
                  <li className="form-control ml-10 mr-4 relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-96"
                    />
                    <button className="absolute right-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="bg-blue-600 rounded-md text-white font-bold mr-2">
                    <div class="indicator">
                      <span class="indicator-item badge badge-secondary">
                        {order}
                      </span>
                      <div class="grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </div>
                    </div>
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
            <li className="form-control relative">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
              <button className="absolute right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </li>
            <li className="bg-blue-600 rounded-md text-white font-bold my-2">
              <div class="indicator">
                <span class="indicator-item badge badge-secondary">1</span>
                <div class="grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
              </div>
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

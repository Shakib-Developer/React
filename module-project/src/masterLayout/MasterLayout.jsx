import React, { useEffect, useState } from "react";
import { postCategories } from "../ApiRequest/ApiRequest.js";
import { NavLink } from "react-router-dom";

const MasterLayout = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await postCategories();
      setCategories(res);
    })();
  }, []);

  return (
    <>
      <div>
        <div className="navbar fixed z-50 top-0 shadow bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to={"/"}>হোম</NavLink>{" "}
                </li>
                {categories.map((item, index) => {
                  return (
                    <li>
                      <NavLink
                        key={index.toString()}
                        to={"/byCategory/" + item["id"]}
                      >
                        {item["name"]}
                      </NavLink>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">MR-BLOG</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2">
              <li>
                <NavLink to={"/"}>হোম</NavLink>{" "}
              </li>
              {categories.map((item, index) => {
                return (
                  <li>
                    <NavLink
                      key={index.toString()}
                      to={"/byCategory/" + item["id"]}
                    >
                      {item["name"]}
                    </NavLink>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {props.children}

      <footer className="footer mt-10 p-20 bg-base-200 text-base-content">
        <div>
          <span className="footer-title text-white">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-white">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-white">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title text-white">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MasterLayout;

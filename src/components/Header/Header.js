import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import logo from "../../asset/image/logo.png";
import "./header.scss";

const solutions = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Booking",

    to: "/booking",
  },
  { name: "Event", to: "/events" },
];
let activeStyle = {
  color: "#67e8f9",
};

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const changeColorNavbarScroll = () => {
    if(window.scrollY >=50){
      setNavbar(true)
    }else{
      setNavbar(false);
    }
  }
  useEffect(() => {
    changeColorNavbarScroll();
    window.addEventListener('scroll', changeColorNavbarScroll)
  })
  return (
    <Popover className={navbar? 'fixed z-40 w-full bg-neutral-800 transition ease-in-out delay-150':'fixed w-full z-50'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b border-gray-300 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/">
              {/* <span className="sr-only">Your Company</span> */}
              <img className="h-8 w-auto sm:h-10" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center text-white">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="nav-menu hidden space-x-10 md:flex"
          >
            <NavLink
              to="/"
              className="nav-link text-lg font-semibold text-gray-500"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/booking"
              className="nav-link text-lg font-semibold text-gray-500"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Booking
            </NavLink>
            <NavLink
              to="/events"
              className="nav-link text-lg font-semibold text-gray-500"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Events
            </NavLink>
            <NavLink
              to="/signin"
              className="nav-link text-lg font-semibold text-gray-500"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="nav-link text-lg font-semibold text-gray-500"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign Up
            </NavLink>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-6 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center text-black ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <NavLink
                  to="/signup"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </NavLink>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Do you have an account?{" "}
                  <NavLink
                    to="/signin"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { Input } from "./ui/input";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="relative bg-white">
          <div className="max-w-10x2 mx-auto px-4">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  {/* <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  /> */}
                  <p className="cursor-pointer text-4xl font-bold text-pink-800">BookStore</p>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              
              <nav className="hidden md:flex space-x-10">
                <a
                  href="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  About Us
                </a>
                <a
                  href="/store"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Store
                </a>
              
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Input className="hidden md:flex" placeholder="Search your book" />
                <a
                  href="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 border rounded-md"
                >
                  Login
                </a>
                <a
                  href="/create-an-account"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Create an account
                </a>
                <a href="#">
                  <IoCartOutline />
                </a>
                <a href="#" className="flex">
                  <RxAvatar /> 
                  <p>Samir Kumar</p>
                </a>
              </div>
            </div>
            <Input placeholder="Search your book" className="md:hidden mb-4 mt-1" />
          </div>
          {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
  
          <div
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
                // "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    /> */}
                    <p className="cursor-pointer text-4xl font-bold text-pink-800">BookStore</p>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Home
                      </span>
                    </a>
                    <a
                      href="/about-us"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        About Us
                      </span>
                    </a>   
                    <a
                      href="store"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Store
                      </span>
                    </a>               
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="/create-an-account"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                   Create an account
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer? <a href="/login" className="text-indigo-600 hover:text-indigo-500">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default NavBar;
  
//   const App = () => (
//     <>
//       <NavBar></NavBar>
//       <main>I like it</main>
//     </>
//   );
  
//   ReactDOM.render(<App />, document.getElementById("app"));
  
import Image from "next/image";
import Link from "next/link";
import{ useRouter } from "next/router";
import { Link as FLink } from "react-scroll";

import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const preview = () => {
    document.getElementById("preview").style.display = "block";
    document.querySelectorAll("nav")[0].style.zIndex = "-1";
  };
  const [display, setDisplay] = useState(false);
  const dropdown = () => {
    if (display === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  const [displayphone, setPhone] = useState(false);
  const dropdownphone = () => {
    if (displayphone === false) {
      setPhone(true);
    } else {
      setPhone(false);
    }
  };

const [underline, setUnderline] = useState(false)
useEffect(() => {
  if(router.pathname==="/"){
setUnderline(true)
}
else{
  setUnderline(false)
}

}, [])


  return (
    <>
      <nav
        className={`px-5 sm:px-4 text-[0.9rem] py-2.5 sticky w-full z-100 bg-white z-20 top-0 left-0 text-[#2E2E2E]  font-inter `}
      >
        <div className="container bg-white flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={dropdownphone}
            className="inline-flex  items-center p-2 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <a href="https://ownboon.com" className="flex items-center">
            <Image
              width={50}
              height={100}
              src="/logo.png"
              className=" mr-1 rounded-full "
              alt="Ownboon Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Own<span className="text-[#00F0B5]">Boon</span>
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="  text-white   sm:text-[1rem] xs:text[0.5rem] login  w-[111px] h-[38px] text-center  rounded-full"
              onClick={preview}
            >
              Login
            </button>
          </div>
          <div
            className={`items-center text-[0.9rem] justify-between ${
              displayphone === true ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li>
              {underline===true? 
                <FLink
                activeClass={"activelink"}
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`Link cursor-pointer block py-2 pl-3 pr-4 md:p-0 `}
                  id="homelink"
                  aria-current="page"
                  
                >
                  Home
                </FLink>
              :
                <Link
                  href="/"
                  scroll={false}
                  passHref
                  className={`Link  block py-2 pl-3 pr-4 md:p-0 `}
                  id="homelink"
                  aria-current="page"
                  
                >
                  Home
                </Link>

              }
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={dropdown}
                  className="flex items-center justify-between w-full  py-2 pl-3 pr-4 md:p-0 font-medium   md:w-auto "
                >
                  Explore
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`${
                    display === true ? "z-100 ml-2 " : "hidden"
                  } bg-white items-start  font-light   divide-y divide-gray-100 rounded-lg  w-full `}
                >
                  <ul
                    className="ml-[-30px] z-100 bg-white justify-center py-3 px-5 items-center absolute text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/habits"
                        className={`Link block p-4  ${
                          router.pathname == "/habits"
                            ? "activelink font-bold"
                            : ""
                        }`}
                      >
                        Habits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/productivity"
                        className={`Link block p-4  ${
                          router.pathname == "/productivity"
                            ? "activelink font-bold"
                            : ""
                        }`}
                      >
                        Productivity
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/workspace"
                        className={`Link  block p-4  ${
                          router.pathname == "/creators"
                            ? "activelink font-bold"
                            : ""
                        }`}
                      >
                        Workspace
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community"
                        className={`Link  block p-4  ${
                          router.pathname == "/creators"
                            ? "activelink font-bold"
                            : ""
                        }`}
                      >
                        Community
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
              {underline === true? 
                <FLink
                  activeClass="activelink"
                  to="benefit"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/#benefit"
                  id="benefitlink"
                  className=" block py-2 Link pl-3 pr-4 md:p-0 "
                >
                  Benefit
                </FLink>
              :
                <Link  
                  href="/#benefit"
                  scroll={true}
                  id="benefitlink"
                  className=" block py-2 Link pl-3 pr-4 md:p-0 "
                >
                  Benefit
                </Link>
              }
              </li>
              <li>
              {underline === true? 
                <FLink
                  activeClass="activelink"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/#about"
                  className="Link  block py-2 pl-3 pr-4 md:p-0 "
                >
                  About Us
                </FLink> :
                <Link
                  href="/#about"
                  className="Link block py-2 pl-3 pr-4 md:p-0 "
                >
                  About Us
                </Link>
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

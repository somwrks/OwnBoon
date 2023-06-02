import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "../components/AppProvider";

import { useContext, useEffect, useState } from "react";
export default function Navbar() {
  const router = useRouter();
  const { asPath } = router;
  const { openPopup } = useContext(AppContext);
  const handleClick = () => {
    openPopup(true); 
  };
  const [display, setDisplay] = useState(false);
  const [displaylock, lockDisplay] = useState(false);
  const [displaypromise, promiseDisplay] = useState(false);
  const dropdownlock = () => {
    if (displaypromise === false) {
      lockDisplay(true);
      promiseDisplay(true);
    } else {
      promiseDisplay(false);
      lockDisplay(false);
    }
  };
  const hoverInside = () => {
    setDisplay(true);
  };
  const hoverOutside = () => {
    if (displaylock === true) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  const [bugermenu, setBurgerMenu] = useState(false);
  const dorpdownburgermenu = () => {
    if (bugermenu === false) {
      setBurgerMenu(true);
    } else {
      setBurgerMenu(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("activelink");
        if (li.classList.contains(current)) {
          li.classList.add("activelink");
        }
      });
    };
  }, []);

  return (
    <>
      <nav
        className={`px-5 sm:px-4 text-[0.9rem] py-2.5 sticky w-full z-100 bg-white z-20 top-0 left-0 text-[#2E2E2E]  font-inter `}
      >
        <div className="container bg-white flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={dorpdownburgermenu}
            className="inline-flex  items-center p-2 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1239 0.821367C30.568 3.19361 28.4028 3.66688 15.1153 3.66688C1.77021 3.66688 -2.27745 2.80251 1.16616 0.68709C2.78704 -0.307886 27.0851 -0.186816 28.1239 0.821367ZM18.9747 10.6024C19.8342 12.7757 18.4001 13.2057 10.3343 13.1947C1.52376 13.1822 -0.574165 12.6158 1.07015 10.6933C2.46347 9.0644 18.3343 8.98369 18.9747 10.6024ZM28.1239 19.1653C30.5665 21.5361 28.4013 22.0108 15.212 21.9998C1.70671 21.9881 -0.695127 21.5632 1.07015 19.4984C2.30395 18.0559 26.6716 17.7558 28.1239 19.1653Z"
                fill="#2E2E2E"
              />
            </svg>
          </button>
          <Link href="https://ownboon.com" className="flex items-center">
            <Image
              width={40}
              height={40}
              src="/logo.png"
              className=" mr-1 rounded-full "
              alt="Ownboon Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Own<span className="text-[#00F0B5]">Boon</span>
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="  text-white   sm:text-[1rem] xs:text[0.5rem] login  w-[111px] h-[38px] text-center  rounded-full"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
          <div
            className={`items-center text-[0.9rem] justify-between ${
              bugermenu === true ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <Link
                  href={`${asPath==="/"? "/#home" : "/"}`}
                  
                  className={`transform-letter  block py-2 pl-3 pr-4 md:p-0 ${
                    asPath == "/" ? " activelink font-bold" : "Link"
                  }`}
                  id="homelink"
                  scroll={false}
                >
                  Home
                </Link>
              </li>
              <li onMouseEnter={hoverInside} onMouseLeave={hoverOutside}>
                <button
                  id="dropdownNavbarLink"
                  onClick={dropdownlock}
                  className={`transform-letter flex text-left justify-between w-full  py-2 pl-3 pr-4 md:p-0 font-medium ${
                    asPath == "/productivity" ||
                    asPath == "/habits" ||
                    asPath == "/workspace" ||
                    asPath == "/community"
                      ? "activelink font-bold"
                      : "Link"
                  }  md:w-auto `}
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
                    className="ml-[-30px] z-100 bg-white justify-center py-3 px-5 items-center absolute text-gray-700 transform-letter"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/habits"
                        className={`transform-letter block p-4  ${
                          asPath === "/habits" ? "activelink font-bold" : "Link"
                        }`}
                      >
                        Habits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/productivity"
                        className={`transform-letter block p-4  ${
                          asPath == "/productivity"
                            ? "activelink font-bold"
                            : "Link"
                        }`}
                      >
                        Productivity
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/community"
                        className={`transform-letter  block p-4  ${
                          asPath == "/community"
                            ? "activelink font-bold"
                            : "Link"
                        }`}
                      >
                        Community
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/#benefit"
                  scroll={false}
                  id="benefitlink"
                  className={`transform-letter block  ${
                    asPath == "/#benefit" ? "activelink font-bold" : "Link"
                  } py-2  pl-3 pr-4 md:p-0 `}
                >
                  Benefit
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  href="/#about"
                  className={`transform-letter block  ${
                    asPath == "/#about" ? "activelink font-bold" : "Link"
                  } py-2  pl-3 pr-4 md:p-0 `}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

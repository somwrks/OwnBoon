import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function Navbar() {
  const router = useRouter();
  const { asPath } = router;
  const preview = () => {
    toast.info("Coming soon");
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
          <Link href="https://ownboon.com" className="flex items-center">
            <Image
              width={50}
              height={50}
              src="/logo.png"
              className=" mr-1 rounded-full "
              alt="Ownboon Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Own<span className="text-cyan">Boon</span>
            </span>
          </Link>
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
              bugermenu === true ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <Link
                  href="/"
                  className={` block py-2 pl-3 pr-4 md:p-0 ${
                    asPath == "/" ? "activelink font-bold" : "Link"
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
                  className={` flex text-left justify-between w-full  py-2 pl-3 pr-4 md:p-0 font-medium ${
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
                    className="ml-[-30px] z-100 bg-white justify-center py-3 px-5 items-center absolute text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/habits"
                        className={` block p-4  ${
                          asPath === "/habits" ? "activelink font-bold" : "Link"
                        }`}
                      >
                        Habits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/productivity"
                        className={` block p-4  ${
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
                        className={`  block p-4  ${
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
                  className={` block  ${
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
                  className={` block  ${
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

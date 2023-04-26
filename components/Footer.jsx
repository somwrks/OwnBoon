import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [pc, setPc] = useState(false);
  function setInitialPositions() {
    if (window.innerWidth < 768) {
      setPc(false);
    } else {
      setPc(true);
    }
  }

  useEffect(() => {
    setInitialPositions();
    window.addEventListener("resize", setInitialPositions);

    return () => {
      window.removeEventListener("resize", setInitialPositions);
    };
  }, []);
  return (
    <div>
      <footer className="bg-white mt-5 border-t-2  dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
              
          {pc ===true? 
          
            <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                  Own<span className="text-cyan">Boon</span>
                </span>
              </a>
              <div className="pt-[1vh]  text-[18px]">
                <h1 className="font-semibold">
                  Ignite your <span className=" tracking-[3px]">GROWTH</span>
                </h1>
                <div className="flex flex-row ">
                  <h1 className="font-semibold">
                    Unleash your{" "}
                    <span className=" tracking-[3px]">POTENTIAL</span>
                  </h1>
                  
                </div>
                <div className="flex flex-row text-3xl space-x-4 mt-5">
                  <Link href="https://www.linkedin.com/company/ownboon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link href="https://instagram.com/OwnBoon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <a href="https://github.com/OwnBoon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://discord.gg/HZmwkA2X">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </div>
              </div>
            </div>
          : <>
          <div className="mb-6 md:mb-0 justify-between flex flex-row">
              
              <div className="flex flex-col pt-[1vh]  text-[1.1rem]">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                  Own<span className="text-cyan">Boon</span>
                </span>
              </a>
                <h1 className="font-semibold mt-2 ">
                  Ignite your <span className=" tracking-[3px]">GROWTH</span>
                </h1>
                <h1 className="font-semibold">
                    Unleash your{" "}
                    <span className=" tracking-[3px]">POTENTIAL</span>
                  </h1>
                  
                </div>
                <div className="flex flex-row box-content	text-3xl space-x-2 mt-5">
                <div className="flex flex-col">
                  <a href="https://www.linkedin.com/company/ownboon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://instagram.com/OwnBoon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  
                </div>
                <div className="flex flex-col">
                  <a href="https://github.com/OwnBoon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://discord.gg/HZmwkA2X">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                  
                </div>
                </div>
              </div>
         
              </>
          }
            
            <div className="grid grid-cols-2 gap-8 font-poppins sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-[1rem] font-bold text-gray-900  ">
                  Company
                </h2>
                <ul className="text-gray-600 text-[0.9rem] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Give feedback
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-[1rem] font-bold text-gray-900">
                  Contact Us
                </h2>
                <ul className="text-gray-600 text-[0.9rem] font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Join our community
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

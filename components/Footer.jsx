import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

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
      <footer class="bg-white mt-5 border-t-2  dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
              
          {pc ===true? 
          
            <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 mr-3"
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
                  <a href="http://">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="http://">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="http://">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="http://">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </div>
              </div>
            </div>
          : <div class="mb-6 md:mb-0 justify-between flex flex-row">
              
              <div className="flex flex-col pt-[1vh]  text-[1.1rem]">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 mr-3"
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
                <div className="flex flex-row flex-wrap box-content	p-4 text-3xl space-x-2 mt-5">
                  <a href="http://">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="http://">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="http://">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="http://">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </div>
              </div>
          }
            
            <div class="grid grid-cols-2 gap-8 font-poppins sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-[1rem] font-bold text-gray-900  ">
                  Company
                </h2>
                <ul class="text-gray-600 text-[0.9rem] dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Give feedback
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-[1rem] font-bold text-gray-900">
                  Contact Us
                </h2>
                <ul class="text-gray-600 text-[0.9rem] font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Join our community
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
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

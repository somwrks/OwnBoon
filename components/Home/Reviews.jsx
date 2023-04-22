import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import VanillaTilt from 'vanilla-tilt';
import Image from "next/image";

export default function Reviews() {
  const [pc, setPc] = useState(true);
  function setInitialPositions() {
    if (window.innerWidth < 768) {
      setPc(false);
    } else {
      setPc(true);
    }
  }

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".review-card"),{
      max:15, speed: 300,transition:true
    })
    setInitialPositions();
    window.addEventListener("resize", setInitialPositions);

    return () => {
      window.removeEventListener("resize", setInitialPositions);
    };
  }, []);
  return (
    <div className="my-[10vh] font-poppins flex flex-col">
      <div className="flex mt-10 my-auto mx-auto items-center flex-col text-center ">
        <div className="review-heading flex flex-col">
          <h1 className="md:text-[5rem] text-[3rem] mb-10">Check out Recent Reviews</h1>
        </div>
        {pc===true ? (
          <>
            <div className="flex  flex-row justify-center flex-wrap mb-5 md:space-x-12">
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-row flex-wrap  justify-center md:space-x-12">
              <div className="w-[330px] h-[212px] mb-0 md:mb-5 review-card rounded  flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] mb-0 md:mb-5 review-card rounded  flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] mb-0 md:mb-5 review-card rounded  flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Carousel width={350}  showIndicators={false} showStatus={false} useKeyboardArrows={true} swipeable={true} showThumbs={false}  autoPlay={true} infiniteLoop={true} >
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
            </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[212px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] pl-[0.1rem]">
                        Elliot Choy
                      </h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Content Creator
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non ab explicabo vitae nemo! Doloribus eligendi non
                    repellendus numquam, earum ab!
                  </p>
                </div>
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

export default function Reviews() {
  const [pc, setPc] = useState(true);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".review-card"), {
      max: 15,
      speed: 300,
      transition: true,
    });
    function setInitialPositions() {
      if (window.innerWidth < 768) {
        setPc(false);
      } else {
        setPc(true);
      }
    }
    setInitialPositions();
    window.addEventListener("resize", setInitialPositions);

    return () => {
      window.removeEventListener("resize", setInitialPositions);
    };
  }, []);
  return (
    <div className=" font-poppins flex flex-col">
      <div className="flex mt-10 my-auto mx-auto items-center flex-col text-center ">
        <div className="review-heading flex flex-col">
          <h1 className="md:text-[4rem] mb-10 text-[3rem]">
            Check out Recent Reviews
          </h1>
        </div>
        {pc === true ? (
          <>
            <div className="flex  flex-row justify-center flex-wrap mb-5 md:space-x-12">
              <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image
                        loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] ">Elliot Choy</h3>
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
                    "OwnBoon is a game-changer! The Workspace keeps me on track
                    and the Community is so supportive. I'm addicted to the Lofi
                    music sessions!"
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image
                        loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] ">Mark Lee</h3>
                      <h4 className="text-[0.8rem] text-left text-[gray]">
                        Tulane University
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
                    "I'm blown away by OwnBoon's resources! The Informational
                    section has helped me improve my habits, and the Blog
                    section is a great source of inspiration."
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image
                        loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] ">Rachel Davis</h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Wildlife Photographer
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
                    "OwnBoon has transformed my productivity! The AI scheduler
                    in the Workspace has helped me manage my time like a pro,
                    and the Community is so uplifting."
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-row flex-wrap  justify-center md:space-x-12">
              <div className="w-[350px] h-[250px] mb-0 md:mb-5 review-card rounded  flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image
                        loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] ">Chris Thompson</h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Graphic Designer
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    "I was struggling with motivation before I found OwnBoon.
                    The virtual study buddies and Lofi music sessions in the
                    Workspace keep me focused and energized."
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[250px] mb-0 md:mb-5 review-card rounded  flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image
                        loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] ">
                        Samantha Miller
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
                    "OwnBoon is the perfect platform for personal growth. The
                    articles in the Informational section are so insightful, and
                    the Community is full of like-minded individuals."
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[250px] mb-0 md:mb-5 review-card rounded  flex flex-col p-7 border-[#00AEFF73] border ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between space-x-1 items-center">
                    <div className="flex flex-col">
                      <Image
                        loading="lazy"
                        src="/user.png"
                        alt="userImage"
                        width={40}
                        height={40}
                        className=" rounded-3xl "
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[1rem] ">Alex Smith</h3>
                      <h4 className="text-[0.8rem] text-[gray]">
                        Princeton University
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row place-items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                    <FontAwesomeIcon icon={faStar} color={"orange"} />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-left font-normal font-poppins text-[1rem]">
                    "I can't recommend OwnBoon enough! The Blog section is full
                    of amazing content, and the Workspace has made me more
                    organized and efficient than ever."
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Carousel
            width={350}
            showIndicators={false}
            showStatus={false}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
          >
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 items-center">
                  <div className="flex flex-col">
                    <Image
                      loading="lazy"
                      src="/user.png"
                      alt="userImage"
                      width={40}
                      height={40}
                      className=" rounded-3xl "
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-[1rem] ">Elliot Choy</h3>
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
                  "OwnBoon is a game-changer! The Workspace keeps me on track
                  and the Community is so supportive. I'm addicted to the Lofi
                  music sessions!"
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 items-center">
                  <div className="flex flex-col">
                    <Image
                      loading="lazy"
                      src="/user.png"
                      alt="userImage"
                      width={40}
                      height={40}
                      className=" rounded-3xl "
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-[1rem] ">Mark Lee</h3>
                    <h4 className="text-[0.8rem] text-[gray]">
                      Tulane University
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
                  "I'm blown away by OwnBoon's resources! The Informational
                  section has helped me improve my habits, and the Blog section
                  is a great source of inspiration."
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 items-center">
                  <div className="flex flex-col">
                    <Image
                      loading="lazy"
                      src="/user.png"
                      alt="userImage"
                      width={40}
                      height={40}
                      className=" rounded-3xl "
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-[1rem] ">Rachel Davis</h3>
                    <h4 className="text-[0.8rem] text-[gray]">
                      Wildlife Photographer
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
                  "The workspace feature has been a game changer for my
                  productivity!"
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 items-center">
                  <div className="flex flex-col">
                    <Image
                      loading="lazy"
                      src="/user.png"
                      alt="userImage"
                      width={40}
                      height={40}
                      className=" rounded-3xl "
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-[1rem] ">Chris Thompson</h3>
                    <h4 className="text-[0.8rem] text-[gray]">
                      Graphic Designer
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row place-items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-left font-normal font-poppins text-[1rem]">
                  "I was struggling with motivation before I found OwnBoon. The
                  virtual study buddies and Lofi music sessions in the Workspace
                  keep me focused and energized."
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 items-center">
                  <div className="flex flex-col">
                    <Image
                      loading="lazy"
                      src="/user.png"
                      alt="userImage"
                      width={40}
                      height={40}
                      className=" rounded-3xl "
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-[1rem] ">Samantha Miller</h3>
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
                  "OwnBoon is the perfect platform for personal growth. The
                  articles in the Informational section are so insightful, and
                  the Community is full of like-minded individuals."
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 items-center">
                  <div className="flex flex-col">
                    <Image
                      loading="lazy"
                      src="/user.png"
                      alt="userImage"
                      width={40}
                      height={40}
                      className=" rounded-3xl "
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-[1rem] ">Alex Smith</h3>
                    <h4 className="text-[0.8rem] text-[gray]">
                      Princeton University
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row place-items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                  <FontAwesomeIcon icon={faStar} color={"orange"} />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-left font-normal font-poppins text-[1rem]">
                  "I can't recommend OwnBoon enough! The Blog section is full of
                  amazing content, and the Workspace has made me more organized
                  and efficient than ever."
                </p>
              </div>
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
}

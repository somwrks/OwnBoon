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
          <h1 className="md:text-[4rem] mb-10 text-[20px]">
            Check out the Hype
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
                    "Excited to try Ownboon! The concept sounds fantastic, and I can't wait to see how it helps with self-improvement and productivity. Looking forward to the launch!"
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
                    "As someone interested in personal growth, I'm eagerly anticipating Ownboon. The features and roadmap mentioned sound promising. Count me in!"
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
                    "I've been following Ownboon's journey from the beginning, and I'm thrilled to see the progress. It's refreshing to have a platform dedicated to self-improvement. Can't wait to get my hands on it!"
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
                    "I've been looking for a comprehensive self-improvement tool, and Ownboon seems to fit the bill. The previews and updates have caught my attention. Excited to give it a try!"
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
                    "Ownboon's concept resonates with me. The idea of combining self-improvement and productivity is brilliant. Can't wait to see how it unfolds and helps users like me."
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
                    "The anticipation for Ownboon is building, and I'm glad to be a part of it. The team's dedication and vision are inspiring. Looking forward to exploring the platform soon!"
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
                <div className="flex flex-row justify-between space-x-1 ">
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
                    <h3 className="font-bold text-[15px] ">Elliot Choy</h3>
                    <h4 className="text-[12px] text-[gray]">
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
              <div className="mt-[2vh]">
                <p className="text-left font-normal font-poppins text-[15px]">
                  "OwnBoon is a game-changer! The Workspace keeps me on track
                  and the Community is so supportive. I'm addicted to the Lofi
                  music sessions!"
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 ">
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
                    <h3 className="font-bold text-[15px] ">Mark Lee</h3>
                    <h4 className="text-[12px] text-[gray]">
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
              <div className="mt-[2vh]">
                <p className="text-left font-normal font-poppins text-[15px]">
                  "I'm blown away by OwnBoon's resources! The Informational
                  section has helped me improve my habits, and the Blog section
                  is a great source of inspiration."
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 ">
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
                    <h3 className="font-bold text-[15px] ">Rachel Davis</h3>
                    <h4 className="text-[12px] text-[gray]">
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
              <div className="mt-[2vh]">
                <p className="text-left font-normal font-poppins text-[15px]">
                  "The workspace feature has been a game changer for my
                  productivity!"
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 ">
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
                    <h3 className="font-bold text-[15px] ">Chris Thompson</h3>
                    <h4 className="text-[12px] text-[gray]">
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
              <div className="mt-[2vh]">
                <p className="text-left font-normal font-poppins text-[15px]">
                  "I was struggling with motivation before I found OwnBoon. The
                  virtual study buddies and Lofi music sessions in the Workspace
                  keep me focused and energized."
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 ">
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
                    <h3 className="font-bold text-[15px] ">Samantha Miller</h3>
                    <h4 className="text-[12px] text-[gray]">
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
              <div className="mt-[2vh]">
                <p className="text-left font-normal font-poppins text-[15px]">
                  "OwnBoon is the perfect platform for personal growth. The
                  articles in the Informational section are so insightful, and
                  the Community is full of like-minded individuals."
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[250px] text-[15px] review-card rounded mb-0 md:mb-5 flex flex-col p-7 border-[#00AEFF73] border ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between space-x-1 ">
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
                    <h3 className="font-bold  ">Alex Smith</h3>
                    <h4 className="text-[12px] text-[gray]">
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
              <div className="mt-[2vh]">
                <p className="text-left font-normal font-poppins ">
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

import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./ReviewCard"
export default function Reviews() {
  const [pc, setPc] = useState(true);
  useEffect(() => {
   
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
          <h1 className="md:text-[4rem] mb-10 text-[2.5rem]">
            Check out the Hype
          </h1>
        </div>
        {pc === true ? (
          <>
            <div className="flex  flex-row justify-center flex-wrap items-center align-center mb-5 mx-[10vw]">
            
             <ReviewCard name={"Adam Wong"} border={"blue"} review={"During the pandemic, my habits and strategies crumbled. I seek an all-in-one app to regain control. Integrated tools would simplify self-improvement, restoring ease and enjoyment to my journey."} title={"Content Creator"} rating={5}  pfp="wong.jpg"/>
             <ReviewCard name={"Nisrine Maruan"} border={"green"} review={"The OwnBoon concept is a well-researched concept with innovative features that bring together all possible ways to be motivated and to efficiently increase our productivity. I can't wait to use it!"} title={"Full Stack Developer"} rating={5} />
             <ReviewCard name={"Bernie Zhong"} border={"red"} pfp="bernie.jpg" review={"As someone who values self-improvement and seeks connections with like-minded individuals, this platform aligns perfectly with my goals."} title={"Content Creator"} rating={5} />
             <ReviewCard name={"Adam Wong"} border={"blue"} review={"During the pandemic many of the habits and strategies I had implemented fell apart. I have been looking for something tohelp me get my act together. Having all my productivitytools in one app will save from having to integrate disjoint tools and hopefully make self improvement easy and fun again."} title={"Content Creator"} rating={5} />
             <ReviewCard name={"Adam Wong"} border={"green"} review={"During the pandemic many of the habits and strategies I had implemented fell apart. I have been looking for something tohelp me get my act together. Having all my productivitytools in one app will save from having to integrate disjoint tools and hopefully make self improvement easy and fun again."} title={"Content Creator"} rating={5} />
             <ReviewCard name={"Adam Wong"} border={"red"} review={"During the pandemic many of the habits and strategies I had implemented fell apart. I have been looking for something tohelp me get my act together. Having all my productivitytools in one app will save from having to integrate disjoint tools and hopefully make self improvement easy and fun again."} title={"Content Creator"} rating={5} />
             
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
             <ReviewCard name={"Adam Wong"} border={"blue"} review={"During the pandemic, my habits and strategies crumbled. I seek an all-in-one app to regain control. Integrated tools would simplify self-improvement, restoring ease and enjoyment to my journey."} title={"Content Creator"} rating={5}  />
             
          </Carousel>
        )}
      </div>
    </div>
  );
}

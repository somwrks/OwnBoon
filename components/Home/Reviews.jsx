import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./ReviewCard";
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
    <div className=" font-poppins  flex flex-col">
      <div className="flex mt-10 my-auto mx-auto w-[85%] items-center flex-col text-center ">
        <div className="review-heading flex flex-col">
          <h1 className="md:text-[4rem] mb-10 text-[2.5rem]">
            Check out the Hype
          </h1>
        </div>
        {pc === true ? (
          <>
            <div className="flex  flex-row justify-center flex-wrap items-center align-center mb-5 mx-[10vw]">
              <ReviewCard
                pc={pc}
                name={"Adam Wong"}
                border={"blue"}
                review={
                  "During the pandemic, my habits and strategies crumbled. I seek an all-in-one app to regain control. Integrated tools would simplify self-improvement, restoring ease and enjoyment to my journey."
                }
                title={"Content Creator"}
                rating={5}
                pfp="wong.jpg"
              />
              <ReviewCard
                pc={pc}
                name={"Nisrine Maruan"}
                pfp="user.png"
                border={"green"}
                review={
                  "The OwnBoon concept is a well-researched concept with innovative features that bring together all possible ways to be motivated and to efficiently increase our productivity. I can't wait to use it!"
                }
                title={"Full Stack Developer"}
                rating={5}
              />
              <ReviewCard
                pc={pc}
                name={"Bernie Zhong"}
                border={"red"}
                pfp="bernie.jpg"
                review={
                  "Being someone who values self-improvement and seeks new connections with like-minded individuals. I think, This Amazing platform aligns perfectly with my goals."
                }
                title={"Content Creator"}
                rating={5}
              />
              <ReviewCard
                pc={pc}
                name={"Aj Kurano"}
                pfp={"ajkurnao.jpg"}
                border={"red"}
                review={
                  "Initially overlooked, OwnBoon's potential for personal growth and skill cultivation became evident upon revisiting. A remarkable opportunity for individuals seeking self-improvement and development."
                }
                title={"Content Creator"}
                rating={5}
              />
              <ReviewCard
                pc={pc}
                name={"Vanessa"}
                title={"Content Creator"}
                border={"blue"}
                pfp={"vanessa.jpg"}
                review={
                  "OwnBoon reached out to share their promising mental health app. Their extensive research and genuine care for well-being impressed me. It's Perfect for my Mental Health Community."
                }
                rating={5}
              />
              <ReviewCard
                pc={pc}
                name={"James"}
                border={"green"}
                pfp={"user.png"}
                review={
                  "OwnBoon's platform consolidates productivity tools, transforming self-improvement into an enjoyable and effortless journey. A revolutionary approach to foster personal development."
                }
                title={"Photographer"}
                rating={5}
              />
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
            <ReviewCard
              pc={pc}
              name={"Adam Wong"}
              border={"blue"}
              review={
                "During the pandemic, my habits and strategies crumbled. I seek an all-in-one app to regain control. Integrated tools would simplify self-improvement, restoring ease and enjoyment to my journey."
              }
              title={"Content Creator"}
              rating={5}
              pfp="wong.jpg"
            />
            <ReviewCard
              pc={pc}
              name={"Nisrine Maruan"}
              pfp="user.png"
              border={"green"}
              review={
                "The OwnBoon concept is a well-researched concept with innovative features that bring together all possible ways to be motivated and to efficiently increase our productivity. I can't wait to use it!"
              }
              title={"Full Stack Developer"}
              rating={5}
            />
            <ReviewCard
              pc={pc}
              name={"Bernie Zhong"}
              border={"red"}
              pfp="bernie.jpg"
              review={
                "Being someone who values self-improvement and seeks new connections with like-minded individuals. I think, This Amazing platform aligns perfectly with my goals."
              }
              title={"Content Creator"}
              rating={5}
            />
            <ReviewCard
              pc={pc}
              name={"Aj Kurano"}
              pfp={"ajkurnao.jpg"}
              border={"red"}
              review={
                "Initially overlooked, OwnBoon's potential for personal growth and skill cultivation became evident upon revisiting. A remarkable opportunity for individuals seeking self-improvement and development."
              }
              title={"Content Creator"}
              rating={5}
            />
            <ReviewCard
              pc={pc}
              name={"Vanessa"}
              title={"Content Creator"}
              border={"blue"}
              pfp={"vanessa.jpg"}
              review={
                "OwnBoon reached out to share their promising mental health app. Their extensive research and genuine care for well-being impressed me. It's Perfect for my Mental Health Community."
              }
              rating={5}
            />
            <ReviewCard
              pc={pc}
              name={"James"}
              border={"green"}
              pfp={"user.png"}
              review={
                "OwnBoon's platform consolidates productivity tools, transforming self-improvement into an enjoyable and effortless journey. A revolutionary approach to foster personal development."
              }
              title={"Photographer"}
              rating={5}
            />
          </Carousel>
        )}
      </div>
    </div>
  );
}

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
                pfp="user.jpg"
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
                  "As someone who values self-improvement and seeks connections with like-minded individuals, this platform aligns perfectly with my goals."
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
                  "Upon first encountering OwnBoon, I didn't fully grasp its potential. However, upon revisiting the concept, I realized the immense value it holds. It presents a remarkable opportunity for individuals to cultivate various skills and embark on a journey of personal growth."
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
                  "I have been looking for high quality mental health apps to share with my Mental Health Community. This company has reached out to me to see if I was interested in their app, and so far their idea is very promising. They have clearly done their research, and care for others mental health and wellbeing"
                }
                rating={5}
              />
              <ReviewCard
                pc={pc}
                name={"James"}
                border={"green"}
                pfp={"james.jpg"}
                review={
                  "At first, I didn't pay much attention to OwnBoon. But upon reflection, I discovered its incredible utility for fostering personal development and acquiring  skills. It has the power to make self-improvement enjoyable and effortless by consolidating all productivity tools into one user-friendly app."
                }
                title={"Content Creator"}
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
              pfp="user.jpg"
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
                "As someone who values self-improvement and seeks connections with like-minded individuals, this platform aligns perfectly with my goals."
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
                "Upon first encountering OwnBoon, I didn't fully grasp its potential. However, upon revisiting the concept, I realized the immense value it holds. It presents a remarkable opportunity for individuals to cultivate various skills and embark on a journey of personal growth."
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
                "I have been looking for high quality mental health apps to share with my Mental Health Community. This company has reached out to me to see if I was interested in their app, and so far their idea is very promising. They have clearly done their research, and care for others mental health and wellbeing"
              }
              rating={5}
            />
            <ReviewCard
              pc={pc}
              name={"James"}
              border={"green"}
              pfp={"james.jpg"}
              review={
                "At first, I didn't pay much attention to OwnBoon. But upon reflection, I discovered its incredible utility for fostering personal development and acquiring  skills. It has the power to make self-improvement enjoyable and effortless by consolidating all productivity tools into one user-friendly app."
              }
              title={"Content Creator"}
              rating={5}
            />
          </Carousel>
        )}
      </div>
    </div>
  );
}

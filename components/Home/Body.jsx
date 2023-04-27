import Image from "next/image";
import { useEffect, useState } from "react";

export default function Body() {
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
    <div className="mt-[5vh] bg-white text-[#2E2E2E] flex flex-col font-poppins  items-center align-center p-5 justify-center">
      <div className="heading">
        <h1 className="md:text-[4rem] text-[3rem]">Why OwnBoon?</h1>
        <h3 className="md:text-[1.5rem] text-[1.5rem] py-1 ">
          It all starts somewhere. <br />
          Ignite your growth, Unleash your Potential
        </h3>
      </div>

      <div className="my-auto mx-auto px-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg1">
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/bodyimage1.webp"
            alt="Gif"
          />
        </div>
        <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
          <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
            A Better Community of Like-Minded People
          </h4>
          <p className="text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
            Self-improvement is a journey that begins with gaining insight into
            and understanding individuals who share your goals. Meeting your
            role model can be a tremendous inspiration to emulate their success.
            Engaging in various activities such as work, socializing, and
            leisure is essential, as putting in the necessary effort to improve
            yourself. Pursue your passions, and don't shy away from exploring
            new avenues. Remember that the key to personal growth is to be
            relentless in your pursuit of improvement, every day.
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        {pc ? (
          <>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Mental Peace & Stability
              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
                Self-Improvement is a journey that starts with self-awareness
                and finding like-minded individuals. OwnBoon’s tools help you
                build communities in Discord Servers and our very own group
                chats to excel. Remember, the relentless pursuit of improvement
                every day is the key to personal growth.
              </p>
            </div>
            <div className="bodyimg2">
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage2.webp"
                alt="Gif"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bodyimg2">
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage2.webp"
                alt="Gif"
              />
            </div>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Mental Peace & Stability
              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
                Achieving stability in life requires cultivating a peaceful
                state of mind. We understand the importance of being organized
                and planning, and our tools can help make these tasks a breeze.
                Our Lofi Sessions can enhance your meditation and studies. With
                our resources, even work can become a source of enjoyment,
                allowing you to maintain a positive mindset throughout the day.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg3">
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/bodyimage3.webp"
            alt="Gif"
          />
        </div>

        <div className="flex flex-col ml-2 text-center md:text-left align-center justify-center">
          <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
            Personal Growth with Statistics{" "}
          </h4>
          <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
            Our range of tools has been carefully designed to assist you in
            achieving your personal growth goals. With our support, you can
            focus solely on your self-improvement journey without worrying about
            anything else. This website has been created exclusively for
            individuals like you who are committed to their self-development.
            Take advantage of all the available resources and unleash your full
            potential.
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        {pc ? (
          <>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Ultimate Workspace
              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
                At OwnBoon, we offer tools like the AI Scheduler and To-Do Lists
                to help maximize productivity. Our productivity tips work
                smarter, not harder. In the Farm section, cultivate a virtual
                farm with points earned through self-improvement. Compete with
                others to make your farm the best. Our Group Chats and DMs
                prioritize important conversations and minimize distractions.
                Join OwnBoon today to improve your productivity and well-being!
              </p>
            </div>
            <div >
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage4.webp"
                alt="Gif" className="animate-float"
              />
            </div>
          </>
        ) : (
          <>
            <div >
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage4.webp"
                alt="Gif"
              />
            </div>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Ultimate Workspace
              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
                At OwnBoon, we offer tools like the AI Scheduler and To-Do Lists
                to help maximize productivity. Our productivity tips work
                smarter, not harder. In the Farm section, cultivate a virtual
                farm with points earned through self-improvement. Compete with
                others to make your farm the best. Our Group Chats and DMs
                prioritize important conversations and minimize distractions.
                Join OwnBoon today to improve your productivity and well-being!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

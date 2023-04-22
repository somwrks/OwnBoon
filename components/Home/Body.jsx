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
    <div className="mt-[10vh] bg-white text-[#2E2E2E] flex flex-col font-poppins mx-auto my-auto items-center align-center p-5 justify-center">
      <div className="heading">
        <h1 className="md:text-[5rem] text-[3rem]">Why OwnBoon?</h1>
        <h3 className="md:text-[2rem] text-[1.5rem] py-3 ">
        It all starts somewhere <br />
        Ignite your growth, Unleash your Potential

        </h3>
      </div>

      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg1">
          <Image  width={700} height={700} loading="lazy" src="/bodyimage1.webp" alt="Gif" />
        </div>
        <div className="flex flex-col ml-2  text-center md:text-left align-center justify-center">
          <h4 className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
          A Better Community of Like-Minded People

          </h4>
          <p className="text-[0.8rem] md:text-[1.2rem] break-normal max-w-3xl">
          Self-improvement is a journey that begins with gaining insight into and understanding individuals who share your goals. Meeting your role model can be a tremendous inspiration to emulate their success. Engaging in various activities such as work, socializing, and leisure is essential, as putting in the necessary effort to improve yourself. Pursue your passions, and don't shy away from exploring new avenues. Remember that the key to personal growth is to be relentless in your pursuit of improvement, every day.

          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        {pc ? (
          <>
            <div className="flex flex-col mr-2 text-center md:text-left align-center justify-center">
              <h4 className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
              Mental Peace & Stability

              </h4>
              <p className=" break-normal max-w-3xl text-[0.8rem] md:text-[1.2rem] ">
              Achieving stability in life requires cultivating a peaceful state of mind. We understand the importance of being organized and planning, and our tools can help make these tasks a breeze. Our playlists can enhance your meditation and exercise sessions, making them both enjoyable and fulfilling. With our resources, even work can become a source of enjoyment, allowing you to maintain a positive mindset throughout the day. Trust in our expertise to help you attain the peace of mind necessary to succeed in all aspects of life
              </p>
            </div>
            <div className="bodyimg2">
            <Image width={700} height={700} loading="lazy" src="/bodyimage2.webp" alt="Gif" />
            </div>
          </>
        ) : (
          <>
            <div className="bodyimg2">
            <Image width={700} height={700} loading="lazy" src="/bodyimage2.webp" alt="Gif" />
            </div>
            <div className="flex flex-col mr-2 text-center md:text-left align-center justify-center">
              <h4 className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
              Mental Peace & Stability
              </h4>
              <p className=" break-normal max-w-3xl text-[0.8rem] md:text-[1.2rem] ">
              Achieving stability in life requires cultivating a peaceful state of mind. We understand the importance of being organized and planning, and our tools can help make these tasks a breeze. Our playlists can enhance your meditation and exercise sessions, making them both enjoyable and fulfilling. With our resources, even work can become a source of enjoyment, allowing you to maintain a positive mindset throughout the day. Trust in our expertise to help you attain the peace of mind necessary to succeed in all aspects of life
              </p>
            </div>
          </>
        )}
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg3">
        <Image width={700} height={700} loading="lazy" src="/bodyimage3.webp" alt="Gif" />
        </div>

        <div className="flex flex-col ml-2 text-center md:text-left align-center justify-center">
          <h4 className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
          Personal Growth with Statistics          </h4>
          <p className=" break-normal max-w-3xl text-[0.8rem] md:text-[1.2rem] ">
          Our range of products and tools has been carefully designed to assist you in achieving your personal growth goals. With our support, you can focus solely on your self-improvement journey without worrying about anything else. This website has been created exclusively for individuals like you who are committed to their self-development. Take advantage of all the available resources and unleash your full potential, transforming into the best possible version of yourself.
          </p>
        </div>
      </div>
    </div>
  );
}

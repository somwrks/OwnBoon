import Image from "next/image";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    function reveal() {
      var crew = document.querySelectorAll(".crew");
      for (var i = 0; i < crew.length; i++) {
        var windowHeight = window.innerHeight;
        var crewTop = crew[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (crewTop < windowHeight - elementVisible) {
          crew[i]?.classList.add("show");
        }
      }
    }
    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <section id="about">
      <div className="p-5 py-[10vh] about-bg  bg-white text-[#2E2E2E]   flex-wrap flex flex-row  font-poppins align-center items-center justify-center  ">
        <div className="flex flex-col px-10 heading py-10 text-center md:text-left align-center justify-center ">
          <h1 className=" text-center md:text-left text-[32px]  font-bold">
            About Us
          </h1>
          <p className="text-[18px]  md:text-[1.2rem] break-normal max-w-2xl">
            Our founder, Som’s journey in Self-Improvement showed him the need
            for an all-in-one social platform that helps individuals in their
            journey and provides all the necessary tools for growth. We have
            seen the ever-growing trap of social media and how it uses dopamine
            hits to engage users. Our staff have personally seen the negative
            effects of the problems and is ever so motivated to fix those.
            Together we find the solutions to the problems that people face in
            the Self-Improvement Journey <br /> With you, we are dedicated to
            creating a positive and transformative experience.
          </p>
        </div>
        <div className=" px-10  justify-center flex flex-col py-10 md:flex-nowrap flex-wrap ">
          <h1 className="text-center md:text-left text-[32px] benefit-heading font-bold">
            Our Team
          </h1>
          <div className="flex  flex-row">
            <div className="flex px-3 flex-col">
              <div className="flex p-3 justify-center items-center align-center flex-col">
                <svg
                  className="absolute mb-16"
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M0 58.5C0 26.1913 26.1913 0 58.5 0V0C90.8087 0 117 26.1913 117 58.5V58.5C117 90.8087 90.8087 117 58.5 117H0V58.5Z"
                    fill="#00F0B5"
                  />
                </svg>
                <Image
                  className="z-100 "
                  src={"/som.webp"}
                  width={100}
                  height={100}
                />
                <h2 className="mt-3 text-[16px] font-semibold">
                Som Srivastava
                </h2>
                <h3 className="pt-1 text-[14px]">CEO, FOUNDER</h3>
              </div>
              <div className="flex p-3 justify-center items-center align-center flex-col">
                <svg
                  className="absolute mb-16"
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M0 58.5C0 26.1913 26.1913 0 58.5 0C90.8087 0 117 26.1913 117 58.5C117 90.8087 90.8087 117 58.5 117H0V58.5Z"
                    fill="#E90064"
                  />
                </svg>
                <Image
                  className="z-100 "
                  src={"/sarthak.webp"}
                  width={100}
                  height={100}
                />
                <h2 className="mt-3 text-[16px] font-semibold">
                Saarthak Dutta
                </h2>
                <h3 className="pt-1 text-[14px]">CTO, CO-FOUNDER</h3>
              </div>
            </div>
            <div className="flex px-3  flex-col">
              <div className="flex p-3 justify-center items-center align-center flex-col">
                <svg
                  className="absolute mb-16"
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M0 58.5C0 26.1913 26.1913 0 58.5 0C90.8087 0 117 26.1913 117 58.5C117 90.8087 90.8087 117 58.5 117H0V58.5Z"
                    fill="#AA77FF"
                  />
                </svg>
                <Image
                  className="z-100 "
                  src={"/alok.webp"}
                  width={100}
                  height={100}
                />
                <h2 className="mt-3 text-[16px] font-semibold">
                Alok Singh
                </h2>
                <h3 className="pt-1 text-[14px]">COO, CO-FOUNDER</h3>
              </div>
              <div className="flex p-3 justify-center items-center align-center flex-col">
                <svg
                  className="absolute mb-16"
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M0 58.5C0 26.1913 26.1913 0 58.5 0V0C90.8087 0 117 26.1913 117 58.5V58.5C117 90.8087 90.8087 117 58.5 117H0V58.5Z"
                    fill="#00AEFF"
                  />
                </svg>
                <Image
                  className="z-100 "
                  src={"/avi.webp"}
                  width={100}
                  height={100}
                />
                <h2 className="mt-3 text-[16px] font-semibold">
                Devansh Rajwar
                </h2>
                <h3 className="pt-1 text-[14px]">CONTENT HEAD</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

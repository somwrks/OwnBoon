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
      <div className="p-5 py-[10vh] about-bg  bg-white text-[#2E2E2E]   flex-wrap flex flex-row  font-poppins align-center items-center  justify-center  ">
        <div className="flex flex-col  px-10 heading py-10 text-center md:text-left align-center justify-center ">
          <h1 className="md:mt-[-115px] mt-[-10px] text-center md:text-left text-[20px] md:text-[32px]  font-bold">
            About Us
          </h1>
          <p className="text-[1rem] mt-3 md:text-[1.2rem] break-normal max-w-2xl">
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
        <div className=" px-10   justify-center flex flex-col py-10 md:flex-nowrap flex-wrap ">
          <h1 className="text-center md:text-left text-[32px] benefit-heading font-bold">
            Our Team
          </h1>
          <div className="flex mt-2 flex-row">
            <div className="flex px-3 flex-col">
              <div className="flex   justify-center items-center align-center flex-col">
                <div className="som-bg p-3">
                  <Image alt="Som Srivastava"
                    className="z-100 "
                    src={"/som.webp"}
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="mt-3 text-[16px] text-center font-semibold">
                  Som Srivastava
                </h2>
                <h3 className="pt-1 text-center text-[14px]">CEO, FOUNDER</h3>
              </div>
              <div className="flex  justify-center items-center align-center flex-col">
                <div className="sarthak-bg p-3">
                  <Image alt="Saarthak Dutta"
                    className="z-100 "
                    src={"/sarthak.webp"}
                    width={100}
                    height={100}
                  />
                </div>

                <h2 className="mt-3 text-[16px] text-center font-semibold">
                  Saarthak Dutta
                </h2>
                <h3 className="pt-1 text-center text-[14px]">
                  CTO, CO-FOUNDER
                </h3>
              </div>
            </div>
            <div className="flex px-3  flex-col">
              <div className="flex justify-center items-center align-center flex-col">
              <div className="alok-bg p-3">
              <Image alt="Alok Singh"
                  className="z-100 "
                  src={"/alok.webp"}
                  width={100}
                  height={100}
                />
                </div>
               
                <h2 className="mt-3 text-[16px] text-center font-semibold">
                  Alok Singh
                </h2>
                <h3 className="pt-1 text-center text-[14px]">
                  COO, CO-FOUNDER
                </h3>
              </div>
              <div className="flex justify-center items-center align-center flex-col">
              <div className="ivavi-bg p-3">
              <Image alt="Devansh Rajwar"
                  className="z-100 "
                  src={"/avi.webp"}
                  width={100}
                  height={100}
                />
                </div>
               
                <h2 className="mt-3 text-[16px] text-center font-semibold">
                  Devansh Rajwar
                </h2>
                <h3 className="pt-1 text-center text-[14px]">CONTENT HEAD</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

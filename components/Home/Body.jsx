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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>

      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg1">
          <Image  width={700} height={700} loading="lazy" src="/bodyimage1.webp" alt="Gif" />
        </div>
        <div className="flex flex-col ml-2  text-center md:text-left align-center justify-center">
          <h4 className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
            Lorem ipsum dolor sit amet consectetur
          </h4>
          <p className="text-[0.8rem] md:text-[1.2rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum
            et incidunt facilis, corporis provident velit modi numquam magni{" "}
            <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row md:flex-nowrap flex-wrap">
        {pc ? (
          <>
            <div className="flex flex-col mr-2 text-center md:text-left align-center justify-center">
              <h4 className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Lorem ipsum dolor sit amet consectetur
              </h4>
              <p className="text-[0.8rem] md:text-[1.2rem] ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                accusamus quo officiis nam.
                <br /> Accusantium, reprehenderit harum et incidunt facilis,
                corporis provident velit modi numquam magni <br />
                assumenda odit cumque culpa similique.
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
                Lorem ipsum dolor sit amet consectetur
              </h4>
              <p className="text-[0.8rem] md:text-[1.2rem] ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                accusamus quo officiis nam.
                <br /> Accusantium, reprehenderit harum et incidunt facilis,
                corporis provident velit modi numquam magni <br />
                assumenda odit cumque culpa similique.
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
            Lorem ipsum dolor sit amet consectetur
          </h4>
          <p className="text-[0.8rem] md:text-[1.2rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum
            et incidunt facilis, corporis provident velit modi numquam magni{" "}
            <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
      </div>
    </div>
  );
}

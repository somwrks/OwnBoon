import React, { useEffect } from "react";

export default function Body() {

  return (
    <div className="mt-[10vh] bg-white text-[#2E2E2E] flex flex-col font-poppins mx-auto my-auto items-center align-center p-5 justify-center">
      <div className="heading">
        <h1 className="text-[3rem]">Why OwnBoon?</h1>
        <h3 className="text-[1.5rem] py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
      
      <div className="my-auto mx-auto p-5  justify-between flex flex-row">
        <div className="bodyimg1">

          <img loading="lazy" src="/bodyimage1.gif" alt="Gif" />
        </div>
        <div className="flex flex-col  align-center justify-center">
          <h className="text-[2rem] font-poppins font-semibold py-3">
            Lorem ipsum dolor sit amet consectetur
          </h>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum
            et incidunt facilis, corporis provident velit modi numquam magni{" "}
            <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row">
        <div className="flex flex-col  align-center justify-center">
          <h className="text-[2rem] font-poppins font-semibold py-3">
            Lorem ipsum dolor sit amet consectetur
          </h>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum
            et incidunt facilis, corporis provident velit modi numquam magni{" "}
            <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
        <div className="bodyimg2">
          <img loading="lazy" src="/bodyimage2.gif" alt="Gif" />
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row">
        <div className="bodyimg3">

          <img loading="lazy" src="/bodyimage3.gif" alt="Gif" />
        </div>
        <div className="flex flex-col  align-center justify-center">
          <h className="text-[2rem] font-poppins font-semibold py-3 ">
            Lorem ipsum dolor sit amet consectetur
          </h>
          <p>
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

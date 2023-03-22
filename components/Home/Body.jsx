import React from "react";

export default function Body() {
  return (
    <div className="mt-[130px] flex flex-col  items-center align-center justify-center">
      <div className="heading">
        <h1 className="text-[3rem]">Why OwnBoon?</h1>
        <h3 className="text-[1.5rem] py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
      <div className="container p-5 bg-white justify-between flex flex-col">
        <div className="gif"><img src="/public/bodyimg1.png" alt="Gif" /></div>
        <div className="">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quas dolore. Quam, quidem illo suscipit, laborum vel ut atque
            debitis porro corporis amet ea libero deleniti a sunt labore sint?
          </h2>
        </div>
      </div>
    </div>
  );
}

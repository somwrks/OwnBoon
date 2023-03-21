import React from "react";
export default function Hero() {
  return (
    <>

<div class="hero-gradient-bg ">
  <div class="circle cyan"></div>
  <div class="circle purple" ></div>
  <div class="circle cyan"  id="cyan"></div>
  <div class="circle purple" id="purple"></div>
  <div class="circle cyan"  id="cyan1"></div>
  <div class="circle purple" id="cyan2"></div>
</div>

    <div className="flex flex-col xs:p-5 z-100 my-0 mx-0 items-center justify-center">
      <div className="pt-[10vh] md:text-5xl lg:text-7xl text-2xl font-bold justify-center text-center">
        <h1 className="py-3">
          Ignite your{" "}
          <span className="md:tracking-[12px] tracking-[3px]">
            GROWTH{" "}
            </span>
            <svg className=" md:w-24 w-10" viewBox="0 -50 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg>
        </h1>
        <h1 className="py-3">
          Unleash your <span className="md:tracking-[12px] tracking-[3px]">POTENTIAL
          <svg className=" md:w-20 w-10" viewBox="0 0 512 512"><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg>
          </span>
        </h1>
      </div>
      <div className="py-[50px] md:text-3xl text-md font-normal justify-center text-center">
        <h2>revolutionizing your productivity and health</h2>
      </div>
    </div>
    </>
  );
}

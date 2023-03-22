export default function Hero() {
  return (
    <>
      {/* gradients */}
      <div className="hero-gradient-bg ">
        <div className="circle cyan"></div>
        <div className="circle purple"></div>
        <div className="circle cyan" id="cyan"></div>
        <div className="circle purple" id="purple"></div>
        <div className="circle cyan" id="cyan1"></div>
        <div className="circle purple" id="cyan2"></div>
      </div>
      <div className="flex flex-col font-fontspring h-[75%] xs:p-5 z-100 my-0 mx-0 items-center  justify-center">
        <div className="pt-[10vh] md:text-5xl lg:text-[5.3rem] text-2xl  justify-center text-center">
          <h1 className="py-[3.5vh]">
            Ignite your{" "}
            <span className="md:tracking-[12px] tracking-[3px]">GROWTH </span>
            <svg className=" md:w-24 w-10" viewBox="0 -50 576 512">
              <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
            </svg>
          </h1>
          <div className="flex flex-row ">
          <h1 className="py-3">
            Unleash your{" "}
            <span className="md:tracking-[12px] tracking-[3px]">
              POTENTIAL
            </span>
          </h1>
              <img className="w-[4vw] h-[7vh]" src="https://cdn.discordapp.com/attachments/1039174970993016922/1088059468018880632/Gray.png" />

          </div>
        </div>
        <div className="py-[6vh] md:text-[1.5rem]  text-md  justify-center text-center">
          <h2>revolutionizing your productivity and health</h2>
        </div>
      </div>
    </>
  );
}

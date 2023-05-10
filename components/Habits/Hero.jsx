import Image from "next/image";

export default function Hero() {
  return (
    <section id="Habits">
      <div>
        <div className="rounded-br-full z-no  blur-3xl font-poppins	bg-habits absolute  w-[70%] h-[70%]"></div>
        <div className="flex  flex-row items-center mx-auto my-auto px-10 flex-wrap justify-between ">
          <div className="flex flex-col mx-auto my-auto w-[40%] text-white justify-center">
            <h1 className="text-[6rem] font-bold font-fontspring ">Heading</h1>
            <p className="font-light text-[20px] font-fontspring ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              porro, deleniti, et inventore aliquam blanditiis accusamus placeat
              dolorem dignissimos sequi enim? Illum exercitationem nesciunt sit
              architecto velit eius aperiam est!
            </p>
            <button className="bg-white w-[191px] h-[45px] mt-5 ">
              {" "}
              <h1 className="font-poppins text-[16px] font-btn-gradient">
                Try It Now
              </h1>
            </button>
          </div>
          <div className="flex pt-10 mx-auto my-auto ">
            <Image
              width={400}
              height={400}
              className="mt-10"
              src="/habit-img.webp"
              loading="lazy"
            />
            <Image
              width={300}
              height={300}
              src="/habit-img2.webp"
              className=""
              loading="lazy"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Body() {
  return (
    <div className="pt-[50px] bg-white text-[#2E2E2E] flex flex-col font-poppins  items-center align-center p-5 justify-center pb-5 md:pb-0">
      <div className="heading mb-8">
        <h1 className="md:text-[4rem] text-[2.5rem] ">Why OwnBoon?</h1>
        <h3 className="md:text-[1.5rem] text-[15px] py-1 ">
          Elevate Your Self-Improvement Journey
        </h3>
      </div>

      <div className=" justify-center pb-5 md:pb-0 flex flex-row md:flex-nowrap flex-wrap">
        <div className=" bodyimg1">
          <Image
            className="md:w-[30vw]"
            width={500}
            height={500}
            loading="lazy"
            src="/bodyimage1.webp"
            alt="Gif1"
          />
        </div>
        <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center pb-5 md:pb-0 md:w-[50%]">
          <h4 className="text-[1.2rem] md:text-[1.3vw] font-poppins font-semibold py-3">
            Supportive Community
          </h4>
          <p className="text-[0.9rem] md:text-[1.1vw] break-normal ">
            OwnBoon provides a welcoming community of like-minded individuals
            who are dedicated to personal growth and self-improvement. Connect
            with others who share your goals, join specific group chats based on
            your interests, and access a wealth of resources to help you on your
            journey.
          </p>
        </div>
      </div>
      <div className=" justify-center pb-5 md:pb-0 flex flex-wrap md:flex-nowrap">
        <div className="md:w-[50%] flex flex-col ml-4 text-center md:text-left align-center justify-center pb-5 md:pb-0 order-2 md:order-1">
          <h4 className="text-[1.2rem] md:text-[1.3vw] font-poppins font-semibold py-3">
            Find Support and Encouragement
          </h4>
          <p className="text-[0.9rem] md:text-[1.1vw] break-normal ">
            Whether you need advice or simply a listening ear, the OwnBoon
            community is here to support you. Use the vent zone to share your
            feelings and receive life advice, or connect with a gym buddy or
            study partner to stay on track and motivated.
          </p>
        </div>
        <div className=" bodyimg2 order-1 md:order-2">
          <Image
           className="md:w-[30vw]"
            width={500}
            height={500}
            loading="lazy"
            src="/bodyimage2.webp"
            alt="Gif2"
          />
        </div>
      </div>

      <div className="   justify-center pb-5 md:pb-0 flex flex-row md:flex-nowrap flex-wrap">
        <div className=" bodyimg3">
          <Image
           className="md:w-[30vw]"
            width={500}
            height={500}
            loading="lazy"
            src="/bodyimage3.webp"
            alt="Gif3"
          />
        </div>

        <div className="md:w-[50%] flex flex-col ml-2 text-center md:text-left align-center justify-center pb-5 md:pb-0">
          <h4 className="text-[1.2rem] md:text-[1.3vw] font-poppins font-semibold py-3">
            Grow Your Self-Improvement Journey
          </h4>
          <p className=" text-[0.9rem] md:text-[1.1vw] break-normal ">
            With OwnBoon, you'll have access to personalized roadmaps and
            exclusive blog content on self-improvement and productivity. Stay
            informed with the latest tips and techniques from top influencers
            across different platforms and share your own progress and
            experiences with a supportive community
          </p>
        </div>
      </div>
      <div className="     items-center p-5 justify-center pb-5 md:pb-0 flex flex-wrap md:flex-nowrap text-center md:text-left">
        <div className="md:w-[50%] order-2 md:order-1">
          <h4 className="text-[1.2rem] md:text-[1.3vw] font-poppins font-semibold py-3">
            Boost Your Productivity
          </h4>
          <p className="text-[0.9rem] md:text-[1.1vw] break-normal ">
            OwnBoon offers a variety of productivity tools, Focus Planet and
            Lofi sessions, and an AI scheduler to help you stay organized and
            focused. You can also access the right study techniques and tips
            based on your mood to help you stay on track and improve your
            workflow.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
           className="animate-float md:w-[30vw]"
            width={500}
            height={500}
            loading="lazy"
            src="/bodyimage4.webp"
            alt="Gif"
          />
        </div>
      </div>
    </div>
  );
}

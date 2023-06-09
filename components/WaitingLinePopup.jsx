import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Popup from "reactjs-popup";
import { AppContext } from "./AppProvider";
import { toast } from "react-toastify";

export default function WaitingLinePopup() {
  const { isOpen, closePopup } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const handleClosePopup = () => {
    closePopup(false);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        handleClosePopup();
        toast.success("Thank you!");
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      toast.error("Please try again");
    }
  };
  
  const hide = () => {
    closePopup(false);
  };
  return (
    <Popup open={isOpen} onClose={handleClosePopup}  modal nested>
      <div
        className="font-poppins backdrop-blur-sm rounded-3xl mt-[6vh] flex-wrap about-bg
     w-full p-10 shadow preview z-100  justify-center font-bold flex flex-col bt "
      >
        <h1 className="text-5xl text-[#2E2E2E] text-center">We're Almost There!</h1>
        <p className="text-lg break-words  mt-[1.8vh] text-[#2E2E2E] text-center font-[300]">Discover Ownboon, the ultimate ai platform for personal growth and productivity. <br /> Join the waitlist today!</p>
        
          <div className=" my-[6vh] px-[3vw] mx-auto">
            <section className=" text-gray-800 text-center lg:text-left">
              <div className="flex flex-wrap justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
                  <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                    <div className="mb-[4vh] lg:mb-0">
                      <h2 className="text-3xl font-bold">
                        Sign Up for Beta
                        <br />
                      </h2>
                    </div>

                    <div className="mb-[2vh] md:mb-0">
                      <form
                        onSubmit={handlesubmit}
                        className="md:flex flex-row"
                      >
                        <input
                          type="email"
                          maxLength="100"
                          name="user_email"
                          required="true"
                          className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Enter your email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          type="submit"
                        >
                          Signup
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 py-5 gap-x-6 items-center">
                    <div className="mb-[4vh] lg:mb-0  justify-center">
                      <h2 className="text-blue-500 text-3xl font-bold">
                      Join Our Discord
                      </h2>
                    </div>

                    <div className="mb-[2vh] md:mb-0 items-center justify-center align-center ">
                    <Link  href={"https://discord.gg/nxeUX3Uufn"}>
                <Image className="ml-5" src={"/dcsv.png"} width={300}  height={100}/>

                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-4xl absolute top-[10px] hover:text-[gray] hover:cursor-pointer transition-all right-[20px]"
                onClick={hide}
              />
            </section>
          </div>
      </div>
    </Popup>
  );
}

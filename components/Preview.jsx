import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Preview() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      console.log(data.message);
      setEmail("");
      setSuccess(true);
    } catch (error) {
      senderror();
    }
  };

  function senderror() {
    toast("Error signing up", {
      hideProgressBar: false,
      autoClose: 2000,
      type: "error",
    });
    setSuccess(false);
  }
  const hide = () => {
    document.getElementById("preview").style.display = "none";
  };
  return (
    <div
      id="preview"
      className="backdrop-blur-sm
     w-full pt-10 shadow bg-[#FFFAFA] z-100 fixed justify-center font-bold flex flex-col   "
    >
      <h1 className="text-5xl text-center">Coming Soon!</h1>
      {success ? (
        <div className="mt-10 p-5 fade justify-center align-center flex flex-col items-cener ">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-6xl text-green-400 p-2"
          />
          <h1 className="text-blue-500 text-2xl text-center font-bold py-2">Thankyou for signing up!</h1>
          <h1 className=" text-2xl text-center font-semibold py-2">We'll Update You Soon</h1>
          <FontAwesomeIcon
              icon={faXmark}
              className="text-4xl absolute top-[10px] hover:text-[gray] hover:cursor-pointer text-[blue] right-[50px]"
              onClick={hide}/>
        </div>
      ) : (
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center lg:text-left">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
                <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                  <div className="mb-10 lg:mb-0">
                    <h2 className="text-3xl font-bold">
                      Do not miss any updates.
                      <br />
                      <span className="text-blue-600">We will Email You</span>
                    </h2>
                  </div>

                  <div className="mb-6 md:mb-0">
                    <form onSubmit={handlesubmit} className="md:flex flex-row">
                      <input
                        type="email"
                        maxLength="100"
                        name="user_email"
                        className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={email ? handlesubmit : senderror}
                      >
                        Signup
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-4xl absolute top-[10px] hover:text-[gray] hover:cursor-pointer text-[blue] right-[50px]"
              onClick={hide}
            
            />
          </section>
        </div>
      )}
    </div>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark } from '@fortawesome/free-solid-svg-icons'
import { toast } from "react-toastify";

export default function Preview() {
const handlesubmit= ()=>{
  toast('Thankyou for signing up!', { hideProgressBar: true, autoClose: 2000, type: 'success' })

}
const hide =()=>{
  document.getElementById("preview").style.display="none";
}
  return (
    <div  id="preview" className="backdrop-blur-sm
     w-full pt-10 shadow bg-[#FFFAFA] z-100 fixed justify-center font-bold flex flex-col   ">
      <h1 className="text-5xl text-center">Coming Soon!</h1>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <div className="flex flex-wrap justify-center">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
              <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                <div className="mb-10 lg:mb-0">
                  <h2 className="text-3xl font-bold">
                      Do not miss any updates.
                    <br />
                    <span className="text-blue-600">
                      We will Email You
                    </span>
                  </h2>
                </div>

                <div className="mb-6 md:mb-0">
                  <div className="md:flex flex-row">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light" onClick={handlesubmit}
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FontAwesomeIcon icon={faXmark} className="text-4xl absolute top-[10px] hover:text-[gray] hover:cursor-pointer text-[blue] right-[50px]" onClick={hide}/>
        </section>
      </div>
    </div>
  );
}

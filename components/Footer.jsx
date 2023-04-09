import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div>
        
<footer class="bg-white mt-5 border-t-2  dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Own<span className="text-cyan">Boon</span>
          </span>
              </a>
              <div className="pt-[1vh]  text-[18px]">
          <h1 className="font-semibold">
            Ignite your{" "}
            <span className=" tracking-[3px]">GROWTH</span>
          </h1>
          <div className="flex flex-row ">
            <h1 className="font-semibold">
              Unleash your{" "}
              <span className=" tracking-[3px]">
                POTENTIAL
              </span>
            </h1>
          </div>
          <div className="flex flex-row text-3xl space-x-4 mt-5">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faDiscord} />
            
          </div>
        </div>
          </div>
          <div class="grid grid-cols-2 gap-8 font-poppins sm:gap-6 sm:grid-cols-3">
            
              <div>
                  <h2 class="mb-6 text-[1rem] font-bold text-gray-900  ">Company</h2>
                  <ul class="text-gray-600 text-[0.9rem] dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">About Us</a>
                      </li>
                      <li className='mb-4'>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Terms of Use</a>
                      </li>
                      <li  className='mb-4'>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Privacy</a>
                      </li>
                      <li  className='mb-4'>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Give feedback</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-[1rem] font-bold text-gray-900">Contact Us</h2>
                  <ul class="text-gray-600 text-[0.9rem] font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Join our community</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Email Us</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}

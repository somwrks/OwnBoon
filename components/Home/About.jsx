import Image from "next/image";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
export default function About() {

  useEffect(() => {
    function reveal() {
      var crew = document.querySelectorAll(".crew");
      for (var i = 0; i < crew.length; i++) {
        var windowHeight = window.innerHeight;
        var crewTop = crew[i].getBoundingClientRect().top;
        var elementVisible = 150;
  
        if (crewTop < windowHeight - elementVisible) {
          crew[i]?.classList.add("show");
        }
      }
    }
    window.addEventListener("scroll", reveal);

    
  }, [])
  
  return (
    <section id="about" className="pt-[100px]">

    <div className="mt-[5vh] bg-white text-[#2E2E2E] flex flex-col font-poppins  items-center align-center p-5 justify-center">
      <div className="heading">
        <h1 className="md:text-[4rem] text-[3rem]">About Us</h1>
        <h3 className="md:text-[1.5rem] text-[1.5rem] py-1 ">
          Our Team. Your Support.
        </h3>
        <div class="container mx-auto my-10 justify-center align-center">
          <div class="crew grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 align-center">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                width={300}
                height={300}
                src="/som.webp"
                alt="Team Member Photo"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Som</div>
                <p class="text-gray-700 text-base">CEO/Founder</p>
              </div>
              <div class="px-6 py-4 space-x-3 text-xl">
                <Link href="https://www.linkedin.com/in/somdeveloper/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href="https://www.instagram.com/som_developer/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://github.com/VEcTorX009">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                width={300}
                height={300}
                src="/user.png"
                alt="Team Member Photo"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Alok</div>
                <p class="text-gray-700 text-base">COO/Co-Founder</p>
              </div>
              <div class="px-6 py-4 space-x-3 text-xl">
                <Link href="https://www.linkedin.com/in/alok-singh-22786822b/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href="https://instagram.com/OwnBoon">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://github.com/OwnBoon">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                width={300}
                height={300}
                src="/user.png"
                alt="Team Member Photo"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Saarthak</div>
                <p class="text-gray-700 text-base">CTO/Co-Founder</p>
              </div>
              <div class="px-6 py-4 space-x-3 text-xl">
                <Link href="https://www.linkedin.com/in/sarthak-dutta-a79b99120/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href="https://instagram.com/OwnBoon">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://github.com/OwnBoon">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                width={300}
                height={300}
                src="/user.png"
                alt="Team Member Photo"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Devansh</div>
                <p class="text-gray-700 text-base">Content Writer</p>
              </div>
              <div class="px-6 py-4 space-x-3 text-xl">
                <Link href="https://www.linkedin.com/in/devansh-rajwar-092568272/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href="https://instagram.com/OwnBoon">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://github.com/OwnBoon">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                width={300}
                height={300}
                src="/user.png"
                alt="Team Member Photo"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Steven</div>
                <p class="text-gray-700 text-base">Community Manager</p>
              </div>
              <div class="px-6 py-4 space-x-3 text-xl">
                <Link href="https://www.linkedin.com/in/steven-v-58a487267/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href="https://instagram.com/OwnBoon">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://github.com/OwnBoon">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  );
}

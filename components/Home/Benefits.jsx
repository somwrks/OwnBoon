import React, { useEffect } from "react";

export default function Benefits() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".square");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("show");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <section id="benefit">
      <div className="heading justify-center align-center ">
        <h1 className="text-[3rem]">Benefits</h1>
        <h3 className="text-[1.5rem] py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
      <div className="benefit-container">
      
      </div>
      <div>
        
      </div>
    </section>
  );
}

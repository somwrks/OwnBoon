import { useEffect } from "react";
import CountUpAnimation from "./CountUpAnimation";
export const Balls = () => {
  // Revoving balls
  useEffect(() => {
    const container = document.getElementById("animation-container");
    const balls = Array.from(document.getElementsByClassName("ball"));
    let mouseX = container.clientWidth / 2;
    let mouseY = container.clientHeight / 2;

    function setInitialPositions() {
      console.log(window.innerWidth);
      if (window.screen.width < 768) {
      } else {
        balls[0].style.left = "77vw";
        balls[0].style.top = "15vh";
        balls[1].style.left = "84vw";
        balls[1].style.top = "50vh";
        balls[2].style.left = "20vw";
        balls[2].style.top = "45vh";
        balls[3].style.left = "22vw";
        balls[3].style.top = "15.9vh";
      }
    }

    function animateBalls() {
      balls.forEach((ball) => {
        const dx = ball.offsetLeft - mouseX + ball.clientWidth / 2;
        const dy = ball.offsetTop - mouseY + ball.clientHeight / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const rotationY = (dx / container.clientWidth) * 10;
        const rotationX = (dy / container.clientHeight) * -10;
        const translationZ = (dist / 200) * -5;
        ball.style.transform = `translateY(${translationZ}px) translateX(${translationZ}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      });

      requestAnimationFrame(animateBalls);
    }

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    setInitialPositions();
    animateBalls();
    container.addEventListener("mousemove", handleMouseMove);

    window.onresize = function () {
      setInitialPositions();
    };
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
    
  }, []);

  return (
    <div id="animation-container">
      <div className="ball ball-1"></div>
      <div className="ball ball-2"></div>
      <div className="ball ball-3"></div>
      <div className="ball ball-4"></div>
    </div>
  );
};

export const Skateboard = () => {
  useEffect(() => {
    const buttons = document.getElementById("ripple")
    buttons.addEventListener("click",function(e){
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement("span");
      ripples.classList.add("ripple-hover")
      ripples.style.left = x+"px";
      ripples.style.top = y+"px";
      this.appendChild(ripples);
      document.getElementById("ripple")
  })
  }, [])
  

  return (
    <div id="counter" className="py-5">
      <div  className=" h-[8vh] w-[3vw] flex flex-col justify-center items-center">
        <button id="ripple"  className="items-center text-[1.3rem] xs:text-[1rem]  md:w-[27vw] md:h-[5vh] sm:w-[20vw] sm:h-[5vh] hover:cursor-pointer skatebar bg-white font-semibold absolute py-2 px-5">
          Join our community now!
        </button>
      </div>
      <div className="flex   w-full flex-row mt-[5vh]  items-center space-x-5 justify-center font-semibold">
        <div className="countsquare z-100 z-no h-[101px] w-[172px]">
          <h5 className="mb-[-1vh] z-100 text-[2rem] text-[#484848]">
            <CountUpAnimation duration={1500}>150</CountUpAnimation>
            <span className="absolute font-bold text-[1.3rem]">+</span>
          </h5>
          <h6 className="text-[1rem] font-200 ">Lives Improved</h6>
          <img
            src="/square1.png"
            className="absolute p-2 left-0 top-0 h-[40px]  w-[40px]"
            alt="I"
          />
        </div>
        <div className="countsquare z-100 z-no h-[101px] w-[172px]">
          <h5 className="mb-[-1vh] z-100 text-[2rem] text-[#484848]">
            <CountUpAnimation duration={1500}>100</CountUpAnimation>
            <span className="absolute font-bold text-[1.3rem]">+</span>
          </h5>
          <h6 className="text-[1rem] font-200 ">Active Influencers</h6>
          <img
            src="/square2.png"
            className="absolute p-2 left-0 top-0 h-[40px]  w-[40px]"
            alt="I"
          />
        </div>
        <div className="countsquare z-100 z-no h-[101px] w-[172px]">
          <h5 className="mb-[-1vh] z-100 text-[2rem] text-[#484848]">
            <CountUpAnimation duration={1500}>50</CountUpAnimation>
            <span className="absolute font-bold text-[1.3rem]">+</span>
          </h5>
          <h6 className="text-[1rem] font-200 ">Daily Blogs</h6>
          <img
            src="/square3.png"
            className="absolute p-2 left-0 top-0 h-[40px]  w-[40px]"
            alt="I"
          />
        </div>
      </div>
    </div>
  );
};

import { useEffect } from "react";

export const Balls = () => {
  useEffect(() => {
    const container = document.getElementById("animation-container");
    const balls = Array.from(document.getElementsByClassName("ball"));
    let mouseX = container.clientWidth / 2;
    let mouseY = container.clientHeight / 2;

    function setInitialPositions() {
      setTimeout(() => {

        if (window.screen.width < 768) {
          balls[0].style.left = "400px";
          balls[0].style.top = "400px";
          balls[1].style.left = "150px";
          balls[1].style.top = "430px";
          balls[2].style.left = "140px";
          balls[2].style.top = "250px";
          balls[3].style.left = "200px";
          balls[3].style.top = "150px";
        } else {
          balls[0].style.left = "1500px";
          balls[0].style.top = "200px";
          balls[1].style.left = "1300px";
          balls[1].style.top = "500px";
          balls[2].style.left = "500px";
          balls[2].style.top = "450px";
          balls[3].style.left = "300px";
          balls[3].style.top = "100px";
        }
      }, 4000);
    }

    function animateBalls() {
      balls.forEach((ball) => {
        const dx = ball.offsetLeft - mouseX + ball.clientWidth / 2;
        const dy = ball.offsetTop - mouseY + ball.clientHeight / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const rotationY = (dx / container.clientWidth) * 20;
        const rotationX = (dy / container.clientHeight) * -20;
        const translationZ = (dist / 200) * -10;
        ball.style.transform = `translateY(${translationZ}px) translateX(${
          translationZ 
        }px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
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
    setTimeout(() => {
      
      const f = document.querySelector(".cyan")
      const g = document.getElementById("cyan")
      const i = document.getElementById("purple")
      const j = document.getElementById("cyan2")
      const k = document.getElementById("cyan1")
      const h = document.querySelector(".purple")
      f.style.opacity="1"
      j.style.opacity="1"
      k.style.opacity="1"
      h.style.opacity="1"
      g.style.opacity="1"
      i.style.opacity="1"
    }, 5500);
   


  }, [])
  
  return (
    <div id="skateboard">
      <div className="skatebar animate-ping"><span className="text-[1.3rem] font-semibold" id="skatebar"></span></div>
      <img src="" className="z-no p-5" alt="Ownboon Skateboard" />
    </div>
  );
};

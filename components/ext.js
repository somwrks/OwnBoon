import { useEffect } from "react";

export const Balls = () => {
  // Revoving balls
  useEffect(() => {
    const container = document.getElementById("animation-container");
    const balls = Array.from(document.getElementsByClassName("ball"));
    let mouseX = container.clientWidth / 2;
    let mouseY = container.clientHeight / 2;
    const doc = document.getElementsByClassName("square");

    function setInitialPositions() {

      console.log(window.innerWidth)
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
    
    window.onresize = function () {
      setInitialPositions();
    }
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

  // Timed ANimations
  
  return (
    <div id="counter">
    </div>
  );
};

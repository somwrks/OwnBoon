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
          doc[0].style.transform = `translate(27vw,-4.4vh) scale(1.1)` 
          doc[1].style.transform = "translate(26.1vw,1.4vh) scale(1.1)" 
          doc[2].style.transform = "translate(25.2vw,-4.3vh) scale(1.1)" 
          doc[3].style.transform = "translate(24.6vw,1.4vh) scale(1.1)" 
        } else {
          balls[0].style.left = "78vw";
          balls[0].style.top = "19.7vh";
          balls[1].style.left = "67.7vw";
          balls[1].style.top = "49.4vh";
          balls[2].style.left = "26.04vw";
          balls[2].style.top = "44.5vh";
          balls[3].style.left = "16vw";
          balls[3].style.top = "9.9vh";
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

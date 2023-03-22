import { useEffect } from "react";

export const Balls = () => {
  // Revoving balls
  useEffect(() => {
    const container = document.getElementById("animation-container");
    const balls = Array.from(document.getElementsByClassName("ball"));
    let mouseX = container.clientWidth / 2;
    let mouseY = container.clientHeight / 2;

    function setInitialPositions() {

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
    <div id="skateboard">
      {/* <div className="skatebar animate-ping"><span className="text-[1.3rem] font-semibold" id="skatebar"></span></div> */}
      {/* <img src="https://media.discordapp.net/attachments/1082849037847367800/1088156733685375106/fuck-youuuuuuuuuuuuuu-unscreen.gif?width=575&height=323" className="z-no absolute text-9xl" alt="Ownboon Skateboard" /> */}
    </div>
  );
};

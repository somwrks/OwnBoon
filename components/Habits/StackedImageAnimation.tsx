import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";

const images = ["/exploreimg1.webp", "/exploreimg2.webp", "/exploreimg3.webp"];

export const StackedImageAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | number>(-1);
  const size = useMemo(() => images.length, []);
const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const check =()=>{
      if(window.innerWidth<768){
        setMobile(true);
      }
      else{
        
        setMobile(false);
      }

    }
    check();
    timer.current = setInterval(
      () => setActiveIndex((cur) => (cur + 1) % size),
      5000
    );
    window.addEventListener("resize",check)
    return () => clearInterval(timer.current as number);
  }, [size]);

  const map = useMemo(() => {
    const map = new Map<number, number>();
    const len = images.length;
    let i = len;

    if (len < activeIndex || activeIndex < 0)
      throw new Error("Invalid index set as active index");

    while (i > 0) {
      map.set((activeIndex + len - i) % len, --i);
    }

    return map;
  }, [activeIndex]);

  return (
    <Box
      className=" justify-center align-center flex items-center r-auto sm:r-0 md:w-[342px] md:h-[404px] w-[347px] h-[409px]"
      id="chakra" 
      position="relative"
    >
      {images.map((image, i) => {
        const factor = size - 1 - map.get(i)!;
        const isPreviousActiveIndex = (activeIndex + size - 1) % size === i;

        return (
          <Box
            key={image}
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            width="inherit"
            height="inherit"
            position="absolute"
            top={40}
            style={activeIndex-i===0?{filter: 'blur(0px)'  }:{ filter: 'blur(5px)' }}
            right={mobile===false? (0 - 0.075 * factor * 580):(0)}
            transform={`scale(${1 - 0.075 * factor})`}
            zIndex={map.get(i)}
            opacity={map.get(i)}
            transition={"z-index 0.6s ease, opacity 0.6s ease, transform 0.6s ease, blur 0.6s ease".concat(
              isPreviousActiveIndex ? ", right 0.3s ease" : ""
            )}
          />
        );
      })}
    </Box>
  );
};

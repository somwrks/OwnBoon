import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";

const images = ["/exploreimg1.webp", "/exploreimg2.webp", "/exploreimg3.webp"];

export const StackedImageAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | number>(-1);
  const size = useMemo(() => images.length, []);

  useEffect(() => {
    
    timer.current = setInterval(
      () => setActiveIndex((cur) => (cur + 1) % size),
      5000
    );
    
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
      className="md:w-[420px] w-[350px]"
      id="chakra" className-="hidden"
      width={"420px"}
      height={"505px"}
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
            top={0}
            right={0 - 0.075 * factor * 580}
            transform={`scale(${1 - 0.075 * factor})`}
            zIndex={map.get(i)}
            opacity={map.get(i)}
            transition={"z-index 0.6s ease, opacity 0.6s ease, transform 0.6s ease".concat(
              isPreviousActiveIndex ? ", right 0.3s ease" : ""
            )}
          />
        );
      })}
    </Box>
  );
};

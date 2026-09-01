import { Progress } from "@mantine/core";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Carousel } from "@mantine/carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";

import { useCallback, useEffect, useState } from "react";

const HomeSectionCarousel = (props ) => {
  // const carouselRef = useRef(null);
  // const [activeIndex, setActiveIndex] =  useState(0);

  //   const slidePrev = () => {
  //     setActiveIndex(activeIndex - 1);
  //   }

  //    const slideNext = () => {
  //     setActiveIndex(activeIndex + 1);
  //   }

  //   const syncActiveIndex =(item)=>{

  //     setActiveIndex(item);
  //   }
  const [embla, setEmbla] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    embla.scrollPrev();
  };

  const slideNext = () => {
    embla.scrollNext();
  };

  const syncActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]   ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{props.sectionName}</h2>
      
      <div className="relative p-5  ">
        <Carousel
          getEmblaApi={setEmbla}
          slideSize={{ base: "100%", sm: "50%", md: "20%" }}
          slideGap={{ base: 0, sm: "md" }}
          emblaOptions={{ align: "start" }}
          withControls={false}
          onSlideChange={syncActiveIndex}
        >
          {props.data.map((item, index) => (
            <Carousel.Slide key={index}>
              <HomeSectionCard {...item} />
            </Carousel.Slide>
          ))}
        </Carousel>

        {activeIndex < props.data.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            radius="xl"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "blue",
                color: "white",
              },
            }}
            className="z-50 bg-white "
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex != 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            radius="xl"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "blue",
                color: "white",
              },
            }}
            className="z-50 bg-white"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>

      
    </div>
  );
};

export default HomeSectionCarousel;

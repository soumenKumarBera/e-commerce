import { Carousel } from "@mantine/carousel";
import { homeCarouselData } from "./MainCaroselDeta";
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const MainCarosel = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <>
      {" "}
     <Carousel
      withIndicators
      withControls = {false}
      height={500}
      slideGap="md"
     plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
       emblaOptions={{ loop: true, align: 'start' }}
         
      
      align="start"
    >
      {homeCarouselData.map((item, index) => (
        <Carousel.Slide key={index}>
          <img
          className="w-100% h-100%"
            src={item.image}
            alt={`Banner ${index + 1}`}
            // style={{
            //   width: "100%",
            //   height: "100%",
            //   objectFit: "cover",
            //   borderRadius: "8px",
            //   cursor: "pointer",
            // }}
            onClick={() => {
              window.location.href = item.path;
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
    </>
  );
};
export default MainCarosel;

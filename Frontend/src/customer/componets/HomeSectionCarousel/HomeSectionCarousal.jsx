import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Carousel } from "@mantine/carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";
const HomeSectionCarousel = () => {
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <Carousel
          withIndicators
          slideSize={{ base: "100%", sm: "50%", md: "20%" }}
          slideGap={{ base: 0, sm: "md" }}
          emblaOptions={{ loop: true, align: "start" }}
          withControls={false}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <Carousel.Slide key={index}>
              <HomeSectionCard />
            </Carousel.Slide>
          ))}

          {/* <button
            onClick={() => embla?.scrollPrev()}
            className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <KeyboardArrowLeftIcon />
          </button> */}
          <Button variant="containt" className="z-50" sx={{position:"absolute", top:'8rem', right:'0rem', transform:'translatteX(50%) rotate(90deg)'}}  aria-label="next">

  <KeyboardArrowLeftIcon />

          </Button>

          {/* ...other slides */}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

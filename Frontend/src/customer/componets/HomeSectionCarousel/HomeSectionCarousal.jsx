import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Carousel } from "@mantine/carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";
const HomeSectionCarousel = () => {
  return (
    <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]   ">
      <div className="relative p-5  ">
        <Carousel
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
        </Carousel>

        <Button
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

        <Button
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
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

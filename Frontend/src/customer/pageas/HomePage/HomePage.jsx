import MainCarosel from "../../componets/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../componets/HomeSectionCarousel/HomeSectionCarousal";
import { mens_kurta } from "../../../Data/Mens_Kurta";
const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col px-10 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men,s Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sarees"} />
        <HomeSectionCarousel
          data={mens_kurta}
          sectionName={"Women's Dresses"}
        />
      </div>
    </div>
  );
};

export default HomePage;

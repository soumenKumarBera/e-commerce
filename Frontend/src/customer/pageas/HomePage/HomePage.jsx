import MainCarosel from "../../componets/HomeCarosel/MainCarosel"
import HomeSectionCarousel from "../../componets/HomeSectionCarousel/HomeSectionCarousal";

const HomePage =() =>{

return <div>

<MainCarosel />
<div className="space-y-10 py-20 flex flex-col px-10 lg:px-10">
  <HomeSectionCarousel />
   <HomeSectionCarousel />
    <HomeSectionCarousel />
     <HomeSectionCarousel />
      <HomeSectionCarousel />
</div>

</div>


}

export default HomePage;
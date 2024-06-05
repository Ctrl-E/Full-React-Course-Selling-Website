import { Gallery } from "./Gallery/Gallery";
import { HeroContainer } from "./Hero/HeroContainer";
import { PopularClasses } from "./PopularClasses/PopularClasses";
import { PopularTeachers } from "./PopularTeachers/PopularTeachers";

export const Home = () => {
  return (
    <div>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gallery />
        <PopularClasses />
        <PopularTeachers />
      </div>
    </div>
  );
};

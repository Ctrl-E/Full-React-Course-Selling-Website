import { Gallery } from "./Gallery/Gallery";
import { HeroContainer } from "./Hero/HeroContainer";
import { PopularClasses } from "./PopularClasses/PopularClasses";

export const Home = () => {
  return (
    <div>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gallery />
        <PopularClasses />
      </div>
    </div>
  );
};

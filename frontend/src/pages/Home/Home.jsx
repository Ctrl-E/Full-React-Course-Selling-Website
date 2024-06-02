import { Gallery } from "./Gallery/Gallery";
import { HeroContainer } from "./Hero/HeroContainer";

export const Home = () => {
  return (
    <div>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gallery />
      </div>
    </div>
  );
};

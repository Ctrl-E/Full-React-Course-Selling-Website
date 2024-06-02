import { Swiper, SwiperSlide } from "swiper/react";
import { Hero } from "./Hero";
import { Hero2 } from "./Hero2";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";

export const HeroContainer = () => {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          shadow: true,
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      }}
      modules={[EffectCreative]}
      className="mySwiper5"
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
    </Swiper>
  );
};

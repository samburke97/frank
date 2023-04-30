import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export default () => {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }} loop={true}>
      <SwiperSlide className="container pt-10">
        <div className="text-center">
          <div className="text-3xl md:text-5xl">Simple Sells.</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="container py-10">
        <div className="flex flex-col md:flex-row align-baseline">
          <h2 className="md:flex-1 text-3xl md:text-5xl text-center">
            Simple Involves Clean UI/UX.
          </h2>
          <div className="w-full md:w-1/2 space-y-3 font-secondary text-lg md:text-2xl">
            <div className="hidden md:block">
              A rule-of-thumb, if customers find your website visually appealing
              and easy to navigate you'll reap the rewards.
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="container py-10 c">
        <div className="flex flex-col md:flex-row">
          <h2 className="md:flex-1 text-3xl md:text-5xl text-center">
            Simple is the best practice.
          </h2>
          <div className="w-full md:w-1/2 space-y-3 font-secondary text-lg md:text-2xl">
            <div className="hidden md:block">
              Unfortunately, 75% of searchers fail to make it past the first
              page of Google. Fortunately, we welcome competition.
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

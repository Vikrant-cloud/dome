"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Location: React.FC = () => {
  const cities = [
    {
      name: "PERTH",
      image:
        "/images/perth.png",
    },
    {
      name: "BRISBANE",
      image:
        "/images/brisbane.png",
    },
    {
      name: "MELBOURNE",
      image:
        "/images/melbourne.png",
    },
    {
      name: "SYDNEY",
      image:
        "/images/sydney.png",
    },
    {
      name: "WOLLONGONG",
      image:
        "/images/wollongong.png",
    },
  ];
  return (
    <>
      <p className="font-normal text-[15px] leading-[100%] tracking-[0] align-bottom uppercase text-black px-12 py-6">LOCATIONS</p>
      <section className="w-full bg-white border bt-0 border-black px-15">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          grabCursor={true}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div className="border border-black">

                <div className="h-[350px] overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-[80px] flex items-center justify-center border-t border-gray-300">
                  <h3 className="font-medium text-[16px] leading-[50px] tracking-normal text-center align-middle text-[#1E1E1E]">
                    {city.name}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>

  )
}

export default Location
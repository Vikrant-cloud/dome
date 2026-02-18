"use client";
import React, { useState } from "react";

type Slide = {
  id: number;
  number: string;
  label: string;
  color: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    number: "01",
    label: "EXPAND",
    color: "#EAE8E6",
    image:
      "/images/slider-1.png",
  },
  {
    id: 2,
    number: "02",
    label: "MANAGE",
    color: "#C86C45",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
  },
  {
    id: 3,
    number: "03",
    label: "OWN",
    color: "#A14E33",
    image:
      "/images/slider-1.png",
  },
  {
    id: 4,
    number: "04",
    label: "BUILD",
    color: "#0B1E2A",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
  },
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeSlide = slides[activeIndex];
  const nextSlide = nextIndex !== null ? slides[nextIndex] : null;

  const leftSlides = slides.slice(activeIndex + 1);
  const rightSlides = slides.slice(0, activeIndex);

  const handleSlideClick = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? "right" : "left");
    setNextIndex(index);

    setTimeout(() => {
      setActiveIndex(index);
      setNextIndex(null);
    }, 600);
  };

  return (
    <div className="min-h-screen pb-36">
      <p className="font-normal text-[15px] leading-[100%] tracking-[0] align-bottom uppercase text-black px-12 py-6">
          WHAT WE OFFER
      </p>
      <div className="flex h-[85vh] border border-gray-600 overflow-hidden">

        <div className="flex">
          {[...leftSlides].reverse().map((slide) => (
            <div
              key={slide.id}
              onClick={() =>
                handleSlideClick(
                  slides.findIndex((s) => s.id === slide.id)
                )
              }
              className="w-[60px] flex flex-col justify-between items-center py-12 cursor-pointer"
              style={{ backgroundColor: slide.color }}
            >
              <span className="font-monument font-normal text-base leading-[100%] tracking-[0] align-middle uppercase text-[#EAE8E6]">
                {slide.number}
              </span>
              <span className="[writing-mode:vertical-rl] rotate-360 text-white text-sm">
                {slide.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1 p-[60px] relative flex items-center justify-start overflow-hidden">

          <div
            className="absolute inset-0"
            style={{ backgroundColor: activeSlide.color }}
          />

          {nextSlide && (
            <div
              className={`absolute inset-0 ${direction === "right"
                ? "animate-bgSlideRight"
                : "animate-bgSlideLeft"
                }`}
              style={{ backgroundColor: nextSlide.color }}
            />
          )}

          <div className="w-[75%] h-[75%] relative z-10">
            <img
              src={activeSlide.image}
              alt={activeSlide.label}
              className="w-full h-full object-cover shadow-xl transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute right-8 top-8 bottom-8 flex flex-col justify-between text-white z-20">
            <span className="[writing-mode:vertical-rl] text-sm tracking-widest">
              {activeSlide.number}
            </span>
            <span className="[writing-mode:vertical-rl] rotate-360 text-sm tracking-widest">
              {activeSlide.label}
            </span>
          </div>
        </div>

        <div className="flex">
          {rightSlides.reverse().map((slide) => (
            <div
              key={slide.id}
              onClick={() =>
                handleSlideClick(
                  slides.findIndex((s) => s.id === slide.id)
                )
              }
              className="w-[60px] flex flex-col justify-between items-center py-12 cursor-pointer"
              style={{ backgroundColor: slide.color }}
            >
              <span className="[writing-mode:vertical-rl] text-white text-sm">
                {slide.number}
              </span>
              <span className="[writing-mode:vertical-rl] rotate-360 text-white text-sm">
                {slide.label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-[520px] border-l border-gray-500 p-[60px] flex bg-white">
          <div className="flex flex-col justify-between">
            <h1 className="font-normal text-[41.2px] leading-[100%] tracking-normal uppercase text-black mb-38">
              LOREM IPSUM <br />
              DOLOR SIT <br />
              AMET
            </h1>

            <div>
              <p className="font-normal text-[16px] leading-[20px] tracking-normal text-black mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <button className="font-medium hover:opacity-70 transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

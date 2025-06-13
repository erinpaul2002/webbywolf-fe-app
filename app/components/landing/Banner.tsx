"use client";

import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="bg-black text-lg text-white font-semibold mt-[150px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col relative min-h-[652px] w-full items-center pt-11 pb-[200px] px-[70px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <img
          src="/banner1.png"
          className="absolute h-full w-full object-cover inset-0"
          alt="banner background"
        />
        <div className="relative bg-[rgba(219,219,219,1)] min-h-[60px] gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5">
          LOGO
        </div>
        <h2 className="relative text-[42px] font-bold tracking-[-0.84px] text-center uppercase w-[900px] mt-1 max-md:max-w-full">
          <span style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif'}}>
            Lorem ipsum{" "}
          </span>
          <span style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(255,255,255,1)'}}>
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi.
          </span>
        </h2>
        <p className="relative leading-[25px] text-center w-[732px] mt-[26px] max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
          volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
          justo pellentesque id sed. Id tellus id luctus id. At quis nunc
          libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
          nulla quam.
        </p>
        <p className="relative leading-[25px] text-center z-10 mt-[-5px] w-[732px] -mb-10 max-md:max-w-full max-md:mb-2.5">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in tincidunt pellentesque
          cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
          Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
          pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>
      </div>
    </section>
  );
};

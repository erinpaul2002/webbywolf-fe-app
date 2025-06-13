"use client";

import React from 'react';

export const ServiceCards: React.FC = () => {
  const cards = [
    { image: "/service-card-1.png", title: "Lorem ipsum dolor sit amet consectetur." },
    { image: "/service-card-2.png", title: "Lorem ipsum dolor sit amet consectetur." },
    { image: "/service-card-3.png", title: "Lorem ipsum dolor sit amet consectetur." },
    { image: "/service-card-4.png", title: "Lorem ipsum dolor sit amet consectetur." }
  ];

  return (
    <section className="flex flex-col relative min-h-[1726px] w-full items-center pt-[237px] pb-11 px-20 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="line-7.png"
        className="absolute h-full w-full object-cover inset-0"
        alt="section background"
      />
      <div className="relative w-[739px] max-w-full">
        <h2 className="text-[rgba(5,70,210,1)] text-2xl font-semibold tracking-[-0.96px] max-md:max-w-full">
          Lorem ipsum dolor sit amet
        </h2>
        <h3 className="text-[rgba(34,34,34,1)] text-[42px] font-bold tracking-[-0.84px] uppercase mt-5 max-md:max-w-full">
          LOREM IPSUM dolor sit
        </h3>
        <p className="text-black text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
          facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
          integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
          at purus lectus.
        </p>
      </div>
      
      <div className="relative w-[952px] max-w-full mt-[70px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {cards.slice(0, 2).map((card, index) => (
            <article key={index} className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="bg-white border relative grow overflow-hidden w-full pt-px pb-[81px] px-0.5 rounded-xl border-[rgba(241,240,240,1)] border-solid max-md:max-w-full max-md:mt-10">
                <img
                  src={card.image}
                  className="aspect-[2.16] object-contain w-full max-md:max-w-full"
                  alt={card.title}
                />
                <div className="flex flex-col items-stretch justify-center ml-[15px] mr-4 mt-[27px] max-md:mx-2.5">
                  <div className="w-full">
                    <h4 className="text-[#222] text-xl font-semibold tracking-[-0.4px]">
                      {card.title}
                    </h4>
                    <p className="text-black text-lg font-normal leading-[25px] mt-4">
                      Lorem ipsum dolor sit amet consectetur. Nunc gravida
                      consequat faucibus cursus nisi. Nunc montes molestie a
                      vitae vulputate. Phasellus in pulvinar et vitae. Mi eget
                      lectus nec et. Libero iaculis diam nam mauris a eget. Quam
                      nibh rhoncus rhoncus enim venenatis bibendum.
                    </p>
                  </div>
                  <div className="flex w-[82px] flex-col text-base text-[rgba(5,70,210,1)] font-semibold tracking-[-0.64px] mt-[35px]">
                    <button className="text-left">Learn More</button>
                    <div className="min-h-0 w-full mt-1 border-[rgba(5,70,210,1)] border-solid border-2" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative w-[952px] max-w-full mt-[58px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {cards.slice(2, 4).map((card, index) => (
            <article key={index + 2} className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="bg-white border relative grow overflow-hidden w-full pt-px pb-[81px] px-0.5 rounded-xl border-[rgba(241,240,240,1)] border-solid max-md:max-w-full max-md:mt-10">
                <img
                  src={card.image}
                  className="aspect-[2.16] object-contain w-full max-md:max-w-full"
                  alt={card.title}
                />
                <div className="flex flex-col items-stretch justify-center ml-[15px] mr-4 mt-[27px] max-md:mx-2.5">
                  <div className="w-full">
                    <h4 className="text-[#222] text-xl font-semibold tracking-[-0.4px]">
                      {card.title}
                    </h4>
                    <p className="text-black text-lg font-normal leading-[25px] mt-4">
                      Lorem ipsum dolor sit amet consectetur. Nunc gravida
                      consequat faucibus cursus nisi. Nunc montes molestie a
                      vitae vulputate. Phasellus in pulvinar et vitae. Mi eget
                      lectus nec et. Libero iaculis diam nam mauris a eget. Quam
                      nibh rhoncus rhoncus enim venenatis bibendum.
                    </p>
                  </div>
                  <div className="flex w-[82px] flex-col text-base text-[rgba(5,70,210,1)] font-semibold tracking-[-0.64px] mt-[35px]">
                    <button className="text-left">Learn More</button>
                    <div className="min-h-0 w-full mt-1 border-[rgba(5,70,210,1)] border-solid border-2" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

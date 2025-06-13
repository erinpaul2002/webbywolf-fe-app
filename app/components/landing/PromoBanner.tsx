import React from 'react';

export const PromoBanner = () => {
  return (
    <section className="flex flex-col relative min-h-[603px] w-full mt-[117px] pt-[42px] pb-60 px-[68px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <img
        src="/promo-banner.png"
        className="absolute h-full w-full object-cover inset-0"
        alt="section background"
      />
      <div className="relative bg-[rgba(219,219,219,1)] min-h-[60px] w-[156px] gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5">
        LOGO
      </div>
      <h2 className="relative text-white text-[42px] font-bold tracking-[-0.84px] text-center uppercase self-center w-[812px] mt-[65px] -mb-12 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
        viverra mi. dolor sit amet consectetur. Quis adipiscing
      </h2>
    </section>
  );
};
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center mt-40 max-md:mt-10">
      <div className="flex flex-col items-center max-w-[736px]">
        <div className="self-center bg-[rgba(219,219,219,1)] min-h-[60px] w-[156px] max-w-full gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5">
          LOGO
        </div>
        <div className="flex w-full flex-col items-center font-bold mt-5 px-[74px] max-md:max-w-full max-md:px-5">
          <div className="z-10 flex mb-[-34px] w-[520px] max-w-full flex-col items-center max-md:mb-2.5">
            <h2 className="text-[rgba(34,34,34,1)] text-[42px] tracking-[-0.84px] text-center uppercase self-stretch max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Dui.
            </h2>
            <p className="text-black text-center text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-[#1959AC] flex min-h-[38px] gap-2.5 overflow-hidden text-[15px] text-white mt-10 pl-6 pr-[23px] py-2.5 rounded-[5px] max-md:px-5">
              <span className="self-stretch my-auto">Loerum Ipsum</span>
              <img
                src="/arrow-right-1.svg"
                className="aspect-[1.21] object-contain w-[17px] self-stretch shrink-0 my-auto"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
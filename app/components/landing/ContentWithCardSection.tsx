import React from 'react';

export const ContentWithCardSection = () => {
  return (
    <div className="relative w-full mt-[110px] max-md:mt-10">
      {/* Gray background section - covers 3/4 of the card */}
      <div className="absolute top-20 left-0 right-0 bg-[rgba(241,241,241,1)] h-[750px] rounded-[10px] z-0"></div>
      
      {/* Gradient bar at bottom of gray background */}
      <div className="absolute z-[1] bottom-[calc(100%-840px)] left-0 right-50 h-4" 
           style={{
             background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
           }}>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1359px] mx-auto px-4 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Left column content */}
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col mt-[130px] max-md:max-w-full max-md:mt-10">
              <div className="self-stretch max-md:max-w-full">
                <h2 className="text-[rgba(25,89,172,1)] text-[42px] font-bold tracking-[-0.84px] uppercase max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
                </h2>
                <p className="text-black text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. In malesuada morbi
                  mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet
                  est tortor tincidunt ultricies feugiat mauris. Aliquam
                  platea turpis porta nisl felis. Massa in facilisis semper
                  libero eget eu quisque bibendum platea. Tortor fames.
                </p>
              </div>
              <button className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-[#1959AC] flex min-h-[38px] gap-2.5 overflow-hidden text-[15px] text-white font-bold mt-10 pl-6 pr-[23px] py-2.5 rounded-[5px] max-md:px-5">
                <span className="self-stretch my-auto">
                  Loerum Ipsum
                </span>
                <img
                  src="/arrow-right-2.svg"
                  className="aspect-[1.21] object-contain w-[17px] self-stretch shrink-0 my-auto"
                  alt="arrow"
                />
              </button>
              {/* Enhanced shadow on the card */}
              <article className="justify-center items-stretch shadow-[0px_8px_30px_0px_rgba(0,0,0,0.25)] bg-white flex min-h-[395px] w-[546px] max-w-full flex-col text-[#222] mt-[46px] px-10 py-[50px] max-md:mt-10 max-md:px-5">
                <h3 className="gap-3 text-xl font-semibold tracking-[-0.4px]">
                  Lorem ipsum dolor sit
                </h3>
                <div className="w-full text-lg font-normal leading-[25px] mt-10 max-md:max-w-full">
                  <p className="flex-1 shrink basis-[0%] min-h-[50px] w-full gap-4 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Habitant
                    vestibulum vitae amet habitasse semper.
                  </p>
                  <p className="flex-1 shrink basis-[0%] w-full gap-4 mt-4 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Egestas congue
                    mattis ut placerat vitae amet suspendisse fermentum velit.
                    Nibh dolor nunc id tristique sit.
                  </p>
                  <p className="flex-1 shrink basis-[0%] w-full gap-4 mt-4 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Hac netus
                    consectetur amet quisque scelerisque facilisi. Ultrices
                    lectus viverra pharetra commodo.
                  </p>
                </div>
              </article>
            </div>
          </div>
          {/* Right column with image */}
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="/content-with-card.png"
              className="aspect-[1] object-contain w-full max-md:max-w-full max-md:mt-10"
              alt="section illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
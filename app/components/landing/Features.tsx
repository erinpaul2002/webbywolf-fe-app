"use client";

import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      image: "/feature-1.png",
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat."
    },
    {
      image: "/feature-2.png",
      text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."
    },
    {
      image: "/feature-3.png",
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt."
    }
  ];

  return (
    <section className="border border-neutral-300 shadow-[0px_8px_30px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.60)] flex w-[90%] mx-auto flex-col overflow-hidden items-stretch mt-[162px] pt-10 pb-5 px-[39px] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5 relative">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-[33px]">
              <div className="max-md:max-w-full">
                <h2 className="subheading-lg max-md:max-w-full">
                  Lorem ipsum dolor sit
                </h2>
                <h3 className="heading uppercase mt-5">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-text-primary text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Amet sodales
                  sociis facilisis donec dui. Mi porttitor ut aliquam mattis
                  maecenas eget integer in nam. Non nisl iaculis at felis
                  aliquet. Hendrerit tellus at purus lectus.
                </p>
              </div>
              <div className="w-full mt-[50px] max-md:max-w-full max-md:mt-10">
                {features.map((feature, index) => (
                  <article key={index} className="bg-white w-full overflow-hidden mt-6 first:mt-0 pr-[49px] max-md:max-w-full max-md:pr-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                      <div className="w-[27%] max-md:w-full max-md:ml-0">
                        <img
                          src={feature.image}
                          className="aspect-[0.99] object-contain w-[139px] shrink-0 max-w-full grow max-md:mt-[30px]"
                          alt={`Feature ${index + 1}`}
                        />
                      </div>
                      <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
                        <p className="text-black self-stretch text-lg font-normal leading-[25px] my-auto max-md:mt-10">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="/feature-illustration.png"
              className="aspect-[0.78] object-contain w-full grow mt-5 max-md:max-w-full max-md:mt-10"
              alt="Features illustration"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 text-[15px] mt-5 mb-16">
        <button className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] btn-primary self-stretch flex min-h-[38px] gap-2.5 overflow-hidden my-auto pl-6 pr-[23px] py-2.5 rounded-[5px] max-md:px-5">
          <span className="self-stretch my-auto">Loerum Ipsum</span>
          <img
            src="/arrow-right-1.svg"
            className="aspect-[1.21] object-contain w-[17px] self-stretch shrink-0 my-auto"
            alt="arrow"
          />
        </button>
        <div className="self-stretch flex items-center gap-2 link-secondary whitespace-nowrap my-auto">
          <img
            src="/phone.svg"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="phone"
          />
          <span className="self-stretch my-auto">123456789</span>
        </div>
      </div>
      
      {/* Gradient bar with specific color stops */}
      <div className="absolute bottom-0 left-0 w-[95%] h-4" 
           style={{
             background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
           }}>
      </div>
    </section>
  );
};

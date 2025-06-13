"use client";

import React from 'react';

export const Services: React.FC = () => {
  const servicePoints = [
    "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas."
  ];

  return (
    <section className="bg-white flex w-full flex-col items-stretch mt-[93px] pl-20 pt-[60px] max-md:max-w-full max-md:mt-10 max-md:pl-5 relative">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[57%] max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-[21px]">
              <div className="min-h-[342px] mr-6 pl-5 pr-10 pt-10 pb-[11px] max-md:max-w-full max-md:mr-2.5 max-md:pr-5">
                <h2 className="text-[rgba(5,70,210,1)] text-2xl font-semibold tracking-[-0.96px] max-md:max-w-full">
                  Lorem ipsum dolor sit amet
                </h2>
                <h3 className="text-[rgba(34,34,34,1)] text-[42px] font-bold tracking-[-0.84px] uppercase mt-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Eu elit.
                </h3>
                <p className="text-black text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper
                  etiam leo eleifend condimentum in vitae faucibus. Amet massa
                  malesuada sit pretium. Donec pharetra erat lacus suspendisse
                  ornare.
                </p>
              </div>
              <div className="w-full pl-5 pr-10 py-10 max-md:max-w-full max-md:pr-5">
                {servicePoints.map((point, index) => (
                  <article key={index} className="flex w-full gap-4 flex-wrap mt-10 first:mt-0 max-md:max-w-full">
                    <img
                      src="/services-icon.png"
                      className="aspect-[0.95] object-contain w-9 shrink-0"
                      alt="check icon"
                    />
                    <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                      <h4 className="text-[#222] text-xl font-semibold tracking-[-0.4px] max-md:max-w-full">
                        {point}
                      </h4>
                      <p className="text-black text-lg font-normal leading-[25px] mt-[9px] max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Eros egestas et
                        arcu eu non viverra. Risus quam mattis senectus vitae
                        interdum odio ornare gravida vestibulum. Donec turpis
                        nulla felis mauris eu donec. Ipsum sit ut tortor.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="/services.png"
              className="aspect-[0.93] object-contain w-full self-stretch my-auto max-md:max-w-full max-md:mt-10"
              alt="Services illustration"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[1312px] shrink-0 max-w-full h-5 mt-10" />
      
      {/* Gradient bar with specific color stops - positioned at extreme right */}
      <div className="absolute bottom-0 right-0 w-[95%] h-4" 
           style={{
             background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
           }}>
      </div>
    </section>
  );
};

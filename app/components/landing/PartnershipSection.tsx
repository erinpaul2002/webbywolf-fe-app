import React from 'react';

export const PartnershipSection: React.FC = () => {
  return (
    <section className="bg-[rgba(243,243,243,1)] overflow-hidden mt-[158px] pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[35%] max-md:w-full max-md:ml-0">
          <div className="z-10 flex mr-[-130px] w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <h2 className="text-[#0546D2] text-2xl font-semibold tracking-[-0.96px] max-md:max-w-full">
                Lorem Ipsum
              </h2>
              <h3 className="text-black text-[42px] font-extrabold tracking-[-0.84px] mt-5">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-black text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
                morbi suspendisse convallis. Urna a urna lectus donec felis
                risus duis pellentesque. Pellentesque ultricies ipsum.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-[66px] max-md:mt-10">
              <img
                src="/playstore.png"
                className="aspect-[3.33] object-contain w-[140px] self-stretch shrink-0 my-auto"
                alt="partner 1"
              />
              <img
                src="/appstore.png"
                className="aspect-[3.41] object-contain w-[140px] self-stretch shrink-0 my-auto"
                alt="partner 2"
              />
            </div>
          </div>
        </div>
        <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[530px] grow max-md:max-w-full">
            <img
              src="/hand-phone.png"
              className="absolute h-full w-full object-cover inset-0"
              alt="mockup background"
            />
            <img
              src="/screen.png"
              className="aspect-[1.82] object-contain w-full max-md:max-w-full"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
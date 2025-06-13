import React from 'react';

export const FeatureShowcase = () => {
  return (
    <section className="bg-[rgba(248,248,248,1)] w-full max-w-[1359px] mt-[178px] pr-16 min-h-[800px] max-md:max-w-full max-md:mt-10 max-md:pr-5 relative">
      <div className="max-md:max-w-full max-md:mr-2">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="/feature-showcase.png"
              className="aspect-[1] object-contain w-full max-md:max-w-full max-md:mt-10"
              alt="section image"
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full mt-[122px] max-md:max-w-full max-md:mt-10">
              <div className="max-md:max-w-full max-md:mr-[9px]">
                <h2 className="text-[rgba(5,70,210,1)] text-2xl font-semibold tracking-[-0.96px] max-md:max-w-full">
                  Lorem ipsum
                </h2>
                <h3 className="text-[rgba(25,89,172,1)] text-[42px] font-bold tracking-[-0.84px] uppercase mt-5 max-md:max-w-full">
                  <span style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif'}}>
                    Lorem{" "}
                  </span>
                  <span style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(34,34,34,1)'}}>
                    ipsum dolor sit amet consectetur. Enim donec.
                  </span>
                </h3>
                <p className="text-black text-lg font-normal leading-[25px] mt-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Vel pellentesque
                  odio enim amet non.
                </p>
              </div>
              <div className="mt-[47px] max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[44%] max-md:w-full max-md:ml-0">
                    <div className="flex w-full flex-col items-stretch text-xl text-[#222] font-semibold max-md:mt-10">
                      <div className="w-[223px] gap-3 tracking-[-0.4px]">
                        Lorem Ipsum
                      </div>
                      <div className="w-[199px] gap-3 tracking-[-0.4px] mt-2">
                        Lorem Ipsum
                      </div>
                      <div className="w-[221px] gap-3 tracking-[-0.4px] mt-2 max-md:mr-0.5">
                        Lorem Ipsum
                      </div>
                      <button className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-[#1959AC] flex min-h-[38px] gap-2.5 overflow-hidden text-[15px] text-white font-bold mt-9 pl-6 pr-[23px] py-2.5 rounded-[5px] max-md:px-5">
                        <span className="self-stretch my-auto">
                          Loerum Ipsum
                        </span>
                        <img
                          src="/arrow-1.svg"
                          className="aspect-[1.21] object-contain w-[17px] self-stretch shrink-0 my-auto"
                          alt="arrow"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex w-full flex-col text-xl text-[#222] font-semibold tracking-[-0.4px] max-md:mt-10">
                      <div className="w-[195px] gap-3">
                        Lorem Ipsum
                      </div>
                      <div className="w-[287px] self-stretch gap-3 mt-2">
                        Lorem Ipsum
                      </div>
                      <div className="w-[265px] gap-3 mt-2">
                        Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-4 max-md:max-w-full max-md:mt-10"></div>
      
      {/* Gradient bar with specific color stops */}
      <div className="absolute bottom-0 left-0 w-[95%] h-4" 
           style={{
             background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
           }}>
      </div>
    </section>
  );
};
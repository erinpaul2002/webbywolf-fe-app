import React from 'react';

export const ToolsSection = () => {
  return (
    <section className="relative flex w-full flex-col items-stretch justify-center mt-[180px] px-20 py-40 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
      <div className="z-0 flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto py-6 max-md:max-w-full">
          <div className="w-full text-[42px] text-slate-900 font-bold uppercase tracking-[-0.84px] max-md:max-w-full">
            <h2 className="text-slate-900 w-full max-md:max-w-full">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <div className="flex w-full gap-[-1px] text-xl text-slate-900 font-semibold whitespace-nowrap tracking-[-0.4px] flex-wrap mt-6 max-md:max-w-full">
            <button className="justify-center items-center border border-[color:var(--Blue-Gray-300,#CBD5E1)] flex min-h-12 flex-1 shrink basis-[0%] bg-slate-100 px-4 py-3 rounded-[8px_0px_0px_8px] border-solid">
              <span className="text-slate-900 self-stretch gap-2.5 my-auto px-4">
                Research
              </span>
            </button>
            <button className="justify-center items-center border border-[color:var(--Blue-Gray-300,#CBD5E1)] flex min-h-12 flex-1 shrink basis-[0%] bg-white px-4 py-3 border-solid">
              <span className="text-slate-900 self-stretch gap-2.5 my-auto px-4">
                Plan
              </span>
            </button>
            <button className="justify-center items-center border border-[color:var(--Blue-Gray-300,#CBD5E1)] flex min-h-12 flex-1 shrink basis-[0%] bg-white px-4 py-3 rounded-[0px_8px_8px_0px] border-solid">
              <span className="text-slate-900 self-stretch gap-2.5 my-auto px-4">
                Design
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-stretch mt-6 max-md:max-w-full">
            <p className="text-slate-600 text-lg font-normal leading-[25px] max-md:max-w-full">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
              enim elit in accumsan.
            </p>
            <div className="flex items-center gap-4 text-base text-[#1959AC] font-medium tracking-[0.5px] mt-6">
              <button className="self-stretch flex items-center justify-center my-auto py-3 rounded-lg">
                <span className="self-stretch my-auto pr-4">
                  Check tools
                </span>
                <img
                  src="arrow-right.svg"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch min-w-60 min-h-[406px] flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <img
            src="tools-illustration.png"
            className="aspect-[1.48] object-contain w-full max-md:max-w-full"
            alt="tools illustration"
          />
        </div>
      </div>
    </section>
  );
};
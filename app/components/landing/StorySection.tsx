import React from 'react';

export const StorySection = () => {
  return (
    <section className="bg-white flex w-full flex-col items-stretch mt-[49px] p-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="w-full text-slate-900 text-center max-md:max-w-full">
        <h2 className="text-slate-900 w-full text-[42px] font-bold uppercase tracking-[-0.84px] max-md:max-w-full">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-slate-900 text-lg font-normal leading-[25px] mt-8 max-md:max-w-full">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis
          dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed
          ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut
          facilisi.
        </p>
      </div>
      <div className="flex w-full items-center gap-[-80px] flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
        <img
          src="/story-image-1.png"
          className="aspect-[1.65] object-contain w-[680px] self-stretch min-w-60 my-auto max-md:max-w-full"
          alt="story image"
        />
        <article className="border border-[color:var(--Blue-Gray-200,#E2E8F0)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_0px_10px_0px_rgba(0,0,0,0.07)] self-stretch min-w-60 overflow-hidden flex-1 shrink basis-[0%] bg-white my-auto rounded-[5px] border-solid max-md:max-w-full">
          <div className="w-full pt-12 pb-6 px-12 max-md:max-w-full max-md:px-5">
            <div className="w-full max-md:max-w-full">
              <h3 className="text-slate-600 text-2xl font-semibold tracking-[1.44px] max-md:max-w-full">
                Artist & Investor
              </h3>
              <p className="text-slate-900 self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-lg font-normal leading-[25px] mt-4 max-md:max-w-full">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </p>
            </div>
          </div>
          <div className="flex w-full gap-4 text-base text-[#1959AC] font-medium tracking-[0.5px] pb-6 px-12 max-md:max-w-full max-md:px-5">
            <button className="flex items-center justify-center py-3 rounded-lg">
              <span className="self-stretch my-auto pr-4">
                Read Full Story
              </span>
              <img
                src="/arrow-right.svg"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt="arrow"
              />
            </button>
          </div>
        </article>
      </div>
      <div className="self-center flex gap-2 mt-20 max-md:mt-10">
        <div className="bg-[rgba(128,176,237,1)] flex w-3 shrink-0 h-3 rounded-[10px]" />
        <div className="bg-[rgba(25,89,172,1)] flex w-12 shrink-0 h-3 rounded-[10px]" />
        <div className="bg-[rgba(128,176,237,1)] flex w-3 shrink-0 h-3 rounded-[10px]" />
        <div className="bg-[rgba(128,176,237,1)] flex w-3 shrink-0 h-3 rounded-[10px]" />
        <div className="bg-[rgba(128,176,237,1)] flex w-3 shrink-0 h-3 rounded-[10px]" />
      </div>
    </section>
  );
};
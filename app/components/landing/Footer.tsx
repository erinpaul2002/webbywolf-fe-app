"use client";

import React from 'react';

export const Footer: React.FC = () => {
  const footerLinks = {
    column1: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    column2: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    column3: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    column4: ["Lorem Ipsum"]
  };

  return (
    <footer className="bg-[rgba(23,30,43,1)] w-full overflow-hidden mt-[234px] pt-10 pb-[213px] px-20 max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
            <div className="flex w-[424px] max-w-full items-start gap-5 justify-between">
              <div className="bg-[rgba(219,219,219,1)] min-h-[60px] gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5">
                LOGO
              </div>
              <div className="text-white text-xl font-bold leading-none tracking-[-0.8px] mt-[58px] max-md:mt-10">
                Lorem Ipsum
              </div>
            </div>
            <nav className="text-lg text-white font-normal tracking-[-0.72px] leading-none mt-12 max-md:mt-10">
              {footerLinks.column1.map((link, index) => (
                <div key={index} className={index > 0 ? "mt-6" : ""}>
                  <a href="#" className="hover:underline">{link}</a>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full mt-[58px] max-md:max-w-full max-md:mt-10">
            <div className="flex items-stretch gap-[40px_86px] text-xl text-white font-bold tracking-[-0.8px] leading-none flex-wrap max-md:max-w-full">
              <div className="grow shrink w-[90px]">Lorem Ipsum</div>
              <div className="grow shrink w-[90px]">Lorem Ipsum</div>
              <div className="grow shrink w-[90px]">Lorem Ipsum</div>
            </div>
            <div className="w-full mt-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[39%] max-md:w-full max-md:ml-0">
                  <nav className="grow text-lg text-white font-normal tracking-[-0.72px] leading-none max-md:mt-8">
                    {footerLinks.column2.map((link, index) => (
                      <div key={index} className={index > 0 ? "mt-6" : ""}>
                        <a href="#" className="hover:underline">{link}</a>
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
                  <nav className="flex items-stretch gap-[7px] text-lg text-white font-normal tracking-[-0.72px] leading-none max-md:mt-8">
                    <div>
                      {footerLinks.column3.map((link, index) => (
                        <div key={index} className={index > 0 ? "mt-6" : ""}>
                          <a href="#" className="hover:underline">{link}</a>
                        </div>
                      ))}
                    </div>
                    <div>
                      <a href="#" className="hover:underline">{footerLinks.column4[0]}</a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

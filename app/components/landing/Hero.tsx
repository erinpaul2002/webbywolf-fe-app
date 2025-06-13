"use client";

import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  return (
    <section className="w-full pl-20 max-md:max-w-full max-md:pl-5">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[54%] max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-165px] w-full flex-col mt-5 max-md:max-w-full">
              <h1 className="heading text-[64px] leading-[70px] tracking-[-1.28px] w-[528px] mt-[213px] text-text-primary max-md:max-w-full max-md:text-[40px] max-md:leading-[48px] max-md:mt-10">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-text-primary text-lg font-normal leading-[25px] w-[646px] mt-5 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
                quis elit sociis. Sed mi rhoncus id habitant. In urna tellus
                nisi platea morbi libero imperdiet neque. Justo suspendisse
                tristique posuere quis eget viverra. Nunc euismod ultrices
                etiam nulla habitasse.
              </p>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 text-[15px] text-white font-bold whitespace-nowrap mt-[60px] max-md:max-w-full max-md:mt-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border self-stretch flex min-w-60 w-[324px] shrink-0 h-[47px] my-auto rounded-md border-[rgba(195,195,195,1)] border-solid px-4 text-black"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] btn-primary self-stretch flex min-h-[47px] gap-2.5 overflow-hidden my-auto pl-6 pr-[23px] py-[15px] rounded-[5px] max-md:px-5"
                >
                  <span className="self-stretch my-auto">Submit</span>
                  <img
                    src="/arrow-1.svg"
                    className="aspect-[1.13] object-contain w-[17px] self-stretch shrink-0 my-auto"
                    alt="submit"
                  />
                </button>
              </form>
              <div className="flex items-center gap-3 mt-4">
                <div className="bg-[rgba(21,90,218,1)] self-stretch flex min-h-[29px] flex-col overflow-hidden items-center justify-center w-[30px] h-[30px] my-auto px-2 rounded-[50px]">
                  <img
                    src="/credit-card-check.svg"
                    className="aspect-[1] "
                    alt="check"
                  />
                </div>
                <div className="text-text-primary text-[15px] font-medium leading-loose self-stretch my-auto">
                  No credit card required!
                </div>
              </div>
            </div>
          </div>
          <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[831px] w-full text-[15px] text-black font-bold pt-0 pb-[762px] px-[70px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
              <img
                src="/Hero.png"
                className="absolute h-full w-full object-cover inset-0 top-0 left-0"
                alt="hero background"
                style={{ top: 0 }}
              />
              {/* Overlay div that applies blur only to bottom portion */}
              <div className="absolute bottom-0 left-0 w-full h-[2.5%] bg-transparent" 
                   style={{ 
                     background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)',
                     backdropFilter: 'blur(3px)'
                   }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pl-20 max-md:max-w-full max-md:pl-5 absolute top-0 left-0 z-20 bg-transparent">
      <div className="self-stretch flex w-full items-center gap-5 flex-nowrap justify-between max-md:max-w-full px-8 py-4">
        <div className="self-stretch bg-[rgba(219,219,219,1)] min-h-[60px] gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5">
          LOGO
        </div>
        <nav className="flex flex-1 items-center justify-center gap-10 text-lg link-primary my-auto max-md:max-w-full px-8 py-4 mx-4 my-2">
          <div className="flex items-center gap-1.5">
            <div>Lorem Ipsum</div>
            <img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-3.5"
              alt="dropdown"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <div>Lorem Ipsum</div>
            <img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-3.5"
              alt="dropdown"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <div>Lorem Ipsum</div>
            <img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-3.5"
              alt="dropdown"
            />
          </div>
        </nav>
        <button className="relative self-stretch shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white min-h-[38px] gap-3 overflow-hidden px-6 py-2.5 rounded-[5px] max-md:px-5 mr-10 mt-3 text-black font-semibold">
          Sign In
        </button>
      </div>
    </header>
  );
};

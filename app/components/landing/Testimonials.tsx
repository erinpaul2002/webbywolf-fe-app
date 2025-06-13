"use client";

import React, { useState } from 'react';

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      icon: "/thunderstorm.svg",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      avatar: "/jane.png",
      name: "Jane Cooper"
    },
    {
      icon: "/stars.svg",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      avatar: "/ralph.svg",
      name: "Ralph Edwards"
    },
    {
      icon: "/tower.svg",
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      avatar: "/courtney.svg",
      name: "Courtney Henry"
    },
    {
      icon: "/clock.svg",
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      avatar: "/cameron.svg",
      name: "Cameron Williamson"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[rgba(21,90,218,1)] flex w-full flex-col items-stretch justify-center mt-[180px] p-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex max-w-full w-[1280px] gap-[40px_160px] flex-wrap">
        <div className="min-w-60 grow shrink w-[766px] max-md:max-w-full">
          <div className="w-full text-white max-md:max-w-full">
            <h2 className="text-2xl font-semibold tracking-[-0.96px] max-md:max-w-full">
              Join other Sun harvesters
            </h2>
            <h3 className="text-[42px] font-bold tracking-[-0.84px] uppercase mt-2 max-md:max-w-full">
              Lorem ipsum dolor sit amet
            </h3>
          </div>
          <p className="text-white text-lg font-normal leading-[25px] mt-6 max-md:max-w-full">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="text-[15px] text-black font-bold grow shrink w-[190px] pt-10">
          <button className="self-stretch shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white min-h-[38px] max-w-full w-[238px] gap-3 overflow-hidden px-6 py-2.5 rounded-[5px] max-md:px-5">
            Lorem Ipsum
          </button>
        </div>
      </div>
      
      <div className="flex w-full items-center gap-6 mt-20 max-md:max-w-full max-md:mt-10 overflow-hidden">
        <div className="flex gap-6 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
          {testimonials.map((testimonial, index) => (
            <article key={index} className="justify-center items-stretch border border-[color:var(--Blue-Gray-200,#E2E8F0)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_0px_10px_0px_rgba(0,0,0,0.07)] flex min-w-60 flex-col overflow-hidden w-[364px] bg-white rounded-[10px] border-solid">
              <div className="w-full p-8 max-md:px-5">
                <div className="flex w-16 items-center justify-center">
                  <img
                    src={testimonial.icon}
                    className="aspect-[1] object-contain w-16 self-stretch my-auto"
                    alt="testimonial icon"
                  />
                </div>
                <p className="text-slate-900 text-lg font-normal leading-[29px] mt-4">
                  {testimonial.text}
                </p>
                <div className="flex w-full items-center gap-4 text-lg text-slate-900 font-normal leading-[1.6] mt-4 pt-4">
                  <img
                    src={testimonial.avatar}
                    className="aspect-[1] object-contain w-16 self-stretch min-h-16 shrink-0 gap-2.5 my-auto rounded-[100px]"
                    alt={testimonial.name}
                  />
                  <div className="text-slate-900 self-stretch flex-1 shrink basis-[0%] my-auto">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <div className="flex gap-6 mt-20 max-md:mt-10">
        <button
          onClick={prevSlide}
          className="justify-center items-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_0px_2px_0px_rgba(0,0,0,0.07)] flex w-12 h-12 px-3 rounded-[100px] border-2 border-solid border-white"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="justify-center items-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_0px_2px_0px_rgba(0,0,0,0.07)] flex w-12 h-12 px-3 rounded-[100px] border-2 border-solid border-white"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

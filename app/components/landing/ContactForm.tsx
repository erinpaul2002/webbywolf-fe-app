"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  timeFrame: string;
  size: string;
  quantity: string;
  description: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    timeFrame: '',
    size: '',
    quantity: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="mt-[166px] w-full flex flex-col items-center max-md:mt-10">
      <h2 className="text-[42px] text-[rgba(34,34,34,1)] font-bold uppercase tracking-[-0.84px]">
        REQUEST A QUOTE
      </h2>
      <form onSubmit={handleSubmit} className="flex h-[806px] w-full max-w-[1108px] flex-col items-center mt-[131px] max-md:max-w-full max-md:mt-10">
        <div className="flex flex-col items-center text-sm max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex gap-5 text-[#0E0D0D] font-normal whitespace-nowrap flex-wrap max-md:max-w-full">
              <div className="flex min-w-60 flex-col items-stretch w-[536px] rounded-md max-md:max-w-full">
                <label htmlFor="name" className="text-[#0E0D0D]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-[color:var(--While-Hover,#9F9F9F)] flex shrink-0 h-[47px] bg-[#F4F4F4] mt-5 rounded-md border-[0.5px] border-solid px-4 max-md:max-w-full"
                  required
                />
              </div>
              <div className="flex min-w-60 flex-col items-stretch w-[536px] rounded-md max-md:max-w-full">
                <label htmlFor="email" className="text-[#0E0D0D]">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-[color:var(--While-Hover,#9F9F9F)] flex shrink-0 h-[47px] bg-[#F4F4F4] mt-5 rounded-md border-[0.5px] border-solid px-4 max-md:max-w-full"
                  required
                />
              </div>
            </div>
            <div className="flex gap-5 justify-center flex-wrap mt-[37px] max-md:max-w-full">
              <div className="flex min-w-60 flex-col items-stretch text-[#0E0D0D] font-normal w-[536px] rounded-md max-md:max-w-full">
                <label htmlFor="phone" className="text-[#0E0D0D]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-[color:var(--While-Hover,#9F9F9F)] flex shrink-0 h-[47px] bg-[#F4F4F4] mt-[22px] rounded-md border-[0.5px] border-solid px-4 max-md:max-w-full"
                />
              </div>
              <div className="min-w-60 w-[536px] max-md:max-w-full">
                <label htmlFor="timeFrame" className="text-[#0e0d0d] font-normal">
                  Time Frame<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                </label>
                <div className="relative mt-[19px]">
                  <select
                    id="timeFrame"
                    name="timeFrame"
                    value={formData.timeFrame}
                    onChange={handleInputChange}
                    className="items-center border-[color:var(--While-Hover,#9F9F9F)] flex w-full overflow-hidden text-[#707070] font-light bg-[#F4F4F4] pl-4 pr-[3px] py-[11px] rounded-md border-[0.5px] border-solid appearance-none max-md:max-w-full"
                    required
                  >
                    <option value="">Choose Time Frame</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                  </select>
                  <img
                    src="/dropdown-2.svg"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-6 pointer-events-none"
                    alt="dropdown"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-center flex-wrap mt-[37px] max-md:max-w-full">
              <div className="min-w-60 w-[536px] max-md:max-w-full">
                <label htmlFor="size" className="text-[#0e0d0d] font-normal">
                  Size<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                </label>
                <div className="relative mt-[19px]">
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="items-center border-[color:var(--While-Hover,#9F9F9F)] flex w-full overflow-hidden text-[#707070] font-light bg-[#F4F4F4] pl-4 pr-[3px] py-[11px] rounded-md border-[0.5px] border-solid appearance-none max-md:max-w-full"
                    required
                  >
                    <option value="">Choose Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <img
                    src="/dropdown-2.svg"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 aspect-[0.96] object-contain w-6 pointer-events-none"
                    alt="dropdown"
                  />
                </div>
              </div>
              <div className="min-w-60 w-[536px] max-md:max-w-full">
                <label htmlFor="quantity" className="text-[#0e0d0d] font-normal">
                  Quantity<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                </label>
                <div className="relative mt-[19px]">
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="items-center border-[color:var(--While-Hover,#9F9F9F)] flex w-full overflow-hidden text-[#707070] font-light bg-[#F4F4F4] pl-4 pr-[3px] py-[11px] rounded-md border-[0.5px] border-solid appearance-none max-md:max-w-full"
                    required
                  >
                    <option value="">Choose Quantity</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51+">51+</option>
                  </select>
                  <img
                    src="/dropdown-2.svg"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 aspect-[0.96] object-contain w-6 pointer-events-none"
                    alt="dropdown"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[37px] max-md:max-w-full">
              <label htmlFor="description" className="text-[#0e0d0d] font-normal">
                Please Describe Your Project<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Choose a project type"
                className="text-[#707070] border-[color:var(--While-Hover,#9F9F9F)] bg-[#F4F4F4] w-full pt-2.5 pb-[163px] px-3 mt-[15px] rounded-md border-[0.5px] border-solid max-md:max-w-full max-md:pr-5 max-md:pb-[110px] resize-none"
                required
              />
            </div>
          </div>
          
          <p className="text-[rgba(60,60,60,1)] text-lg font-medium leading-[60px] mt-10 max-md:max-w-full">
            <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400}}>
              By submitting this form you agree to our{" "}
            </span>
            <a
              href="#"
              style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400, textDecoration: 'underline', color: 'rgba(60,60,60,1)'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400}}>
              {" "}and{" "}
            </span>
            <a
              href="#"
              style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400, textDecoration: 'underline', color: 'rgba(60,60,60,1)'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400}}>
              .
            </span>
          </p>
          
          <button
            type="submit"
            className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-[#1959AC] flex min-h-[38px] gap-2.5 overflow-hidden text-[15px] text-white font-bold mt-10 pl-6 pr-[23px] py-2.5 rounded-[5px] max-md:px-5"
          >
            <span className="self-stretch my-auto">Loerum Ipsum</span>
            <img
              src="/arrow-right-1.svg"
              className="aspect-[1.13] object-contain w-[17px] self-stretch shrink-0 my-auto"
              alt="submit"
            />
          </button>
        </div>
      </form>
    </section>
  );
};

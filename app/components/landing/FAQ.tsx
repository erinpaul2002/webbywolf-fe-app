"use client";

import React, { useState } from 'react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="items-stretch flex w-full flex-col bg-[#FBFBFB] mt-40 pl-[100px] pr-[141px] pt-[42px] pb-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-[42px] text-[rgba(34,34,34,1)] font-bold uppercase tracking-[-0.84px] max-md:max-w-full">
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </h2>
      <div className="w-full text-lg text-black mt-[110px] max-md:max-w-full max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          {faqs.map((faq, index) => (
            <article key={index} className="border-[rgba(17,17,17,0.2)] border-t">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center gap-[40px_76px] justify-between flex-wrap px-[41px] py-8 max-md:max-w-full max-md:px-5 text-left"
              >
                <div className="self-stretch min-w-60 w-[1015px] my-auto max-md:max-w-full">
                  <h3 className="text-black font-semibold leading-none">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="text-black font-normal leading-[25px] mt-2.5 max-md:max-w-full">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <img
                  src={openIndex === index ? "/line.svg" : "/plus.svg"}
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt={openIndex === index ? "collapse" : "expand"}
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

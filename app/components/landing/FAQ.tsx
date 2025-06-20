"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  const faqs: FAQItem[] = [
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

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.35, // reduced from 0.8
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.1
      }
    }
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12 // slightly snappier
      }
    }
  };

  const faqContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // reduced from 0.1
        delayChildren: 0.12 // reduced from 0.3
      }
    }
  };

  const faqItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12, // snappier
        delay: 0.08 + (custom * 0.025) // reduced from 0.2 + (custom * 0.05)
      }
    }),
    hover: {
      backgroundColor: "rgba(248, 250, 252, 0.8)"
    }
  };

  const underlineVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "120px",
      transition: { 
        duration: 0.28, // reduced from 0.8
        delay: 0.18 // reduced from 0.6
      }
    }
  };

  const floatingElementVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.3,
      transition: {
        duration: 0.35, // reduced from 1
        delay: 0.18 // reduced from 0.8
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="items-stretch flex w-full flex-col bg-[#FBFBFB] mt-40 pl-[100px] pr-[141px] pt-[42px] pb-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <motion.div className="relative">
        <motion.h2 
          variants={headingVariants}
          className="text-[42px] text-[rgba(34,34,34,1)] font-bold uppercase tracking-[-0.84px] max-md:max-w-full"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.08, duration: 0.22 } // reduced
              }
            }}
          >
            FREQUENTLY ASKED{" "}
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.16, duration: 0.22 } // reduced
              }
            }}
          >
            QUESTIONS (FAQs)
          </motion.span>
        </motion.h2>
        
        {/* Decorative underline */}
        <motion.div
          variants={underlineVariants}
          className="absolute -bottom-3 left-0 h-[3px] bg-[rgba(25,89,172,1)]"
        />
      </motion.div>
      
      <motion.div 
        variants={faqContainerVariants}
        className="w-full text-lg text-black mt-[110px] max-md:max-w-full max-md:mt-10"
      >
        <div className="w-full max-md:max-w-full">
          {faqs.map((faq, index) => (
            <motion.article 
              key={index} 
              variants={faqItemVariants}
              custom={index}
              className="border-b border-[rgba(17,17,17,0.1)] last:border-b-0"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center gap-[40px_76px] justify-between flex-wrap px-[41px] py-8 max-md:max-w-full max-md:px-5 text-left"
                initial={{ backgroundColor: "transparent" }}
                whileHover={{ backgroundColor: "#f8fafc" }}
                animate={{ backgroundColor: "transparent" }}
              >
                <h3 className="font-bold text-base text-slate-950">
                  {faq.question}
                </h3>
                
                {/* Animated icon container */}
                <div className="relative w-6 h-6">
                  <AnimatePresence initial={false}>
                    {openIndex === index ? (
                      <motion.div 
                        key="minus"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image src="/line.svg" alt="Collapse" width={24} height={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image src="/plus.svg" alt="Expand" width={24} height={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
              
              {/* Answer section */}
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-[41px] pb-8 max-md:px-5">
                  <p className="text-slate-500">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>
      
      {/* Optional floating decoration with continuous animations when in view */}
      <motion.div
        variants={floatingElementVariants}
        animate={isInView ? { 
          y: [0, -10, 0],
          transition: {
            y: { 
              repeat: Infinity, 
              duration: 1.2, // reduced from 3
              ease: "easeInOut" 
            }
          }
        } : {}}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-50 -z-10"
      />
      
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 0.2,
            transition: {
              duration: 1,
              delay: 1
            }
          }
        }}
        animate={isInView ? { 
          y: [0, 10, 0],
          transition: {
            y: { 
              repeat: Infinity, 
              duration: 1.6, // reduced from 4
              ease: "easeInOut" 
            }
          }
        } : {}}
        className="absolute bottom-40 left-40 w-24 h-24 rounded-full bg-blue-100 -z-10"
      />
    </motion.section>
  );
}

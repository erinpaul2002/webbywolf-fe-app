"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FeatureShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const featureItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
        delay: 0.4 + (custom * 0.1)
      }
    }),
    hover: {
      x: 5,
      color: "#1959AC",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.7
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.2)"
    },
    tap: { 
      scale: 0.98 
    }
  };

  const arrowVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  };

  const gradientVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "95%",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const headingSpanVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full max-w-[1359px] min-h-[800px] mt-[178px] pr-16 bg-[rgba(248,248,248,1)] max-md:max-w-full max-md:mt-10 max-md:pr-5"
    >
      <div className="max-md:max-w-full max-md:mr-2">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <motion.div 
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              animate={isInView ? {
                y: [0, -10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }
                }
              } : {}}
              className="relative w-full aspect-[1] max-md:max-w-full max-md:mt-10"
            >
              <Image
                src="/feature-showcase.png"
                fill
                className="object-contain"
                alt="section image"
              />
              
              {/* Decorative floating elements around the image */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.6, 
                    scale: 1,
                    transition: { delay: 0.8, duration: 0.5 }
                  }
                }}
                animate={isInView ? {
                  y: [0, -8, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }
                  }
                } : {}}
                className="absolute top-[15%] right-[10%] w-6 h-6 rounded-full bg-blue-200"
              />
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.4, 
                    scale: 1,
                    transition: { delay: 1.0, duration: 0.5 }
                  }
                }}
                animate={isInView ? {
                  y: [0, 10, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }
                } : {}}
                className="absolute bottom-[25%] left-[5%] w-4 h-4 rounded-full bg-green-200"
              />
            </motion.div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full mt-[122px] max-md:max-w-full max-md:mt-10">
              <motion.div 
                variants={textContainerVariants}
                className="max-md:max-w-full max-md:mr-[9px]"
              >
                <motion.h2 
                  variants={textItemVariants}
                  className="text-2xl font-semibold tracking-[-0.96px] text-[rgba(5,70,210,1)] max-md:max-w-full"
                >
                  Lorem ipsum
                </motion.h2>
                <motion.h3 
                  variants={textItemVariants}
                  className="mt-5 text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(25,89,172,1)] max-md:max-w-full"
                >
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.5, duration: 0.5 }
                      }
                    }}
                    style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif'}}
                  >
                    Lorem{" "}
                  </motion.span>
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.6, duration: 0.5 }
                      }
                    }}
                    style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(34,34,34,1)'}}
                  >
                    ipsum dolor sit amet consectetur. Enim donec.
                  </motion.span>
                </motion.h3>
                <motion.p 
                  variants={textItemVariants}
                  className="mt-5 text-lg font-normal leading-[25px] text-black max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet consectetur. Vel pellentesque
                  odio enim amet non.
                </motion.p>
              </motion.div>
              <motion.div 
                variants={textContainerVariants}
                className="mt-[47px] max-md:max-w-full max-md:mt-10"
              >
                <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
                  <div className="w-[44%] max-md:w-full max-md:ml-0">
                    <div className="flex w-full flex-col items-stretch text-xl font-semibold text-[#222] max-md:mt-10">
                      <motion.div 
                        variants={featureItemVariants}
                        custom={0}
                        whileHover="hover"
                        className="w-[223px] gap-3 tracking-[-0.4px] cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={1}
                        whileHover="hover"
                        className="mt-2 w-[199px] gap-3 tracking-[-0.4px] cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={2}
                        whileHover="hover"
                        className="mt-2 w-[221px] gap-3 tracking-[-0.4px] max-md:mr-0.5 cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.button 
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="mt-9 flex min-h-[38px] items-center justify-center gap-2.5 overflow-hidden rounded-[5px] bg-[#1959AC] py-2.5 pl-6 pr-[23px] text-[15px] font-bold text-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] max-md:px-5"
                      >
                        <span className="self-stretch my-auto">
                          Loerum Ipsum
                        </span>
                        <motion.div variants={arrowVariants}>
                          <Image
                            src="/arrow-right-1.svg"
                            width={17}
                            height={14}
                            className="self-stretch shrink-0 my-auto"
                            alt="arrow"
                          />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                  <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex w-full flex-col text-xl font-semibold tracking-[-0.4px] text-[#222] max-md:mt-10">
                      <motion.div 
                        variants={featureItemVariants}
                        custom={3}
                        whileHover="hover"
                        className="w-[195px] gap-3 cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={4}
                        whileHover="hover"
                        className="mt-2 self-stretch w-[287px] gap-3 cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={5}
                        whileHover="hover"
                        className="mt-2 w-[265px] gap-3 cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-4 max-md:max-w-full max-md:mt-10"></div>
      
      {/* Gradient bar with specific color stops */}
      <motion.div 
        variants={gradientVariants}
        className="absolute bottom-0 left-0 h-4" 
        style={{
          background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
        }}
      />
    </motion.section>
  );
}
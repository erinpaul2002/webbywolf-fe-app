"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FeatureShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -50px 0px"
  });

  // Animation variants (reduced delays/durations)
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3, // reduced from 0.8
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.1
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
        delay: 0.07 // reduced from 0.2
      }
    }
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // reduced from 0.15
        delayChildren: 0.08 // reduced from 0.3
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
        delay: 0.09 + (custom * 0.02) // reduced
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
        delay: 0.12 // reduced from 0.7
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
        duration: 0.2, // reduced from 1.2
        ease: "easeOut",
        delay: 0.12 // reduced from 0.8
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full max-w-[1359px] mx-auto min-h-[500px] sm:min-h-[600px] mt-12 sm:mt-16 md:mt-[178px] px-4 md:px-6 lg:pr-16 bg-[rgba(248,248,248,1)] overflow-hidden"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-5">
          {/* Image Section - Mobile Optimized */}
          <div className="w-full md:w-6/12 order-2 md:order-1">
            <motion.div 
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              animate={isInView ? {
                y: [0, -10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 1, // reduced from 4/3/3.5
                    ease: "easeInOut",
                    delay: 0.12 // reduced from 0.5
                  }
                }
              } : {}}
              className="relative w-full aspect-square sm:aspect-[1] mx-auto max-w-[350px] md:max-w-none mt-6 md:mt-0"
            >
              <Image
                src="/feature-showcase.png"
                fill
                className="object-contain"
                alt="section image"
              />
              
              {/* Decorative elements - hidden on smallest screens */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.6, 
                    scale: 1,
                    transition: { delay: 0.12, duration: 0.15 } // reduced
                  }
                }}
                animate={isInView ? {
                  y: [0, -8, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 1, // reduced from 4/3/3.5
                      ease: "easeInOut",
                      delay: 0.12 // reduced from 0.5
                    }
                  }
                } : {}}
                className="hidden sm:block absolute top-[15%] right-[10%] w-4 md:w-6 h-4 md:h-6 rounded-full bg-blue-200"
              />
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.4, 
                    scale: 1,
                    transition: { delay: 0.18, duration: 0.15 } // reduced
                  }
                }}
                animate={isInView ? {
                  y: [0, 10, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 1, // reduced from 4/3/3.5
                      ease: "easeInOut",
                      delay: 0.12 // reduced from 0.5
                    }
                  }
                } : {}}
                className="hidden sm:block absolute bottom-[25%] left-[5%] w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-200"
              />
            </motion.div>
          </div>

          {/* Text Content Section - Mobile Optimized */}
          <div className="w-full md:w-6/12 order-1 md:order-2 md:ml-5">
            <div className="w-full mt-8 sm:mt-10 md:mt-[122px]">
              <motion.div variants={textContainerVariants}>
                <motion.h2 
                  variants={textItemVariants}
                  className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.96px] text-[rgba(5,70,210,1)]"
                >
                  Lorem ipsum
                </motion.h2>
                <motion.h3 
                  variants={textItemVariants}
                  className="mt-2 sm:mt-3 md:mt-5 text-2xl sm:text-3xl md:text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(25,89,172,1)]"
                >
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.09, duration: 0.15 } // reduced
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
                        transition: { delay: 0.14, duration: 0.15 } // reduced
                      }
                    }}
                    style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(34,34,34,1)'}}
                    className="text-xl sm:text-2xl md:text-[42px]"
                  >
                    ipsum dolor sit amet consectetur. Enim donec.
                  </motion.span>
                </motion.h3>
                <motion.p 
                  variants={textItemVariants}
                  className="mt-2 sm:mt-3 md:mt-5 text-sm sm:text-base md:text-lg font-normal leading-tight md:leading-[25px] text-black"
                >
                  Lorem ipsum dolor sit amet consectetur. Vel pellentesque
                  odio enim amet non.
                </motion.p>
              </motion.div>

              {/* Features Section - Mobile Optimized */}
              <motion.div 
                variants={textContainerVariants}
                className="mt-6 sm:mt-8 md:mt-[47px]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="w-full">
                    <div className="flex w-full flex-col items-stretch text-base sm:text-lg md:text-xl font-semibold text-[#222]">
                      <motion.div 
                        variants={featureItemVariants}
                        custom={0}
                        whileHover="hover"
                        className="w-full gap-3 tracking-[-0.4px] cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={1}
                        whileHover="hover"
                        className="mt-2 w-full gap-3 tracking-[-0.4px] cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={2}
                        whileHover="hover"
                        className="mt-2 w-full gap-3 tracking-[-0.4px] cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.button 
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="mt-5 sm:mt-6 md:mt-9 flex min-h-[38px] items-center justify-center gap-2.5 overflow-hidden rounded-[5px] bg-[#1959AC] py-2 sm:py-2.5 px-4 sm:pl-6 sm:pr-[23px] text-[14px] sm:text-[15px] font-bold text-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]"
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
                  <div className="w-full mt-2 sm:mt-0">
                    <div className="flex w-full flex-col text-base sm:text-lg md:text-xl font-semibold tracking-[-0.4px] text-[#222]">
                      <motion.div 
                        variants={featureItemVariants}
                        custom={3}
                        whileHover="hover"
                        className="w-full gap-3 cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={4}
                        whileHover="hover"
                        className="mt-2 self-stretch w-full gap-3 cursor-pointer"
                      >
                        Lorem Ipsum
                      </motion.div>
                      <motion.div 
                        variants={featureItemVariants}
                        custom={5}
                        whileHover="hover"
                        className="mt-2 w-full gap-3 cursor-pointer"
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
      <div className="mt-8 sm:mt-12 md:mt-16 mb-4"></div>
      
      {/* Gradient bar with specific color stops */}
      <motion.div 
        variants={gradientVariants}
        className="absolute bottom-0 left-0 h-1.5 sm:h-2 md:h-4" 
        style={{
          background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
        }}
      />
    </motion.section>
  );
}
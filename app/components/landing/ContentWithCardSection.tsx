'use client';

import Image from 'next/image';
import { motion, Variants, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export function ContentWithCardSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.32, // reduced from 0.8
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.1
      }
    }
  };

  const backgroundVariants: Variants = {
    hidden: { opacity: 0, height: "0px" },
    visible: { 
      opacity: 1,
      height: "750px",
      transition: {
        duration: 0.32, // reduced from 1.2
        ease: "easeOut"
      }
    }
  };

  const gradientVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.22, // reduced from 1.5
        ease: "easeOut",
        delay: 0.13 // reduced from 0.8
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
        damping: 12, // snappier
        delay: 0.09 // reduced from 0.3
      }
    }
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12, // snappier
        delay: 0.13 // reduced from 0.5
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12, // snappier
        delay: 0.18 // reduced from 0.7
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 8 // snappier
      }
    },
    tap: { scale: 0.98 }
  };

  const arrowVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8 // snappier
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12, // snappier
        delay: 0.22 // reduced from 0.9
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12 // snappier
      }
    }
  };

  const cardContentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // reduced from 0.1
        delayChildren: 0.28 // reduced from 1.1
      }
    }
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12 // snappier
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12, // snappier
        delay: 0.16 // reduced from 0.6
      }
    }
  };

  // New decorative elements animations
  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.5,
      transition: {
        duration: 0.22, // reduced from 1
        delay: 0.22 // reduced from 1.2
      }
    }
  };

  const highlightVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.18, // reduced from 0.8
        delay: 0.22 // reduced from 1.5
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full mt-[110px] max-md:mt-10"
    >
      {/* Gray background section - covers 3/4 of the card */}
      <motion.div 
        variants={backgroundVariants}
        className="absolute top-20 left-0 right-0 bg-[rgba(241,241,241,1)] rounded-[10px] z-0 max-md:h-[900px]"
      >
        {/* Decorative circles */}
        <motion.div
          variants={circleVariants}
          className="absolute top-20 left-20 w-24 h-24 rounded-full bg-blue-200 opacity-20 max-md:left-5 max-md:w-16 max-md:h-16"
        />
        <motion.div
          variants={circleVariants}
          className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-blue-100 opacity-10 max-md:right-5 max-md:w-20 max-md:h-20"
        />
      </motion.div>
      
      {/* Gradient bar at bottom of gray background */}
      <motion.div 
        variants={gradientVariants}
        className="absolute z-[1] bottom-[calc(100%-840px)] left-0 right-50 h-4 max-md:bottom-[calc(100%-980px)]" 
        style={{
          background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1359px] mx-auto px-4 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Left column content */}
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col mt-[130px] max-md:max-w-full max-md:mt-10">
              <div className="self-stretch max-md:max-w-full">
                <motion.h2 
                  variants={headingVariants}
                  className="text-[rgba(25,89,172,1)] text-[42px] font-bold tracking-[-0.84px] uppercase max-md:max-w-full max-md:text-3xl"
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.08, duration: 0.18 } // reduced from 0.4, 0.5
                      }
                    }}
                  >
                    Lorem ipsum{" "}
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.13, duration: 0.18 } // reduced from 0.6, 0.5
                      }
                    }}
                  >
                    dolor sit amet consectetur.{" "}
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.18, duration: 0.18 } // reduced from 0.8, 0.5
                      }
                    }}
                    className="relative inline-block"
                  >
                    Dignissim tellus.
                    <motion.div
                      variants={highlightVariants}
                      className="absolute bottom-1 left-0 h-2 bg-blue-100 -z-10 opacity-50"
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  variants={paragraphVariants}
                  className="text-black text-lg font-normal leading-[25px] mt-5 max-md:max-w-full max-md:text-base"
                >
                  Lorem ipsum dolor sit amet consectetur. In malesuada morbi
                  mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet
                  est tortor tincidunt ultricies feugiat mauris. Aliquam
                  platea turpis porta nisl felis. Massa in facilisis semper
                  libero eget eu quisque bibendum platea. Tortor fames.
                </motion.p>
              </div>
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-[#1959AC] flex min-h-[38px] gap-2.5 overflow-hidden text-[15px] text-white font-bold mt-10 pl-6 pr-[23px] py-2.5 rounded-[5px] max-md:px-5 w-fit"
              >
                <span className="self-stretch my-auto">
                  Loerum Ipsum
                </span>
                <motion.div 
                  variants={arrowVariants}
                  className="relative w-[17px] h-[14px]"
                >
                  <Image
                    src="/arrow-right-2.svg"
                    alt="arrow"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.button>
              
              {/* Enhanced shadow and hover effects on the card */}
              <motion.article 
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setIsCardHovered(true)}
                onHoverEnd={() => setIsCardHovered(false)}
                className="justify-center items-stretch shadow-[0px_8px_30px_0px_rgba(0,0,0,0.25)] bg-white flex min-h-[395px] w-full max-w-[546px] flex-col text-[#222] mt-[46px] px-10 py-[50px] rounded-lg max-md:mt-10 max-md:px-5 max-md:py-8 relative overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <AnimatePresence>
                  {isCardHovered && (
                    <>
                      <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        exit={{ left: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"
                      />
                      <motion.div
                        initial={{ top: "-100%" }}
                        animate={{ top: "100%" }}
                        exit={{ top: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.04 }}
                        className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400"
                      />
                      <motion.div
                        initial={{ right: "-100%" }}
                        animate={{ right: "100%" }}
                        exit={{ right: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.08 }}
                        className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-blue-400 via-purple-500 to-blue-400"
                      />
                      <motion.div
                        initial={{ bottom: "-100%" }}
                        animate={{ bottom: "100%" }}
                        exit={{ bottom: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.12 }}
                        className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-blue-400 via-purple-500 to-blue-400"
                      />
                    </>
                  )}
                </AnimatePresence>
              
                <motion.div variants={cardContentVariants}>
                  <motion.h3 
                    variants={cardItemVariants}
                    className="gap-3 text-xl font-semibold tracking-[-0.4px] max-md:text-lg"
                  >
                    Lorem ipsum dolor sit
                  </motion.h3>
                  <div className="w-full text-lg font-normal leading-[25px] mt-10 max-md:max-w-full max-md:mt-6 max-md:text-base max-md:leading-relaxed">
                    <motion.p 
                      variants={cardItemVariants}
                      className="flex-1 shrink basis-[0%] min-h-[50px] w-full gap-4 max-md:max-w-full max-md:min-h-0"
                    >
                      Lorem ipsum dolor sit amet consectetur. Habitant
                      vestibulum vitae amet habitasse semper.
                    </motion.p>
                    <motion.p 
                      variants={cardItemVariants}
                      className="flex-1 shrink basis-[0%] w-full gap-4 mt-4 max-md:max-w-full"
                    >
                      Lorem ipsum dolor sit amet consectetur. Egestas congue
                      mattis ut placerat vitae amet suspendisse fermentum velit.
                      Nibh dolor nunc id tristique sit.
                    </motion.p>
                    <motion.p 
                      variants={cardItemVariants}
                      className="flex-1 shrink basis-[0%] w-full gap-4 mt-4 max-md:max-w-full"
                    >
                      Lorem ipsum dolor sit amet consectetur. Hac netus
                      consectetur amet quisque scelerisque facilisi. Ultrices
                      lectus viverra pharetra commodo.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.article>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 max-md:mt-10">
            <motion.div 
              variants={imageVariants}
              animate={isInView ? {
                y: [0, -15, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 2, // reduced from 6
                    ease: "easeInOut"
                  }
                }
              } : {}}
              className="relative aspect-square w-full"
            >
              <Image
                src="/content-with-card.png"
                alt="section illustration"
                fill
                className="object-contain"
              />
              
              {/* Decorative floating elements around the image */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 0.7, 
                    x: 0,
                    transition: { 
                      delay: 0.13, 
                      duration: 0.18 
                    } // reduced from 1.2, 0.8
                  }
                }}
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
                className="absolute top-[20%] left-[10%] w-6 h-6 rounded-full bg-blue-200 max-md:w-4 max-md:h-4"
              />
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { 
                    opacity: 0.5, 
                    x: 0,
                    transition: { 
                      delay: 0.16, 
                      duration: 0.18 
                    } // reduced from 1.4, 0.8
                  }
                }}
                animate={isInView ? {
                  y: [0, 10, 0],
                  transition: { 
                    y: { 
                      repeat: Infinity, 
                      duration: 1.6, // reduced from 4
                      ease: "easeInOut", 
                      delay: 0.12 // reduced from 0.5
                    }
                  }
                } : {}}
                className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full bg-green-200 max-md:w-3 max-md:h-3"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
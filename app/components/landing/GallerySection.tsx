"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

// Left side motorcycle images
const leftImages = [
  '/bike-7.png', // Image 1 - bottom left (1×2)
  '/bike-8.png', // Image 2 - bottom right (3×2)
  '/bike-6.png', // Image 3 - top right (1×2)
];

// Right side motorcycle images
const rightImages = [
  '/bike-1.png', // Image 1 - 1col×2row
  '/bike-2.png', // Image 2 - 3col×2row
  '/bike-3.png', // Image 3 - 4col×3row
  '/bike-4.png', // Image 4 - 1col×1row
  '/bike-5.png', // Image 5 - 3col×1row
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  // Animation variants (reduced delays/durations)
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3, // reduced from 0.8
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.1
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
        type: "spring",
        stiffness: 100,
        damping: 15
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
        damping: 15,
        delay: 0.12 // reduced from 0.5
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const arrowVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const leftImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.05 + (custom * 0.03) // reduced
      }
    })
  };

  const rightImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.09 + (custom * 0.02) // reduced
      }
    })
  };

  const mobileImageVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.03 + (custom * 0.01) // reduced
      }
    })
  };

  // Additional decorative elements variants
  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.2, 
      scale: 1,
      transition: {
        duration: 0.2, // reduced from 0.8
        delay: 0.09 // reduced from 0.6
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative mt-10 md:mt-20 overflow-hidden bg-slate-100 pt-10 md:pt-20 px-4 md:px-10 lg:px-20"
    >
      {/* Decorative elements with continuous animations when in view */}
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, -15, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 1.2, // reduced from 6
              ease: "easeInOut"
            }
          }
        } : {}}
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-200 opacity-5 blur-xl -z-10"
      />
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, 10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 1, // reduced from 8
              ease: "easeInOut",
              delay: 0.2 // reduced from 1
            }
          }
        } : {}}
        className="absolute bottom-60 left-20 w-48 h-48 rounded-full bg-blue-300 opacity-5 blur-xl -z-10"
      />

      {/* MOBILE VERSION */}
      <div className="mx-auto md:hidden max-w-[1400px]">
        {/* Text section */}
        <motion.div 
          variants={textContainerVariants}
          className="mb-8 flex flex-col justify-center gap-4"
        >
          <motion.p 
            variants={textItemVariants}
            className="text-lg font-semibold tracking-[1.6px] text-slate-600"
          >
            NO LIMITS
          </motion.p>
          <motion.h1 
            variants={textItemVariants}
            className="text-3xl font-bold uppercase tracking-[-0.84px] text-slate-900"
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h1>
          <motion.p 
            variants={textItemVariants}
            className="text-base font-normal leading-[25px] text-black"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>
          <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-4 flex w-fit items-center gap-2 rounded-md bg-[#1959AC] py-3 px-6 font-bold text-white shadow-lg"
          >
            <span>Loerum Ipsum</span>
            <motion.svg 
              variants={arrowVariants}
              width="17" 
              height="14" 
              viewBox="0 0 17 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 1L16 7M16 7L10.5 13M16 7H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.button>
        </motion.div>
        
        {/* Mobile images grid */}
        <div className="grid grid-cols-2 gap-3">
          {[...leftImages, ...rightImages].slice(0, 6).map((img, index) => (
            <motion.div 
              key={index} 
              variants={mobileImageVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className={`${index === 0 || index === 3 ? 'col-span-2' : 'col-span-1'} aspect-square overflow-hidden rounded-lg`}
            >
              <motion.div 
                className="relative h-full w-full"
                animate={isInView ? {
                  y: [0, index % 2 === 0 ? -2 : -3, 0], // reduced from -5/-8
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3, // increased from 1
                      ease: "easeInOut",
                      delay: 0.04 // keep as is
                    }
                  }
                } : {}}
              >
                <Image
                  src={img}
                  fill
                  className="object-cover"
                  alt={`Gallery image ${index + 1}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="mx-auto hidden md:grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left side - 4×6 grid */}
        <div className="grid h-[500px] md:h-[600px] lg:h-[800px] grid-cols-8 grid-rows-12 gap-4">
          {/* Text section - top left (3×3) */}
          <motion.div 
            className="col-span-6 row-span-6 z-10 flex flex-col justify-center gap-4 md:gap-6"
            variants={textContainerVariants}
          >
            <motion.p 
              variants={textItemVariants}
              className="text-lg md:text-xl font-semibold tracking-[1.6px] text-slate-600"
            >
              NO LIMITS
            </motion.p>
            <motion.h1 
              variants={textItemVariants}
              className="text-3xl md:text-4xl font-bold uppercase tracking-[-0.84px] text-slate-900 lg:text-[42px]"
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
              >
                LOREM IPSUM{" "}
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
              >
                DOLOR SIT AMET
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={textItemVariants}
              className="text-base md:text-lg font-normal leading-[25px] text-black"
            >
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </motion.p>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-4 flex w-fit items-center gap-2 rounded-md bg-[#1959AC] py-3 px-6 font-bold text-white shadow-lg"
            >
              <span>Loerum Ipsum</span>
              <motion.svg 
                variants={arrowVariants}
                width="17" 
                height="14" 
                viewBox="0 0 17 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 1L16 7M16 7L10.5 13M16 7H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Image 1: Bottom left (1×2) */}
          <motion.div 
            variants={leftImageVariants}
            custom={0}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-start-1 col-span-2 row-start-10 row-span-5 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-[150%] w-full"
              animate={isInView ? {
                y: [0, -3, 0], // reduced from -5
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3, // increased from 1
                    ease: "easeInOut"
                  }
                }
              } : {}}
            >
              <Image
                src={leftImages[0]}
                fill
                className="object-cover"
                alt="Gallery image 1"
              />
            </motion.div>
          </motion.div>
          
          {/* Image 2: Bottom right (3×2) */}
          <motion.div 
            variants={leftImageVariants}
            custom={1}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-start-3 col-span-7 row-start-9 row-span-6 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-[170%] w-full"
              animate={isInView ? {
                y: [0, -5, 0], // reduced from -8
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3.5, // increased from 1
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }
              } : {}}
            >
              <Image
                src={leftImages[1]}
                fill
                className="object-cover"
                alt="Gallery image 2"
              />
            </motion.div>
          </motion.div>
          
          {/* Image 3: Top right of text section (1×2) */}
          <motion.div 
            variants={leftImageVariants}
            custom={2}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-start-7 col-span-3 row-start-4 row-span-5 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-full w-full"
              animate={isInView ? {
                y: [0, -2, 0], // reduced from -6
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3, // increased from 1
                    ease: "easeInOut",
                    delay: 0.2
                  }
                }
              } : {}}
            >
              <Image
                src={leftImages[2]}
                fill
                className="object-cover"
                alt="Gallery image 3"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - 4×6 grid */}
        <div className="grid h-[800px] grid-cols-8 grid-rows-12 gap-4">
          {/* Image 1: 1col × 2row */}
          <motion.div 
            variants={rightImageVariants}
            custom={0}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-span-2 row-start-2 row-span-3 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-full w-full"
              animate={isInView ? {
                y: [0, -2, 0], // reduced from -5
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3, // increased from 1
                    ease: "easeInOut",
                    delay: 0.7
                  }
                }
              } : {}}
            >
              <Image
                src={rightImages[0]}
                fill
                className="object-cover"
                alt="Right gallery image 1"
              />
            </motion.div>
          </motion.div>
          
          {/* Image 2: 3col × 2row */}
          <motion.div 
            variants={rightImageVariants}
            custom={1}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-span-6 row-span-4 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-full w-full"
              animate={isInView ? {
                y: [0, -3, 0], // reduced from -7
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3.5, // increased from 1
                    ease: "easeInOut",
                    delay: 0.3
                  }
                }
              } : {}}
            >
              <Image
                src={rightImages[1]}
                fill
                className="object-cover"
                alt="Right gallery image 2"
              />
            </motion.div>
          </motion.div>
          
          {/* Image 3: 4col × 3row */}
          <motion.div 
            variants={rightImageVariants}
            custom={2}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-span-8 row-span-6 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-full w-full"
              animate={isInView ? {
                y: [0, -2, 0], // reduced from -4
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3.2, // increased from 1
                    ease: "easeInOut",
                    delay: 0.9
                  }
                }
              } : {}}
            >
              <Image
                src={rightImages[2]}
                fill
                className="object-cover"
                alt="Right gallery image 3"
              />
            </motion.div>
          </motion.div>
          
          {/* Image 4: 1col × 1row */}
          <motion.div 
            variants={rightImageVariants}
            custom={3}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-span-2 row-span-2 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-[300%] w-full"
              animate={isInView ? {
                y: [0, -1, 0], // reduced from -3
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 2.5, // increased from 1
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }
              } : {}}
            >
              <Image
                src={rightImages[3]}
                fill
                className="object-cover"
                alt="Right gallery image 4"
              />
            </motion.div>
          </motion.div>
          
          {/* Image 5: 3col × 1row */}
          <motion.div 
            variants={rightImageVariants}
            custom={4}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="col-span-6 row-span-2 overflow-hidden rounded-lg"
          >
            <motion.div 
              className="relative h-[200%] w-full"
              animate={isInView ? {
                y: [0, -2, 0], // reduced from -6
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3, // increased from 1
                    ease: "easeInOut",
                    delay: 0.4
                  }
                }
              } : {}}
            >
              <Image
                src={rightImages[4]}
                fill
                className="object-cover"
                alt="Right gallery image 5"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

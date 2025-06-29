"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Banner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -50px 0px"
  });

  // Animation variants (reduced delays/durations)
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3, // reduced from 0.8
        ease: "easeOut",
        delayChildren: 0.07, // reduced from 0.2
        staggerChildren: 0.07 // reduced from 0.2
      }
    }
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15
      }
    }
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.07 // reduced from 0.2
      }
    }
  };

  const backgroundVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0.7 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5, // reduced from 1.5
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mt-[150px] bg-black text-lg font-semibold text-white max-md:mt-10"
    >
      <div className="relative flex flex-col items-center w-full min-h-[652px] px-5 sm:px-8 md:px-[70px] pt-11 pb-[200px] max-md:pb-[100px]">
        <motion.div
          className="absolute inset-0 w-full h-full"
          variants={backgroundVariants}
        >
          <Image
            src="/banner1.png"
            className="absolute object-cover"
            alt="banner background"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>
        
        <motion.div 
          className="relative gap-2.5 min-h-[60px] overflow-hidden px-[25px] whitespace-nowrap bg-[rgba(219,219,219,1)] text-2xl md:text-[32px] font-extrabold tracking-[-0.64px] text-black"
          variants={logoVariants}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          LOGO
        </motion.div>
        
        <motion.h2 
          className="relative mt-1 w-full max-w-[900px] text-center text-3xl sm:text-4xl md:text-[42px] font-bold uppercase tracking-[-0.84px] px-2"
          variants={headingVariants}
        >
          <motion.span 
            style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif'}}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.12, duration: 0.2 } // reduced
              }
            }}
          >
            Lorem ipsum{" "}
          </motion.span>
          <motion.span 
            style={{fontFamily: 'Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(255,255,255,1)'}}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.18, duration: 0.2 } // reduced
              }
            }}
          >
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi.
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="relative mt-[26px] w-full max-w-[732px] text-center leading-[25px] px-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.2, // reduced from 0.7
                ease: "easeOut",
                delay: 0.22 // reduced from 0.8
              }
            }
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
          volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
          justo pellentesque id sed. Id tellus id luctus id. At quis nunc
          libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
          nulla quam.
        </motion.p>
        
        <motion.p 
          className="relative z-10 mt-4 md:mt-[-5px] -mb-10 w-full max-w-[732px] text-center leading-[25px] px-2 max-md:mb-2.5"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.2, // reduced from 0.7
                ease: "easeOut",
                delay: 0.28 // reduced from 1.0
              }
            }
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in tincidunt pellentesque
          cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
          Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
          pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </motion.p>
        
        {/* Optional animated floating elements for visual interest */}
        <motion.div 
          className="absolute bottom-10 left-10 w-6 h-6 rounded-full bg-white/20 hidden sm:block"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.2, // reduced from 3
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-4 h-4 rounded-full bg-white/20 hidden sm:block"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1, // reduced from 2.5
            ease: "easeInOut",
            delay: 0.2 // reduced from 0.5
          }}
        />
      </div>
    </motion.section>
  );
}

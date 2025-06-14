"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PromoBanner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.3, // Trigger when 30% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren", // Ensure parent animates before children
        staggerChildren: 0.1 // Stagger children animations
      }
    }
  };

  const backgroundVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
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
        damping: 15,
        delay: 0.4
      }
    }
  };

  // Split heading text into words for staggered animation
  const headingText = "dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing";
  const words = headingText.split(" ");

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + (custom * 0.05),
        duration: 0.3
      }
    })
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f0f0f0",
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.25)",
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

  // Particles variants
  const particleVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: { delay: number; opacity: number }) => ({
      opacity: custom.opacity,
      scale: 1,
      transition: {
        delay: custom.delay,
        duration: 0.8
      }
    })
  };

  // Particles data for more decorative elements
  const particles = [
    { top: '15%', left: '10%', size: 3, delay: 0.3, opacity: 0.6, duration: 3.5 },
    { top: '25%', left: '20%', size: 2, delay: 0.7, opacity: 0.4, duration: 4 },
    { top: '10%', right: '15%', size: 4, delay: 0.5, opacity: 0.7, duration: 3 },
    { top: '40%', right: '25%', size: 2, delay: 0.9, opacity: 0.5, duration: 4.5 },
    { bottom: '30%', left: '15%', size: 3, delay: 0.4, opacity: 0.6, duration: 3.2 },
    { bottom: '20%', right: '10%', size: 2, delay: 0.6, opacity: 0.4, duration: 4.2 },
    { top: '50%', left: '40%', size: 1, delay: 1.0, opacity: 0.3, duration: 3.7 },
    { bottom: '40%', right: '35%', size: 2, delay: 0.8, opacity: 0.5, duration: 3.8 }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col w-full min-h-[603px] px-[68px] pt-[42px] pb-60 mt-[117px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        variants={backgroundVariants}
        animate={isInView ? {
          scale: [1, 1.02, 1],
          transition: {
            scale: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }
          }
        } : {}}
      >
        <Image
          src="/promo-banner.png"
          fill
          className="object-cover"
          alt="section background"
        />
        
        {/* Enhanced overlay with subtle pulsing effect */}
        <motion.div 
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={isInView ? { 
            opacity: [0.25, 0.35, 0.25],
            transition: {
              opacity: {
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut"
              }
            }
          } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
      
      <motion.div 
        className="relative gap-2.5 min-h-[60px] w-[156px] overflow-hidden px-[25px] whitespace-nowrap bg-[rgba(219,219,219,1)] text-[32px] font-extrabold tracking-[-0.64px] text-black max-md:px-5 z-10"
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
        className="relative self-center mt-[65px] -mb-12 w-[812px] text-center text-[42px] font-bold uppercase tracking-[-0.84px] text-white max-md:max-w-full max-md:mt-10 max-md:mb-2.5 z-10"
        variants={headingVariants}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
      
      {/* Enhanced call-to-action button */}
      <motion.div
        className="relative self-center mt-24 z-10"
        variants={buttonVariants}
      >
        <motion.button
          className="bg-white text-black font-bold py-3 px-8 rounded-lg shadow-lg"
          whileHover="hover"
          whileTap="tap"
        >
          Get Started
        </motion.button>
      </motion.div>
      
      {/* Enhanced decorative particles with different animations */}
      {particles.map((particle, index) => (
        <motion.div 
          key={index}
          className="absolute rounded-full bg-white z-10"
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
            bottom: particle.bottom,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          variants={particleVariants}
          custom={{ delay: particle.delay, opacity: particle.opacity }}
          animate={isInView ? { 
            y: [0, -15, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            transition: { 
              repeat: Infinity,
              duration: particle.duration,
              ease: "easeInOut"
            }
          } : {}}
        />
      ))}
      
      {/* Additional light ray effects */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 0.15,
            transition: { delay: 0.5, duration: 1.2 }
          }
        }}
        animate={isInView ? {
          opacity: [0.15, 0.3, 0.15],
          transition: {
            opacity: {
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut"
            }
          }
        } : {}}
        className="absolute top-0 left-1/4 w-[2px] h-full bg-white transform -rotate-12 z-5"
      />
      
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 0.1,
            transition: { delay: 0.8, duration: 1.2 }
          }
        }}
        animate={isInView ? {
          opacity: [0.1, 0.25, 0.1],
          transition: {
            opacity: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              delay: 1.5
            }
          }
        } : {}}
        className="absolute top-0 right-1/3 w-[3px] h-full bg-white transform rotate-15 z-5"
      />
      
      {/* Subtle light fog effect at the bottom */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 0.2,
            y: 0,
            transition: { delay: 1.2, duration: 1.5 }
          }
        }}
        animate={isInView ? {
          y: [0, -15, 0],
          opacity: [0.2, 0.3, 0.2],
          transition: {
            y: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            },
            opacity: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              delay: 0.5
            }
          }
        } : {}}
        className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent"
      />
    </motion.section>
  );
}
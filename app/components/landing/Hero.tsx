"use client";

import React, { useState } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Hero component for the landing page
export function Hero() {
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow animation to repeat
    amount: 0.3, // Trigger when 30% of component is visible
    margin: "0px 0px -100px 0px" // Start animation slightly before component comes into view
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.5, 
        duration: 0.8 
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="w-full pl-20 max-h-screen max-md:max-w-full max-md:pl-5"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <motion.div 
            className="w-[54%] max-md:w-full max-md:ml-0"
            variants={containerVariants}
          >
            <div className="z-10 flex mr-[-165px] w-full flex-col mt-5 max-md:max-w-full">
              <motion.h1 
                className="heading text-[64px] leading-[70px] tracking-[-1.28px] w-[528px] mt-[213px] text-text-primary max-md:max-w-full max-md:text-[40px] max-md:leading-[48px] max-md:mt-10"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet
              </motion.h1>
              <motion.p 
                className="text-text-primary text-lg font-normal leading-[25px] w-[646px] mt-5 max-md:max-w-full"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
                quis elit sociis. Sed mi rhoncus id habitant. In urna tellus
                nisi platea morbi libero imperdiet neque. Justo suspendisse
                tristique posuere quis eget viverra. Nunc euismod ultrices
                etiam nulla habitasse.
              </motion.p>
              <motion.form 
                onSubmit={handleSubmit} 
                className="flex items-center gap-2 text-[15px] text-white font-bold whitespace-nowrap mt-[60px] max-md:max-w-full max-md:mt-10"
                variants={itemVariants}
              >
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border self-stretch flex min-w-60 w-[324px] shrink-0 h-[47px] my-auto rounded-md border-[rgba(195,195,195,1)] border-solid px-4 text-black"
                  placeholder="Enter your email"
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
                />
                <motion.button
                  type="submit"
                  className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] btn-primary self-stretch flex min-h-[47px] gap-2.5 overflow-hidden my-auto pl-6 pr-[23px] py-[15px] rounded-[5px] max-md:px-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="self-stretch my-auto">Submit</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative aspect-[1.13] w-[17px] self-stretch shrink-0 my-auto"
                  >
                    <Image
                      src="/arrow-right-1.svg"
                      alt="submit"
                      fill
                      sizes="17px"
                      className="object-contain"
                    />
                  </motion.div>
                </motion.button>
              </motion.form>
              <motion.div 
                className="flex items-center gap-3 mt-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-[rgba(21,90,218,1)] self-stretch flex min-h-[29px] flex-col overflow-hidden items-center justify-center w-[30px] h-[30px] my-auto px-2 rounded-[50px] relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/credit-card-check.svg"
                    alt="check"
                    fill
                    sizes="30px"
                    className="object-contain"
                  />
                </motion.div>
                <div className="text-text-primary text-[15px] font-medium leading-loose self-stretch my-auto">
                  No credit card required!
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="w-[46%] ml-5 max-md:w-full max-md:ml-0"
            variants={containerVariants}
          >
            <div className="flex flex-col relative min-h-[831px] w-full text-[15px] text-black font-bold pt-0 pb-[762px] px-[70px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
              <motion.div
                className="absolute w-full h-full inset-0 top-0 left-0"
                variants={imageVariants}
              >
                <Image
                  src="/Hero.png"
                  alt="hero background"
                  width={1000}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover h-[100vh] w-full"
                />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[18%] bg-transparent" 
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)',
                  backdropFilter: 'blur(3px)'
                }}
                variants={overlayVariants}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

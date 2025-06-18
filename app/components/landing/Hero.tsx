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
    once: false, 
    amount: 0.3, 
    margin: "0px 0px -100px 0px" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  // Animation variants with reduced delays
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1, // reduced from 0.3
        staggerChildren: 0.08 // reduced from 0.2
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
        duration: 0.3 // reduced from 0.6
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, // reduced from 0.8
        ease: "easeOut" 
      }
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.15, // reduced from 0.5
        duration: 0.3 // reduced from 0.8
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="w-full px-0 sm:px-6 md:px-8 lg:pl-20 lg:pr-0 max-h-screen min-h-screen lg:min-h-screen xs:min-h-0 sm:min-h-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
          <motion.div 
            className="w-full md:w-1/2 lg:w-[54%] order-2 md:order-1 px-4 sm:px-4 md:px-0"
            variants={containerVariants}
          >
            <div className="z-10 flex flex-col mt-8 md:mt-12 lg:mt-[213px] px-2 sm:px-4 md:px-0 lg:mr-[-5%] xl:mr-[-10%]">
              <motion.h1 
                className="heading text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] tracking-[-1px] lg:tracking-[-1.28px] w-full text-text-primary"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet
              </motion.h1>
              <motion.p 
                className="text-text-primary text-base sm:text-lg font-normal leading-relaxed sm:leading-[25px] w-full mt-3 sm:mt-5"
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
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-[15px] text-white font-bold mt-8 lg:mt-[60px]"
                variants={itemVariants}
              >
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border flex w-full sm:w-[324px] h-[47px] rounded-md border-[rgba(195,195,195,1)] border-solid px-4 text-black"
                  placeholder="Enter your email"
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
                />
                <motion.button
                  type="submit"
                  className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] btn-primary flex min-h-[47px] gap-2.5 overflow-hidden pl-6 pr-[23px] py-[15px] rounded-[5px]"
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
                  className="bg-[rgba(21,90,218,1)] flex min-h-[29px] flex-col overflow-hidden items-center justify-center w-[30px] h-[30px] my-auto px-2 rounded-[50px] relative"
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
                <div className="text-text-primary text-[15px] font-medium leading-loose">
                  No credit card required!
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 lg:w-[46%] md:absolute md:right-0 order-1 md:order-2"
            variants={containerVariants}
          >
            <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[831px] overflow-hidden">
              <motion.div
                className="absolute w-full h-full inset-0"
                variants={imageVariants}
              >
                <Image
                  src="/Hero.png"
                  alt="hero background"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 46vw"
                  className="object-cover object-top"
                  style={{ objectPosition: '0 20%' }}
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

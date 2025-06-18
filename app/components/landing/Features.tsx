"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureItem {
  image: string;
  text: string;
}

export function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.3,
    margin: "0px 0px -50px 0px"
  });
  
  const features: FeatureItem[] = [
    {
      image: "/feature-1.png",
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat."
    },
    {
      image: "/feature-2.png",
      text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."
    },
    {
      image: "/feature-3.png",
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt."
    }
  ];

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

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2, // reduced from 0.6
        ease: "easeOut"
      }
    }
  };

  const featureListVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // reduced from 0.2
        delayChildren: 0.08 // reduced from 0.3
      }
    }
  };

  const featureItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const illustrationVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3, // reduced from 0.8
        ease: "easeOut",
        delay: 0.08 // reduced from 0.3
      }
    }
  };

  const gradientVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "95%",
      transition: {
        duration: 0.4, // reduced from 1.2
        ease: "easeOut",
        delay: 0.1 // reduced from 0.5
      }
    }
  };

  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2, // reduced from 0.6
        ease: "easeOut",
        delay: 0.12 // reduced from 0.7
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col items-stretch w-[95%] sm:w-[90%] mx-auto mt-16 sm:mt-[162px] pt-6 sm:pt-10 pb-5 px-4 sm:px-[39px] overflow-hidden border border-solid border-neutral-300 shadow-[0px_8px_30px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.60)]"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-6/12">
            <div className="w-full mt-4 sm:mt-0">
              <motion.div 
                className="w-full"
                variants={textVariants}
              >
                <motion.h2 
                  className="subheading-lg text-xl sm:text-2xl w-full"
                  variants={textVariants}
                >
                  Lorem ipsum dolor sit
                </motion.h2>
                <motion.h3 
                  className="heading uppercase mt-3 sm:mt-5 text-2xl sm:text-3xl"
                  variants={textVariants}
                >
                  Lorem ipsum dolor sit amet
                </motion.h3>
                <motion.p 
                  className="mt-3 sm:mt-5 text-base sm:text-lg font-normal leading-[25px] text-text-primary"
                  variants={textVariants}
                >
                  Lorem ipsum dolor sit amet consectetur. Amet sodales
                  sociis facilisis donec dui. Mi porttitor ut aliquam mattis
                  maecenas eget integer in nam. Non nisl iaculis at felis
                  aliquet. Hendrerit tellus at purus lectus.
                </motion.p>
              </motion.div>
              <motion.div 
                className="w-full mt-8 sm:mt-[50px]"
                variants={featureListVariants}
              >
                {features.map((feature, index) => (
                  <motion.article 
                    key={index} 
                    className="w-full mt-4 sm:mt-6 px-3 sm:pr-[49px] py-3 overflow-hidden bg-white first:mt-0 rounded-lg"
                    variants={featureItemVariants}
                    whileHover={{ 
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                      y: -5,
                      backgroundColor: "rgba(248, 250, 252, 0.8)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 p-2 sm:p-4">
                      <div className="w-full sm:w-[27%] flex justify-center sm:justify-start">
                        <motion.div 
                          className="relative w-[100px] sm:w-[139px] aspect-[0.99]"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <Image
                            src={feature.image}
                            fill
                            className="object-contain"
                            alt={`Feature ${index + 1}`}
                          />
                        </motion.div>
                      </div>
                      <div className="w-full sm:w-[73%]">
                        <p className="text-center sm:text-left text-base sm:text-lg font-normal leading-[25px] text-black">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-full md:w-6/12 mt-8 md:mt-0">
            <motion.div 
              className="relative w-full aspect-[0.78] max-h-[550px]"
              variants={illustrationVariants}
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
            >
              <Image
                src="/feature-illustration.png"
                fill
                className="object-contain"
                alt="Features illustration"
              />
              
              {/* Decorative floating elements */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.6, 
                    scale: 1,
                    transition: { delay: 0.15, duration: 0.2 } // reduced
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
                className="absolute top-[10%] right-[10%] w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-blue-200"
              />
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.4, 
                    scale: 1,
                    transition: { delay: 0.18, duration: 0.2 } // reduced
                  }
                }}
                animate={isInView ? {
                  y: [0, 8, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }
                } : {}}
                className="absolute bottom-[20%] left-[5%] w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-green-200"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 sm:mt-5 mb-12 sm:mb-16 text-[15px]"
        variants={buttonContainerVariants}
      >
        <motion.button 
          className="flex items-center justify-center w-full sm:w-auto gap-2.5 min-h-[38px] px-4 sm:pl-6 sm:pr-[23px] py-2.5 overflow-hidden rounded-[5px] btn-primary shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="self-stretch my-auto">Loerum Ipsum</span>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/arrow-right-1.svg"
              width={17}
              height={14}
              className="self-stretch shrink-0 my-auto"
              alt="arrow"
            />
          </motion.div>
        </motion.button>
        <motion.div 
          className="flex items-center justify-center w-full sm:w-auto gap-2 my-auto whitespace-nowrap link-secondary"
          whileHover={{ 
            scale: 1.05,
            color: "#1959AC"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="/phone.svg"
              width={24}
              height={24}
              className="self-stretch shrink-0 my-auto"
              alt="phone"
            />
          </motion.div>
          <span className="self-stretch my-auto">123456789</span>
        </motion.div>
      </motion.div>
      
      {/* Gradient bar with specific color stops */}
      <motion.div 
        className="absolute bottom-0 left-0 h-3 sm:h-4" 
        style={{
          background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
        }}
        variants={gradientVariants}
      />
    </motion.section>
  );
}

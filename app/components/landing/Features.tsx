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
    once: false, // Allow animation to repeat
    amount: 0.3, // Trigger when 30% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
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

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureListVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
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
        delay: 0.5
      }
    }
  };

  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.7
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col items-stretch w-[90%] mx-auto mt-[162px] pt-10 pb-5 px-[39px] overflow-hidden border border-solid border-neutral-300 shadow-[0px_8px_30px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.60)] max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-[33px]">
              <motion.div 
                className="max-md:max-w-full"
                variants={textVariants}
              >
                <motion.h2 
                  className="subheading-lg max-md:max-w-full"
                  variants={textVariants}
                >
                  Lorem ipsum dolor sit
                </motion.h2>
                <motion.h3 
                  className="heading uppercase mt-5"
                  variants={textVariants}
                >
                  Lorem ipsum dolor sit amet
                </motion.h3>
                <motion.p 
                  className="mt-5 text-lg font-normal leading-[25px] text-text-primary max-md:max-w-full"
                  variants={textVariants}
                >
                  Lorem ipsum dolor sit amet consectetur. Amet sodales
                  sociis facilisis donec dui. Mi porttitor ut aliquam mattis
                  maecenas eget integer in nam. Non nisl iaculis at felis
                  aliquet. Hendrerit tellus at purus lectus.
                </motion.p>
              </motion.div>
              <motion.div 
                className="w-full mt-[50px] max-md:max-w-full max-md:mt-10"
                variants={featureListVariants}
              >
                {features.map((feature, index) => (
                  <motion.article 
                    key={index} 
                    className="w-full mt-6 pr-[49px] overflow-hidden bg-white first:mt-0 max-md:max-w-full max-md:pr-5 rounded-lg"
                    variants={featureItemVariants}
                    whileHover={{ 
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                      y: -5,
                      backgroundColor: "rgba(248, 250, 252, 0.8)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch p-4">
                      <div className="w-[27%] max-md:w-full max-md:ml-0">
                        <motion.div 
                          className="relative w-[139px] aspect-[0.99] max-w-full grow shrink-0 max-md:mt-[30px]"
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
                      <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
                        <p className="my-auto text-lg font-normal leading-[25px] text-black self-stretch max-md:mt-10">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <motion.div 
              className="relative w-full mt-5 aspect-[0.78] max-md:max-w-full max-md:mt-10"
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
              
              {/* Decorative floating elements around the illustration */}
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
                className="absolute top-[10%] right-[10%] w-8 h-8 rounded-full bg-blue-200"
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
                className="absolute bottom-[20%] left-[5%] w-6 h-6 rounded-full bg-green-200"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="flex items-center gap-5 mt-5 mb-16 text-[15px]"
        variants={buttonContainerVariants}
      >
        <motion.button 
          className="flex items-center justify-center self-stretch gap-2.5 my-auto min-h-[38px] pl-6 pr-[23px] py-2.5 overflow-hidden rounded-[5px] btn-primary shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] max-md:px-5"
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
          className="flex items-center self-stretch gap-2 my-auto whitespace-nowrap link-secondary"
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
        className="absolute bottom-0 left-0 h-4" 
        style={{
          background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
        }}
        variants={gradientVariants}
      />
    </motion.section>
  );
}

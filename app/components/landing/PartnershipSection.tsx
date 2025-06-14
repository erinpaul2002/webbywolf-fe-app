"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PartnershipSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
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
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15
      }
    }
  };

  const storeButtonVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  const phoneVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const screenVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 15,
        delay: 0.5
      }
    }
  };

  // New decorative elements variants
  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.15, 
      scale: 1,
      transition: {
        duration: 0.8,
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
      className="relative mt-[158px] overflow-hidden pl-20 bg-[rgba(243,243,243,1)] max-md:max-w-full max-md:mt-10 max-md:pl-5"
    >
      {/* Decorative elements with continuous animations when in view */}
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, -15, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }
          }
        } : {}}
        className="absolute top-40 right-20 w-48 h-48 rounded-full bg-blue-200 opacity-5 blur-xl -z-10"
      />
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, 10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1
            }
          }
        } : {}}
        className="absolute bottom-20 left-40 w-36 h-36 rounded-full bg-green-200 opacity-5 blur-xl -z-10"
      />

      <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
        <div className="w-[35%] max-md:w-full max-md:ml-0">
          <motion.div 
            className="z-10 flex w-full flex-col items-stretch self-stretch my-auto mr-[-130px] max-md:max-w-full max-md:mt-10"
          >
            <div className="max-md:max-w-full">
              <motion.h2 
                variants={textVariants}
                className="text-2xl font-semibold tracking-[-0.96px] text-[#0546D2] max-md:max-w-full"
              >
                Lorem Ipsum
              </motion.h2>
              <motion.h3 
                variants={textVariants}
                className="mt-5 text-[42px] font-extrabold tracking-[-0.84px] text-black"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 }
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
                      transition: { delay: 0.4, duration: 0.5 }
                    }
                  }}
                >
                  dolor sit amet
                </motion.span>
              </motion.h3>
              <motion.p 
                variants={textVariants}
                className="mt-5 text-lg font-normal leading-[25px] text-black max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
                morbi suspendisse convallis. Urna a urna lectus donec felis
                risus duis pellentesque. Pellentesque ultricies ipsum.
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center gap-6 mt-[66px] max-md:mt-10"
            >
              <motion.div 
                variants={storeButtonVariants}
                whileHover="hover"
                className="relative self-stretch w-[140px] aspect-[3.33] my-auto shrink-0 cursor-pointer rounded-lg overflow-hidden"
              >
                <Image
                  src="/playstore.png"
                  fill
                  className="object-contain"
                  alt="Google Play Store"
                />
              </motion.div>
              <motion.div 
                variants={storeButtonVariants}
                whileHover="hover"
                transition={{ delay: 0.1 }}
                className="relative self-stretch w-[140px] aspect-[3.41] my-auto shrink-0 cursor-pointer rounded-lg overflow-hidden"
              >
                <Image
                  src="/appstore.png"
                  fill
                  className="object-contain"
                  alt="Apple App Store"
                />
              </motion.div>
            </motion.div>

            {/* Additional subtle text animation */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 0.7, 
                  y: 0,
                  transition: {
                    type: "spring" as const,
                    stiffness: 70,
                    damping: 15,
                    delay: 0.9
                  }
                }
              }}
              className="mt-6 text-sm text-gray-600 italic"
            >
              Available on all major platforms
            </motion.p>
          </motion.div>
        </div>
        <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
          <motion.div 
            className="relative flex flex-col min-h-[530px] grow max-md:max-w-full"
          >
            <motion.div 
              variants={phoneVariants}
              animate={isInView ? {
                y: [0, -10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }
              } : {}}
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src="/hand-phone.png"
                fill
                className="object-cover"
                alt="Hand holding phone"
              />
            </motion.div>
            <motion.div 
              variants={screenVariants}
              animate={isInView ? {
                scale: [1, 1.02, 1],
                transition: {
                  scale: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }
              } : {}}
              className="relative w-full aspect-[1.82] max-md:max-w-full"
            >
              <Image
                src="/screen.png"
                fill
                className="object-contain"
                alt="App screen"
              />
            </motion.div>

            {/* Additional floating UI elements around the phone */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20, y: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring" as const,
                    stiffness: 50,
                    damping: 15,
                    delay: 0.8
                  }
                }
              }}
              animate={isInView ? {
                y: [0, -5, 0],
                x: [0, 3, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut"
                  },
                  x: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }
              } : {}}
              className="absolute top-[15%] right-[15%] w-16 h-16 bg-white rounded-xl shadow-lg"
              style={{
                backgroundImage: "url('/notification-icon.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20, y: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring" as const,
                    stiffness: 50,
                    damping: 15,
                    delay: 1
                  }
                }
              }}
              animate={isInView ? {
                y: [0, 7, 0],
                x: [0, -5, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.7
                  },
                  x: {
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut"
                  }
                }
              } : {}}
              className="absolute bottom-[25%] left-[20%] w-12 h-12 bg-white rounded-full shadow-lg"
              style={{
                backgroundImage: "url('/message-icon.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Subtle gradient overlay at the bottom */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 0.4,
            transition: {
              duration: 1.2,
              delay: 0.8
            }
          }
        }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"
      />
    </motion.section>
  );
}
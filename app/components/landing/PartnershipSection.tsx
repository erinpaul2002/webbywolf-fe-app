"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PartnershipSection() {
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
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.1
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
        delay: 0.07 // reduced from 0.4
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
        duration: 0.2, // reduced from 1
        ease: "easeOut",
        delay: 0.05 // reduced from 0.2
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
        delay: 0.09 // reduced from 0.5
      }
    }
  };

  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.15, 
      scale: 1,
      transition: {
        duration: 0.2, // reduced from 0.8
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
      className="relative py-16 md:py-24 overflow-hidden px-4 md:pl-20 bg-[rgba(243,243,243,1)]"
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
        className="absolute top-40 right-20 w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue-200 opacity-5 blur-xl -z-10"
      />
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, 10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 1, // reduced from 5
              ease: "easeInOut",
              delay: 0.2 // reduced from 1
            }
          }
        } : {}}
        className="absolute bottom-20 left-20 md:left-40 w-24 h-24 md:w-36 md:h-36 rounded-full bg-green-200 opacity-5 blur-xl -z-10"
      />

      <div className="flex flex-col md:flex-row gap-8 md:gap-5">
        <div className="w-full md:w-[40%] lg:w-[35%] order-2 md:order-1">
          <motion.div 
            className="z-10 flex w-full flex-col items-stretch self-stretch md:my-auto md:mr-0 lg:mr-[-50px] xl:mr-[-130px]"
          >
            <div>
              <motion.h2 
                variants={textVariants}
                className="text-xl md:text-2xl font-semibold tracking-[-0.96px] text-[#0546D2]"
              >
                Lorem Ipsum
              </motion.h2>
              <motion.h3 
                variants={textVariants}
                className="mt-3 md:mt-5 text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-[-0.84px] text-black"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.07, duration: 0.15 } // reduced
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
                      transition: { delay: 0.14, duration: 0.15 } // reduced
                    }
                  }}
                >
                  dolor sit amet
                </motion.span>
              </motion.h3>
              <motion.p 
                variants={textVariants}
                className="mt-3 md:mt-5 text-base md:text-lg font-normal leading-relaxed md:leading-[25px] text-black"
              >
                Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
                morbi suspendisse convallis. Urna a urna lectus donec felis
                risus duis pellentesque. Pellentesque ultricies ipsum.
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-[66px]"
            >
              <motion.div 
                variants={storeButtonVariants}
                whileHover="hover"
                className="relative self-stretch w-[120px] md:w-[140px] aspect-[3.33] my-auto shrink-0 cursor-pointer rounded-lg overflow-hidden"
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
                className="relative self-stretch w-[120px] md:w-[140px] aspect-[3.41] my-auto shrink-0 cursor-pointer rounded-lg overflow-hidden"
              >
                <Image
                  src="/appstore.png"
                  fill
                  className="object-contain"
                  alt="Apple App Store"
                />
              </motion.div>
            </motion.div>

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
              className="mt-4 md:mt-6 text-sm text-gray-600 italic"
            >
              Available on all major platforms
            </motion.p>
          </motion.div>
        </div>
        
        <div className="w-full md:w-[60%] lg:w-[65%] order-1 md:order-2">
          <motion.div 
            className="relative flex flex-col h-[350px] sm:h-[400px] md:h-[450px] lg:min-h-[530px] grow"
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
                className="object-contain md:object-cover"
                alt="Hand holding phone"
              />
            </motion.div>

            {/* App screen - hidden on mobile */}
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
              className="relative w-full aspect-[1.82] hidden md:block"
            >
              <Image
                src="/screen.png"
                fill
                className="object-contain"
                alt="App screen"
              />
            </motion.div>

            {/* Floating UI elements - hidden on smaller screens */}
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
                    delay: 0.18 // reduced from 0.8
                  }
                }
              }}
              animate={isInView ? {
                y: [0, -5, 0],
                x: [0, 3, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 0.7, // reduced from 2.5
                    ease: "easeInOut"
                  },
                  x: {
                    repeat: Infinity,
                    duration: 1, // reduced from 3
                    ease: "easeInOut",
                    delay: 0.12 // reduced from 0.5
                  }
                }
              } : {}}
              className="hidden md:block absolute top-[15%] right-[15%] w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl shadow-lg"
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
                    delay: 0.22 // reduced from 1
                  }
                }
              }}
              animate={isInView ? {
                y: [0, 7, 0],
                x: [0, -5, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 1, // reduced from 3
                    ease: "easeInOut",
                    delay: 0.12 // reduced from 0.7
                  },
                  x: {
                    repeat: Infinity,
                    duration: 1.2, // reduced from 3.5
                    ease: "easeInOut"
                  }
                }
              } : {}}
              className="hidden md:block absolute bottom-[25%] left-[20%] w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg"
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
              duration: 0.2, // reduced from 1.2
              delay: 0.12 // reduced from 0.8
            }
          }
        }}
        className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-blue-50 to-transparent"
      />
    </motion.section>
  );
}
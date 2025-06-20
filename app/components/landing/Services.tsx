"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServicePoint {
  text: string;
  description: string;
}

export function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  const servicePoints: ServicePoint[] = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor."
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

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
        delay: 0.08 // reduced from 0.2
      }
    }
  };

  const serviceListVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // reduced from 0.2
        delayChildren: 0.08 // reduced from 0.4
      }
    }
  };

  const serviceItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.07 * custom // reduced from 0.2 * custom
      }
    })
  };

  const illustrationVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 15,
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
        delay: 0.12 // reduced from 0.8
      }
    }
  };

  // New decorative elements variants
  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.05, 
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
      className="relative flex flex-col items-stretch w-full mt-[93px] px-4 sm:px-6 md:px-10 lg:pl-20 pt-[60px] bg-white max-md:mt-10 overflow-hidden"
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
        className="absolute top-40 right-5 sm:right-20 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-blue-100 opacity-5 blur-xl -z-10"
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
        className="absolute bottom-20 left-5 sm:left-40 w-20 sm:w-36 h-20 sm:h-36 rounded-full bg-green-100 opacity-5 blur-xl -z-10"
      />

      <div className="w-full">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="w-full md:w-[57%]">
            <div className="grow w-full">
              <motion.div 
                className="min-h-[250px] md:min-h-[342px] py-5 md:py-10 px-2 md:px-5 md:pr-10"
              >
                <motion.h2 
                  className="text-xl md:text-2xl font-semibold tracking-[-0.96px] text-[rgba(5,70,210,1)]"
                  variants={headingVariants}
                >
                  Lorem ipsum dolor sit amet
                </motion.h2>
                <motion.h3 
                  className="mt-4 md:mt-5 text-3xl md:text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(34,34,34,1)]"
                  variants={headingVariants}
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.3, duration: 0.6 }
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
                        transition: { delay: 0.5, duration: 0.6 }
                      }
                    }}
                  >
                    dolor sit amet consectetur. Eu elit.
                  </motion.span>
                </motion.h3>
                <motion.p 
                  className="mt-4 md:mt-5 text-base md:text-lg font-normal leading-[25px] text-black"
                  variants={headingVariants}
                >
                  Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper
                  etiam leo eleifend condimentum in vitae faucibus. Amet massa
                  malesuada sit pretium. Donec pharetra erat lacus suspendisse
                  ornare.
                </motion.p>
              </motion.div>
              <motion.div 
                className="w-full px-2 md:px-5 md:pr-10 py-5 md:py-10"
                variants={serviceListVariants}
              >
                {servicePoints.map((point, index) => (
                  <motion.article 
                    key={index} 
                    className="flex w-full flex-wrap gap-3 md:gap-4 mt-8 md:mt-10 first:mt-0"
                    variants={serviceItemVariants}
                    custom={index}
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "rgba(245, 247, 252, 0.5)",
                      borderRadius: "8px",
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    animate={isInView ? {
                      y: [0, index % 2 === 0 ? -3 : 3, 0],
                      transition: {
                        y: {
                          repeat: Infinity,
                          duration: 3 + index,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }
                      }
                    } : {}}
                  >
                    <motion.div 
                      className="relative w-7 md:w-9 aspect-[0.95] shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      animate={isInView ? {
                        rotate: [0, 5, 0, -5, 0],
                        transition: {
                          rotate: {
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut",
                            delay: index * 0.7
                          }
                        }
                      } : {}}
                    >
                      <Image
                        src="/services-icon.png"
                        fill
                        className="object-contain"
                        alt="check icon"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0 md:min-w-60 shrink basis-[0%]">
                      <motion.h4 
                        className="text-lg md:text-xl font-semibold tracking-[-0.4px] text-[#222]"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              type: "spring" as const,
                              stiffness: 70,
                              damping: 15,
                              delay: 0.5 + (index * 0.1)
                            }
                          }
                        }}
                      >
                        {point.text}
                      </motion.h4>
                      <motion.p 
                        className="mt-2 md:mt-[9px] text-base md:text-lg font-normal leading-[25px] text-black"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { 
                            opacity: 1,
                            transition: {
                              duration: 0.5,
                              delay: 0.7 + (index * 0.1)
                            }
                          }
                        }}
                      >
                        {point.description}
                      </motion.p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-full md:w-[43%] mt-10 md:mt-0 md:ml-5">
            <motion.div 
              className="relative w-full max-w-md mx-auto md:mx-0 aspect-[0.93]"
              variants={illustrationVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
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
            >
              <Image
                src="/services.png"
                fill
                className="object-contain"
                alt="Services illustration"
              />
              
              {/* Add subtle floating elements around the illustration */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.2, 
                    scale: 1,
                    transition: { delay: 0.15, duration: 0.2 } // reduced
                  }
                }}
                animate={isInView ? {
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    },
                    x: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }
                } : {}}
                className="absolute top-[20%] right-[10%] w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-300 opacity-40 blur-sm"
              />
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 0.15, 
                    scale: 1,
                    transition: { delay: 0.18, duration: 0.2 } // reduced
                  }
                }}
                animate={isInView ? {
                  y: [0, 8, 0],
                  x: [0, -5, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.2
                    },
                    x: {
                      repeat: Infinity,
                      duration: 4.5,
                      ease: "easeInOut"
                    }
                  }
                } : {}}
                className="absolute bottom-[25%] left-[15%] w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-green-300 opacity-40 blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-5 mt-10" />
      
      {/* Gradient bar with specific color stops - positioned at extreme right */}
      <motion.div 
        className="absolute bottom-0 right-0 h-3 md:h-4" 
        style={{
          background: 'linear-gradient(to right, #043898 0%, #079902 50%, #170041 100%)'
        }}
        variants={gradientVariants}
      />
      
      {/* Additional subtle decorative element */}
      <motion.div
        variants={{
          hidden: { opacity: 0, width: 0 },
          visible: { 
            opacity: 0.05, 
            width: "50%",
            transition: {
              width: { delay: 0.2, duration: 0.2 }, // reduced
              opacity: { delay: 0.2, duration: 0.2 } // reduced
            }
          }
        }}
        className="absolute left-0 top-[25%] h-[1px] bg-gradient-to-r from-blue-500 to-transparent"
      />
    </motion.section>
  );
}

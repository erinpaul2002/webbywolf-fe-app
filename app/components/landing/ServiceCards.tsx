"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCard {
  image: string;
  title: string;
}

export function ServiceCards() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });
  
  const cards: ServiceCard[] = [
    { image: "/service-card-1.png", title: "Lorem ipsum dolor sit amet consectetur." },
    { image: "/service-card-2.png", title: "Lorem ipsum dolor sit amet consectetur." },
    { image: "/service-card-3.png", title: "Lorem ipsum dolor sit amet consectetur." },
    { image: "/service-card-4.png", title: "Lorem ipsum dolor sit amet consectetur." }
  ];

  // Animation variants (reduced delays/durations)
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3, // reduced from 0.8
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.1
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
        delayChildren: 0.07, // reduced from 0.2
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

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.08, // reduced from 0.4
        staggerChildren: 0.07 // reduced from 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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

  const backgroundVariants: Variants = {
    hidden: { opacity: 0.3 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5, // reduced from 1.5
        ease: "easeOut"
      }
    }
  };

  const cardContentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.09, // reduced from 0.3
        duration: 0.15 // reduced from 0.5
      }
    }
  };

  const underlineVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        delay: 0.12, // reduced from 0.6
        duration: 0.12 // reduced from 0.4
      }
    },
    hover: {
      scaleX: 1.1,
      transition: { duration: 0.2 }
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
      className="relative flex flex-col items-center w-full min-h-[1726px] px-20 pt-[237px] pb-11 max-md:max-w-full max-md:pt-[100px] max-md:px-5"
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        variants={backgroundVariants}
        animate={isInView ? {
          opacity: [1, 0.9, 1],
          scale: [1, 1.02, 1],
          transition: {
            opacity: {
              repeat: Infinity,
              duration: 2, // reduced from 8
              ease: "easeInOut"
            },
            scale: {
              repeat: Infinity,
              duration: 3, // reduced from 12
              ease: "easeInOut"
            }
          }
        } : {}}
      >
        <Image
          src="/line-7.png"
          fill
          className="object-cover"
          alt="section background"
        />
      </motion.div>
      
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
        className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full bg-blue-200 opacity-5 blur-xl -z-10"
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
        className="absolute bottom-[30%] left-[10%] w-36 h-36 rounded-full bg-green-200 opacity-5 blur-xl -z-10"
      />
      
      <motion.div 
        className="relative w-[739px] max-w-full"
        variants={headingVariants}
      >
        <motion.h2 
          className="text-2xl font-semibold tracking-[-0.96px] text-[rgba(5,70,210,1)] max-md:max-w-full"
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet
        </motion.h2>
        <motion.h3 
          className="mt-5 text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(34,34,34,1)] max-md:max-w-full"
          variants={textVariants}
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
            LOREM IPSUM{" "}
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
            dolor sit
          </motion.span>
        </motion.h3>
        <motion.p 
          className="mt-5 text-lg font-normal leading-[25px] text-black max-md:max-w-full"
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
          facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
          integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
          at purus lectus.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="relative mt-[70px] w-[952px] max-w-full max-md:mt-10"
        variants={cardsContainerVariants}
      >
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
          {cards.slice(0, 2).map((card, index) => (
            <motion.article 
              key={index} 
              className="w-6/12 max-md:w-full max-md:ml-0"
              variants={cardVariants}
              custom={index}
            >
              <motion.div 
                className="relative w-full overflow-hidden grow pt-px pb-[81px] px-0.5 rounded-xl border border-solid border-[rgba(241,240,240,1)] bg-white max-md:max-w-full max-md:mt-10"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                animate={isInView ? {
                  y: [0, -5, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 5 + index,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }
                } : {}}
              >
                <motion.div 
                  className="relative w-full aspect-[2.16] max-md:max-w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={card.image}
                    fill
                    className="object-contain"
                    alt={card.title}
                  />
                </motion.div>
                <div className="flex flex-col items-stretch justify-center mt-[27px] ml-[15px] mr-4 max-md:mx-2.5">
                  <div className="w-full">
                    <motion.h4 
                      className="text-xl font-semibold tracking-[-0.4px] text-[#222]"
                      variants={cardContentVariants}
                    >
                      {card.title}
                    </motion.h4>
                    <motion.p 
                      className="mt-4 text-lg font-normal leading-[25px] text-black"
                      variants={cardContentVariants}
                      transition={{ delay: 0.4 }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Nunc gravida
                      consequat faucibus cursus nisi. Nunc montes molestie a
                      vitae vulputate. Phasellus in pulvinar et vitae. Mi eget
                      lectus nec et. Libero iaculis diam nam mauris a eget. Quam
                      nibh rhoncus rhoncus enim venenatis bibendum.
                    </motion.p>
                  </div>
                  <motion.div 
                    className="flex flex-col w-[82px] mt-[35px] text-base font-semibold tracking-[-0.64px] text-[rgba(5,70,210,1)]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.button className="text-left">Learn More</motion.button>
                    <motion.div 
                      className="w-full min-h-0 mt-1 border-2 border-solid border-[rgba(5,70,210,1)]"
                      variants={underlineVariants}
                      whileHover="hover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="relative mt-[58px] w-[952px] max-w-full max-md:mt-10"
        variants={cardsContainerVariants}
      >
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
          {cards.slice(2, 4).map((card, index) => (
            <motion.article 
              key={index + 2} 
              className="w-6/12 max-md:w-full max-md:ml-0"
              variants={cardVariants}
              custom={index + 2}
            >
              <motion.div 
                className="relative w-full overflow-hidden grow pt-px pb-[81px] px-0.5 rounded-xl border border-solid border-[rgba(241,240,240,1)] bg-white max-md:max-w-full max-md:mt-10"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                animate={isInView ? {
                  y: [0, -5, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 5 + index,
                      ease: "easeInOut",
                      delay: (index + 2) * 0.3
                    }
                  }
                } : {}}
              >
                <motion.div 
                  className="relative w-full aspect-[2.16] max-md:max-w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={card.image}
                    fill
                    className="object-contain"
                    alt={card.title}
                  />
                </motion.div>
                <div className="flex flex-col items-stretch justify-center mt-[27px] ml-[15px] mr-4 max-md:mx-2.5">
                  <div className="w-full">
                    <motion.h4 
                      className="text-xl font-semibold tracking-[-0.4px] text-[#222]"
                      variants={cardContentVariants}
                    >
                      {card.title}
                    </motion.h4>
                    <motion.p 
                      className="mt-4 text-lg font-normal leading-[25px] text-black"
                      variants={cardContentVariants}
                      transition={{ delay: 0.4 }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Nunc gravida
                      consequat faucibus cursus nisi. Nunc montes molestie a
                      vitae vulputate. Phasellus in pulvinar et vitae. Mi eget
                      lectus nec et. Libero iaculis diam nam mauris a eget. Quam
                      nibh rhoncus rhoncus enim venenatis bibendum.
                    </motion.p>
                  </div>
                  <motion.div 
                    className="flex flex-col w-[82px] mt-[35px] text-base font-semibold tracking-[-0.64px] text-[rgba(5,70,210,1)]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.button className="text-left">Learn More</motion.button>
                    <motion.div 
                      className="w-full min-h-0 mt-1 border-2 border-solid border-[rgba(5,70,210,1)]"
                      variants={underlineVariants}
                      whileHover="hover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>
      
      {/* Additional decorative elements */}
      <motion.div
        variants={{
          hidden: { opacity: 0, width: 0 },
          visible: { 
            opacity: 0.1, 
            width: "70%",
            transition: {
              width: { delay: 0.2, duration: 0.2 }, // reduced
              opacity: { delay: 0.2, duration: 0.2 } // reduced
            }
          }
        }}
        className="absolute bottom-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
    </motion.section>
  );
}

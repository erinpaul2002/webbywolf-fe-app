'use client';

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function StorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Changed to false to allow re-triggering on scroll
    amount: 0.2, 
    margin: "0px 0px -50px 0px" // Start animation slightly before section comes into view
  });
  const [activeSlide, setActiveSlide] = useState(1);
  
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
  
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };
  
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.2
      }
    }
  };
  
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.3
      }
    }
  };
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.5
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0px 30px 40px -15px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const buttonVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.7
      }
    },
    hover: { 
      x: 5,
      color: "#0546d2",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const arrowVariants: Variants = {
    hover: {
      x: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  const navIndicatorVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.8 + (custom * 0.05)
      }
    }),
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    },
    active: {
      width: "48px",
      backgroundColor: "rgba(25,89,172,1)",
      transition: {
        duration: 0.3
      }
    },
    inactive: {
      width: "12px",
      backgroundColor: "rgba(128,176,237,1)",
      transition: {
        duration: 0.3
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
        duration: 0.8,
        delay: 0.7
      }
    }
  };

  // New gradient variants
  const gradientVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative bg-white flex w-full flex-col items-stretch mt-[49px] p-20 max-md:max-w-full max-md:mt-10 max-md:px-5 overflow-hidden"
    >
      {/* Add decorative elements with continuous animations when in view */}
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
        className="absolute top-40 right-20 w-48 h-48 rounded-full bg-blue-100 opacity-5 blur-xl -z-10"
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
        className="absolute bottom-20 left-40 w-36 h-36 rounded-full bg-green-100 opacity-5 blur-xl -z-10"
      />
      
      <motion.div 
        className="w-full text-slate-900 text-center max-md:max-w-full"
      >
        <motion.h2 
          variants={headingVariants}
          className="text-slate-900 w-full text-[42px] font-bold uppercase tracking-[-0.84px] max-md:max-w-full"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Lorem ipsum{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            dolor sit amet
          </motion.span>
        </motion.h2>
        <motion.p 
          variants={paragraphVariants}
          className="text-slate-900 text-lg font-normal leading-[25px] mt-8 max-md:max-w-full"
        >
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis
          dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed
          ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut
          facilisi.
        </motion.p>
      </motion.div>
      
      <div className="flex w-full items-center gap-[-80px] flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
        <motion.div 
          variants={imageVariants}
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
          className="relative w-[680px] h-[412px] self-stretch min-w-60 my-auto max-md:max-w-full"
        >
          <Image
            src="/story-image-1.png"
            alt="story image"
            fill
            className="object-contain"
          />
          
          {/* Enhanced decorative floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { 
              opacity: 0.6, 
              scale: 1,
              y: [0, -10, 0],
              x: [0, 5, 0],
            } : { opacity: 0, scale: 0 }}
            transition={{ 
              opacity: { delay: 0.8, duration: 0.8 },
              scale: { delay: 0.8, duration: 0.8 },
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute top-[15%] left-[10%] w-8 h-8 rounded-full bg-blue-100"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { 
              opacity: 0.4, 
              scale: 1,
              y: [0, 10, 0],
              x: [0, -5, 0],
            } : { opacity: 0, scale: 0 }}
            transition={{ 
              opacity: { delay: 1, duration: 0.8 },
              scale: { delay: 1, duration: 0.8 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
              x: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
            }}
            className="absolute bottom-[20%] right-[15%] w-6 h-6 rounded-full bg-blue-200"
          />
        </motion.div>
        
        <motion.article 
          variants={cardVariants}
          whileHover="hover"
          animate={isInView ? {
            y: [0, -5, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }
            }
          } : {}}
          className="border border-[color:var(--Blue-Gray-200,#E2E8F0)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_0px_10px_0px_rgba(0,0,0,0.07)] self-stretch min-w-60 overflow-hidden flex-1 shrink basis-[0%] bg-white my-auto rounded-[5px] border-solid max-md:max-w-full"
        >
          <div className="w-full pt-12 pb-6 px-12 max-md:max-w-full max-md:px-5">
            <div className="w-full max-md:max-w-full">
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-slate-600 text-2xl font-semibold tracking-[1.44px] max-md:max-w-full"
              >
                Artist & Investor
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-slate-900 self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-lg font-normal leading-[25px] mt-4 max-md:max-w-full"
              >
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </motion.p>
            </div>
          </div>
          <div className="flex w-full gap-4 text-base text-[#1959AC] font-medium tracking-[0.5px] pb-6 px-12 max-md:max-w-full max-md:px-5">
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              className="flex items-center justify-center py-3 rounded-lg"
              animate={isInView ? {
                x: [0, 3, 0],
                transition: {
                  x: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1.5
                  }
                }
              } : {}}
            >
              <span className="self-stretch my-auto pr-4">
                Read Full Story
              </span>
              <motion.div 
                variants={arrowVariants}
                className="relative w-6 h-6 self-stretch shrink-0 my-auto"
                animate={isInView ? {
                  x: [0, 5, 0],
                  transition: {
                    x: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1.7
                    }
                  }
                } : {}}
              >
                <Image
                  src="/arrow-right.svg"
                  alt="arrow"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.article>
      </div>
      
      <motion.div 
        className="self-center flex gap-2 mt-20 max-md:mt-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            variants={navIndicatorVariants}
            custom={index}
            whileHover="hover"
            animate={[
              activeSlide === index ? "active" : "inactive",
              isInView ? "visible" : "hidden"
            ]}
            onClick={() => setActiveSlide(index)}
            className={`flex h-3 shrink-0 cursor-pointer rounded-[10px] transition-all duration-300`}
            style={{
              backgroundColor: activeSlide === index ? "rgba(25,89,172,1)" : "rgba(128,176,237,1)",
              width: activeSlide === index ? "48px" : "12px"
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced animated gradient line */}
      <motion.div
        variants={gradientVariants}
        className="self-center mt-12 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        style={{ maxWidth: "200px", opacity: 0.5 }}
      />
      
      {/* Add subtle floating accent line */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={isInView ? { 
          opacity: 0.05, 
          width: "40%",
          x: [0, 10, 0],
          transition: {
            width: { delay: 1.2, duration: 1 },
            opacity: { delay: 1.2, duration: 0.8 },
            x: { repeat: Infinity, duration: 5, ease: "easeInOut" }
          }
        } : { opacity: 0, width: 0 }}
        className="absolute right-0 top-[30%] h-[1px] bg-gradient-to-l from-blue-500 to-transparent"
      />
    </motion.section>
  );
}
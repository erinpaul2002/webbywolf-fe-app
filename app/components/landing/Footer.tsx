"use client";

import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FooterLinks {
  column1: string[];
  column2: string[];
  column3: string[];
  column4: string[];
}

export function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { 
    once: false, // Allow animation to repeat
    amount: 0.1, // Trigger when 10% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  const footerLinks: FooterLinks = {
    column1: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    column2: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    column3: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    column4: ["Lorem Ipsum"]
  };

  // Animation variants
  const footerVariants: Variants = {
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

  const logoContainerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  const linkColumnVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const linkItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.1 * custom
      }
    }),
    hover: {
      x: 5,
      color: "#80B0ED",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const sectionHeadingVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.1 * custom
      }
    })
  };

  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.15, 
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        duration: 1.5, 
        delay: 0.8 
      }
    }
  };

  return (
    <motion.footer 
      ref={footerRef}
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[rgba(23,30,43,1)] w-full overflow-hidden mt-[234px] pt-10 pb-[213px] px-20 max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5 relative"
    >
      {/* Decorative elements with continuous floating when in view */}
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
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-400 opacity-5 blur-xl"
      />
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, 10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              delay: 1
            }
          }
        } : {}}
        className="absolute bottom-60 left-20 w-48 h-48 rounded-full bg-blue-300 opacity-5 blur-xl"
      />

      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <motion.div 
            variants={logoContainerVariants}
            className="flex w-full flex-col max-md:max-w-full max-md:mt-10"
          >
            <div className="flex w-[424px] max-w-full items-start gap-5 justify-between">
              <motion.div 
                variants={logoVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 4px 20px rgba(219, 219, 219, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[rgba(219,219,219,1)] min-h-[60px] gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5 cursor-pointer"
              >
                LOGO
              </motion.div>
              <motion.div 
                variants={titleVariants}
                className="text-white text-xl font-bold leading-none tracking-[-0.8px] mt-[58px] max-md:mt-10"
              >
                Lorem Ipsum
              </motion.div>
            </div>
            <motion.nav 
              variants={linkColumnVariants}
              className="text-lg text-white font-normal tracking-[-0.72px] leading-none mt-12 max-md:mt-10"
            >
              {footerLinks.column1.map((link, index) => (
                <motion.div 
                  key={index} 
                  variants={linkItemVariants}
                  custom={index}
                  whileHover="hover"
                  className={index > 0 ? "mt-6" : ""}
                >
                  <motion.a 
                    href="#" 
                    className="transition-all duration-200 hover:text-[#80B0ED] inline-block"
                    whileHover={{ 
                      textShadow: "0px 0px 8px rgba(128, 176, 237, 0.6)"
                    }}
                  >
                    {link}
                  </motion.a>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <motion.div 
            variants={logoContainerVariants}
            className="w-full mt-[58px] max-md:max-w-full max-md:mt-10"
          >
            <div className="flex items-stretch gap-[40px_86px] text-xl text-white font-bold tracking-[-0.8px] leading-none flex-wrap max-md:max-w-full">
              {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((title, index) => (
                <motion.div 
                  key={index}
                  variants={sectionHeadingVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#80B0ED",
                    textShadow: "0px 0px 8px rgba(128, 176, 237, 0.6)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="grow shrink w-[90px] cursor-pointer"
                >
                  {title}
                </motion.div>
              ))}
            </div>
            <div className="w-full mt-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[39%] max-md:w-full max-md:ml-0">
                  <motion.nav 
                    variants={linkColumnVariants}
                    className="grow text-lg text-white font-normal tracking-[-0.72px] leading-none max-md:mt-8"
                  >
                    {footerLinks.column2.map((link, index) => (
                      <motion.div 
                        key={index} 
                        variants={linkItemVariants}
                        custom={index}
                        whileHover="hover"
                        className={index > 0 ? "mt-6" : ""}
                      >
                        <motion.a 
                          href="#" 
                          className="transition-all duration-200 hover:text-[#80B0ED] inline-block"
                          whileHover={{ 
                            textShadow: "0px 0px 8px rgba(128, 176, 237, 0.6)"
                          }}
                        >
                          {link}
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>
                <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex items-stretch gap-[7px] text-lg text-white font-normal tracking-[-0.72px] leading-none max-md:mt-8">
                    <motion.div variants={linkColumnVariants}>
                      {footerLinks.column3.map((link, index) => (
                        <motion.div 
                          key={index} 
                          variants={linkItemVariants}
                          custom={index}
                          whileHover="hover"
                          className={index > 0 ? "mt-6" : ""}
                        >
                          <motion.a 
                            href="#" 
                            className="transition-all duration-200 hover:text-[#80B0ED] inline-block"
                            whileHover={{ 
                              textShadow: "0px 0px 8px rgba(128, 176, 237, 0.6)"
                            }}
                          >
                            {link}
                          </motion.a>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div variants={linkColumnVariants}>
                      <motion.div 
                        variants={linkItemVariants}
                        custom={0}
                        whileHover="hover"
                      >
                        <motion.a 
                          href="#" 
                          className="transition-all duration-200 hover:text-[#80B0ED] inline-block"
                          whileHover={{ 
                            textShadow: "0px 0px 8px rgba(128, 176, 237, 0.6)"
                          }}
                        >
                          {footerLinks.column4[0]}
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced animated footer line */}
      <motion.div
        variants={lineVariants}
        className="absolute bottom-20 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
      />
      
      {/* Additional subtle decorative elements */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 0.1,
            transition: { duration: 1, delay: 1.2 }
          }
        }}
        animate={isInView ? {
          scale: [1, 1.1, 1],
          transition: {
            scale: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }
          }
        } : {}}
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-blue-200 blur-2xl"
      />
    </motion.footer>
  );
}

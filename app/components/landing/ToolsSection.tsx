"use client";

import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { DecorationIcons } from "../DecorationIcons/DecorationIcons";

export function ToolsSection() {
  const [activeTab, setActiveTab] = useState<string>("Research");
  const sectionRef = useRef(null);
  // Changed to false to allow re-triggering animations when scrolling in/out of view
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -50px 0px", // Start animation slightly before section comes into view
  });

  const tabs = ["Research", "Plan", "Design"];

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
        staggerChildren: 0.1,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const tabContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const tabVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
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
        delay: 0.5,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
    hover: {
      x: 5,
      color: "#0546d2",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const arrowVariants: Variants = {
    hover: {
      x: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const illustrationVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.4,
      },
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  // New decorative elements variants
  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.7,
      },
    },
  };

  // New gradient variants
  const gradientVariants: Variants = {
    hidden: { width: "0%" },
    visible: {
      width: "60%",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex w-full flex-col items-stretch justify-center mt-[180px] px-20 py-40 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px] overflow-hidden"
    >
      {/* Adjusted positioning of DecorationIcons to be higher and to the right */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" 
           style={{ transform: "translate(0%, -5%)" }}>
        <DecorationIcons />
      </div>

      {/* Enhanced decorative elements with continuous animations */}
      <motion.div
        variants={decorationVariants}
        animate={
          isInView
            ? {
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  },
                  x: {
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }
              }
            : {}
        }
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-100 opacity-10 blur-xl -z-10"
      />

      <motion.div
        variants={decorationVariants}
        animate={
          isInView
            ? {
                y: [0, 15, 0],
                x: [0, -10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 1,
                  },
                  x: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  },
                }
              }
            : {}
        }
        className="absolute bottom-40 left-40 w-48 h-48 rounded-full bg-blue-50 opacity-15 blur-xl -z-10"
      />

      {/* Add subtle animated lines */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={
          isInView
            ? {
                opacity: 0.05,
                width: "40%",
                transition: {
                  width: { delay: 1, duration: 1 },
                  opacity: { delay: 1, duration: 0.8 },
                },
              }
            : { opacity: 0, width: 0 }
        }
        className="absolute left-0 top-[30%] h-[1px] bg-gradient-to-r from-blue-500 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={
          isInView
            ? {
                opacity: 0.05,
                width: "30%",
                transition: {
                  width: { delay: 1.2, duration: 1 },
                  opacity: { delay: 1.2, duration: 0.8 },
                },
              }
            : { opacity: 0, width: 0 }
        }
        className="absolute right-0 bottom-[35%] h-[1px] bg-gradient-to-l from-blue-500 to-transparent"
      />

      <div className="z-10 flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto py-6 max-md:max-w-full">
          <motion.div
            variants={headingVariants}
            className="w-full text-[42px] text-slate-900 font-bold uppercase tracking-[-0.84px] max-md:max-w-full"
          >
            <h2 className="text-slate-900 w-full max-md:max-w-full">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Lorem ipsum{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                dolor sit amet
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            variants={tabContainerVariants}
            className="flex w-full gap-[-1px] text-xl text-slate-900 font-semibold whitespace-nowrap tracking-[-0.4px] flex-wrap mt-6 max-md:max-w-full"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                variants={tabVariants}
                whileHover="hover"
                whileTap="tap"
                animate={
                  isInView
                    ? {
                        y: [0, index % 2 === 0 ? -3 : -5, 0],
                        transition: {
                          y: {
                            repeat: Infinity,
                            duration: 3 + index,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          },
                        },
                      }
                    : {}
                }
                className={`justify-center items-center border border-[color:var(--Blue-Gray-300,#CBD5E1)] flex min-h-12 flex-1 shrink basis-[0%] ${
                  activeTab === tab ? "bg-slate-100" : "bg-white"
                } px-4 py-3 ${
                  index === 0
                    ? "rounded-[8px_0px_0px_8px]"
                    : index === tabs.length - 1
                    ? "rounded-[0px_8px_8px_0px]"
                    : ""
                } border-solid`}
                onClick={() => setActiveTab(tab)}
              >
                <motion.span
                  className="text-slate-900 self-stretch gap-2.5 my-auto px-4"
                  animate={{
                    fontWeight: activeTab === tab ? 700 : 600,
                    color: activeTab === tab ? "#1959AC" : "#0f172a",
                    scale: activeTab === tab ? [1, 1.05, 1] : 1,
                    transition: {
                      scale: {
                        repeat: activeTab === tab ? Infinity : 0,
                        duration: 2,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  {tab}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="flex w-full flex-col items-stretch mt-6 max-md:max-w-full">
            <motion.p
              variants={paragraphVariants}
              className="text-slate-600 text-lg font-normal leading-[25px] max-md:max-w-full"
            >
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
              enim elit in accumsan.
            </motion.p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              animate={
                isInView
                  ? {
                      x: [0, 5, 0],
                      transition: {
                        x: {
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                          delay: 1.5,
                        },
                      },
                    }
                  : {}
              }
              className="flex items-center gap-4 text-base text-[#1959AC] font-medium tracking-[0.5px] mt-6 cursor-pointer"
            >
              <button className="self-stretch flex items-center justify-center my-auto py-3 rounded-lg">
                <span className="self-stretch my-auto pr-4">Check tools</span>
                <motion.div
                  className="relative w-6 h-6"
                  variants={arrowVariants}
                  animate={
                    isInView
                      ? {
                          x: [0, 5, 0],
                          transition: {
                            x: {
                              repeat: Infinity,
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 1.7,
                            },
                          },
                        }
                      : {}
                  }
                >
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={illustrationVariants}
          animate={
            isInView ? ["visible", "floating"] : "hidden"
          }
          className="self-stretch min-w-60 min-h-[406px] flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
        >
          <div className="relative w-[406px] h-[406px]">
            <Image
              src="/tools-illustration.png"
              alt="tools illustration"
              fill
              className=""
            />

            {/* Add floating elements around the illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 0.5,
                      scale: 1,
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                    }
                  : { opacity: 0, scale: 0 }
              }
              transition={{
                opacity: { delay: 0.8, duration: 0.8 },
                scale: { delay: 0.8, duration: 0.8 },
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
              }}
              className="absolute top-[15%] left-[10%] w-8 h-8 rounded-full bg-blue-100"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 0.3,
                      scale: 1,
                      y: [0, 10, 0],
                      x: [0, -5, 0],
                    }
                  : { opacity: 0, scale: 0 }
              }
              transition={{
                opacity: { delay: 1, duration: 0.8 },
                scale: { delay: 1, duration: 0.8 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
                x: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              }}
              className="absolute bottom-[20%] right-[15%] w-6 h-6 rounded-full bg-green-200"
            />
          </div>
        </motion.div>
        {/* Removed DecorationIcons from here */}
      </div>

      {/* Add bottom gradient line */}
      <motion.div
        variants={gradientVariants}
        className="self-center mt-16 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        style={{ maxWidth: "300px", opacity: 0.3 }}
      />
    </motion.section>
  );
}
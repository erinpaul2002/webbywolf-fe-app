"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion'; // Removed AnimatePresence import since it's not being used

interface Testimonial {
  icon: string;
  text: string;
  avatar: string;
  name: string;
}

export function Testimonials() {
  const sectionRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  // Change to false to allow re-triggering animations when scrolling in/out of view
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -50px 0px" // Start animation slightly before section comes into view
  });
  
  const testimonials: Testimonial[] = [
    {
      icon: "/thunderstorm.svg",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      avatar: "/jane.png",
      name: "Jane Cooper"
    },
    {
      icon: "/stars.svg",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      avatar: "/ralph.svg",
      name: "Ralph Edwards"
    },
    {
      icon: "/tower.svg",
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      avatar: "/courtney.svg",
      name: "Courtney Henry"
    },
    {
      icon: "/clock.svg",
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      avatar: "/cameron.svg",
      name: "Cameron Williamson"
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
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.09 // reduced from 0.4
      }
    },
    hover: { 
      scale: 1.05,
      y: -5,
      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  const carouselVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.08, // reduced from 0.3
        staggerChildren: 0.07 // reduced from 0.2
      }
    }
  };

  const testimonialCardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.07 + (custom * 0.02) // reduced
      }
    }),
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

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.09 // reduced from 0.3
      }
    },
    hover: {
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 0.2 // reduced from 0.5
      }
    }
  };

  const navButtonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.12 // reduced from 0.6
      }
    },
    hover: { 
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  // New decorative elements variants
  const decorationVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.1, 
      scale: 1,
      transition: {
        duration: 0.2, // reduced from 0.8
        delay: 0.12 // reduced from 0.7
      }
    }
  };

  // New gradient variants
  const gradientVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "60%",
      transition: {
        duration: 0.2, // reduced from 1.2
        ease: "easeOut",
        delay: 0.12 // reduced from 0.8
      }
    }
  };
  
  // Number of visible slides is managed by the component layout
  // Removed VISIBLE_SLIDES constant as it's not being used

  // Clone the entire testimonials array at both ends
  const extendedTestimonials = [
    ...testimonials, // Clone at start
    ...testimonials, // Original
    ...testimonials, // Clone at end
  ];
  
  // Start at the first card of the original set
  const [currentSlide, setCurrentSlide] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // After transition, jump to the real set if at a clone
  useEffect(() => {
    if (!isTransitioning) return;
    let timeout: NodeJS.Timeout;
    if (currentSlide === extendedTestimonials.length - testimonials.length) {
      // At the first card of the end clone, jump to the original set
      timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentSlide(testimonials.length);
        setIsTransitioning(false);
      }, 500);
    } else if (currentSlide === testimonials.length - 1) {
      // At the last card of the start clone, jump to the last card of the original set
      timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentSlide(extendedTestimonials.length - testimonials.length - 1);
        setIsTransitioning(false);
      }, 500);
    } else {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [currentSlide, isTransitioning, extendedTestimonials.length, testimonials.length]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!transitionEnabled) {
      // Wait for the DOM to update, then re-enable transition
      const id = setTimeout(() => setTransitionEnabled(true), 20);
      return () => clearTimeout(id);
    }
  }, [transitionEnabled]);

  // Calculate translateX
  const slideWidth = 364 + 24; // width + gap
  const translateX = -currentSlide * slideWidth;

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex w-full flex-col items-stretch justify-center mt-[180px] p-20 bg-[rgba(21,90,218,1)] max-md:max-w-full max-md:mt-10 max-md:px-5 overflow-hidden"
    >
      {/* Add decorative elements with continuous animations when in view */}
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, -20, 0],
          x: [0, 10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 1.2, // reduced from 6
              ease: "easeInOut"
            },
            x: {
              repeat: Infinity,
              duration: 1.4, // reduced from 7
              ease: "easeInOut",
              delay: 0.12 // reduced from 0.5
            }
          }
        } : {}}
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-white opacity-5 blur-xl -z-0"
      />
      
      <motion.div
        variants={decorationVariants}
        animate={isInView ? {
          y: [0, 15, 0],
          x: [0, -10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 1, // reduced from 5
              ease: "easeInOut",
              delay: 0.2 // reduced from 1
            },
            x: {
              repeat: Infinity,
              duration: 1.2, // reduced from 6
              ease: "easeInOut"
            }
          }
        } : {}}
        className="absolute bottom-40 left-40 w-48 h-48 rounded-full bg-white opacity-5 blur-xl -z-0"
      />

      {/* Add subtle animated lines */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={isInView ? { 
          opacity: 0.05, 
          width: "40%",
          transition: {
            width: { delay: 0.2, duration: 0.2 }, // reduced
            opacity: { delay: 0.2, duration: 0.2 } // reduced
          }
        } : { opacity: 0, width: 0 }}
        className="absolute left-0 top-[20%] h-[1px] bg-gradient-to-r from-white to-transparent"
      />
      
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={isInView ? { 
          opacity: 0.05, 
          width: "30%",
          transition: {
            width: { delay: 0.24, duration: 0.2 }, // reduced
            opacity: { delay: 0.24, duration: 0.2 } // reduced
          }
        } : { opacity: 0, width: 0 }}
        className="absolute right-0 bottom-[30%] h-[1px] bg-gradient-to-l from-white to-transparent"
      />
      
      <div className="flex w-[1280px] max-w-full gap-[40px_160px] flex-wrap">
        <div className="w-[766px] min-w-60 grow shrink max-md:max-w-full">
          <div className="w-full text-white max-md:max-w-full">
            <motion.h2 
              variants={headingVariants}
              className="text-2xl font-semibold tracking-[-0.96px] max-md:max-w-full"
            >
              Join other Sun harvesters
            </motion.h2>
            <motion.h3 
              variants={headingVariants}
              className="mt-2 text-[42px] font-bold uppercase tracking-[-0.84px] max-md:max-w-full"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.09, duration: 0.15 }} // reduced
              >
                Lorem ipsum{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.14, duration: 0.15 }} // reduced
              >
                dolor sit amet
              </motion.span>
            </motion.h3>
          </div>
          <motion.p 
            variants={headingVariants}
            className="mt-6 text-lg font-normal leading-[25px] text-white max-md:max-w-full"
          >
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </motion.p>
        </div>
        <div className="w-[190px] pt-10 text-[15px] font-bold text-black grow shrink">
          <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            animate={isInView ? {
              y: [0, -5, 0],
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 1
                }
              }
            } : {}}
            className="w-[238px] min-h-[38px] max-w-full self-stretch gap-3 overflow-hidden rounded-[5px] bg-white px-6 py-2.5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] max-md:px-5"
          >
            Lorem Ipsum
          </motion.button>
        </div>
      </div>
      
      <motion.div 
        variants={carouselVariants}
        className="mt-20 flex w-full items-center gap-6 overflow-hidden max-md:max-w-full max-md:mt-10"
      >
        <motion.div 
          ref={carouselRef}
          className="flex gap-6"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: transitionEnabled ? 'transform 0.5s ease-out' : 'none'
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <motion.article 
              key={index} 
              variants={testimonialCardVariants}
              custom={index}
              whileHover="hover"
              animate={isInView ? {
                y: [0, index % 3 === 0 ? -5 : (index % 3 === 1 ? 5 : -3), 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 4 + (index % 3),
                    ease: "easeInOut",
                    delay: (index % 4) * 0.2
                  }
                }
              } : {}}
              className="flex min-w-[364px] w-[364px] flex-col items-stretch justify-center overflow-hidden rounded-[10px] border border-solid border-[color:var(--Blue-Gray-200,#E2E8F0)] bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_0px_10px_0px_rgba(0,0,0,0.07)]"
            >
              <div className="w-full p-8 max-md:px-5">
                <motion.div 
                  className="flex w-16 items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
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
                  <div className="relative w-16 aspect-[1] self-stretch my-auto">
                    <Image
                      src={testimonial.icon}
                      fill
                      className="object-contain"
                      alt="testimonial icon"
                    />
                  </div>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="mt-4 text-lg font-normal leading-[29px] text-slate-900"
                >
                  {testimonial.text}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.18 + (index * 0.02), type: "spring", stiffness: 70, damping: 15 }} // reduced
                  className="mt-4 pt-4 flex w-full items-center gap-4 text-lg font-normal leading-[1.6] text-slate-900"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    animate={isInView ? {
                      scale: [1, 1.05, 1],
                      transition: {
                        scale: {
                          repeat: Infinity,
                          duration: 1, // reduced from 3
                          ease: "easeInOut",
                          delay: 0.04 + (index * 0.03) // reduced
                        }
                      }
                    } : {}}
                    className="relative w-16 aspect-[1] self-stretch min-h-16 shrink-0 gap-2.5 my-auto rounded-[100px] overflow-hidden"
                  >
                    <Image
                      src={testimonial.avatar}
                      fill
                      className="object-contain"
                      alt={testimonial.name}
                    />
                  </motion.div>
                  <div className="self-stretch my-auto flex-1 shrink basis-[0%] text-slate-900">
                    {testimonial.name}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={carouselVariants}
        className="mt-20 flex gap-6 max-md:mt-10"
      >
        <motion.button
          variants={navButtonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={prevSlide}
          animate={isInView ? {
            x: [0, -5, 0],
            transition: {
              x: {
                repeat: Infinity,
                duration: 0.5, // reduced
                ease: "easeInOut",
                delay: 0.04
              }
            }
          } : {}}
          className="flex h-12 w-12 items-center justify-center rounded-[100px] border-2 border-solid border-white px-3 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_0px_2px_0px_rgba(0,0,0,0.07)] text-white"
        >
          &lt;
        </motion.button>
        <motion.button
          variants={navButtonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={nextSlide}
          animate={isInView ? {
            x: [0, 5, 0],
            transition: {
              x: {
                repeat: Infinity,
                duration: 0.5, // reduced
                ease: "easeInOut",
                delay: 0.06
              }
            }
          } : {}}
          className="flex h-12 w-12 items-center justify-center rounded-[100px] border-2 border-solid border-white px-3 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_0px_2px_0px_rgba(0,0,0,0.07)] text-white"
        >
          &gt;
        </motion.button>
      </motion.div>
      
      {/* Add bottom gradient line */}
      <motion.div
        variants={gradientVariants}
        className="self-center mt-16 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ maxWidth: "300px", opacity: 0.3 }}
      />
    </motion.section>
  );
}

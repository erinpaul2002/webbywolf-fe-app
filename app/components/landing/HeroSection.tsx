'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants, useInView, animate } from 'framer-motion';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // For 3D card tilt effect
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const distance = useMotionValue(0);
  const proximityDistance = useMotionValue(1000); // Track mouse proximity to card
  
  // Very smooth springs for all transitions
  const springConfig = useMemo(() => ({ stiffness: 90, damping: 40, mass: 1 }), []);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  // Removed unused springDistance variable
  const springProximity = useSpring(proximityDistance, { stiffness: 70, damping: 50, mass: 1 });
  
  // Transform mouse position into rotation values with limited range
  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);
  
  // Dynamic outer shadow based on proximity to card
  const shadowBlur = useTransform(springProximity, [1000, 500, 200, 0], [15, 25, 35, 50]);
  const shadowSpread = useTransform(springProximity, [1000, 500, 200, 0], [5, 10, 15, 20]);
  const shadowOpacity = useTransform(springProximity, [1000, 500, 200, 0], [0.1, 0.15, 0.2, 0.3]);
  
  // Hover state for smoother transitions
  const hoverSpring = useSpring(0, springConfig);
  const hoverScale = useTransform(hoverSpring, [0, 1], [1, 1.02]);
  
  // Gloss effect position
  const glossX = useTransform(springX, [-100, 100], ['60%', '40%']);
  const glossY = useTransform(springY, [-100, 100], ['40%', '60%']);
  const glossOpacity = useTransform(hoverSpring, [0, 1], [0, 0.2]);

  // Track mouse position globally to detect proximity to card
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse distance from card center
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const dist = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      
      // Update proximity value - max distance is 1000px
      proximityDistance.set(Math.min(1000, Math.max(0, dist)));
      
      // Only update card tilt values if actually hovering
      if (hovering) {
        x.set(mouseX);
        y.set(mouseY);
        
        // Calculate normalized distance for shadow intensity
        const maxDist = Math.sqrt((rect.width/2) * (rect.width/2) + (rect.height/2) * (rect.height/2));
        const normalizedDist = Math.min(100, (dist / maxDist) * 100);
        distance.set(normalizedDist);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hovering, proximityDistance, x, y, distance]);

  // Smooth transition to hover state
  useEffect(() => {
    if (hovering) {
      animate(hoverSpring, 1, { duration: 0.5 });
    } else {
      animate(hoverSpring, 0, { duration: 0.5 });
      
      // Gradually reset position values instead of immediate reset
      animate(x, 0, { duration: 0.8, ...springConfig });
      animate(y, 0, { duration: 0.8, ...springConfig });
      animate(distance, 0, { duration: 0.8, ...springConfig });
    }
  }, [hovering, hoverSpring, x, y, distance, springConfig]); // Added springConfig to dependencies

  // Create a composite shadow effect that combines proximity and hover effects
  const cardShadow = useTransform(
    [shadowBlur, shadowSpread, shadowOpacity, hoverSpring],
    (values: number[]) => {
      const [blur, spread, opacity, hover] = values;
      // Base shadow based on proximity
      const baseShadow = `0 ${blur}px ${spread}px rgba(0,0,0,${opacity})`;
      
      // Add an extra shadow when hovering
      const hoverShadow = hover > 0.5 
        ? `, 0 ${blur * 1.2}px ${spread * 1.5}px rgba(25,89,172,${0.05 + (hover * 0.1)})`
        : '';
        
      return baseShadow + hoverShadow;
    }
  );

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.32, // reduced from 1
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05 // reduced from 0.12
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
        stiffness: 80,
        damping: 14, // snappier
        delay: 0.06 // reduced from 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12 // snappier
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14, // snappier
        delay: 0.13 // reduced from 0.4
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14, // snappier
        delay: 0.18 // reduced from 0.6
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14, // snappier
        delay: 0.22 // reduced from 0.8
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12 // snappier
      }
    },
    tap: { scale: 0.98 }
  };

  const arrowVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12 // snappier
      }
    }
  };

  // New variants for the background decorative elements
  const backgroundElementVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.05, 
      scale: 1,
      transition: {
        duration: 0.32, // reduced from 1.5
        delay: 0.18 // reduced from 1
      }
    }
  };

  // Add detection for touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Check if device is touch-capable
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full flex justify-center items-center mt-20 md:mt-40 px-4 perspective-[1200px]"
    >
      <motion.div 
        ref={cardRef}
        style={{
          scale: hoverScale,
          rotateX: hovering && !isTouchDevice ? rotateX : 0,
          rotateY: hovering && !isTouchDevice ? rotateY : 0,
          transformStyle: "preserve-3d",
          boxShadow: cardShadow,
          transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          backgroundColor: "white",
        }}
        onMouseEnter={() => !isTouchDevice && setHovering(true)}
        onMouseLeave={() => !isTouchDevice && setHovering(false)}
        className="flex flex-col items-center w-full max-w-[736px] rounded-2xl p-4 md:p-8 relative transition-all duration-700"
      >
        {/* Gloss effect - only for non-touch devices */}
        {!isTouchDevice && (
          <motion.div 
            className="absolute inset-0 rounded-2xl pointer-events-none z-[1]"
            style={{
              background: `radial-gradient(circle at ${glossX} ${glossY}, rgba(255,255,255,0.2) 0%, transparent 70%)`,
              opacity: glossOpacity,
              transition: "opacity 0.7s ease",
            }}
          />
        )}

        <motion.div 
          variants={logoVariants}
          whileHover="hover"
          className="self-center bg-[rgba(219,219,219,1)] min-h-[50px] md:min-h-[60px] w-[120px] md:w-[156px] max-w-full gap-2.5 overflow-hidden text-[24px] md:text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[15px] md:px-[25px] transform-style-preserve-3d translate-z-10 cursor-pointer z-10"
          style={{ 
            transform: useTransform(hoverSpring, [0, 1], ["translateZ(0px)", "translateZ(40px)"]),
            transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}
        >
          LOGO
        </motion.div>
        
        <div className="flex w-full flex-col items-center font-bold mt-5 px-4 md:px-[74px]">
          <div className="z-10 flex mb-4 md:mb-[-34px] w-full max-w-[520px] flex-col items-center">
            <motion.h2 
              variants={titleVariants}
              className="text-[rgba(34,34,34,1)] text-[28px] md:text-[42px] tracking-[-0.84px] text-center uppercase self-stretch"
              style={{ 
                transform: useTransform(hoverSpring, [0, 1], ["translateZ(0px)", "translateZ(30px)"]),
                transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.08, duration: 0.22, ease: "easeOut" } // reduced from 0.5, 0.7
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
                    transition: { delay: 0.13, duration: 0.22, ease: "easeOut" } // reduced from 0.7, 0.7
                  }
                }}
              >
                dolor sit amet consectetur. Dui.
              </motion.span>
            </motion.h2>
            
            <motion.p 
              variants={descriptionVariants}
              className="text-black text-center text-base md:text-lg font-normal leading-[22px] md:leading-[25px] mt-4 md:mt-5"
              style={{ 
                transform: useTransform(hoverSpring, [0, 1], ["translateZ(0px)", "translateZ(20px)"]),
                transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </motion.p>
            
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="justify-center items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-[#1959AC] flex min-h-[38px] gap-2.5 overflow-hidden text-[15px] text-white mt-6 md:mt-10 pl-5 md:pl-6 pr-5 md:pr-[23px] py-2.5 rounded-[5px] w-full md:w-auto"
              style={{ 
                transform: useTransform(hoverSpring, [0, 1], ["translateZ(0px)", "translateZ(50px)"]),
                transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease"
              }}
            >
              <span className="self-stretch my-auto">Loerum Ipsum</span>
              <motion.div 
                variants={arrowVariants}
                className="relative w-[17px] h-[14px] self-stretch shrink-0 my-auto"
              >
                <Image
                  src="/arrow-right-1.svg"
                  alt="arrow"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.button>
          </div>        
        </div>

        {/* Adjusted background elements for mobile */}
        <motion.div
          variants={backgroundElementVariants}
          animate={isInView ? {
            opacity: [0.05, 0.07, 0.05],
            scale: [1, 1.05, 1],
            transition: {
              opacity: { repeat: Infinity, duration: 1.2, ease: "easeInOut" }, // reduced from 5
              scale: { repeat: Infinity, duration: 1.6, ease: "easeInOut" } // reduced from 6
            }
          } : {}}
          className="absolute top-[-100px] md:top-[-150px] right-[-80px] md:right-[-150px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-blue-500 blur-3xl -z-10"
        />
        
        {/* Other background elements with similar responsive adjustments */}
        <motion.div
          variants={backgroundElementVariants}
          animate={isInView ? {
            opacity: [0.04, 0.06, 0.04],
            scale: [1, 1.1, 1],
            transition: {
              opacity: { repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.12 }, // reduced from 6, 0.5
              scale: { repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.12 } // reduced from 7, 0.5
            }
          } : {}}
          className="absolute bottom-[-60px] md:bottom-[-100px] left-[-60px] md:left-[-100px] w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full bg-indigo-500 blur-3xl -z-10"
        />
        
        {/* Additional decorative elements with responsive positions */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { 
              opacity: 0.03, 
              scale: 1,
              transition: {
                duration: 0.32, // reduced from 1.5
                delay: 0.22 // reduced from 1.3
              }
            }
          }}
          animate={isInView ? {
            y: [0, -15, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 2, // reduced from 7
                ease: "easeInOut"
              }
            }
          } : {}}
          className="absolute top-[20%] left-[-70px] md:left-[-120px] w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-green-300 blur-2xl -z-10"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { 
              opacity: 0.025, 
              scale: 1,
              transition: {
                duration: 0.32, // reduced from 1.5
                delay: 0.24 // reduced from 1.5
              }
            }
          }}
          animate={isInView ? {
            y: [0, 10, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 1.4, // reduced from 5
                ease: "easeInOut",
                delay: 0.08 // reduced from 0.2
              }
            }
          } : {}}
          className="absolute bottom-[20%] right-[-50px] md:right-[-80px] w-[80px] md:w-[120px] h-[80px] md:h-[120px] rounded-full bg-purple-300 blur-2xl -z-10"
        />
      </motion.div>
    </motion.section>
  );
}
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, Variants } from "framer-motion";

// Define proper interfaces for our types
interface Logo {
  src: string;
  alt: string;
  id: number;
}

interface GridPosition {
  row: number;
  col: number;
}

interface GridState {
  [key: number]: Logo;
}

const logos: Logo[] = [
  { src: "/hero-logo.png", alt: "Hero", id: 1 },
  { src: "/honda-logo.png", alt: "Honda", id: 2 },
  { src: "/bajaj-logo.png", alt: "Bajaj", id: 3 },
  { src: "/tvs-logo.png", alt: "TVS", id: 4 },
  { src: "/enfield-logo.png", alt: "Royal Enfield", id: 5 },
  { src: "/yamaha-logo.png", alt: "Yamaha", id: 6 },
  { src: "/ktm-logo.png", alt: "KTM", id: 7 },
  { src: "/ather-logo.png", alt: "Ather", id: 8 },
  { src: "/ola-logo.png", alt: "Ola Electric", id: 9 },
  { src: "/revolt-logo.png", alt: "Revolt", id: 10 },
  { src: "/ultraviolette-logo.png", alt: "Ultraviolette", id: 11 },
  { src: "/tork-logo.png", alt: "Tork Motors", id: 12 },
];

// Define the movement path
const movementPath: number[] = [1, 2, 6, 7, 3, 4, 8, 12, 11, 10, 9, 5];

// Grid positions (1-indexed as per your description)
const gridPositions: Record<number, GridPosition> = {
  1: { row: 0, col: 0 },
  2: { row: 0, col: 1 },
  3: { row: 0, col: 2 },
  4: { row: 0, col: 3 },
  5: { row: 1, col: 0 },
  6: { row: 1, col: 1 },
  7: { row: 1, col: 2 },
  8: { row: 1, col: 3 },
  9: { row: 2, col: 0 },
  10: { row: 2, col: 1 },
  11: { row: 2, col: 2 },
  12: { row: 2, col: 3 },
};

export function Showcase() {
  // Initialize with logos in the grid positions
  const [gridState, setGridState] = useState<GridState>(() => {
    const initialGrid: GridState = {};
    movementPath.forEach((position, index) => {
      initialGrid[position] = logos[index];
    });
    return initialGrid;
  });
  
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cardsSpread, setCardsSpread] = useState<boolean>(false); // Track if cards are spread out
  const [rotationActive, setRotationActive] = useState<boolean>(false); // Track if rotation animation is active
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Allow triggering every time we scroll to the component
    amount: 0.3 
  });

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  // Reset state when component leaves view
  useEffect(() => {
    if (!isInView) {
      // Reset states when component is out of view
      setCardsSpread(false);
      setRotationActive(false);
      
      // Clear any ongoing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isInView]);

  // Handle the spread animation and setup for rotation
  useEffect(() => {
    if (isInView) {
      // When component comes into view, start the sequence
      
      // First, wait a short delay then spread the cards
      const spreadDelay = setTimeout(() => {
        setCardsSpread(true);
      }, 300);
      
      // After cards have spread, wait a bit then start rotation
      const rotationDelay = setTimeout(() => {
        setRotationActive(true);
      }, 2000);
      
      return () => {
        clearTimeout(spreadDelay);
        clearTimeout(rotationDelay);
      };
    }
  }, [isInView]);

  // Function to move cards - also wrapped in useCallback
  const moveCards = useCallback(() => {
    setIsAnimating(true);
    
    // Update grid state to move cards to next position
    setTimeout(() => {
      setGridState(prevGrid => {
        const newGrid: GridState = {};
        
        // Move each card to the next position in the path
        for (let i = 0; i < movementPath.length; i++) {
          const currentPosition = movementPath[i];
          const nextPosition = movementPath[(i + 1) % movementPath.length];
          newGrid[nextPosition] = prevGrid[currentPosition];
        }
        
        return newGrid;
      });
      
      setIsAnimating(false);
    }, 300);
  }, []);

  // Function to start the rotation animation - wrapped in useCallback
  const startRotationAnimation = useCallback(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set up new interval for rotation
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        moveCards();
      }
    }, 2000);
  }, [isAnimating, moveCards]); // Added moveCards to dependencies

  // Handle the rotation animation - now with proper dependency
  useEffect(() => {
    // Start or stop rotation based on state
    if (rotationActive && isInView && !isPaused) {
      // Start the rotation animation
      startRotationAnimation();
    } else {
      // Stop any ongoing rotation
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    // Cleanup on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [rotationActive, isInView, isPaused, startRotationAnimation]);

  // Calculate card size and spacing based on container
  const cardWidth = 200;
  const cardHeight = 150;
  const gap = 30;
  const containerWidth = (cardWidth * 4) + (gap * 3);
  const containerHeight = (cardHeight * 3) + (gap * 2);

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center py-16"
    >
      <motion.h2 
        variants={headingVariants}
        className="mt-40 self-center w-[655px] text-center text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(34,34,34,1)] max-md:max-w-full max-md:mt-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Lorem ipsum{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          dolor sit amet consectetur.{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Commodo leo amet.
        </motion.span>
      </motion.h2>
      
      <motion.div 
        variants={gridContainerVariants}
        className="relative mt-[110px] self-center z-10 w-full max-w-[1112px] max-md:max-w-full max-md:mt-10"
      >
        {/* Optional decorative elements */}
        <motion.div 
          className="absolute w-24 h-24 rounded-full bg-blue-50 -top-12 -left-12 z-0 opacity-70"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-16 h-16 rounded-full bg-yellow-50 -bottom-8 -right-8 z-0 opacity-70"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="flex justify-center items-center">
          <div 
            className="relative" 
            style={{ 
              width: containerWidth, 
              height: containerHeight,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {Object.entries(gridState).map(([positionStr, logo]) => {
              const position = parseInt(positionStr);
              const { row, col } = gridPositions[position];
              
              // Calculate the grid position
              const gridX = col * (cardWidth + gap);
              const gridY = row * (cardHeight + gap);
              
              // Calculate the center position
              const centerX = containerWidth / 2 - cardWidth / 2;
              const centerY = containerHeight / 2 - cardHeight / 2;
              
              return (
                <motion.div
                  key={`logo-${logo.id}`} // Use logo.id for consistent tracking
                  layoutId={`logo-${logo.id}`} // Important for smooth transitions
                  className="absolute flex items-center justify-center bg-white rounded-xl shadow-md cursor-pointer"
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                  }}
                  initial={{
                    x: centerX,
                    y: centerY,
                    scale: 0.8,
                    opacity: 0
                  }}
                  animate={{
                    // If cards are spread, use grid position; otherwise, use center position
                    x: cardsSpread ? gridX : centerX,
                    y: cardsSpread ? gridY : centerY,
                    scale: cardsSpread ? 1 : 0.8,
                    opacity: isInView ? 1 : 0, // Fade in when in view
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    // Apply different timing based on animation phase
                    delay: !cardsSpread ? 0 : (rotationActive ? 0 : logo.id * 0.05),
                  }}
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
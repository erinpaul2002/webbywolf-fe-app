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

// Create responsive grid positions based on screen size
// For mobile: 2x6 grid (2 columns, 6 rows)
// For tablet: 3x4 grid (3 columns, 4 rows)
// For desktop: 4x3 grid (4 columns, 3 rows) - original layout

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

// Mobile grid positions (2 columns)
const mobileGridPositions: Record<number, GridPosition> = {
  1: { row: 0, col: 0 },
  2: { row: 0, col: 1 },
  3: { row: 1, col: 0 },
  4: { row: 1, col: 1 },
  5: { row: 2, col: 0 },
  6: { row: 2, col: 1 },
  7: { row: 3, col: 0 },
  8: { row: 3, col: 1 },
  9: { row: 4, col: 0 },
  10: { row: 4, col: 1 },
  11: { row: 5, col: 0 },
  12: { row: 5, col: 1 },
};

// Tablet grid positions (3 columns)
const tabletGridPositions: Record<number, GridPosition> = {
  1: { row: 0, col: 0 },
  2: { row: 0, col: 1 },
  3: { row: 0, col: 2 },
  4: { row: 1, col: 0 },
  5: { row: 1, col: 1 },
  6: { row: 1, col: 2 },
  7: { row: 2, col: 0 },
  8: { row: 2, col: 1 },
  9: { row: 2, col: 2 },
  10: { row: 3, col: 0 },
  11: { row: 3, col: 1 },
  12: { row: 3, col: 2 },
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
  const [cardsSpread, setCardsSpread] = useState<boolean>(false);
  const [rotationActive, setRotationActive] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.3 
  });

  // Track window size
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants (reduced delays/durations)
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3, // reduced from 0.8
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
        delay: 0.07 // reduced from 0.2
      }
    }
  };

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.2, // reduced from 0.5
        delay: 0.08, // reduced from 0.4
        staggerChildren: 0.04 // reduced from 0.1
      }
    }
  };

  // Reset state when component leaves view
  useEffect(() => {
    if (!isInView) {
      setCardsSpread(false);
      setRotationActive(false);
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isInView]);

  // Handle the spread animation and setup for rotation
  useEffect(() => {
    if (isInView) {
      const spreadDelay = setTimeout(() => {
        setCardsSpread(true);
      }, 300);
      
      const rotationDelay = setTimeout(() => {
        setRotationActive(true);
      }, 2000);
      
      return () => {
        clearTimeout(spreadDelay);
        clearTimeout(rotationDelay);
      };
    }
  }, [isInView]);

  // Function to move cards
  const moveCards = useCallback(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setGridState(prevGrid => {
        const newGrid: GridState = {};
        
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

  // Start the rotation animation
  const startRotationAnimation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        moveCards();
      }
    }, 2000);
  }, [isAnimating, moveCards]);

  // Handle the rotation animation
  useEffect(() => {
    if (rotationActive && isInView && !isPaused) {
      startRotationAnimation();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [rotationActive, isInView, isPaused, startRotationAnimation]);

  // Calculate responsive card sizes and grid layout
  const getResponsiveValues = () => {
    if (windowWidth < 640) { // Mobile
      return {
        cardWidth: windowWidth > 400 ? 140 : 120,
        cardHeight: windowWidth > 400 ? 100 : 90,
        gap: 15,
        columns: 2,
        rows: 6,
        gridPositions: mobileGridPositions
      };
    } else if (windowWidth < 1024) { // Tablet
      return {
        cardWidth: 160,
        cardHeight: 120,
        gap: 20,
        columns: 3,
        rows: 4,
        gridPositions: tabletGridPositions
      };
    } else { // Desktop
      return {
        cardWidth: 200,
        cardHeight: 150,
        gap: 30,
        columns: 4,
        rows: 3,
        gridPositions: gridPositions
      };
    }
  };

  const { cardWidth, cardHeight, gap, columns, rows, gridPositions: activeGridPositions } = getResponsiveValues();
  const containerWidth = (cardWidth * columns) + (gap * (columns - 1));
  const containerHeight = (cardHeight * rows) + (gap * (rows - 1));

  return (
    <motion.section 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center py-8 md:py-12 lg:py-16 px-4"
    >
      <motion.h2 
        variants={headingVariants}
        className="mt-10 md:mt-20 lg:mt-40 self-center w-full max-w-[655px] text-center text-2xl md:text-3xl lg:text-[42px] font-bold uppercase tracking-tight lg:tracking-[-0.84px] text-[rgba(34,34,34,1)]"
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
          dolor sit amet consectetur.{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.19, duration: 0.15 }} // reduced
        >
          Commodo leo amet.
        </motion.span>
      </motion.h2>
      
      <motion.div 
        variants={gridContainerVariants}
        className="relative mt-8 md:mt-16 lg:mt-[110px] self-center z-10 w-full max-w-[1112px] overflow-hidden"
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute w-16 md:w-24 h-16 md:h-24 rounded-full bg-blue-50 -top-8 -left-8 z-0 opacity-70"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.2, // reduced from 5
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-12 md:w-16 h-12 md:h-16 rounded-full bg-yellow-50 -bottom-6 -right-6 z-0 opacity-70"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1, // reduced from 4
            ease: "easeInOut",
            delay: 0.2 // reduced from 1
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
              const { row, col } = activeGridPositions[position];
              
              // Calculate the grid position
              const gridX = col * (cardWidth + gap);
              const gridY = row * (cardHeight + gap);
              
              // Calculate the center position
              const centerX = containerWidth / 2 - cardWidth / 2;
              const centerY = containerHeight / 2 - cardHeight / 2;
              
              return (
                <motion.div
                  key={`logo-${logo.id}`}
                  layoutId={`logo-${logo.id}`}
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
                    x: cardsSpread ? gridX : centerX,
                    y: cardsSpread ? gridY : centerY,
                    scale: cardsSpread ? 1 : 0.8,
                    opacity: isInView ? 1 : 0,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    delay: !cardsSpread ? 0 : (rotationActive ? 0 : logo.id * 0.015), // reduced from 0.05
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
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/use-scroll-animation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });
  return (
    <motion.header 
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.22 }} // reduced from 0.5
      className="w-full px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20 absolute top-0 left-0 z-20 bg-transparent"
    >
      <div className="self-stretch flex w-full items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-nowrap justify-between py-2 sm:py-3 md:py-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 8 }} // snappier
          className="self-stretch bg-[rgba(219,219,219,1)] min-h-[30px] sm:min-h-[35px] md:min-h-[45px] lg:min-h-[55px] xl:min-h-[60px] gap-2.5 overflow-hidden text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-2 sm:px-3 md:px-4 lg:px-5 xl:px-[25px] flex items-center"
        >
          LOGO
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex flex-1 items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-sm md:text-base lg:text-lg link-primary my-auto pl-2 pr-6 sm:pl-3 sm:pr-8 md:pl-4 md:pr-12 lg:pl-6 lg:pr-16 xl:pl-8 xl:pr-20 py-2 md:py-3 lg:py-4 text-blue-600">
          <motion.div 
            className="flex items-center gap-1 md:gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <div className="whitespace-nowrap text-[rgba(21,90,218,1)]">Lorem Ipsum</div>
            <motion.img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-2.5 md:w-3 lg:w-3.5 text-blue-600 filter-blue"
              alt="dropdown"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.14 }} // reduced from 0.3
              style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%)" }}
            />
          </motion.div>
          <motion.div 
            className="flex items-center gap-1 md:gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <div className="whitespace-nowrap text-blue-600">Lorem Ipsum</div>
            <motion.img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-2.5 md:w-3 lg:w-3.5 text-blue-600 filter-blue"
              alt="dropdown"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.14 }} // reduced from 0.3
              style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%)" }}
            />
          </motion.div>
          <motion.div 
            className="flex items-center gap-1 md:gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <div className="whitespace-nowrap text-blue-600">Lorem Ipsum</div>
            <motion.img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-2.5 md:w-3 lg:w-3.5 text-blue-600 filter-blue"
              alt="dropdown"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.14 }} // reduced from 0.3
              style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%)" }}
            />
          </motion.div>
        </nav>
        
        {/* Sign In Button and Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button 
            className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white min-h-[28px] sm:min-h-[32px] md:min-h-[35px] lg:min-h-[38px] text-xs sm:text-sm md:text-base gap-2 md:gap-3 overflow-hidden px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-[5px] text-black font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#f8f8f8" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // snappier
          >
            Sign In
          </motion.button>
          
          <motion.button 
            className="sm:hidden flex items-center p-1 text-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </motion.button>
        </div>
        
        {/* Mobile Navigation - Only visible when menu is open */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="sm:hidden fixed top-[calc(var(--header-height,3rem)+0.5rem)] left-0 right-0 bg-white shadow-md z-30 py-2 mx-3 rounded-md"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.14 }} // reduced from 0.3
            >
              <motion.div 
                className="flex flex-col space-y-1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                initial="hidden"
                animate="visible"
              >
                {[0, 1, 2].map((index) => (
                  <motion.div 
                    key={index}
                    className="block px-4 py-2 text-base text-center border-b border-gray-100 last:border-0 text-blue-600"
                    variants={{
                      hidden: { opacity: 0, y: -5 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.04 * index }} // reduced from 0.1 * index
                    whileHover={{ backgroundColor: "#f8f8f8" }}
                  >
                    Lorem Ipsum
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

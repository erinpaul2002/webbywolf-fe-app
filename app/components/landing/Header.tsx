"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/use-scroll-animation';

// Using a more explicit function declaration instead of React.FC
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });
  return (
    <motion.header 
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full pl-20 max-md:max-w-full max-md:pl-5 absolute top-0 left-0 z-20 bg-transparent"
    >
      <div className="self-stretch flex w-full items-center gap-5 flex-nowrap justify-between max-md:max-w-full px-8 py-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="self-stretch bg-[rgba(219,219,219,1)] min-h-[60px] gap-2.5 overflow-hidden text-[32px] text-black font-extrabold whitespace-nowrap tracking-[-0.64px] px-[25px] max-md:px-5"
        >
          LOGO
        </motion.div>
        
        {/* Mobile Menu Button - Only visible on mobile */}
        <motion.button 
          className="md:hidden flex items-center p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </motion.button>
        
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-lg link-primary my-auto max-md:max-w-full px-8 py-4 mx-4 my-2">
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <div>Lorem Ipsum</div>
            <motion.img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-3.5"
              alt="dropdown"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <div>Lorem Ipsum</div>
            <motion.img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-3.5"
              alt="dropdown"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <div>Lorem Ipsum</div>
            <motion.img
              src="/dropdown.svg"
              className="aspect-[2] object-contain w-3.5"
              alt="dropdown"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div></div>
        </nav>
        
        <motion.button 
          className="relative self-stretch shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white min-h-[38px] gap-3 overflow-hidden px-6 py-2.5 rounded-[5px] max-md:px-5 mr-10 mt-3 text-black font-semibold"
          whileHover={{ scale: 1.05, backgroundColor: "#f8f8f8" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Sign In
        </motion.button>
        
        {/* Mobile Navigation - Only visible when menu is open */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-30 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="block px-5 py-2 text-lg"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                Lorem Ipsum
              </motion.div>
              <motion.div 
                className="block px-5 py-2 text-lg"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Lorem Ipsum
              </motion.div>
              <motion.div 
                className="block px-5 py-2 text-lg"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Lorem Ipsum
              </motion.div>
              <motion.div 
                className="px-5 pt-4"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  className="w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white px-6 py-2.5 rounded-[5px] text-black font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

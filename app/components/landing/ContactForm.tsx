"use client";

import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, useInView, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  timeFrame: string;
  size: string;
  quantity: string;
  description: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    timeFrame: '',
    size: '',
    quantity: '',
    description: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { 
    once: false, // Allow animation to repeat
    amount: 0.2, // Trigger when 20% of component is visible
    margin: "0px 0px -50px 0px" // Start animation slightly before component comes into view
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show success animation
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        timeFrame: '',
        size: '',
        quantity: '',
        description: ''
      });
    }, 3000);
  };

  // Animation variants
  const formContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
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
        damping: 15
      }
    }
  };

  const formRowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
        staggerChildren: 0.07
      }
    }
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    focus: { 
      scale: 1.02, 
      boxShadow: "0px 0px 8px rgba(25, 89, 172, 0.3)",
      borderColor: "#1959AC",
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.2)"
    },
    tap: { 
      scale: 0.98 
    }
  };

  return (
    <motion.section 
      ref={formRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={formContainerVariants}
      className="w-full mt-[166px] flex flex-col items-center max-md:mt-10"
    >
      <motion.h2 
        variants={headingVariants}
        className="text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(34,34,34,1)]"
      >
        REQUEST A QUOTE
      </motion.h2>
      
      <AnimatePresence>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full max-w-[1108px] h-[400px] mt-[131px] flex flex-col items-center justify-center bg-green-50 rounded-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-green-600 text-6xl mb-6"
            >
              ✓
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-green-700 mb-4"
            >
              Thank You!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-green-600 text-center max-w-md px-4"
            >
              We have received your request and will get back to you shortly.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit} 
            variants={formContainerVariants}
            className="w-full max-w-[1108px] h-[806px] mt-[131px] flex flex-col items-center max-md:max-w-full max-md:mt-10"
          >
            <div className="w-full flex flex-col items-center text-sm max-md:max-w-full">
              <motion.div variants={formRowVariants} className="w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-5 whitespace-nowrap text-[#0E0D0D] font-normal max-md:max-w-full">
                  <motion.div 
                    variants={formRowVariants}
                    className="w-[536px] min-w-60 flex flex-col items-stretch rounded-md max-md:max-w-full"
                  >
                    <motion.label variants={inputVariants} htmlFor="name" className="text-[#0E0D0D]">Name</motion.label>
                    <motion.input
                      variants={inputVariants}
                      whileFocus="focus"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-[47px] mt-5 px-4 shrink-0 flex bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] max-md:max-w-full focus:outline-none transition-all duration-200"
                      required
                    />
                  </motion.div>
                  <motion.div 
                    variants={formRowVariants}
                    className="w-[536px] min-w-60 flex flex-col items-stretch rounded-md max-md:max-w-full"
                  >
                    <motion.label variants={inputVariants} htmlFor="email" className="text-[#0E0D0D]">E-mail</motion.label>
                    <motion.input
                      variants={inputVariants}
                      whileFocus="focus"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-[47px] mt-5 px-4 shrink-0 flex bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] max-md:max-w-full focus:outline-none transition-all duration-200"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div 
                  variants={formRowVariants}
                  className="flex flex-wrap justify-center gap-5 mt-[37px] max-md:max-w-full"
                >
                  <motion.div 
                    variants={formRowVariants}
                    className="w-[536px] min-w-60 flex flex-col items-stretch rounded-md text-[#0E0D0D] font-normal max-md:max-w-full"
                  >
                    <motion.label variants={inputVariants} htmlFor="phone" className="text-[#0E0D0D]">Phone Number</motion.label>
                    <motion.input
                      variants={inputVariants}
                      whileFocus="focus"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-[47px] mt-[22px] px-4 shrink-0 flex bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] max-md:max-w-full focus:outline-none transition-all duration-200"
                    />
                  </motion.div>
                  <motion.div 
                    variants={formRowVariants}
                    className="w-[536px] min-w-60 max-md:max-w-full"
                  >
                    <motion.label variants={inputVariants} htmlFor="timeFrame" className="font-normal text-[#0e0d0d]">
                      Time Frame<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                    </motion.label>
                    <motion.div variants={inputVariants} className="relative mt-[19px]">
                      <motion.select
                        whileFocus="focus"
                        id="timeFrame"
                        name="timeFrame"
                        value={formData.timeFrame}
                        onChange={handleInputChange}
                        className="w-full py-[11px] pl-4 pr-[3px] flex items-center overflow-hidden font-light text-[#707070] bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] appearance-none max-md:max-w-full focus:outline-none transition-all duration-200"
                        required
                      >
                        <option value="">Choose Time Frame</option>
                        <option value="1-week">1 Week</option>
                        <option value="2-weeks">2 Weeks</option>
                        <option value="1-month">1 Month</option>
                      </motion.select>
                      <motion.div 
                        animate={{ rotate: formData.timeFrame ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      >
                        <Image
                          src="/dropdown-2.svg"
                          width={24}
                          height={24}
                          className="object-contain"
                          alt="dropdown"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={formRowVariants}
                  className="flex flex-wrap justify-center gap-5 mt-[37px] max-md:max-w-full"
                >
                  <motion.div 
                    variants={formRowVariants}
                    className="w-[536px] min-w-60 max-md:max-w-full"
                  >
                    <motion.label variants={inputVariants} htmlFor="size" className="font-normal text-[#0e0d0d]">
                      Size<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                    </motion.label>
                    <motion.div variants={inputVariants} className="relative mt-[19px]">
                      <motion.select
                        whileFocus="focus"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full py-[11px] pl-4 pr-[3px] flex items-center overflow-hidden font-light text-[#707070] bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] appearance-none max-md:max-w-full focus:outline-none transition-all duration-200"
                        required
                      >
                        <option value="">Choose Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </motion.select>
                      <motion.div 
                        animate={{ rotate: formData.size ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      >
                        <Image
                          src="/dropdown-2.svg"
                          width={24}
                          height={25}
                          className="object-contain"
                          alt="dropdown"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    variants={formRowVariants}
                    className="w-[536px] min-w-60 max-md:max-w-full"
                  >
                    <motion.label variants={inputVariants} htmlFor="quantity" className="font-normal text-[#0e0d0d]">
                      Quantity<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                    </motion.label>
                    <motion.div variants={inputVariants} className="relative mt-[19px]">
                      <motion.select
                        whileFocus="focus"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full py-[11px] pl-4 pr-[3px] flex items-center overflow-hidden font-light text-[#707070] bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] appearance-none max-md:max-w-full focus:outline-none transition-all duration-200"
                        required
                      >
                        <option value="">Choose Quantity</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51+">51+</option>
                      </motion.select>
                      <motion.div 
                        animate={{ rotate: formData.quantity ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      >
                        <Image
                          src="/dropdown-2.svg"
                          width={24}
                          height={25}
                          className="object-contain"
                          alt="dropdown"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={formRowVariants}
                  className="mt-[37px] max-md:max-w-full"
                >
                  <motion.label variants={inputVariants} htmlFor="description" className="font-normal text-[#0e0d0d]">
                    Please Describe Your Project<span style={{color: 'rgba(255,0,0,1)'}}>*</span>
                  </motion.label>
                  <motion.textarea
                    variants={inputVariants}
                    whileFocus="focus"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Choose a project type"
                    className="w-full mt-[15px] px-3 pt-2.5 pb-[163px] text-[#707070] bg-[#F4F4F4] rounded-md border-[0.5px] border-solid border-[#9F9F9F] resize-none max-md:max-w-full max-md:pr-5 max-md:pb-[110px] focus:outline-none transition-all duration-200"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.p 
                variants={inputVariants}
                className="mt-10 text-lg font-medium leading-[60px] text-[rgba(60,60,60,1)] max-md:max-w-full"
              >
                <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400}}>
                  By submitting this form you agree to our{" "}
                </span>
                <motion.a
                  href="#"
                  style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400, textDecoration: 'underline', color: 'rgba(60,60,60,1)'}}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: "#1959AC" }}
                >
                  Terms of Service
                </motion.a>
                <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400}}>
                  {" "}and{" "}
                </span>
                <motion.a
                  href="#"
                  style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400, textDecoration: 'underline', color: 'rgba(60,60,60,1)'}}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: "#1959AC" }}
                >
                  Privacy Policy
                </motion.a>
                <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400}}>
                  .
                </span>
              </motion.p>
              
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                className="mt-10 py-2.5 pl-6 pr-[23px] flex items-center justify-center gap-2.5 min-h-[38px] overflow-hidden text-[15px] font-bold text-white bg-[#1959AC] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] max-md:px-5"
              >
                <span className="self-stretch my-auto">Loerum Ipsum</span>
                <motion.div 
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/arrow-right-1.svg"
                    width={17}
                    height={15}
                    className="self-stretch shrink-0 my-auto"
                    alt="submit"
                  />
                </motion.div>
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

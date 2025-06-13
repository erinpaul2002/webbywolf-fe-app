import React from 'react';

// Left side motorcycle images
const leftImages = [
  '/bike-7.png', // Image 1 - bottom left (1×2)
  '/bike-8.png', // Image 2 - bottom right (3×2)
  '/bike-6.png', // Image 3 - top right (1×2)
];

// Right side motorcycle images
const rightImages = [
  '/bike-1.png', // Image 1 - 1col×2row
  '/bike-2.png', // Image 2 - 3col×2row
  '/bike-3.png', // Image 3 - 4col×3row
  '/bike-4.png', // Image 4 - 1col×1row
  '/bike-5.png', // Image 5 - 3col×1row
];

export default function GallerySection() {
  return (
    <section className="relative pt-20 px-4 md:px-10 lg:px-20 bg-slate-100 mt-20 overflow-hidden">
      <div className="grid grid-cols-2 gap-8 max-w-[1400px] mx-auto">
        {/* Left side - 4×6 grid */}
        <div className="grid grid-cols-8 grid-rows-12 gap-4 h-[800px]">
          {/* Text section - top left (3×3) */}
          <div className="col-span-6 row-span-6 flex flex-col justify-center gap-6 z-10">
            <p className="text-slate-600 text-xl font-semibold tracking-[1.6px]">
              NO LIMITS
            </p>
            <h1 className="text-slate-900 text-4xl md:text-[42px] font-bold tracking-[-0.84px] uppercase">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="text-black text-lg font-normal leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="flex items-center gap-2 bg-[#1959AC] text-white py-3 px-6 rounded-md mt-4 font-bold shadow-lg w-fit">
              <span>Loerum Ipsum</span>
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1L16 7M16 7L10.5 13M16 7H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Image 1: Bottom left (1×2) */}
          <div className="col-start-1 col-span-2 row-start-10 row-span-5 rounded-lg overflow-hidden">
            <img src={leftImages[0]} className=" h-[150%] object-cover" alt="Gallery image 1" />
          </div>
          
          {/* Image 2: Bottom right (3×2) */}
          <div className="col-start-3 col-span-7 row-start-9 row-span-6 rounded-lg overflow-hidden">
            <img src={leftImages[1]} className="w-full h-[170%] object-cover" alt="Gallery image 2" />
          </div>
          
          {/* Image 3: Top right of text section (1×2) */}
          <div className="col-start-7 col-span-3 row-start-4 row-span-5 rounded-lg overflow-hidden">
            <img src={leftImages[2]} className="w-full h-full object-cover" alt="Gallery image 3" />
          </div>
        </div>

        {/* Right side - 4×6 grid */}
        <div className="grid grid-cols-8 grid-rows-12 gap-4 h-[800px]">
          {/* Image 1: 1col × 2row */}
          <div className="col-span-2 row-start-2 row-span-3 rounded-lg overflow-hidden">
            <img src={rightImages[0]} className="w-full h-full object-cover" alt="Right gallery image 1" />
          </div>
          
          {/* Image 2: 3col × 2row */}
          <div className="col-span-6 row-span-4 rounded-lg overflow-hidden">
            <img src={rightImages[1]} className="w-full h-full object-cover" alt="Right gallery image 2" />
          </div>
          
          {/* Image 3: 4col × 3row */}
          <div className="col-span-8 row-span-6 rounded-lg overflow-hidden">
            <img src={rightImages[2]} className="w-full h-full object-cover" alt="Right gallery image 3" />
          </div>
          
          {/* Image 4: 1col × 1row */}
          <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
            <img src={rightImages[3]} className="w-full h-[300%] object-cover" alt="Right gallery image 4" />
          </div>
          
          {/* Image 5: 3col × 1row */}
          <div className="col-span-6 row-span-2 rounded-lg overflow-hidden">
            <img src={rightImages[4]} className="w-full h-[200%] object-cover" alt="Right gallery image 5" />
          </div>
        </div>

        {/* Mobile display - simplified column */}
        <div className="md:hidden col-span-4 grid grid-cols-2 gap-4 mt-8">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-slate-600 text-xl font-semibold tracking-[1.6px]">
              NO LIMITS
            </p>
            <h1 className="text-slate-900 text-4xl font-bold tracking-[-0.84px] uppercase">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="text-black text-lg font-normal leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="flex items-center gap-2 bg-[#1959AC] text-white py-3 px-6 rounded-md mt-4 font-bold shadow-lg w-fit">
              <span>Loerum Ipsum</span>
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1L16 7M16 7L10.5 13M16 7H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Images stacked */}
          {[...leftImages, ...rightImages].map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden h-[200px]">
              <img src={img} className="w-full h-full object-cover" alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

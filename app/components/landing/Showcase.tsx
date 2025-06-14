"use client";

import Image from 'next/image';

const logos = [
  { src: "/assets/hero-logo.png", alt: "Hero" },
  { src: "/assets/honda-logo.png", alt: "Honda" },
  { src: "/assets/bajaj-logo.png", alt: "Bajaj" },
  { src: "/assets/tvs-logo.png", alt: "TVS" },
  { src: "/assets/enfield-logo.png", alt: "Royal Enfield" },
  { src: "/assets/yamaha-logo.png", alt: "Yamaha" },
  { src: "/assets/ktm-logo.png", alt: "KTM" },
  { src: "/assets/ather-logo.png", alt: "Ather" },
  { src: "/assets/ola-logo.png", alt: "Ola Electric" },
  { src: "/assets/revolt-logo.png", alt: "Revolt" },
  { src: "/assets/ultraviolette-logo.png", alt: "Ultraviolette" },
  { src: "/assets/tork-logo.png", alt: "Tork Motors" },
];

function getRowLogos(row: number) {
  // Offset each row for carousel effect
  const offset = row * 2;
  return Array(4)
    .fill(0)
    .map((_, i) => logos[(i + offset) % logos.length]);
}

export function Showcase() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="mt-40 self-center w-[655px] text-center text-[42px] font-bold uppercase tracking-[-0.84px] text-[rgba(34,34,34,1)] max-md:max-w-full max-md:mt-10">
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </h2>
      <div className="relative mt-[110px] self-center z-10 w-full max-w-[1112px] max-md:max-w-full max-md:mt-10">
        <div className="flex flex-col gap-8">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex flex-row gap-12 justify-center">
              {getRowLogos(row).map((logo) => (
                <div key={logo.src} className="relative w-56 h-28 flex items-center justify-center bg-white rounded-lg shadow-md">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
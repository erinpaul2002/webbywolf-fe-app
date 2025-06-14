'use client';

import { CSSProperties } from 'react';
import Image from 'next/image';

interface AdjustableBackgroundProps {
  imagePath?: string;
  opacity?: number;
  position?: 'fixed' | 'absolute' | 'relative';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  rotate?: number;
  scale?: number;
  zIndex?: number;
  className?: string;
}

export function AdjustableBackground({
  imagePath = '/line-6.svg',
  opacity = 0.2,
  position = 'fixed',
  top = '0',
  left = '0',
  right = 'auto',
  bottom = 'auto',
  width = '100%',
  height = 'auto',
  rotate = 0,
  scale = 1,
  zIndex = 0,
  className = '',
}: AdjustableBackgroundProps) {
  const style = {
    position,
    top,
    left,
    right,
    bottom,
    width,
    height,
    opacity,
    transform: `rotate(${rotate}deg) scale(${scale})`,
    zIndex,
  } as CSSProperties;

  return (
    <div 
      className={`pointer-events-none overflow-hidden ${className}`} 
      style={style}
      aria-hidden="true"
    >
      <Image 
        src={imagePath} 
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{
          minHeight: '100vh',
        }}
      />
    </div>
  );
}
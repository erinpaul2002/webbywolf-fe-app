import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollAnimationOptions {
  once?: boolean;
  amount?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    once = false, // Set to false to allow repeated animations
    amount = 0.2
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount
  });

  return { ref, isInView };
}

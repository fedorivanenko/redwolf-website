export type AnimConfig = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  opts: gsap.TweenVars;
};

export const animations: Record<string, AnimConfig> = {
  fadeInUp: {
    from: { opacity: 0, y: 40 },
    to:   { opacity: 1, y: 0 },
    opts: { duration: 1, ease: 'power2.out' }
  },
  fadeInDown: {
    from: { opacity: 0, y: -40 },
    to:   { opacity: 1, y: 0 },
    opts: { duration: 1, ease: 'power2.out' }
  },
};

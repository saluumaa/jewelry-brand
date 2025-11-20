// animations.tsx
export const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' } })
};
export const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } };

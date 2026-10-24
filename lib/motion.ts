import type { Variants, Transition } from "motion/react";

/**
 * Shared cubic-bezier curve for smooth, premium medical interactions.
 */
export const defaultEase = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.65,
  ease: defaultEase,
};

export const quickTransition: Transition = {
  duration: 0.35,
  ease: defaultEase,
};

/**
 * Fade up for cards and section content.
 */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Stagger container for grids and card groups.
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

/**
 * Direction-aware slide in from the start of the reading direction (left in LTR, right in RTL).
 */
export function getSlideInVariants(isRtl: boolean): Variants {
  const offset = isRtl ? 32 : -32;
  return {
    hidden: {
      opacity: 0,
      x: offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: defaultTransition,
    },
  };
}

/**
 * Gentle floating animation for hero info cards and badges.
 */
export const floatSlowVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

/**
 * Image reveal scale & fade.
 */
export const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: defaultEase,
    },
  },
};

/**
 * Accordion content expand & collapse.
 */
export const accordionVariants: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: defaultEase },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: defaultEase },
  },
};

/**
 * Mobile drawer overlay & panel.
 */
export const mobileMenuOverlayVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.25 } },
};

export function getMobileMenuPanelVariants(isRtl: boolean): Variants {
  return {
    closed: {
      x: isRtl ? "100%" : "-100%",
      transition: { duration: 0.3, ease: defaultEase },
    },
    open: {
      x: 0,
      transition: { duration: 0.35, ease: defaultEase },
    },
  };
}


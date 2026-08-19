import React from "react";
import { motion } from "framer-motion";

/**
 * Fades + slides content up into place the first time it scrolls into
 * view. Thin wrapper around framer-motion's whileInView so every
 * section gets consistent, cheap-to-tune scroll animation.
 */
export default function Reveal({ children, delay = 0, y = 28, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  );
}

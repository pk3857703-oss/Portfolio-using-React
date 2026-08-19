import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps children in a card that tilts in 3D toward the cursor —
 * the signature "3D portfolio" hover effect, used on the hero
 * code-card, skill cards, and project cards.
 */
export default function Tilt3D({ children, className = "", max = 10, glare = true }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // All hooks are called unconditionally on every render, in the same
  // order every time — `glare` only affects what we render below, never
  // which hooks run. (A previous version called useTransform() inside
  // the `{glare && (...)}` JSX branch, which is a real rules-of-hooks
  // violation and worth avoiding even though `glare` never actually
  // changes at runtime in this project.)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(280px circle at ${gx} ${gy}, color-mix(in srgb, var(--color-primary) 20%, transparent), transparent 60%)`
  );

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 900 }}
      className={className}
    >
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glareBackground }}
        />
      )}
      {children}
    </motion.div>
  );
}

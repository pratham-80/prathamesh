"use client";

import { motion, type ViewportOptions } from "framer-motion";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  once?: boolean;
  margin?: ViewportOptions["margin"];
  amount?: ViewportOptions["amount"];
};

export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 24,
  once = true,
  margin,
  amount = 0.2,
}: RevealProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // SSR/first paint fallback to avoid blank content before motion hydrates
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, ...(margin ? { margin } : {}) } as ViewportOptions}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

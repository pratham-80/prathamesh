"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

function isClickableElement(target: Element | null): boolean {
  if (!target) return false;
  const clickableSelector = "a, button, [role='button'], input, textarea, select, label, .cursor-pointer";
  return !!(target as HTMLElement).closest(clickableSelector);
}

function isBlueContent(target: Element | null): boolean {
  if (!target) return false;
  const BLUE_RGB = "rgb(30, 101, 237)"; // #1E65ED
  let node: Element | null = target;
  for (let i = 0; i < 5 && node; i++) {
    const el = node as HTMLElement;
    const style = window.getComputedStyle(el);
    const color = style.color;
    const bg = style.backgroundColor;
    const hasBlueClass = (el.className || "").toString().includes("#1E65ED");
    if (
      hasBlueClass ||
      (color && (color.includes(BLUE_RGB))) ||
      (bg && (bg.includes(BLUE_RGB)))
    ) {
      return true;
    }
    node = el.parentElement;
  }
  return false;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  const [isBlue, setIsBlue] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 30, mass: 0.4 });
  const y = useSpring(0, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    x.set(pos.x);
    y.set(pos.y);
  }, [pos, x, y]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as Element;
      setIsInteractive(isClickableElement(target));
      setIsBlue(isBlueContent(target));
    };
    const handleLeave = () => { setIsInteractive(false); setIsBlue(false); };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  // Hide on touch devices
  const isTouch = typeof window !== "undefined" && matchMedia("(pointer: coarse)").matches;
  if (isTouch) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{ left: 0, top: 0, x, y }}
      >
        <div
          className={
            "-translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-150 " +
            ((isInteractive || isBlue) ? "border-white " : "border-[#1E65ED] ") +
            (isInteractive ? "w-8 h-8 bg-[#1E65ED]/10" : "w-4 h-4 bg-[#1E65ED]/10")
          }
        />
      </motion.div>
    </>
  );
}



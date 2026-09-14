"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";

export function CustomCursor() {
  const { resolvedTheme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style?.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  const dotColor = isDark ? "#a78bfa" : "#7c3aed";
  const ringBg = isDark ? "rgba(167,139,250,0.08)" : "rgba(124,58,237,0.06)";
  const ringBorder = isDark ? "rgba(167,139,250,0.6)" : "rgba(124,58,237,0.5)";
  const hoverBg = isDark ? "rgba(34,197,94,0.1)" : "rgba(22,163,74,0.08)";
  const hoverBorder = isDark ? "#22c55e" : "#16a34a";
  const hoverDot = isDark ? "#22c55e" : "#16a34a";

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.85 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div
          className="w-full h-full rounded-full border-2 transition-all duration-200"
          style={{
            borderColor: isHovering ? hoverBorder : ringBorder,
            backgroundColor: isHovering ? hoverBg : ringBg,
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? hoverDot : dotColor,
          scale: isPressed ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
    </>
  );
}

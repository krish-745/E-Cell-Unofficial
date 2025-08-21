"use client";
import React from "react";

/**
 * A customizable Marquee component for horizontal/vertical scrolling.
 * @param {Object} props
 * @param {string} props.className - Additional Tailwind classes.
 * @param {boolean} props.reverse - If true, reverse the direction.
 * @param {boolean} props.pauseOnHover - If true, pause on hover.
 * @param {React.ReactNode} props.children - Content inside the marquee.
 * @param {boolean} props.vertical - If true, scrolls vertically.
 * @param {number} props.repeat - Number of times the content repeats.
 */
export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${vertical ? "flex-col" : "flex-row"} ${className}`}
    >
      {Array(repeat).fill(0).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-around [gap:var(--gap)] ${vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"} ${
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
          } ${reverse ? "[animation-direction:reverse]" : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

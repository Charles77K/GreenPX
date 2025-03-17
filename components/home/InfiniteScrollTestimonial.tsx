"use client";

import React from "react";
import { cn } from "@/lib/utils";

const InfiniteScrollTestimonial = ({
  direction = "left",
  speed = "normal",
  children,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, [start]);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const originalChildren = Array.from(scrollerRef.current.children).slice(
        0,
        React.Children.count(children)
      );

      // Clear existing children before adding new ones
      scrollerRef.current.innerHTML = "";

      // Re-add original and duplicated children for seamless effect
      originalChildren.forEach((item) => {
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(item.cloneNode(true));
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  React.useEffect(() => {
    getDirection();
  }, [direction]);

  React.useEffect(() => {
    getSpeed();
  }, [speed]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        default:
          duration = "40s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller z-20 max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          "md:flex-row",
          // Vertical on small screens
          "sm:flex-col sm:h-64 sm:overflow-y-auto",
          start && "animate-scroll"
        )}
      >
        {children}
      </ul>
    </div>
  );
};

export default InfiniteScrollTestimonial;

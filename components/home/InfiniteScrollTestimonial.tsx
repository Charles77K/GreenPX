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
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      scrollerRef.current.innerHTML = "";

      originalChildren.forEach((item) => {
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(item.cloneNode(true));
        }
      });
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
  }, [direction, isMobile]);

  React.useEffect(() => {
    getSpeed();
  }, [speed, isMobile]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        isMobile ? "forwards" : direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-name",
        isMobile ? "scrollVertical" : "scrollHorizontal"
      );
    }
  };

  const getSpeed = (customSpeed?: string) => {
    if (containerRef.current) {
      let duration = customSpeed || "40s"; // Default normal speed
      if (isMobile) {
        switch (speed) {
          case "fast":
            duration = "10s";
            break;
          case "normal":
            duration = "10s";
            break;
          case "slow":
            duration = "30s";
            break;
        }
      } else {
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
        }
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-full flex-col-center overflow-hidden",
        isMobile
          ? "[mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
          : "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
      onMouseEnter={() => getSpeed("100s")} // Slow down on hover
      onMouseLeave={() => getSpeed()} // Reset speed
    >
      <ul
        ref={scrollerRef}
        className={cn(
          `flex shrink-0 gap-4 w-full md:w-max p-0 flex-nowrap`,
          isMobile
            ? "flex-col max-h-screen vertical-scroll-animation"
            : "flex-row horizontal-scroll-animation"
        )}
      >
        {start && children}
      </ul>
    </div>
  );
};

export default InfiniteScrollTestimonial;

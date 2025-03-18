"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  speed?: "normal" | "fast" | "slow";
  direction?: "left" | "right";
  className?: string;
}

const HorizontalScroll = ({
  speed = "normal",
  direction = "left",
  children,
  className,
}: HorizontalScrollProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  // Set animation properties on mount
  React.useEffect(() => {
    if (containerRef.current) {
      // Set direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      // Set speed
      let duration = "40s"; // Default normal speed
      switch (speed) {
        case "fast":
          duration = "10s";
          break;
        case "slow":
          duration = "60s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);

      // Indicate setup is complete
      setIsReady(true);
    }
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-full mx-auto overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          isReady && "horizontal-scroll-animation"
        )}
      >
        {children}
        {isReady && children} {/* Duplicate content for continuous scroll */}
      </div>
    </div>
  );
};

export default HorizontalScroll;

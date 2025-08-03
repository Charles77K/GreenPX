"use client";

import React from "react";
import { cn } from "@/lib/utils";

const InfiniteScrollTestimonial = ({
  direction = "left",
  speed = "normal",
  children,
  pauseOnHover,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const childrenArray = React.Children.toArray(children);
  const duplicatedChildren = React.useMemo(() => {
    return [...childrenArray, ...childrenArray];
  }, [childrenArray]);

  // Update direction and speed whenever relevant props change
  React.useEffect(() => {
    if (containerRef.current) {
      // Set direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        isMobile ? "forwards" : direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-name",
        isMobile ? "scrollVertical" : "scrollHorizontal"
      );

      // Set speed
      let duration = "40s"; // Default normal speed
      if (isMobile) {
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
  }, [direction, speed, isMobile]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden flex-col-center md:flex-none",
        isMobile
          ? "max-h-screen [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
          : "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          `flex flex-shrink-0 gap-4 w-full md:w-max flex-nowrap`,
          isMobile
            ? "flex-col-center h-full animate-vertical-scroll"
            : "flex-row animate-horizontal-scroll items-start",
          "[&>*]:flex-none",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedChildren.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScrollTestimonial;

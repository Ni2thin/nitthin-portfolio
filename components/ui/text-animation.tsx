"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
// Removed useInView import

interface TextAnimationProps {
  text: string;
  className?: string;
  duration?: number;
  interval?: number;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = "",
  duration = 2000,
  interval = 40,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const charset = "அஆஇஈஉஊஎஏஐஒஔabcdefghijklmnopqrs0123456789";

  const randomizeAndSettleText = useCallback(() => {
    startTimeRef.current = Date.now();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTimeRef.current;
      const progress = elapsedTime / duration;

      setDisplayText(() => {
        return text
          .split("")
          .map((char, i) => {
            // Make the effect more frequent and dynamic
            if (Math.random() < progress * 1.5) {
              return char;
            } else {
              return charset[Math.floor(Math.random() * charset.length)];
            }
          })
          .join("");
      });

      if (progress >= 1) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
      }
    }, interval);
  }, [text, duration, interval]);

  useEffect(() => {
    randomizeAndSettleText();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, randomizeAndSettleText]);

  const handleMouseEnter = () => {
    randomizeAndSettleText();
  };

  return (
    <span
      className={`transition-all duration-200 ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: "pointer" }}
    >
      {displayText}
    </span>
  );
};

export default TextAnimation; 
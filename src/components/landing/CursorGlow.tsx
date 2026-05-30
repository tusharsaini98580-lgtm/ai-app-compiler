"use client";

import {
  useEffect,
  useState,
} from "react";

export default function CursorGlow() {

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {

    function handleMove(
      e: MouseEvent
    ) {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );

  }, []);

  return (

    <div
      className="fixed pointer-events-none z-[9999] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[120px] transition-all duration-300"
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    />
  );
}
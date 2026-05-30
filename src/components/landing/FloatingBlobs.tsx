"use client";

import {
  motion,
} from "framer-motion";

export default function FloatingBlobs() {

  return (

    <>

      <motion.div

        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
        }}

        className="
          absolute
          top-20
          left-10
          w-[320px]
          h-[320px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      <motion.div

        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
        }}

        className="
          absolute
          bottom-10
          right-10
          w-[320px]
          h-[320px]
          rounded-full
          bg-purple-500/20
          blur-[120px]
        "
      />

    </>
  );
}
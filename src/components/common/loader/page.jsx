import React from "react";
import { motion } from "framer-motion";

export default function CoffeeSteam() {
  return (
    <div className="loader-container flex justify-center items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        width="280"
        height="280"
      >
        {/* Outlined Coffee Mug */}
        <path
          d="M310,230c0,90,18,160,90,160s90-70,90-160"
          fill="none"
          stroke="#8B5E3C"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Outlined Handle */}
        <path
          d="M480,250c25,0,50,25,35,60s-40,35-50,25"
          fill="none"
          stroke="#8B5E3C"
          strokeWidth="5"
        />
        
        {/* Steam */}
        {[...Array(3)].map((_, index) => (
          <motion.path
            key={index}
            d="M370,140c-20-50,40-60,20-110M410,140c-20-50,40-60,20-110M450,140c-20-50,40-60,20-110"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -60, -100],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

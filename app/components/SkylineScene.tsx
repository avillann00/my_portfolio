"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

type Star = { top: string; left: string; duration: number }

export default function SkylineScene({ onEnter }: { onEnter: () => void }) {
  const [signalVisible, setSignalVisible] = useState(false)
  const [stars, setStars] = useState<Star[]>([])

  // Generate stars client-side only
  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <motion.div
      onClick={onEnter}
      className="relative w-full h-screen bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: s.top,
              left: s.left,
              animation: `twinkle ${s.duration}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Gotham Skyline silhouette */}
      <svg
        className="absolute bottom-0 w-full h-1/3 text-gray-800"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          fill="currentColor"
          points="0,100 0,60 10,60 10,50 20,50 20,30 30,30 30,60 40,60 40,40 50,40 50,70 
                  60,70 60,20 70,20 70,60 80,60 80,45 90,45 90,60 100,60 100,100"
        />
      </svg>

      {/* Animated Bat Signal beam */}
      {signalVisible && (
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{
            opacity: 1,
            rotate: [-10, 5, -5, 50, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-[30%] left-[25%] w-[200px] h-[500px]
                     bg-gradient-to-t from-yellow-300/40 to-transparent 
                     blur-2xl origin-bottom-left"
        />
      )}

      {/* Coder Signal inside the beam */}
      {signalVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-10 right-20 flex items-center justify-center
                     w-32 h-32 rounded-full bg-yellow-300
                     drop-shadow-[0_0_25px_rgba(255,255,120,0.9)]"
        >
          <span className="text-4xl font-extrabold text-black">&lt;/&gt;</span>
        </motion.div>
      )}

      {/* Trigger signal after short delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onAnimationComplete={() => setSignalVisible(true)}
      />
    </motion.div>
  )
}


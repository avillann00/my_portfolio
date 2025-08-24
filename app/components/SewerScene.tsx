"use client"

import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function SewerScene() {
  const router = useRouter()

  return (
    <motion.div
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      {/* Tunnel arch */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="relative w-[120%] h-[90%] rounded-t-full bg-[radial-gradient(circle_at_center,rgba(50,20,20,0.9)_0%,rgba(20,10,10,0.95)_70%,rgba(0,0,0,1)_100%)] border-t-8 border-red-900/40 overflow-hidden">
          {/* Brick pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(120,40,40,0.6) 1px, transparent 1px),
                                linear-gradient(rgba(120,40,40,0.6) 1px, transparent 1px)`,
              backgroundSize: "40px 20px",
            }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-green-300 text-5xl font-bold drop-shadow-[0_0_15px_rgba(0,255,100,0.8)]">
          Austin Villanueva&apos;s Portfolio
        </h1>

        {/* Buttons */}
        <div className="flex flex-row gap-6">
          <button
            onClick={() => router.push('/about')}
            className="px-6 py-2 text-lg font-bold text-green-300 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,100,0.8)] transition-all duration-300 hover:text-green-100 hover:shadow-[0_0_25px_rgba(0,255,100,1)] hover:border-green-400"
          >
            About
          </button>
          <button
            onClick={() => router.push('/resume')}
            className="px-6 py-2 text-lg font-bold text-green-300 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,100,0.8)] transition-all duration-300 hover:text-green-100 hover:shadow-[0_0_25px_rgba(0,255,100,1)] hover:border-green-400"
          >
            Resume
          </button>
          <button
            onClick={() => router.push('/projects')}
            className="px-6 py-2 text-lg font-bold text-green-300 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,100,0.8)] transition-all duration-300 hover:text-green-100 hover:shadow-[0_0_25px_rgba(0,255,100,1)] hover:border-green-400"
          >
            Projects
          </button>
        </div>
      </div>
    </motion.div>
  )
}


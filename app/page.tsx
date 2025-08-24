"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import SkylineScene from "./components/SkylineScene"
import SewerScene from "./components/SewerScene"

export default function MainScene() {
  const [entered, setEntered] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <SkylineScene key="skyline" onEnter={() => setEntered(true)} />
      ) : (
        <SewerScene key="sewer" />
      )}
    </AnimatePresence>
  )
}


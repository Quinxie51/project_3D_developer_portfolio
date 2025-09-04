'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import Starfield from '@/components/scenes/Starfield'
import ShipSilhouette from '@/components/scenes/ShipSilhouette'

export default function Home() {
  const router = useRouter()
  const setCurrentRoom = useStore(state => state.setCurrentRoom)

  useEffect(() => {
    setCurrentRoom('airlock')
  }, [setCurrentRoom])

  const handleDockAndBoard = () => {
    setCurrentRoom('bridge')
    router.push('/bridge')
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0b0f14]">
      {/* Starfield Background */}
      <Starfield />
      
      {/* Ship Silhouette */}
      <ShipSilhouette />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-600 bg-clip-text text-transparent">
            STARSHIP QUINXIE
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Welcome to the digital frontier. Explore the portfolio of a developer 
            navigating the vast expanse of technology and creativity.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDockAndBoard}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-space-grotesk text-lg font-semibold rounded-lg glow-cyan hover:glow-teal transition-all duration-300 border border-cyan-400/30"
          >
            DOCK & BOARD
          </motion.button>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-teal-400 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-gold-400 rounded-full"
        />
      </div>
    </main>
  )
}


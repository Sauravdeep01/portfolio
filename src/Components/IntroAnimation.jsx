import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroAnimation({ onComplete }) {
  const hellos = ["Hello", "Hola", "Bonjour", "नमस्ते", "Ciao", "こんにちは", "안녕하세요", "Olá"];
  const [index, setIndex] = useState(0);
  const [showShutter, setShowShutter] = useState(false);

  useEffect(() => {
    if (index < hellos.length - 1) {
      // ⚡ Very fast switch (0.3s per word)
      const timer = setTimeout(() => setIndex(index + 1), 300);
      return () => clearTimeout(timer);
    } else {
      // Show shutter quickly after last word
      setTimeout(() => setShowShutter(true), 300);
    }
  }, [index]);

  useEffect(() => {
    if (showShutter) {
      // Call the next section sooner
      setTimeout(() => onComplete(), 900);
    }
  }, [showShutter]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center overflow-hidden z-50">
      {/* Animated Hello text */}
      <AnimatePresence mode="wait">
        {!showShutter && (
          <motion.h1
            key={index}
            className="text-white text-6xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {hellos[index]}
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Shutter animation */}
      {showShutter && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gray-900"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-900"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}

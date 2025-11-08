import { motion } from "framer-motion";


export default function StarsBackground() {
  const stars = Array.from({ length: 80 }); // number of stars

  return (
    <div className=" min-h-screen w-screen overflow-hidden bg-black fixed top-0 left-0">
      {/* Twinkling stars */}
      {stars.map((_, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = Math.random() * 2 + 1;
        const randomDelay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              top: `${randomY}%`,
              left: `${randomX}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      
    </div>
  );
}

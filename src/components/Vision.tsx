import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: "easeInOut" as const
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-primary text-primary-foreground relative overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Advanced animated background layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(255,255,255,0.1) 0%, transparent 50%),
            linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Morphing shapes */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-white/15 to-transparent blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
          borderRadius: ["40%", "60%", "40%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
        >
          <motion.div 
            className="w-20 h-1 bg-white mx-auto origin-left"
            variants={lineVariants}
          />
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black tracking-tight"
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(255,255,255,0.5)",
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #ffffff, #a855f7, #3b82f6, #ffffff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Vision
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            Our goal is to be the leading student organization at KARE, promoting technical 
            excellence, professional development, and innovative ideas. We strive to build a 
            community of future tech leaders who will inspire positive change through the power 
            of computing.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                size="lg" 
                variant="secondary"
                className="group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <span className="relative z-10">Join Our Community</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 group relative"
              >
                <motion.div
                  className="absolute inset-0 border border-white/30 rounded-md"
                  animate={{
                    borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.3)"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">Learn More</span>
                <motion.div className="relative z-10 ml-2">
                  <ArrowRight 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Vision;
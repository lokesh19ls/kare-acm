import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-background pt-16 relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5" />

      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-acm-blue/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ top: '20%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-64 h-64 bg-gradient-radial from-acm-purple/30 to-transparent rounded-full blur-2xl"
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          x: { type: "spring", stiffness: 40 },
          y: { type: "spring", stiffness: 40 },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ bottom: '20%', right: '15%' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Text content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center space-x-2"
                variants={itemVariants}
              >
                <motion.span 
                  className="bg-acm-yellow text-primary px-3 py-1 rounded-full text-sm font-medium transform -rotate-2"
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  INNOVATE
                </motion.span>
                <motion.span 
                  className="text-6xl md:text-8xl font-black tracking-tight"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  ACM
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="flex items-end space-x-4"
                variants={itemVariants}
              >
                <motion.span 
                  className="text-6xl md:text-8xl font-black tracking-tight"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                >
                  STUDENT
                </motion.span>
                <motion.div 
                  className="bg-acm-purple text-white px-3 py-1 rounded-full text-sm font-medium transform rotate-2 mb-4"
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  CONNECT
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <motion.span 
                  className="text-6xl md:text-8xl font-black tracking-tight"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                >
                  CHAPTER
                </motion.span>
                <motion.div 
                  className="bg-acm-pink text-white px-3 py-1 rounded-full text-sm font-medium transform -rotate-1"
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 8,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  EXCEL
                </motion.div>
              </motion.div>
            </div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-lg"
              variants={itemVariants}
            >
              Collaborate with like-minded peers and industry experts to push the 
              boundaries of technology. Together, we connect, collaborate, and excel.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden"
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-acm-blue to-acm-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10">EVENTS</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.button>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced 3D Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  className="h-48 bg-gradient-to-br from-acm-cyan to-acm-blue rounded-2xl relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      width: '50%'
                    }}
                  />
                </motion.div>
                <motion.div 
                  className="h-32 bg-gradient-to-br from-acm-green to-acm-cyan rounded-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    rotateX: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="h-32 bg-gradient-to-br from-acm-orange to-acm-yellow rounded-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div 
                  className="h-48 bg-gradient-to-br from-acm-purple to-acm-pink rounded-2xl relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <motion.div 
              className="absolute -top-4 right-4 w-8 h-8 bg-acm-yellow rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-8 -left-4 w-6 h-6 bg-acm-purple rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 -right-8 w-4 h-4 bg-acm-orange rounded-full"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;